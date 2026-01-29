"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

interface MoleculeViewerProps {
  url: string;
  className?: string;
  width?: string;
  height?: string;
}

export default function MoleculeViewer({
  url,
  className,
  width = "100%",
  height = "100%",
}: MoleculeViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<any>(null);
  const resumeSpinTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let currentStage: any = null;
    let isMounted = true;

    const loadNGL = async () => {
      try {
        const NGL = await import("ngl");
        if (!containerRef.current || !isMounted) return;

        // Create NGL stage
        const stage = new NGL.Stage(containerRef.current, {
          backgroundColor: "black",
        });

        // Handle window resize
        const handleResize = () => stage.handleResize();
        window.addEventListener("resize", handleResize);

        stageRef.current = stage;
        currentStage = stage;

        // Load structure
        try {
          const component = await stage.loadFile(url, {
            defaultRepresentation: false,
          });

          if (component) {
            // Protein backbone as cartoon
            component.addRepresentation("cartoon", {
              colorScheme: "uniform",
              color: 0x00ced1, // Dark cyan to match reference, looks good on black too
              sele: "protein",
              opacity: 0.9,
            });

            // Ligand as ball+stick
            // Using "ligand" selection which is broader than just "UNL"
            component.addRepresentation("ball+stick", {
              colorScheme: "element",
              sele: "ligand",
              aspectRatio: 1.8,
              radiusScale: 2.0,
              bondScale: 1.0,
            });

            // Ligand spacefill for emphasis
            component.addRepresentation("spacefill", {
              colorScheme: "element",
              sele: "ligand",
              radiusScale: 0.4,
            });

            component.autoView();

            // Enable initial spin
            stage.setSpin(true);
          }

          setLoading(false);
        } catch (err) {
          console.error("Error loading structure:", err);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to load NGL or molecule:", error);
        setLoading(false);
      }
    };

    loadNGL();

    return () => {
      isMounted = false;
      if (resumeSpinTimeoutRef.current) {
        clearTimeout(resumeSpinTimeoutRef.current);
      }
      if (currentStage) {
        // Dispose stage
        // Note: NGL doesn't always clean up specific event listeners on window perfectly,
        // but handleResize is main one.
        window.removeEventListener("resize", () => currentStage.handleResize());
        currentStage.dispose();
      }
    };
  }, [url]);

  const stopSpin = () => {
    if (stageRef.current) {
      stageRef.current.setSpin(false);
    }
    if (resumeSpinTimeoutRef.current) {
      clearTimeout(resumeSpinTimeoutRef.current);
      resumeSpinTimeoutRef.current = null;
    }
  };

  const resumeSpin = () => {
    if (resumeSpinTimeoutRef.current) {
      clearTimeout(resumeSpinTimeoutRef.current);
    }
    resumeSpinTimeoutRef.current = setTimeout(() => {
      if (stageRef.current) {
        stageRef.current.setSpin(true);
      }
    }, 2000);
  };

  return (
    <div
      className={clsx("relative overflow-hidden rounded-lg", className)}
      style={{ width, height }}
      onMouseDown={stopSpin}
      onTouchStart={stopSpin}
      onMouseUp={resumeSpin}
      onMouseLeave={resumeSpin}
      onTouchEnd={resumeSpin}
    >
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
        className="cursor-move text-black"
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
          Loading...
        </div>
      )}
    </div>
  );
}
