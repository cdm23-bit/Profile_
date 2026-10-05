"use client";

import { useEffect, useState } from "react";

const navigation = [
  { title: "HOME", id: "home" },
  { title: "PERSONAL INFO", id: "personal-info" },
  { title: "SKILLS", id: "skills" },
  { title: "PROJECTS", id: "projects" },
  { title: "CONTACT", id: "contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".scroll-container");

    if (!container) return;

    const sections = container.querySelectorAll(".page-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: container, threshold: 0.55 },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (container.scrollTop > 20) setHasEntered(true);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className={`main-nav ${hasEntered ? "nav-visible" : ""}`}>
      <div className="nav-system-label">
        <span>PROFILE NAVIGATION</span>
        <span>SYSTEM // 001_2026</span>
      </div>
      <div className="nav-items">
        {navigation.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
            onClick={() => scrollToSection(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
