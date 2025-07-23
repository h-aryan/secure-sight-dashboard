import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PATCH(request) {
  const { pathname } = new URL(request.url);

  // Expected URL: /api/incidents/resolve?id=1
  const id = parseInt(new URL(request.url).searchParams.get("id"));

  if (isNaN(id)) {
    return new Response(JSON.stringify({ error: "Invalid ID" }), {
      status: 400,
    });
  }

  try {
    const updatedIncident = await prisma.incident.update({
      where: { id },
      data: { resolved: true },
    });

    return new Response(JSON.stringify(updatedIncident), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
