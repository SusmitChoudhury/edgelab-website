'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import {
  Currency,
  DEFAULT_CURRENCY,
  SUPPORTED_CURRENCIES,
  formatCurrency,
  getPricingTiers,
  getCloudflarePromo,
  MONTHLY_RUNNING_COSTS,
  PricingTierData,
} from '@/config/currency';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  toggleCurrency: () => void;
  formatPrice: (amount: number) => string;
  pricingTiers: PricingTierData[];
  cloudflarePromo: ReturnType<typeof getCloudflarePromo>;
  monthlyRunningCost: string;
  isPulsing: boolean;
  hasInteracted: boolean;
  onSwitcherInteract: () => void;
  notifyPricingSectionVisible: () => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const STORAGE_KEY = 'edgelab_currency';
const ANIMATION_SESSION_KEY = 'edgelab_currency_animated';
const INTERACTION_SESSION_KEY = 'edgelab_currency_interacted';

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<Currency>(DEFAULT_CURRENCY);
  const [isPulsing, setIsPulsing] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  const pulseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const stopPulseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasTriggeredRef = useRef<boolean>(false);

  // Initialize from localStorage safely on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Currency | null;
      if (stored && SUPPORTED_CURRENCIES.includes(stored)) {
        setCurrencyState(stored);
      }
      if (sessionStorage.getItem(INTERACTION_SESSION_KEY) === 'true') {
        setHasInteracted(true);
      }
      if (sessionStorage.getItem(ANIMATION_SESSION_KEY) === 'true') {
        hasTriggeredRef.current = true;
      }
    } catch {
      // Storage access blocked or restricted
    }
  }, []);

  const onSwitcherInteract = useCallback(() => {
    setHasInteracted(true);
    setIsPulsing(false);

    if (pulseTimerRef.current) {
      clearTimeout(pulseTimerRef.current);
      pulseTimerRef.current = null;
    }
    if (stopPulseTimerRef.current) {
      clearTimeout(stopPulseTimerRef.current);
      stopPulseTimerRef.current = null;
    }

    try {
      sessionStorage.setItem(INTERACTION_SESSION_KEY, 'true');
    } catch {}
  }, []);

  const setCurrency = useCallback(
    (newCurrency: Currency) => {
      onSwitcherInteract();
      setCurrencyState(newCurrency);
      try {
        localStorage.setItem(STORAGE_KEY, newCurrency);
      } catch {}
    },
    [onSwitcherInteract]
  );

  const toggleCurrency = useCallback(() => {
    setCurrency(currency === 'USD' ? 'INR' : 'USD');
  }, [currency, setCurrency]);

  /**
   * Attention animation trigger:
   * Called when visitor reaches the pricing/payment section in the viewport.
   * Waits ~2.5 seconds, then pulses the switcher exactly twice unless user already interacted.
   */
  const notifyPricingSectionVisible = useCallback(() => {
    if (hasTriggeredRef.current || hasInteracted || pulseTimerRef.current) {
      return;
    }

    try {
      if (
        sessionStorage.getItem(ANIMATION_SESSION_KEY) === 'true' ||
        sessionStorage.getItem(INTERACTION_SESSION_KEY) === 'true'
      ) {
        hasTriggeredRef.current = true;
        return;
      }
    } catch {}

    hasTriggeredRef.current = true;
    try {
      sessionStorage.setItem(ANIMATION_SESSION_KEY, 'true');
    } catch {}

    // Wait approximately 2.5 seconds (2500ms) after reaching section
    pulseTimerRef.current = setTimeout(() => {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!hasInteracted && !prefersReducedMotion) {
        setIsPulsing(true);

        // Pulse exactly TWO cycles (700ms * 2 = 1400ms)
        stopPulseTimerRef.current = setTimeout(() => {
          setIsPulsing(false);
        }, 1450);
      }
    }, 2500);
  }, [hasInteracted]);

  // Clean up all timers on unmount
  useEffect(() => {
    return () => {
      if (pulseTimerRef.current) clearTimeout(pulseTimerRef.current);
      if (stopPulseTimerRef.current) clearTimeout(stopPulseTimerRef.current);
    };
  }, []);

  const formatPrice = useCallback(
    (amount: number) => {
      return formatCurrency(amount, currency);
    },
    [currency]
  );

  const pricingTiers = useMemo(() => getPricingTiers(currency), [currency]);
  const cloudflarePromo = useMemo(() => getCloudflarePromo(currency), [currency]);
  const monthlyRunningCost = useMemo(
    () => formatCurrency(MONTHLY_RUNNING_COSTS[currency], currency),
    [currency]
  );

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        toggleCurrency,
        formatPrice,
        pricingTiers,
        cloudflarePromo,
        monthlyRunningCost,
        isPulsing,
        hasInteracted,
        onSwitcherInteract,
        notifyPricingSectionVisible,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
