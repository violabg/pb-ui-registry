import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-previews";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

import {
  ArrowRight,
  Blocks,
  CircleCheck,
  Code2,
  Command,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "React Hook Form inputs with Zod",
  description:
    "A curated React Hook Form input collection with Zod integration, shipped as a shadcn-compatible registry.",
  openGraph: {
    title: "React Hook Form inputs with Zod",
    description:
      "A curated React Hook Form input collection with Zod integration, shipped as a shadcn-compatible registry.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "React Hook Form inputs with Zod",
    description:
      "A curated React Hook Form input collection with Zod integration, shipped as a shadcn-compatible registry.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function GetStartedPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 lg:px-10 pt-20 pb-24">
        <div className="mx-auto max-w-8xl">
          <div className="items-center gap-16 grid lg:grid-cols-2">
            <FadeIn variant="slide-right" className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 border border-primary/30 rounded-full w-fit font-medium text-primary text-xs uppercase tracking-[0.2em]">
                <Zap className="size-3.5" />
                Registry-native form inputs
              </div>

              <div className="flex flex-col gap-4">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
                  Shape polished RHF experiences in{" "}
                  <span className="text-gradient-primary">minutes</span>
                </h1>
                <p className="max-w-xl text-muted-foreground text-lg sm:text-xl leading-relaxed">
                  A modern, registry-first library of React Hook Form inputs
                  with Zod integration. Engineered for speed, clarity, and
                  composability.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/components"
                  className="group inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 hover:shadow-[0_0_30px_-5px_var(--neon-blue)] px-6 py-3.5 rounded-lg font-semibold text-primary-foreground transition-all duration-300"
                >
                  Browse components
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/registry.json"
                  className="inline-flex justify-center items-center gap-2 hover:bg-primary/5 px-6 py-3.5 border border-border/70 hover:border-primary/50 rounded-lg font-medium text-foreground transition-all"
                >
                  <Terminal className="size-4" />
                  View registry
                </Link>
              </div>

              <div className="gap-8 grid grid-cols-3 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-primary text-3xl">
                    30+
                  </span>
                  <span className="text-muted-foreground text-sm">
                    inputs shipped
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-3xl">RHF</span>
                  <span className="text-muted-foreground text-sm">
                    first-class
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-3xl">Zod</span>
                  <span className="text-muted-foreground text-sm">ready</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn variant="slide-left" delay={0.15} className="relative">
              <div className="relative p-4 sm:p-6 border border-primary/20 rounded-xl surface-panel">
                <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-[0.2em]">
                  <Command className="size-4 text-primary" />
                  Install in one command
                </div>
                <div className="mt-4">
                  <CodeBlock
                    code="npx shadcn@latest add @pb-ui/input"
                    language="bash"
                    className="bg-background/50 border border-border/50"
                    preClassName="rounded-b-lg"
                  />
                </div>
                <div className="gap-3 grid mt-6 text-sm">
                  <div className="flex items-center gap-3">
                    <CircleCheck className="size-4 text-primary" />
                    <span>Auto-installs dependencies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheck className="size-4 text-primary" />
                    <span>Typed, accessible, composable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CircleCheck className="size-4 text-primary" />
                    <span>Works with Base UI + Tailwind v4</span>
                  </div>
                </div>
                <div className="top-4 right-4 absolute bg-primary/10 px-3 py-1 border border-primary/20 rounded-md font-semibold text-primary text-xs">
                  CLI-ready
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 lg:px-10 py-20">
        <div className="mx-auto max-w-8xl">
          <StaggerContainer
            className="gap-6 grid md:grid-cols-3"
            staggerDelay={0.1}
          >
            <StaggerItem>
              <div className="group relative p-4 sm:p-6 border border-border/50 rounded-xl h-full surface-panel card-glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_var(--neon-blue)] border border-primary/20 rounded-lg size-12 text-primary transition-all duration-300">
                    <Layers className="size-5" />
                  </div>
                  <h3 className="font-display font-semibold text-xl">
                    Form-native APIs
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  RHF controllers, labels, and errors are standardized so every
                  input behaves consistently.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group relative p-4 sm:p-6 border border-border/50 rounded-xl h-full surface-panel card-glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_var(--neon-blue)] border border-primary/20 rounded-lg size-12 text-primary transition-all duration-300">
                    <Cpu className="size-5" />
                  </div>
                  <h3 className="font-display font-semibold text-xl">
                    Zod in the loop
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Schema validation, inline error text, and predictable types
                  built in from the start.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group relative p-4 sm:p-6 border border-border/50 rounded-xl h-full surface-panel card-glow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_-5px_var(--neon-blue)] border border-primary/20 rounded-lg size-12 text-primary transition-all duration-300">
                    <Blocks className="size-5" />
                  </div>
                  <h3 className="font-display font-semibold text-xl">
                    Registry distribution
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Install from the shadcn registry and tweak the code in your
                  own repo, without fighting black boxes.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Code Comparison Section */}
      <section className="px-4 lg:px-10 py-20">
        <div className="mx-auto max-w-8xl">
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Stop writing the same{" "}
              <span className="text-gradient-primary">boilerplate</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              See the difference between standard React Hook Form + shadcn/ui
              implementation versus using our pre-built wrappers.
            </p>
          </FadeIn>

          <div className="space-y-16">
            {/* Basic Input Comparison */}
            <div className="space-y-6">
              <h3 className="font-medium text-muted-foreground text-sm text-center uppercase tracking-[0.2em]">
                Basic Input
              </h3>
              <div className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
                <FadeIn variant="slide-right" className="space-y-4">
                  <div className="flex items-center gap-2 px-1 font-semibold text-muted-foreground">
                    <Code2 className="size-5" />
                    <span>Standard approach</span>
                  </div>
                  <div className="bg-muted/30 border border-border/50 rounded-xl overflow-hidden">
                    <div className="p-1">
                      <CodeBlock
                        language="tsx"
                        preClassName="rounded-b-lg"
                        code={`<Controller
  control={form.control}
  name="username"
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel>Username</FieldLabel>
      <Input
        {...field}
        placeholder="shadcn"
        aria-invalid={fieldState.invalid}
      />
      <FieldDescription>
        This is your public display name.
      </FieldDescription>
      {fieldState.invalid && (
        <FieldError errors={[fieldState.error]} />
      )}
    </Field>
  )}
/>`}
                        className="bg-transparent border-0"
                      />
                    </div>
                  </div>
                </FadeIn>

                <FadeIn variant="slide-left" delay={0.1} className="space-y-4">
                  <div className="flex items-center gap-2 px-1 font-semibold text-primary">
                    <Sparkles className="size-5" />
                    <span>With PB-UI</span>
                  </div>
                  <div className="relative border border-primary/30 rounded-xl overflow-hidden card-gradient">
                    <div className="top-4 right-4 absolute bg-primary/10 px-2 py-1 border border-primary/20 rounded-md font-semibold text-primary text-xs">
                      One component
                    </div>
                    <div className="p-1">
                      <CodeBlock
                        language="tsx"
                        preClassName="rounded-b-lg"
                        code={`<InputField
  control={form.control}
  name="username"
  label="Username"
  placeholder="shadcn"
  description="This is your public display name."
/>`}
                        className="bg-transparent border-0"
                      />
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Date Picker Comparison */}
            <div className="space-y-6">
              <h3 className="font-medium text-muted-foreground text-sm text-center uppercase tracking-[0.2em]">
                Date Picker
              </h3>
              <div className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
                <FadeIn variant="slide-right" className="space-y-4">
                  <div className="flex items-center gap-2 px-1 font-semibold text-muted-foreground">
                    <Code2 className="size-5" />
                    <span>Standard approach</span>
                  </div>
                  <div className="bg-muted/30 border border-border/50 rounded-xl overflow-hidden">
                    <div className="p-1">
                      <CodeBlock
                        language="tsx"
                        preClassName="rounded-b-lg"
                        code={`<Controller
  control={form.control}
  name="dob"
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel>Date of birth</FieldLabel>
      <Popover>
        <PopoverTrigger render={
          <Button
            variant="outline"
            className={cn(
              "pl-3 w-[240px] font-normal text-left",
              !field.value && "text-muted-foreground"
            )}
            aria-invalid={fieldState.invalid}
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="opacity-50 ml-auto size-4" />
          </Button>
        } />
        <PopoverContent className="p-0 w-auto" align="start">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {fieldState.invalid && (
        <FieldError errors={[fieldState.error]} />
      )}
    </Field>
  )}
/>`}
                        className="bg-transparent border-0"
                      />
                    </div>
                  </div>
                </FadeIn>

                <FadeIn variant="slide-left" delay={0.1} className="space-y-4">
                  <div className="flex items-center gap-2 px-1 font-semibold text-primary">
                    <Sparkles className="size-5" />
                    <span>With PB-UI</span>
                  </div>
                  <div className="relative border border-primary/30 rounded-xl overflow-hidden card-gradient">
                    <div className="top-4 right-4 absolute bg-primary/10 px-2 py-1 border border-primary/20 rounded-md font-semibold text-primary text-xs">
                      One component
                    </div>
                    <div className="p-1 overflow-clip">
                      <CodeBlock
                        language="tsx"
                        preClassName="rounded-b-lg"
                        code={`<DatePickerField
  control={form.control}
  name="dob"
  label="Date of birth"
  placeholder="Pick a date"
/>`}
                        className="bg-transparent border-0"
                      />
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="px-4 lg:px-10 py-20">
        <div className="mx-auto max-w-8xl">
          <FadeIn className="flex flex-col gap-3 mb-10">
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Install once, ship everywhere
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg">
              Point shadcn to the registry, add inputs on demand, and keep the
              code fully editable inside your project.
            </p>
          </FadeIn>
          <div className="gap-6 grid lg:grid-cols-2 min-w-0 overflow-hidden">
            <FadeIn className="relative p-4 sm:p-6 border border-border/50 rounded-xl min-w-0 surface-panel">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex justify-center items-center bg-primary rounded-lg size-10 font-display font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="font-display font-semibold text-lg">
                  Configure the registry
                </h3>
              </div>
              <p className="mb-4 text-muted-foreground text-sm">
                Add the pb-ui registry URL to your components configuration.
              </p>
              <CodeBlock
                code={`"registries": {
  "@pb-ui": "https://pb-ui-five.vercel.app/registry/{name}"
}`}
                language="json"
                className="bg-background/50 border border-border/50 rounded-b-lg"
                preClassName="rounded-b-lg"
              />
            </FadeIn>
            <FadeIn
              delay={0.1}
              className="relative p-4 sm:p-6 border border-border/50 rounded-xl min-w-0 surface-panel"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex justify-center items-center bg-primary rounded-lg size-10 font-display font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="font-display font-semibold text-lg">
                  Add inputs instantly
                </h3>
              </div>
              <p className="mb-4 text-muted-foreground text-sm">
                Use the CLI to bring in any component, with dependencies and
                examples included.
              </p>
              <CodeBlock
                code="npx shadcn@latest add @pb-ui/multi-select"
                language="bash"
                className="bg-background/50 border border-border/50 rounded-b-lg"
                preClassName="rounded-b-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Live Previews Section */}
      <section className="px-4 lg:px-10 py-20">
        <div className="mx-auto max-w-8xl">
          <FadeIn className="flex justify-between items-end gap-6 mb-10">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                Live previews, ready to drop in
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground text-lg">
                Explore the catalog and copy the exact code you need for each
                input.
              </p>
            </div>
            <Link
              href="/components"
              className="hidden sm:inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 text-sm transition-colors"
            >
              Explore the catalog
              <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
          <StaggerContainer
            className="gap-6 grid md:grid-cols-3"
            staggerDelay={0.1}
          >
            <StaggerItem className="h-full">
              <div className="relative p-4 sm:p-6 border border-border/50 rounded-xl h-full surface-panel card-glow">
                <div className="mb-4 font-display font-semibold">Input</div>
                <ComponentPreview name="input" />
              </div>
            </StaggerItem>
            <StaggerItem className="h-full">
              <div className="relative p-4 sm:p-6 border border-border/50 rounded-xl h-full surface-panel card-glow">
                <div className="mb-4 font-display font-semibold">Select</div>
                <ComponentPreview name="select" />
              </div>
            </StaggerItem>
            <StaggerItem className="h-full">
              <div className="relative p-4 sm:p-6 border border-border/50 rounded-xl h-full surface-panel card-glow">
                <div className="mb-4 font-display font-semibold">Tag input</div>
                <ComponentPreview name="tag-input" />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 lg:px-10 py-20">
        <div className="mx-auto max-w-8xl">
          <FadeIn variant="scale">
            <div className="relative p-10 border border-primary/20 rounded-2xl surface-panel">
              <div className="absolute inset-0 pointer-events-none sheen-sweep" />
              <div className="top-0 right-0 left-0 absolute bg-gradient-to-r from-transparent via-primary/50 to-transparent h-px" />
              <div className="relative flex flex-col gap-6 max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 border border-primary/30 rounded-full w-fit font-medium text-primary text-xs uppercase tracking-[0.2em]">
                  <Sparkles className="size-3.5" />
                  Ready to build
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                  Build your next form flow with confidence
                </h2>
                <p className="text-muted-foreground text-lg">
                  Start with the registry, bring in the exact inputs you need,
                  and ship forms that feel consistent across every surface.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/components"
                    className="group inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 hover:shadow-[0_0_30px_-5px_var(--neon-blue)] px-6 py-3.5 rounded-lg font-semibold text-primary-foreground transition-all duration-300"
                  >
                    Start browsing
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/registry.json"
                    className="font-semibold text-foreground hover:text-primary text-sm transition-colors"
                  >
                    View registry index
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
