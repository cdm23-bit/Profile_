import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  await prisma.profile.upsert({
    where: { id: "main" },
    update: {},
    create: {
      id: "main",
      fullName: "CHRISTIAN DAVE MAINIT",
      program: "BS INFORMATION TECHNOLOGY",
      studentId: "ID 241-0469",
      photoUrl: "/profile1.jpg",
      about:
        "An Information Technology student focused on developing practical skills in software and web development.",
      personalNote:
        "Born too late to explore Earth.\nBorn too late to explore the universe.\nBorn just in time to explore the internet.",
      communicationDescription:
        "Contact information for communication, collaboration, and project-related inquiries.",
      interests: {
        create: [
          { label: "GAMES", sortOrder: 1 },
          { label: "TECHNOLOGY", sortOrder: 2 },
          { label: "ANIME", sortOrder: 3 },
          { label: "ETC", sortOrder: 4 },
        ],
      },
      skills: {
        create: [
          { name: "JAVA", mastery: 55, sortOrder: 1 },
          { name: "HTML", mastery: 61, sortOrder: 2 },
          { name: "CSS", mastery: 53, sortOrder: 3 },
          { name: "PHP", mastery: 32, sortOrder: 4 },
          { name: "JAVASCRIPT", mastery: 16, sortOrder: 5 },
        ],
      },
      projects: {
        create: [
          {
            name: "DONUT BUSINESS MANAGEMENT SYSTEM",
            category: "SYSTEM PROJECT",
            description:
              "A web-based system for managing a student donut business, including inventory, reservations, sales, remaining stock, and demand tracking.",
            status: "IN DEVELOPMENT",
            sortOrder: 1,
            technologies: {
              create: [
                { name: "PHP", sortOrder: 1 },
                { name: "MYSQL", sortOrder: 2 },
                { name: "HTML", sortOrder: 3 },
                { name: "CSS", sortOrder: 4 },
                { name: "JAVASCRIPT", sortOrder: 5 },
              ],
            },
          },
          {
            name: "PERSONAL PROFILE",
            category: "WEB PROJECT",
            description:
              "A personal profile website presenting personal information, skills, projects, interests, and contact information through a technical interface design.",
            status: "COMPLETED",
            sortOrder: 2,
            technologies: {
              create: [
                { name: "HTML", sortOrder: 1 },
                { name: "CSS", sortOrder: 2 },
                { name: "JAVASCRIPT", sortOrder: 3 },
              ],
            },
          },
        ],
      },
      socialLinks: {
        create: [
          {
            label: "EMAIL",
            value: "chr1st14nd4v323@gmail.com",
            href: "mailto:chr1st14nd4v323@gmail.com",
            icon: "mail",
            sortOrder: 1,
          },
          {
            label: "PHONE",
            value: "09069565428",
            href: "tel:09069565428",
            icon: "phone",
            sortOrder: 2,
          },
          {
            label: "FACEBOOK",
            value: "ChristianDave Namuhe Mainit",
            href: "https://www.facebook.com/",
            icon: "facebook",
            opensNewTab: true,
            sortOrder: 3,
          },
          {
            label: "GITHUB",
            value: "github.com/cdm23-bit",
            href: "https://github.com/cdm23-bit",
            icon: "github",
            opensNewTab: true,
            sortOrder: 4,
          },
        ],
      },
    },
  });
}

seed()
  .catch((error) => {
    console.error("Unable to seed profile data:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
