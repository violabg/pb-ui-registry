import { getRegistryIndex } from "@/lib/registry";

export const dynamic = "force-static";
export const revalidate = false;
export const runtime = "nodejs";

export async function GET() {
  const registry = await getRegistryIndex();

  return Response.json(registry);
}
