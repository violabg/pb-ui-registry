"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open Dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <input
              id="name"
              defaultValue="John Doe"
              className="col-span-3 px-3 border rounded h-9"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <input
              id="username"
              defaultValue="@johndoe"
              className="col-span-3 px-3 border rounded h-9"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const DialogDemoCode = `import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Open Dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <input
              id="name"
              defaultValue="John Doe"
              className="col-span-3 px-3 border rounded h-9"
            />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <input
              id="username"
              defaultValue="@johndoe"
              className="col-span-3 px-3 border rounded h-9"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;
