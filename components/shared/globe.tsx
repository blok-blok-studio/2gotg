"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

interface GlobeProps {
  className?: string;
  size?: number;
}

export function Globe({ className = "", size = 600 }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.89, 0.96, 1], // Light sky blue tint
      markerColor: [0.976, 0.451, 0.086], // CTA orange #F97316
      glowColor: [0.055, 0.647, 0.914], // Primary blue #0EA5E9
      markers: [
        // Europe destinations
        { location: [37.5079, 15.0830], size: 0.08 }, // Sicily
        { location: [36.3932, 25.4615], size: 0.06 }, // Santorini
        { location: [41.3874, 2.1686], size: 0.06 },  // Barcelona
        { location: [48.8566, 2.3522], size: 0.07 },  // Paris
        { location: [40.6333, 14.6000], size: 0.06 },  // Amalfi Coast
        { location: [51.5074, -0.1278], size: 0.07 },  // London
        // US destinations
        { location: [36.1627, -86.7816], size: 0.08 }, // Nashville
        { location: [40.7128, -74.0060], size: 0.07 }, // New York
        { location: [25.7617, -80.1918], size: 0.06 }, // Miami
        { location: [32.0809, -81.0912], size: 0.06 }, // Savannah
        { location: [32.7765, -79.9311], size: 0.06 }, // Charleston
        { location: [21.3069, -157.8583], size: 0.06 }, // Hawaii
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += reducedMotion ? 0 : 0.003;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [reducedMotion]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 200;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 200;
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
          maxWidth: `${size}px`,
          aspectRatio: "1",
        }}
      />
      {/* Glow effect behind the globe */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl -z-10 scale-75" />
    </div>
  );
}
