"use client";

import * as React from "react";

import { TagInput } from "@/components/ui/tag-input";

export function TagInputPreview() {
  const [tags, setTags] = React.useState(["Design", "React", "UX"]);

  return (
    <div className="flex flex-col gap-3">
      <TagInput
        value={tags}
        onValueChange={setTags}
        placeholder="Type and press Enter"
      />
      <p className="text-muted-foreground text-xs">
        Press Enter to add tags. Backspace removes the last tag.
      </p>
    </div>
  );
}
