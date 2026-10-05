import "server-only";
import { prisma } from "@/lib/prisma";

export async function getProfileData() {
  const profile = await prisma.profile.findUnique({
    where: { id: "main" },
    include: {
      interests: { orderBy: { sortOrder: "asc" } },
      skills: { orderBy: { sortOrder: "asc" } },
      projects: {
        orderBy: { sortOrder: "asc" },
        include: {
          technologies: { orderBy: { sortOrder: "asc" } },
        },
      },
      socialLinks: { orderBy: { sortOrder: "asc" } },
    },
  });

  if (!profile) {
    throw new Error(
      "Profile data is missing. Run the database migration and seed commands.",
    );
  }

  return profile;
}

export type ProfileData = Awaited<ReturnType<typeof getProfileData>>;
