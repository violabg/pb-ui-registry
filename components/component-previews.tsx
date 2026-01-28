"use client";

import { TagInputDemo } from "@/components/examples/tag-input-examples";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const frameworks = ["Next.js", "SvelteKit", "Nuxt", "Remix", "Astro"];

type ComponentPreviewProps = {
  name: string;
};

export function ComponentPreview({ name }: ComponentPreviewProps) {
  switch (name) {
    case "alert-dialog":
      return (
        <AlertDialog>
          <AlertDialogTrigger
            render={<Button>Confirm delete</Button>}
          ></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete project?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. Your project will be permanently
                removed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    case "badge":
      return (
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      );
    case "button":
      return (
        <div className="flex flex-wrap gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      );
    case "card":
      return (
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Starter plan</CardTitle>
            <CardDescription>
              Everything you need to get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Includes 3 projects, 5 GB storage, and team collaboration.
            </p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">Upgrade</Button>
            <Button size="sm" variant="outline">
              Learn more
            </Button>
          </CardFooter>
        </Card>
      );
    case "combobox":
      return (
        <Combobox items={frameworks} defaultValue={"Next.js"}>
          <ComboboxInput placeholder="Select a framework" />
          <ComboboxContent>
            <ComboboxEmpty>No results.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      );
    case "dropdown-menu":
      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline">Open menu</Button>}
          ></DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Email updates
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case "field":
      return (
        <FieldGroup className="max-w-sm">
          <Field>
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <FieldContent>
              <Input id="field-email" placeholder="you@example.com" />
              <FieldDescription>
                We will never share your email.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      );
    case "input":
      return (
        <div className="gap-2 grid max-w-sm">
          <Label htmlFor="input-preview">Name</Label>
          <Input id="input-preview" placeholder="Jane Doe" />
          <Input disabled placeholder="Disabled" />
        </div>
      );
    case "input-group":
      return (
        <InputGroup className="max-w-sm">
          <InputGroupAddon>
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="username" />
        </InputGroup>
      );
    case "label":
      return (
        <div className="gap-2 grid max-w-sm">
          <Label htmlFor="label-input">Project name</Label>
          <Input id="label-input" placeholder="Acme Inc." />
        </div>
      );
    case "select":
      return (
        <Select defaultValue="design">
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select a role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="design">Designer</SelectItem>
            <SelectItem value="dev">Developer</SelectItem>
            <SelectItem value="pm">Product manager</SelectItem>
          </SelectContent>
        </Select>
      );
    case "separator":
      return (
        <div className="w-full max-w-sm">
          <div className="flex justify-between items-center text-sm">
            <span>Usage</span>
            <span className="text-muted-foreground">72%</span>
          </div>
          <Separator className="my-3" />
          <div className="flex justify-between items-center text-sm">
            <span>Remaining</span>
            <span className="text-muted-foreground">28%</span>
          </div>
        </div>
      );
    case "textarea":
      return (
        <div className="gap-2 grid max-w-sm">
          <Label htmlFor="textarea-preview">Notes</Label>
          <Textarea id="textarea-preview" placeholder="Write a note..." />
        </div>
      );
    case "tag-input":
      return <TagInputDemo />;
    default:
      return (
        <p className="text-muted-foreground text-sm">
          Preview for {name} is not available yet.
        </p>
      );
  }
}
