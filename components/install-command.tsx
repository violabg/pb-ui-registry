"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type InstallCommandProps = {
  command: string;
  className?: string;
};

export function InstallCommand({ command, className }: InstallCommandProps) {
  // Extract the args from the command (remove "npx shadcn@latest add ")
  // The command comes in as "npx shadcn@latest add http://..."
  // We handle both "npx shadcn@latest add" and just "shadcn@latest add" just in case.
  const args = command
    .replace(/^npx shadcn@latest add /, "")
    .replace(/^pnpm dlx shadcn@latest add /, "");

  const commands = {
    npm: `npx shadcn@latest add ${args}`,
    pnpm: `pnpm dlx shadcn@latest add ${args}`,
    yarn: `yarn shadcn@latest add ${args}`,
    bun: `bunx --bun shadcn@latest add ${args}`,
  };

  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  const copyToClipboard = React.useCallback((value: string) => {
    navigator.clipboard.writeText(value);
    setHasCopied(true);
  }, []);

  return (
    <div
      className={cn(
        "relative bg-zinc-100 dark:bg-zinc-950 p-4 rounded-xl ring-1 ring-zinc-200 dark:ring-zinc-800",
        className,
      )}
    >
      <Tabs defaultValue="npm" className="relative">
        <div className="flex justify-between items-center pb-3">
          <TabsList className="gap-4 bg-transparent p-0">
            {Object.keys(commands).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none p-0 pb-1 border-transparent data-[state=active]:border-zinc-900 dark:data-[state=active]:border-white border-b-2 rounded-none h-auto text-zinc-500 data-[state=active]:text-zinc-900 hover:text-zinc-700 dark:data-[state=active]:text-zinc-50 dark:hover:text-zinc-200 dark:text-zinc-400 transition-colors"
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(commands).map(([key, cmd]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <div className="flex justify-between items-center gap-4">
              <code className="flex-1 font-mono text-zinc-900 dark:text-zinc-50 text-sm break-all">
                {cmd}
              </code>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-zinc-200 dark:hover:bg-zinc-800 w-6 h-6 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 dark:text-zinc-400"
                onClick={() => copyToClipboard(cmd)}
              >
                {hasCopied ? (
                  <CheckIcon className="w-3 h-3" />
                ) : (
                  <CopyIcon className="w-3 h-3" />
                )}
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
