import profileData from "@/data/profile.json";

export interface ProfileInterest {
  id: string;
  label: string;
}

export interface Skill {
  id: string;
  name: string;
  mastery: number;
}

export interface ProjectTechnology {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  status: string;
  technologies: ProjectTechnology[];
}

export interface SocialLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: string;
  opensNewTab: boolean;
}

export interface ProfileData {
  id: string;
  fullName: string;
  program: string;
  studentId: string;
  photoUrl: string;
  about: string;
  personalNote: string;
  communicationDescription: string;
  interests: ProfileInterest[];
  skills: Skill[];
  projects: Project[];
  socialLinks: SocialLink[];
}

const profile: ProfileData = profileData;

export function getProfileData(): ProfileData {
  return profile;
}
