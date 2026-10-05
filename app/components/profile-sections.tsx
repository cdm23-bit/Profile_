import {
  IconBrandFacebook,
  IconBrandGithub,
  IconLink,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import type { ProfileData } from "@/lib/profile-data";
import ExploreButton from "./explore-button";

type Profile = ProfileData;
type Skill = Profile["skills"][number];
type Project = Profile["projects"][number];
type SocialLink = Profile["socialLinks"][number];

export function HomeSection() {
  return (
    <section id="home" className="page-section home-section">
      <div className="home-decoration home-decoration-left">
        <span className="home-line-long" />
        <span className="home-line-short" />
        <span className="home-node" />
      </div>
      <div className="home-decoration home-decoration-right">
        <span className="home-line-short" />
        <span className="home-line-long" />
        <span className="home-node" />
      </div>
      <div className="home-content-center">
        <div className="welcome-frame">
          <div className="welcome-line" />
          <h1>
            WELCOME TO MY
            <br />
            PROFILE PAGE
          </h1>
          <div className="welcome-line" />
        </div>
        <ExploreButton />
      </div>
    </section>
  );
}

export function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="personal-info"
      className="page-section personal-info-section"
    >
      <div className="personal-layout">
        <div className="identity-area">
          <div className="identity-side-line" />
          <div className="identity-side-marker" />
          <div className="identity-label">
            <span>IDENTITY</span>
            <span className="identity-label-line" />
          </div>
          <div className="identity-main">
            <div className="profile-frame">
              <div className="profile-image">
                <img src={profile.photoUrl} alt={profile.fullName} />
                <div className="profile-id">{profile.studentId}</div>
              </div>
              <div className="frame-corner frame-corner-one" />
              <div className="frame-corner frame-corner-two" />
              <div className="frame-corner frame-corner-three" />
              <div className="frame-corner frame-corner-four" />
            </div>
            <div className="identity-name">
              <h1>{profile.fullName}</h1>
              <p>{profile.program}</p>
            </div>
          </div>
          <div className="vertical-label">PROFILE / INITIALIZATION</div>
        </div>

        <div className="about-me-box">
          <div className="box-heading">
            <span>ABOUT ME</span>
            <span>001</span>
          </div>
          <p>{profile.about}</p>
        </div>

        <div className="interests-box">
          <div className="box-heading">
            <span>INTERESTS</span>
            <span>002</span>
          </div>
          <div className="interest-grid">
            {profile.interests.map((interest, index) => (
              <span key={interest.id}>
                <b>{String(index + 1).padStart(2, "0")}</b> {interest.label}
              </span>
            ))}
          </div>
        </div>

        <div className="quote-area">
          <div className="box-heading">
            <span>PERSONAL NOTE</span>
            <span>003</span>
          </div>
          <div className="quote-content">
            <span className="description-marker" />
            <q>{profile.personalNote}</q>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div className="skill-bar-row">
      <span>{skill.name}</span>
      <div
        className="skill-track"
        role="meter"
        aria-label={`${skill.name} mastery`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.mastery}
      >
        <div className="skill-fill" style={{ width: `${skill.mastery}%` }} />
      </div>
      <span className="skill-value">{skill.mastery}%</span>
    </div>
  );
}

export function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills" className="page-section">
      <div className="section-content skills-content">
        <div className="skills-panel">
          <div className="skills-heading">
            <div>
              <div className="eyebrow">TECHNICAL PROFICIENCY</div>
              <h2>SKILLS</h2>
            </div>
            <span className="skills-heading-marker">001</span>
          </div>
          <div className="skill-bars">
            {skills.map((skill) => (
              <SkillBar key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-box">
      <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
      <div className="project-body">
        <div className="project-meta">
          <div className="eyebrow">{project.category}</div>
          <span className="project-status">{project.status}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.technologies.map((technology) => (
            <span key={technology.id}>{technology.name}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="page-section">
      <div className="section-content projects-content">
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const iconProps = { size: 20, stroke: 1.7, "aria-hidden": true };

  switch (icon.toLowerCase()) {
    case "facebook":
      return <IconBrandFacebook {...iconProps} />;
    case "github":
      return <IconBrandGithub {...iconProps} />;
    case "mail":
    case "email":
      return <IconMail {...iconProps} />;
    case "phone":
      return <IconPhone {...iconProps} />;
    default:
      return <IconLink {...iconProps} />;
  }
}

function SocialCard({ link }: { link: SocialLink }) {
  return (
    <a
      className="contact-link"
      href={link.href}
      target={link.opensNewTab ? "_blank" : undefined}
      rel={link.opensNewTab ? "noopener noreferrer" : undefined}
    >
      <SocialIcon icon={link.icon} />
      <span className="contact-link-copy">
        <span className="contact-link-name">{link.label}</span>
        <span className="contact-link-value">{link.value}</span>
      </span>
    </a>
  );
}

export function CommunicationSection({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="page-section">
      <div className="section-content contact-content">
        <div className="contact-main">
          <div>
            <div className="eyebrow">COMMUNICATION CHANNEL</div>
            <h3>COMMUNICATION NODE</h3>
            <p>{profile.communicationDescription}</p>
          </div>
        </div>
        <div className="contact-box">
          <div className="box-heading">
            <span>CONTACT DATA</span>
          </div>
          <div className="contact-links">
            {profile.socialLinks.map((link) => (
              <SocialCard key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <span>SYSTEM ONLINE</span>
      <span>PROFILE DATABASE // ACCESS LEVEL 01</span>
    </footer>
  );
}
