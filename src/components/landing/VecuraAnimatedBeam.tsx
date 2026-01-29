"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  Target,
  Atom,
  FlaskConical,
  Microscope,
  Briefcase,
  Brain,
} from "lucide-react";

// Map steps to icons in order
const icons = [Target, Atom, FlaskConical, Microscope, Briefcase];

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-black/50 border-white/10 p-3 shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)] backdrop-blur-sm transition-all duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

interface VecuraAnimatedBeamProps {
  activeFeature: number;
}

export function VecuraAnimatedBeam({ activeFeature }: VecuraAnimatedBeamProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  // Refs for source nodes
  const ref0 = useRef<HTMLDivElement>(null);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);
  const ref4 = useRef<HTMLDivElement>(null);

  const refs = [ref0, ref1, ref2, ref3, ref4];

  return (
    <div
      className="relative flex h-full w-full items-center justify-center p-4 overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg items-center justify-between gap-10">
        <div className="flex flex-col items-center justify-between h-full py-4 gap-4">
          {icons.map((Icon, index) => (
            <Circle
              key={index}
              ref={refs[index]}
              className={cn(
                activeFeature === index
                  ? "border-primary/50 bg-primary/10 shadow-[0_0_20px_-5px_hsl(var(--primary))]"
                  : "opacity-50",
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-colors",
                  activeFeature === index
                    ? "text-primary fill-primary/20"
                    : "text-white/40",
                )}
              />
            </Circle>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Circle
            ref={targetRef}
            className="size-20 border-primary/30 bg-primary/5 shadow-[0_0_30px_-5px_hsl(var(--primary))]"
          >
            <Brain className="w-10 h-10 text-primary fill-primary/20" />
          </Circle>
        </div>
      </div>

      {refs.map((ref, index) => (
        <AnimatedBeam
          key={index}
          containerRef={containerRef}
          fromRef={ref}
          toRef={targetRef}
          curvature={index === 2 ? 0 : (index - 2) * 50} // 0: -100, 1: -50, 2: 0, 3: 50, 4: 100
          endYOffset={index === 2 ? 0 : (index - 2) * 10} // Optional fan effect at end
          pathColor={
            activeFeature === index
              ? "var(--primary)"
              : "rgba(255, 255, 255, 0.2)"
          }
          pathOpacity={activeFeature === index ? 0.6 : 0.2}
          pathWidth={activeFeature === index ? 3 : 2}
          gradientStartColor="var(--primary)"
          gradientStopColor="var(--primary)"
          reverse={false} // Flow towards right (Source -> Target)
        />
      ))}
    </div>
  );
}
