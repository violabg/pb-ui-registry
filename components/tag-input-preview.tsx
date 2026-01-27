"use client";

import * as React from "react";

import { TagInput } from "@/components/ui/tag-input";

export function TagInputPreview() {
  const [tags, setTags] = React.useState(["Design", "React", "UX"]);
  const [limitedTags, setLimitedTags] = React.useState(["Alpha", "Beta"]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="font-medium text-muted-foreground text-xs">Default</div>
        <TagInput
          value={tags}
          onValueChange={setTags}
          placeholder="Type and press Enter"
        />
        <p className="text-muted-foreground text-xs">
          Press Enter to add tags. Backspace removes the last tag.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-medium text-muted-foreground text-xs">
          Max tags (3)
        </div>
        <TagInput
          value={limitedTags}
          onValueChange={setLimitedTags}
          maxTags={3}
          placeholder="Up to 3 tags"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-medium text-muted-foreground text-xs">
          Disabled
        </div>
        <TagInput
          value={["Read-only", "Locked"]}
          onValueChange={() => undefined}
          disabled
        />
      </div>
    </div>
  );
}
