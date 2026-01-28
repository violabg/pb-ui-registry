"use client";

import { TagInput } from "@/components/ui/tag-input";
import * as React from "react";

export function TagInputDemo() {
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

export const TagInputDemoCode = `import { TagInput } from "@/components/ui/tag-input";
import * as React from "react";

export function TagInputDemo() {
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
}`;

export function TagInputMax() {
  const [limitedTags, setLimitedTags] = React.useState(["Alpha", "Beta"]);

  return (
    <div className="flex flex-col gap-3">
      <TagInput
        value={limitedTags}
        onValueChange={setLimitedTags}
        maxTags={3}
        placeholder="Up to 3 tags"
      />
    </div>
  );
}

export const TagInputMaxCode = `import { TagInput } from "@/components/ui/tag-input";
import * as React from "react";

export function TagInputMax() {
  const [limitedTags, setLimitedTags] = React.useState(["Alpha", "Beta"]);

  return (
    <TagInput
      value={limitedTags}
      onValueChange={setLimitedTags}
      maxTags={3}
      placeholder="Up to 3 tags"
    />
  );
}`;

export function TagInputDisabled() {
  return (
    <div className="flex flex-col gap-3">
      <TagInput
        value={["Read-only", "Locked"]}
        onValueChange={() => undefined}
        disabled
      />
    </div>
  );
}

export const TagInputDisabledCode = `import { TagInput } from "@/components/ui/tag-input";

export function TagInputDisabled() {
  return (
    <TagInput
      value={["Read-only", "Locked"]}
      onValueChange={() => undefined}
      disabled
    />
  );
}`;
