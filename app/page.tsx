import { CodeBlock } from "@/components/code-block";
import { FadeIn } from "@/components/fade-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Package,
  Sparkles,
  Terminal,
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
    <div className="px-4 lg:px-8 py-16 w-full">
      <FadeIn className="relative mb-16">
        <div className="z-10 relative flex flex-col items-center gap-4 mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 border border-primary/20 rounded-full w-fit font-medium text-primary text-sm">
            <Package className="size-4" />
            <span>RHF + Zod ready</span>
          </div>
          <h1 className="font-bold text-5xl sm:text-7xl leading-tight tracking-tight">
            Build forms faster with <span className="text-primary">PB-UI</span>
          </h1>
          <p className="max-w-2xl text-muted-foreground text-xl/relaxed">
            A curated React Hook Form input collection with Zod integration,
            built on Base UI and Tailwind CSS. Copy, paste, and customize.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="/components"
              className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-medium text-primary-foreground transition-colors"
            >
              Browse Components
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="top-1/2 -right-20 -z-10 absolute bg-primary/10 blur-3xl rounded-full w-150 h-150 -translate-y-1/2 pointer-events-none" />
      </FadeIn>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <FadeIn
          delay={0.1}
          className="bg-linear-to-bl from-primary/10 to-transparent shadow-sm p-6 border rounded-xl overflow-hidden transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 text-primary">
              <CheckCircle2 className="size-6" />
            </div>
            <h3 className="font-semibold text-xl">RHF-first</h3>
          </div>
          <p className="text-muted-foreground">
            Inputs designed for React Hook Form with consistent labels, errors,
            and validation states out of the box.
          </p>
        </FadeIn>
        <FadeIn
          delay={0.2}
          className="bg-linear-to-bl from-primary/10 to-transparent shadow-sm p-6 border rounded-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 text-primary">
              <Terminal className="size-6" />
            </div>
            <h3 className="font-semibold text-xl">Zod-integrated</h3>
          </div>
          <p className="text-muted-foreground">
            Schema-first validation with Zod-friendly patterns and types you can
            rely on across your forms.
          </p>
        </FadeIn>
        <FadeIn
          delay={0.3}
          className="bg-linear-to-bl from-primary/10 to-transparent shadow-sm p-6 border rounded-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="flex justify-center items-center bg-primary/10 rounded-lg size-10 text-primary">
              <Package className="size-6" />
            </div>
            <h3 className="font-semibold text-xl">Registry workflow</h3>
          </div>
          <p className="text-muted-foreground">
            Install inputs directly from the CLI with the shadcn registry, then
            customize the code to fit your app.
          </p>
        </FadeIn>
      </div>

      <FadeIn className="bg-muted/30 px-4 md:px-6 py-12 border border-border/50 rounded-3xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 font-bold text-3xl tracking-tight">
            Start building RHF inputs in seconds
          </h2>
          <p className="text-muted-foreground text-lg">
            Add React Hook Form inputs with the CLI and wire them to Zod schemas
            without extra boilerplate.
          </p>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2">
          <FadeIn>
            <Card className="bg-linear-to-bl from-primary/10 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex justify-center items-center bg-primary rounded-full size-8 font-bold text-primary-foreground shrink-0">
                    1
                  </div>
                  Configure components.json
                </CardTitle>
                <CardDescription>
                  Add the registry URL to your <code>components.json</code> file
                  to tell shadcn where to look for components.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code={`"registries": {
  "@pb-ui": "https://pb-ui-five.vercel.app/registry/{name}"
}`}
                  language="json"
                  className="bg-background border border-border/60"
                />
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn>
            <Card className="bg-linear-to-bl from-primary/10 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex justify-center items-center bg-primary rounded-full size-8 font-bold text-primary-foreground shrink-0">
                    2
                  </div>
                  Run the add command
                </CardTitle>
                <CardDescription>
                  Use the CLI to add any component. Dependencies and registry
                  items will be installed automatically.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  code="npx shadcn@latest add @pb-ui/multi-select"
                  language="bash"
                  className="bg-background border border-border/60"
                />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </FadeIn>

      <FadeIn className="mt-32 mb-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-bold text-3xl sm:text-4xl tracking-tight">
            Stop writing the same boilerplate
          </h2>
          <p className="text-muted-foreground text-lg">
            See the difference between standard React Hook Form + shadcn/ui
            implementation versus using our pre-built wrappers.
          </p>
        </div>

        <div className="space-y-16">
          {/* Basic Input */}
          <div className="space-y-6">
            <h3 className="font-medium text-muted-foreground text-sm text-center uppercase tracking-widest">
              Basic Input
            </h3>
            <div className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1 font-semibold text-muted-foreground">
                  <Code2 className="size-5" />
                  <span>Standard Approach</span>
                </div>
                <FadeIn>
                  <Card className="group relative bg-muted/40 border overflow-hidden">
                    <CardContent className="p-1">
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
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1 font-semibold text-primary">
                  <Sparkles className="size-5" />
                  <span>With PB-UI</span>
                </div>
                <FadeIn>
                  <Card className="group relative bg-primary/5 border border-primary/20 overflow-hidden">
                    <div className="top-4 right-4 absolute bg-primary/10 px-2 py-1 rounded font-medium text-primary text-xs">
                      One Component
                    </div>
                    <CardContent className="p-1">
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
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Date Picker */}
          <div className="space-y-6">
            <h3 className="font-medium text-muted-foreground text-sm text-center uppercase tracking-widest">
              Date Picker
            </h3>
            <div className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1 font-semibold text-muted-foreground">
                  <Code2 className="size-5" />
                  <span>Standard Approach</span>
                </div>
                <FadeIn>
                  <Card className="group relative bg-muted/40 border overflow-hidden">
                    <CardContent className="p-1">
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
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1 font-semibold text-primary">
                  <Sparkles className="size-5" />
                  <span>With PB-UI</span>
                </div>
                <FadeIn>
                  <Card className="group relative bg-primary/5 border border-primary/20 overflow-hidden">
                    <div className="top-4 right-4 absolute bg-primary/10 px-2 py-1 rounded font-medium text-primary text-xs">
                      One Component
                    </div>
                    <CardContent className="p-1">
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
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
