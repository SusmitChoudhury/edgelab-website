'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup with luminous soft mint & white atmosphere
    const scene = new THREE.Scene();

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 5.5);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true, 
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ═══════════════════════════════════════════════════════
    // 1. ORGANIC TRANSLUCENT MINT GLASS SCULPTURE
    // ═══════════════════════════════════════════════════════
    // Elegant flowing TorusKnot resembling bespoke architectural glass
    const glassGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x34d399,
      emissive: 0x059669,
      emissiveIntensity: 0.15,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.9,
      thickness: 1.5,
      ior: 1.52,
      transparent: true,
      opacity: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
    });
    const glassSculpture = new THREE.Mesh(glassGeo, glassMat);
    rootGroup.add(glassSculpture);

    // Delicate inner wireframe accent in pure white
    const wireGeo = new THREE.WireframeGeometry(new THREE.TorusKnotGeometry(1.205, 0.352, 64, 16, 2, 3));
    const wireMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.25,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
    rootGroup.add(wireMesh);

    // ═══════════════════════════════════════════════════════
    // 2. ORBITING RINGS IN SOFT MINT & EMERALD
    // ═══════════════════════════════════════════════════════
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.2,
      metalness: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.5, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0x6ee7b7,
      roughness: 0.2,
      metalness: 0.5,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 5;
    rootGroup.add(ring2);

    // ═══════════════════════════════════════════════════════
    // 3. AMBIENT SOFT MINT PARTICLES
    // ═══════════════════════════════════════════════════════
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cMint = new THREE.Color(0x10b981);
    const cSoft = new THREE.Color(0xa7f3d0);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const dist = 1.6 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePos[idx] = dist * Math.cos(theta) * Math.cos(phi);
      particlePos[idx + 1] = dist * Math.sin(phi);
      particlePos[idx + 2] = dist * Math.sin(theta) * Math.cos(phi);

      const col = i % 3 === 0 ? cWhite : i % 2 === 0 ? cMint : cSoft;
      particleColors[idx] = col.r;
      particleColors[idx + 1] = col.g;
      particleColors[idx + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // ═══════════════════════════════════════════════════════
    // 4. STUDIO LIGHTING RIG (CLEAN NATURAL SUNLIGHT & MINT)
    // ═══════════════════════════════════════════════════════
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(5, 8, 6);
    scene.add(sunLight);

    const mintRimLight = new THREE.DirectionalLight(0x10b981, 1.8);
    mintRimLight.position.set(-6, -2, 4);
    scene.add(mintRimLight);

    const softFillLight = new THREE.PointLight(0xa7f3d0, 1.5, 10);
    softFillLight.position.set(0, 2, 2);
    scene.add(softFillLight);

    // ═══════════════════════════════════════════════════════
    // 5. MOUSE INTERACTIVITY
    // ═══════════════════════════════════════════════════════
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.5;
      targetMouseY = y * 0.35;
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // ═══════════════════════════════════════════════════════
    // 6. ANIMATION LOOP
    // ═══════════════════════════════════════════════════════
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      if (!prefersReducedMotion) {
        // Continuous graceful organic rotation
        glassSculpture.rotation.x = elapsed * 0.2 + currentMouseY * 0.5;
        glassSculpture.rotation.y = elapsed * 0.28 + currentMouseX * 0.5;
        wireMesh.rotation.x = glassSculpture.rotation.x;
        wireMesh.rotation.y = glassSculpture.rotation.y;

        // Subtle ring revolutions
        ring1.rotation.z += 0.004;
        ring2.rotation.x += 0.005;

        // Soft particle drift
        particles.rotation.y = elapsed * 0.04;
      }

      // Parallax camera framing
      camera.position.x = currentMouseX * 1.2;
      camera.position.y = 0.8 + currentMouseY * 0.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full cursor-grab active:cursor-grabbing relative select-none"
    />
  );
};
