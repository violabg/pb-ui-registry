import { Github, List } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="top-0 z-50 sticky bg-background/80 backdrop-blur-sm header-gradient-border border-b">
      <div className="flex justify-between items-center gap-4 mx-auto px-4 sm:px-6 py-4 w-full">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-base"
        >
          <Logo className="size-6 text-primary" />
          PB-UI
        </Link>
        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            className="hidden sm:flex"
            render={<Link href="/components">Components</Link>}
          ></Button>
          <Button
            variant="ghost"
            size="icon-sm"
            nativeButton={false}
            className="sm:hidden flex"
            render={
              <Link href="/components" aria-label="Components">
                <List className="size-4" />
              </Link>
            }
          ></Button>
          <Button
            variant="ghost"
            size="sm"
            nativeButton={false}
            className="hidden sm:flex"
            render={
              <Link href="/registry.json" target="_blank">
                Registry
              </Link>
            }
          ></Button>
          <Button
            variant="ghost"
            size="icon-sm"
            nativeButton={false}
            render={
              <Link
                href="https://github.com/violabg/pb-ui-registry"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <Github className="size-4" />
              </Link>
            }
          ></Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
