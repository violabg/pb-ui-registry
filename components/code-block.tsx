"use client";

import { useTheme } from "next-themes";
import type { Language } from "prism-react-renderer";
import { Highlight, themes } from "prism-react-renderer";
import * as React from "react";

import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted && resolvedTheme === "dark" ? "dark" : "light";
  const prismTheme = activeTheme === "dark" ? themes.vsDark : themes.github;
  const languageKey = (language ?? "tsx") as Language;

  if (!mounted) {
    return (
      <div
        className={cn(
          "relative border border-border/60 rounded-xl surface-panel-soft",
          className,
        )}
      >
        <div className="flex justify-between items-center px-3 py-2 border-border/60 border-b text-muted-foreground text-xs">
          <span>{languageKey}</span>
          <CopyButton value={code} label="Copy code" />
        </div>
        <pre className="bg-muted/30 p-4 overflow-x-auto text-sm leading-relaxed">
          <code className="text-foreground">{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative border border-border/60 rounded-xl surface-panel-soft",
        className,
      )}
    >
      <div className="flex justify-between items-center px-3 py-2 border-border/60 border-b text-muted-foreground text-xs">
        <span>{languageKey}</span>
        <CopyButton value={code} label="Copy code" />
      </div>
      <Highlight theme={prismTheme} code={code} language={languageKey}>
        {({
          className: prismClassName,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={cn(
              "p-4 overflow-x-auto text-sm leading-relaxed",
              prismClassName,
            )}
            style={style}
          >
            <code>
              {tokens.map((line, lineIndex) => (
                <div key={lineIndex} {...getLineProps({ line })}>
                  {line.map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
