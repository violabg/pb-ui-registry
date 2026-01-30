"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export function InputOtpDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-muted-foreground text-sm">Value: {value || "empty"}</p>
    </div>
  );
}

export const InputOtpDemoCode = `"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

export function InputOtpDemo() {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-muted-foreground text-sm">Value: {value || "empty"}</p>
    </div>
  );
}`;
