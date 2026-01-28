"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <p>Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <p>Change your password here.</p>
      </TabsContent>
    </Tabs>
  );
}

export const TabsDemoCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <p>Make changes to your account here.</p>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <p>Change your password here.</p>
      </TabsContent>
    </Tabs>
  );
}`;

export function TabsLineVariant() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <p>Account settings and preferences.</p>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <p>Password and security options.</p>
      </TabsContent>
      <TabsContent value="settings" className="p-4">
        <p>General application settings.</p>
      </TabsContent>
    </Tabs>
  );
}

export const TabsLineVariantCode = `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function TabsLineVariant() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <p>Account settings and preferences.</p>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <p>Password and security options.</p>
      </TabsContent>
      <TabsContent value="settings" className="p-4">
        <p>General application settings.</p>
      </TabsContent>
    </Tabs>
  );
}`;
