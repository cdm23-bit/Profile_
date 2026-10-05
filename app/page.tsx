import AmbientBackground from "@/app/components/ambient-background";
import Navigation from "@/app/components/navigation";
import {
  AboutSection,
  CommunicationSection,
  Footer,
  HomeSection,
  ProjectsSection,
  SkillsSection,
} from "@/app/components/profile-sections";
import { getProfileData } from "@/lib/profile-data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const profile = await getProfileData();

  return (
    <main className="site-shell">
      <AmbientBackground />
      <Navigation />
      <div className="scroll-container">
        <HomeSection />
        <AboutSection profile={profile} />
        <SkillsSection skills={profile.skills} />
        <ProjectsSection projects={profile.projects} />
        <CommunicationSection profile={profile} />
        <Footer />
      </div>
    </main>
  );
}
