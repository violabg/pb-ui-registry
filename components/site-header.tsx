import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="border-border border-b">
      <div className="flex justify-between items-center gap-4 mx-auto px-4 sm:px-6 py-4 w-full max-w-6xl">
        <Link href="/" className="font-semibold text-base">
          shadcd/ui
        </Link>
        <nav className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/components">Components</Link>}
          ></Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/registry.json">Registry</Link>}
          ></Button>
          <ThemeToggle />
          <Button
            size="sm"
            render={<Link href="/components/tag-input">Get started</Link>}
          ></Button>
        </nav>
      </div>
    </header>
  );
}
