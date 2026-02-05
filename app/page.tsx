import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-previews";
import { FadeIn } from "@/components/fade-in";

import {
  ArrowRight,
  CircleCheck,
  Code2,
  Command,
  Layers,
  Sparkles,
  WandSparkles,
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
    <div className="relative bg-catalog-grid px-4 lg:px-10 py-16 w-full overflow-hidden">
      <div className="-top-32 -right-24 float-slow absolute bg-[var(--gradient-accent)] opacity-30 blur-3xl rounded-full w-[30rem] h-[30rem]" />
      <div className="top-20 -left-20 float-slow absolute bg-primary/20 blur-3xl rounded-full w-96 h-96" />

      <section className="relative mx-auto max-w-8xl">
        <div className="items-center gap-12 grid lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-full surface-ring w-fit font-medium text-primary text-xs uppercase tracking-[0.2em] surface-panel-soft">
              <Sparkles className="size-4" />
              Registry-native form inputs
            </div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Shape polished RHF experiences in{" "}
              <span className="text-gradient-primary">minutes</span>
            </h1>
            <p className="max-w-xl text-muted-foreground text-lg sm:text-xl/relaxed">
              A modern, registry-first library of React Hook Form inputs with
              Zod integration, engineered for speed, clarity, and composability.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/components"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 px-6 py-3 rounded-full font-medium text-primary-foreground transition-colors card-glow"
              >
                Browse components
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/registry.json"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 border border-border/70 rounded-full surface-ring font-medium text-foreground transition-colors surface-panel-soft"
              >
                View registry
              </Link>
            </div>
            <div className="gap-6 grid grid-cols-3 pt-4 text-sm">
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-2xl">
                  30+
                </span>
                <span className="text-muted-foreground">inputs shipped</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-2xl">
                  RHF
                </span>
                <span className="text-muted-foreground">first-class</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-2xl">
                  Zod
                </span>
                <span className="text-muted-foreground">ready</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="relative">
            <div className="relative p-6 border border-border/70 rounded-3xl surface-ring overflow-hidden surface-panel card-glow">
              <div className="flex items-center gap-2 text-muted-foreground text-xs uppercase tracking-[0.18em]">
                <Command className="size-4 text-primary" />
                Install in one command
              </div>
              <div className="mt-4">
                <CodeBlock
                  code="npx shadcn@latest add @pb-ui/input"
                  language="bash"
                  className="bg-background/70 border border-border/60"
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
              <div className="top-4 right-4 absolute bg-primary/10 px-3 py-1 rounded-full font-medium text-primary text-xs">
                CLI-ready
              </div>
            </div>
            <div className="-bottom-8 left-8 absolute px-4 py-3 border border-border/60 rounded-2xl text-muted-foreground text-xs surface-panel-soft">
              No boilerplate. Just components.
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-8xl">
        <div className="gap-6 grid md:grid-cols-3">
          <FadeIn className="p-6 border rounded-3xl surface-ring surface-panel card-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex justify-center items-center bg-primary/10 rounded-2xl size-10 text-primary">
                <Layers className="size-5" />
              </div>
              <h3 className="font-semibold text-xl">Form-native APIs</h3>
            </div>
            <p className="text-muted-foreground">
              RHF controllers, labels, and errors are standardized so every
              input behaves consistently.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="p-6 border rounded-3xl surface-ring surface-panel card-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex justify-center items-center bg-primary/10 rounded-2xl size-10 text-primary">
                <WandSparkles className="size-5" />
              </div>
              <h3 className="font-semibold text-xl">Zod in the loop</h3>
            </div>
            <p className="text-muted-foreground">
              Schema validation, inline error text, and predictable types built
              in from the start.
            </p>
          </FadeIn>
          <FadeIn
            delay={0.2}
            className="p-6 border rounded-3xl surface-ring surface-panel card-glow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex justify-center items-center bg-primary/10 rounded-2xl size-10 text-primary">
                <Sparkles className="size-5" />
              </div>
              <h3 className="font-semibold text-xl">Registry distribution</h3>
            </div>
            <p className="text-muted-foreground">
              Install from the shadcn registry and tweak the code in your own
              repo, without fighting black boxes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-8xl">
        <FadeIn className="flex flex-col gap-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-3xl sm:text-4xl tracking-tight">
              Stop writing the same{" "}
              <span className="text-gradient-primary">boilerplate</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              See the difference between standard React Hook Form + shadcn/ui
              implementation versus using our pre-built wrappers.
            </p>
          </div>

          <div className="space-y-16">
            <div className="space-y-6">
              <h3 className="font-medium text-muted-foreground text-sm text-center uppercase tracking-widest">
                Basic Input
              </h3>
              <div className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-1 font-semibold text-muted-foreground">
                    <Code2 className="size-5" />
                    <span>Standard approach</span>
                  </div>
                  <div className="bg-muted/30 border-gradient rounded-3xl overflow-hidden">
                    <div className="p-1">
                      <CodeBlock
                        language="tsx"
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
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-1 font-semibold text-primary">
                    <Sparkles className="size-5" />
                    <span>With PB-UI</span>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden card-gradient card-glow">
                    <div className="top-4 right-4 absolute bg-primary/10 px-2 py-1 rounded-full font-medium text-primary text-xs">
                      One component
                    </div>
                    <div className="p-1">
                      <CodeBlock
                        language="tsx"
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
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-medium text-muted-foreground text-sm text-center uppercase tracking-widest">
                Date Picker
              </h3>
              <div className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-1 font-semibold text-muted-foreground">
                    <Code2 className="size-5" />
                    <span>Standard approach</span>
                  </div>
                  <div className="bg-muted/30 border-gradient rounded-3xl overflow-hidden">
                    <div className="p-1">
                      <CodeBlock
                        language="tsx"
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
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 px-1 font-semibold text-primary">
                    <Sparkles className="size-5" />
                    <span>With PB-UI</span>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden card-gradient card-glow">
                    <div className="top-4 right-4 absolute bg-primary/10 px-2 py-1 rounded-full font-medium text-primary text-xs">
                      One component
                    </div>
                    <div className="p-1">
                      <CodeBlock
                        language="tsx"
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
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto mt-24 max-w-8xl">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              Install once, ship everywhere
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg">
              Point shadcn to the registry, add inputs on demand, and keep the
              code fully editable inside your project.
            </p>
          </div>
          <div className="gap-6 grid lg:grid-cols-2">
            <FadeIn className="p-6 border border-border/70 rounded-3xl surface-ring surface-panel">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex justify-center items-center bg-primary rounded-full size-9 font-semibold text-primary-foreground">
                  1
                </div>
                <h3 className="font-semibold text-lg">
                  Configure the registry
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Add the pb-ui registry URL to your components configuration.
              </p>
              <div className="mt-4">
                <CodeBlock
                  code={`"registries": {
  "@pb-ui": "https://pb-ui-five.vercel.app/registry/{name}"
}`}
                  language="json"
                  className="bg-background/70 border border-border/60"
                />
              </div>
            </FadeIn>
            <FadeIn
              delay={0.1}
              className="p-6 border border-border/70 rounded-3xl surface-ring surface-panel"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex justify-center items-center bg-primary rounded-full size-9 font-semibold text-primary-foreground">
                  2
                </div>
                <h3 className="font-semibold text-lg">Add inputs instantly</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Use the CLI to bring in any component, with dependencies and
                examples included.
              </p>
              <div className="mt-4">
                <CodeBlock
                  code="npx shadcn@latest add @pb-ui/multi-select"
                  language="bash"
                  className="bg-background/70 border border-border/60"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-8xl">
        <div className="flex justify-between items-end gap-6 mb-10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              Live previews, ready to drop in
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg">
              Explore the catalog and copy the exact code you need for each
              input.
            </p>
          </div>
          <Link
            href="/components"
            className="hidden sm:inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 text-sm"
          >
            Explore the catalog
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="gap-6 grid md:grid-cols-3">
          <FadeIn className="p-6 border border-border/70 rounded-3xl surface-ring surface-panel">
            <div className="mb-4 font-semibold">Input</div>
            <ComponentPreview name="input" />
          </FadeIn>
          <FadeIn
            delay={0.1}
            className="p-6 border border-border/70 rounded-3xl surface-ring surface-panel"
          >
            <div className="mb-4 font-semibold">Select</div>
            <ComponentPreview name="select" />
          </FadeIn>
          <FadeIn
            delay={0.2}
            className="p-6 border border-border/70 rounded-3xl surface-ring surface-panel"
          >
            <div className="mb-4 font-semibold">Tag input</div>
            <ComponentPreview name="tag-input" />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-8xl">
        <FadeIn className="relative p-10 border border-border/70 rounded-[32px] surface-ring overflow-hidden surface-panel">
          <div className="absolute inset-0 pointer-events-none sheen-sweep" />
          <div className="relative flex flex-col gap-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 border rounded-full surface-ring w-fit font-medium text-primary text-xs uppercase tracking-[0.2em] surface-panel-soft">
              <Sparkles className="size-4" />
              Ready to build
            </div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              Build your next form flow with confidence
            </h2>
            <p className="text-muted-foreground text-lg">
              Start with the registry, bring in the exact inputs you need, and
              ship forms that feel consistent across every surface.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/components"
                className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 px-6 py-3 rounded-full font-medium text-primary-foreground transition-colors card-glow"
              >
                Start browsing
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/registry.json"
                className="font-medium text-foreground hover:text-primary text-sm"
              >
                View registry index
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
