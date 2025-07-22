import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PATCH(request, { params }) {
  const id = parseInt(params.id);
  const updatedIncident = await prisma.incident.update({
    where: { id },
    data: { resolved: true },
  });

  return Response.json(updatedIncident);
}
