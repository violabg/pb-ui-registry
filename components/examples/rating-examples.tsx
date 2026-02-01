"use client";

import { Rating } from "@/components/ui/rating";
import { useState } from "react";

export function RatingDemo() {
  const [value, setValue] = useState(3);

  return (
    <div className="space-y-4">
      <Rating value={value} onChange={setValue} />
      <p className="text-muted-foreground text-sm">Rating: {value} / 5</p>
    </div>
  );
}

export const RatingDemoCode = `"use client";

import { Rating } from "@/components/ui/rating";
import { useState } from "react";

export function RatingDemo() {
  const [value, setValue] = useState(3);

  return (
    <div className="space-y-4">
      <Rating value={value} onChange={setValue} />
      <p className="text-muted-foreground text-sm">Rating: {value} / 5</p>
    </div>
  );
}`;

export function RatingReadOnly() {
  return <Rating value={4} readOnly />;
}

export const RatingReadOnlyCode = `import { Rating } from "@/components/ui/rating";

export function RatingReadOnly() {
  return <Rating value={4} readOnly />;
}`;

export function RatingHalf() {
  const [value, setValue] = useState(2.5);

  return (
    <div className="space-y-4">
      <Rating value={value} onChange={setValue} allowHalf />
      <p className="text-muted-foreground text-sm">Rating: {value} / 5</p>
    </div>
  );
}

export const RatingHalfCode = `"use client";

import { Rating } from "@/components/ui/rating";
import { useState } from "react";

export function RatingHalf() {
  const [value, setValue] = useState(2.5);

  return (
    <div className="space-y-4">
      <Rating value={value} onChange={setValue} allowHalf />
      <p className="text-muted-foreground text-sm">Rating: {value} / 5</p>
    </div>
  );
}`;
