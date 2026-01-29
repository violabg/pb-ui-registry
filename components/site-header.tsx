import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="top-0 z-50 sticky bg-background/80 backdrop-blur-sm border-border border-b">
      <div className="flex justify-between items-center gap-4 mx-auto px-4 sm:px-6 py-4 w-full max-w-7xl">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-base"
        >
          <Logo className="size-6" />
          pb-ui
        </Link>
        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={<Link href="/components">Components</Link>}
          ></Button>
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={
              <Link href="/registry.json" target="_blank">
                Registry
              </Link>
            }
          ></Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
