import type {
  ProfileData,
  Project,
  Skill,
  SocialLink,
} from "@/lib/profile-data";

export type SceneId =
  | "introduction"
  | "personal-information"
  | "skills"
  | "projects"
  | "contact"
  | "ending";

export interface SceneChoice {
  label: string;
  nextScene: SceneId;
}

export interface DialogueEntry {
  speaker: string;
  text: string;
  choices?: SceneChoice[];
  skill?: Pick<Skill, "name" | "mastery">;
  project?: Pick<Project, "status" | "technologies">;
  contacts?: SocialLink[];
}

export interface VNScene {
  title: string;
  chapter: string;
  setting: string;
  entries: DialogueEntry[];
}

export function createVisualNovelScript(
  profile: ProfileData,
): Record<SceneId, VNScene> {
  const sectionChoices: SceneChoice[] = [
    { label: "About me", nextScene: "personal-information" },
    { label: "Skills", nextScene: "skills" },
    { label: "Projects", nextScene: "projects" },
    { label: "Contact", nextScene: "contact" },
  ];

  return {
    introduction: {
      title: "A PROFILE STORY",
      chapter: "PROLOGUE",
      setting: "LOCAL ARCHIVE // CONNECTION ESTABLISHED",
      entries: [
        {
          speaker: "SYSTEM",
          text: "A quiet archive opens. Take a moment, and follow a thread.",
        },
        {
          speaker: profile.fullName,
          text: `I'm ${profile.fullName}, a ${profile.program} student. Where would you like to begin?`,
          choices: sectionChoices,
        },
      ],
    },
    "personal-information": {
      title: "PERSONAL INFORMATION",
      chapter: "CHAPTER 01",
      setting: "IDENTITY FILE // OPEN",
      entries: [
        {
          speaker: profile.fullName,
          text: profile.about,
        },
        {
          speaker: profile.fullName,
          text: `Interests: ${profile.interests.map((interest) => interest.label).join(", ")}.`,
          choices: [
            { label: "Continue to skills", nextScene: "skills" },
            { label: "Visit projects", nextScene: "projects" },
            { label: "Open contact", nextScene: "contact" },
            { label: "Choose another topic", nextScene: "introduction" },
          ],
        },
      ],
    },
    skills: {
      title: "SKILLS",
      chapter: "CHAPTER 02",
      setting: "SKILL REGISTER // LIVE READOUT",
      entries: [
        ...profile.skills.map((skill) => ({
          speaker: profile.fullName,
          text: `${skill.name} — current listed proficiency.`,
          skill: { name: skill.name, mastery: skill.mastery },
        })),
        {
          speaker: profile.fullName,
          text: "These are the skills currently listed in my profile.",
          choices: [
            { label: "Continue to projects", nextScene: "projects" },
            { label: "About me", nextScene: "personal-information" },
            { label: "Open contact", nextScene: "contact" },
            { label: "Choose another topic", nextScene: "introduction" },
          ],
        },
      ],
    },
    projects: {
      title: "PROJECTS",
      chapter: "CHAPTER 03",
      setting: "WORK LOG // PROJECT RECORDS",
      entries: [
        ...profile.projects.map((project) => ({
          speaker: profile.fullName,
          text: `${project.name}. ${project.description}`,
          project: {
            status: project.status,
            technologies: project.technologies,
          },
        })),
        {
          speaker: profile.fullName,
          text: "A small record of the work in progress and the work completed.",
          choices: [
            { label: "Continue to contact", nextScene: "contact" },
            { label: "Review skills", nextScene: "skills" },
            { label: "About me", nextScene: "personal-information" },
            { label: "Choose another topic", nextScene: "introduction" },
          ],
        },
      ],
    },
    contact: {
      title: "COMMUNICATION",
      chapter: "CHAPTER 04",
      setting: "CONTACT DIRECTORY // LOCAL PROFILE",
      entries: [
        {
          speaker: profile.fullName,
          text: profile.communicationDescription,
          contacts: profile.socialLinks,
        },
        {
          speaker: "SYSTEM",
          text: "End of transmission. Continue to the credits, or revisit a topic.",
          choices: [
            { label: "Continue to credits", nextScene: "ending" },
            { label: "Review projects", nextScene: "projects" },
            { label: "About me", nextScene: "personal-information" },
            { label: "Choose another topic", nextScene: "introduction" },
          ],
        },
      ],
    },
    ending: {
      title: "END OF STORY",
      chapter: "CREDITS",
      setting: "SESSION COMPLETE",
      entries: [],
    },
  };
}
