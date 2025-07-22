const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  const cameras = await prisma.camera.createMany({
    data: [
      {
        name: "Shop Floor A",
        location: "First Floor",
      },
      { name: "Vault", location: "Basement" },
      { name: "Entrance", location: "Ground Floor" },
    ],
  });

  const incidents = [];
  cameraIds = [1, 2, 3];

  const types = ["Unauthorized Access", "Gun Threat", "Face Recognised"];

  for (let i = 0; i < 15; i++) {
    const camId = cameraIds[Math.floor(Math.random() * cameraIds.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const start = faker.date.recent(1);
    const end = new Date(start.getTime() + 10 * 60 * 1000);

    incidents.push({
      cameraId: camId,
      type: type,
      tsStart: start,
      tsEnd: end,
      thumbnailUrl: `/thumbnails/thumb${(i % 3) + 1}.jpg`,
      resolved: false,
    });
  }

  await prisma.incident.createMany({ data: incidents });
  console.log("Seeding completed successfully.");
}

main().catch((e) => {
  console.error("Error during seeding:", e);
  process.exit(1);
});
