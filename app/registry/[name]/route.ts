import { getRegistryItem } from "@/lib/registry";

export const dynamic = "force-static";
export const revalidate = false;
export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;
  const item = await getRegistryItem(name, true);

  if (!item) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json(item);
}
