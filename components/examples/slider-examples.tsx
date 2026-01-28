"use client";

import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-full" />;
}

export const SliderDemoCode = `import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  return <Slider defaultValue={[50]} max={100} step={1} className="w-full" />;
}`;

export function SliderRange() {
  return (
    <Slider defaultValue={[25, 75]} max={100} step={1} className="w-full" />
  );
}

export const SliderRangeCode = `import { Slider } from "@/components/ui/slider";

export function SliderRange() {
  return (
    <Slider defaultValue={[25, 75]} max={100} step={1} className="w-full" />
  );
}`;
