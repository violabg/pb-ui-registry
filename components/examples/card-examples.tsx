"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team update</CardTitle>
        <CardDescription>Share a quick note with your team.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          The new release is scheduled for next Tuesday at 10:00 AM.
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="outline" size="sm">
          Dismiss
        </Button>
      </CardFooter>
    </Card>
  );
}

export const CardDemoCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team update</CardTitle>
        <CardDescription>Share a quick note with your team.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          The new release is scheduled for next Tuesday at 10:00 AM.
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="outline" size="sm">
          Dismiss
        </Button>
      </CardFooter>
    </Card>
  );
}`;
