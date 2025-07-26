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
  const cameraIds = [1, 2, 3];

  const types = [
    {
      name: "Unauthorized Access",
      thumbnail: "/thumbnails/thumb1.png",
    },
    { name: "Gun Threat", thumbnail: "/thumbnails/thumb2.jpg" },
    { name: "Face Recognised", thumbnail: "/thumbnails/thumb3.jpg" },
  ];

  for (let i = 0; i < 15; i++) {
    const camId = cameraIds[Math.floor(Math.random() * cameraIds.length)];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const start = faker.date.recent(1);
    const end = new Date(start.getTime() + 10 * 60 * 1000);

    incidents.push({
      cameraId: camId,
      type: randomType.name,
      tsStart: start,
      tsEnd: end,
      thumbnailUrl: randomType.thumbnail,
      resolved: false,
    });
  }

  await prisma.incident.createMany({ data: incidents });
  console.log("✅ Seeding completed successfully.");
}

main().catch((e) => {
  console.error("❌ Error during seeding:", e);
  process.exit(1);
});
