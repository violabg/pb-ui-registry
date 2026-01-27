import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

export function CodeBlock({ code, language, className }: CodeBlockProps) {
  return (
    <div className={cn("relative border border-border rounded-lg", className)}>
      <div className="flex justify-between items-center px-3 py-2 border-border border-b text-muted-foreground text-xs">
        <span>{language ?? "tsx"}</span>
        <CopyButton value={code} label="Copy code" />
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-foreground">{code}</code>
      </pre>
    </div>
  );
}
