import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const resolved = searchParams.get("resolved") === "false" ? false : undefined;

  const incidents = await prisma.incident.findMany({
    where: resolved !== undefined ? { resolved } : {},
    orderBy: { tsStart: "desc" },
    include: { camera: true },
  });

  return Response.json(incidents);
}
