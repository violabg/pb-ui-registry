import {
  TagInputDemo,
  TagInputDemoCode,
  TagInputDisabled,
  TagInputDisabledCode,
  TagInputMax,
  TagInputMaxCode,
} from "@/components/tag-input-preview";
import React from "react";

export type Example = {
  name: string;
  title: string;
  component: React.ReactNode;
  code: string;
};

export const examples: Record<string, Example[]> = {
  "tag-input": [
    {
      name: "default",
      title: "Default",
      component: <TagInputDemo />,
      code: TagInputDemoCode,
    },
    {
      name: "max-tags",
      title: "Max Tags (3)",
      component: <TagInputMax />,
      code: TagInputMaxCode,
    },
    {
      name: "disabled",
      title: "Disabled",
      component: <TagInputDisabled />,
      code: TagInputDisabledCode,
    },
  ],
};
