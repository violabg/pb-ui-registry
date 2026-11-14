"use client";

import { useHighlightedCode } from "@/hooks/use-highlighted-code";
import {
  CodeBlock as CodeBlockRoot,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/components/ui/code-block";

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
  preClassName?: string;
};

/**
 * Site-level adapter around the shadcn `CodeBlock` compound components.
 * Keeps the simple `code` / `language` API used across the marketing pages
 * while highlighting with Shiki and exposing line/actions affordances.
 */
export function CodeBlock({
  code,
  language,
  className,
  preClassName,
}: CodeBlockProps) {
  const languageKey = language ?? "tsx";
  const lines = useHighlightedCode(code, languageKey);

  return (
    <CodeBlockRoot className={className}>
      <CodeBlockHeader className="pb-2 border-border/60 border-b">
        <CodeBlockTitle className="font-mono font-normal text-muted-foreground text-xs uppercase tracking-wide">
          {languageKey}
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={code} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent className={preClassName}>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlockRoot>
  );
}
