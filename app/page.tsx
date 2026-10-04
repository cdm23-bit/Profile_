"use client";

import { useEffect, useState } from "react";

const navigation = [
  { title: "HOME", id: "home" },
  { title: "PERSONAL INFO", id: "personal-info" },
  { title: "SKILLS", id: "skills" },
  { title: "PROJECTS", id: "projects" },
  { title: "CONTACT", id: "contact" },
];

// ============================================================
// START: MOTHERBOARD BACKGROUND
// ============================================================

function SystemNetwork() {
  return (
    <svg
      className="system-svg"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="board-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(230,227,220,0.035)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      <rect width="1600" height="900" fill="url(#board-grid)" />

      {/* ======================================================
          START: PCB TRACE SYSTEM
          ====================================================== */}

      <g className="board-traces">
        <path d="M 0 115 H 170 V 180 H 330" />
        <path d="M 0 330 H 110 V 260 H 250 V 220 H 430" />
        <path d="M 0 680 H 180 V 610 H 350 V 540 H 500" />

        <path d="M 170 0 V 115" />
        <path d="M 330 180 V 80 H 520 V 0" />
        <path d="M 250 220 V 390 H 390 V 450" />

        <path d="M 430 220 H 620 V 150 H 780" />
        <path d="M 500 540 H 650 V 470 H 820" />
        <path d="M 350 610 V 760 H 600" />

        <path d="M 780 150 V 70 H 980 V 0" />
        <path d="M 820 470 H 950 V 390 H 1120" />
        <path d="M 600 760 H 800 V 680 H 940" />

        <path d="M 1120 390 H 1270 V 300 H 1450 V 220 H 1600" />
        <path d="M 940 680 H 1100 V 590 H 1240" />
        <path d="M 1240 590 H 1390 V 510 H 1600" />

        <path d="M 980 0 V 100 H 1150 V 170 H 1320" />
        <path d="M 1320 170 V 90 H 1480 V 0" />

        <path d="M 1450 300 V 420 H 1530 V 520 H 1600" />
        <path d="M 1270 300 V 430 H 1170 V 510" />
      </g>

      {/* ======================================================
          END: PCB TRACE SYSTEM
          ====================================================== */}

      {/* ======================================================
          START: SECONDARY TRACES
          ====================================================== */}

      <g className="board-secondary">
        <path d="M 80 115 H 170" />
        <path d="M 170 180 H 220" />
        <path d="M 330 180 H 390" />

        <path d="M 110 330 V 380 H 180" />
        <path d="M 250 260 H 300" />

        <path d="M 430 220 V 290 H 500" />
        <path d="M 620 150 V 100 H 680" />

        <path d="M 650 470 V 410 H 710" />
        <path d="M 500 540 V 490 H 550" />

        <path d="M 600 760 V 820 H 700" />
        <path d="M 800 680 V 740 H 850" />

        <path d="M 950 390 V 330 H 1010" />
        <path d="M 1120 390 V 450 H 1180" />

        <path d="M 1240 590 V 650 H 1300" />
        <path d="M 1390 510 V 450 H 1450" />

        <path d="M 1320 170 H 1390 V 210" />
        <path d="M 1450 300 H 1510" />
      </g>

      {/* ======================================================
          END: SECONDARY TRACES
          ====================================================== */}

      {/* ======================================================
          START: ORANGE ACTIVE TRACES
          ====================================================== */}

      <g className="board-accent-traces">
        <path d="M 0 115 H 170 V 180 H 330" />
        <path d="M 430 220 H 620 V 150 H 780" />
        <path d="M 820 470 H 950 V 390 H 1120" />
        <path d="M 1120 390 H 1270 V 300 H 1450" />
        <path d="M 940 680 H 1100 V 590 H 1240" />
      </g>

      {/* ======================================================
          END: ORANGE ACTIVE TRACES
          ====================================================== */}

      {/* ======================================================
          START: CONNECTION NODES
          ====================================================== */}

      <g className="board-nodes">
        <circle cx="170" cy="115" r="5" />
        <circle cx="330" cy="180" r="5" />
        <circle cx="110" cy="330" r="5" />
        <circle cx="250" cy="220" r="5" />

        <circle cx="430" cy="220" r="5" />
        <circle cx="620" cy="150" r="5" />
        <circle cx="780" cy="150" r="5" />

        <circle cx="500" cy="540" r="5" />
        <circle cx="650" cy="470" r="5" />
        <circle cx="820" cy="470" r="5" />

        <circle cx="950" cy="390" r="5" />
        <circle cx="1120" cy="390" r="5" />
        <circle cx="1270" cy="300" r="5" />

        <circle cx="940" cy="680" r="5" />
        <circle cx="1100" cy="590" r="5" />
        <circle cx="1240" cy="590" r="5" />

        <circle cx="1450" cy="300" r="5" />
        <circle cx="1530" cy="520" r="5" />
      </g>

      {/* ======================================================
          END: CONNECTION NODES
          ====================================================== */}

      {/* ======================================================
          START: COMPONENT FOOTPRINTS
          ====================================================== */}

      <g className="board-components">
        <rect x="205" y="135" width="50" height="50" />
        <rect x="595" y="125" width="50" height="50" />
        <rect x="925" y="365" width="50" height="50" />
        <rect x="1215" y="565" width="50" height="50" />
        <rect x="1425" y="275" width="50" height="50" />
      </g>

      {/* ======================================================
          END: COMPONENT FOOTPRINTS
          ====================================================== */}
    </svg>
  );
}

// ============================================================
// END: MOTHERBOARD BACKGROUND
// ============================================================

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [hasEntered, setHasEntered] = useState(false);

  // ============================================================
  // START: SECTION OBSERVER
  // ============================================================

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
      {
        root: container,
        threshold: 0.55,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ============================================================
  // END: SECTION OBSERVER
  // ============================================================

  // ============================================================
  // START: AUTO SHOW NAVIGATION
  // ============================================================

  useEffect(() => {
    const container = document.querySelector(".scroll-container");

    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 20) {
        setHasEntered(true);
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ============================================================
  // END: AUTO SHOW NAVIGATION
  // ============================================================

  // ============================================================
  // START: NAVIGATION FUNCTIONS
  // ============================================================

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const enterProfile = () => {
    setHasEntered(true);
    scrollToSection("personal-info");
  };

  // ============================================================
  // END: NAVIGATION FUNCTIONS
  // ============================================================

  return (
    <main className="site-shell">
      <div className="mechanical-bg">
        <SystemNetwork />
      </div>

      {/* ========================================================
          START: NAVIGATION
          ======================================================== */}

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

      {/* ========================================================
          END: NAVIGATION
          ======================================================== */}

      <div className="scroll-container">

        {/* ======================================================
            START: HOME SECTION
            ====================================================== */}

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

            <button className="explore-button" onClick={enterProfile}>
              <span className="explore-button-line" />
              <span className="explore-button-text">EXPLORE</span>
              <span className="explore-button-arrow">→</span>
              <span className="explore-button-line" />
            </button>
          </div>
        </section>

        {/* ======================================================
            END: HOME SECTION
            ====================================================== */}

        {/* ======================================================
            START: PERSONAL INFO SECTION
            ====================================================== */}

        <section
          id="personal-info"
          className="page-section personal-info-section"
        >
          <div className="personal-layout">

            {/* ==================================================
                START: IDENTITY AREA
                ================================================== */}

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
                    <img src="/profile1.jpg" alt="test-profile" />

                    <div className="profile-id">
                      ID 241-0469
                    </div>
                  </div>

                  <div className="frame-corner frame-corner-one" />
                  <div className="frame-corner frame-corner-two" />
                  <div className="frame-corner frame-corner-three" />
                  <div className="frame-corner frame-corner-four" />
                </div>

                <div className="identity-name">
                  <h1>
                    CHRISTIAN DAVE
                    <br />
                    MAINIT
                  </h1>

                  <p>BS INFORMATION TECHNOLOGY</p>
                </div>
              </div>

              <div className="vertical-label">
                PROFILE / INITIALIZATION
              </div>
            </div>

            {/* ==================================================
                END: IDENTITY AREA
                ================================================== */}

            {/* ==================================================
                START: ABOUT ME AREA
                ================================================== */}

            <div className="about-me-box">
              <div className="box-heading">
                <span>ABOUT ME</span>
                <span>001</span>
              </div>

              <p>
                An Information Technology student focused on
                developing practical skills in software and web
                development.
              </p>
            </div>

            {/* ==================================================
                END: ABOUT ME AREA
                ================================================== */}

            {/* ==================================================
                START: INTERESTS AREA
                ================================================== */}

            <div className="interests-box">
              <div className="box-heading">
                <span>INTERESTS</span>
                <span>002</span>
              </div>

              <div className="interest-grid">
                <span>
                  <b>01</b> GAMES
                </span>

                <span>
                  <b>02</b> TECHNOLOGY
                </span>

                <span>
                  <b>03</b> ANIME
                </span>

                <span>
                  <b>04</b> ETC
                </span>
              </div>
            </div>

            {/* ==================================================
                END: INTERESTS AREA
                ================================================== */}

            {/* ==================================================
                START: QUOTE AREA
                ================================================== */}

            <div className="quote-area">
              <div className="box-heading">
                <span>PERSONAL NOTE</span>
                <span>003</span>
              </div>

              <div className="quote-content">
                <span className="description-marker" />

                <q>
                  Born too late to explore Earth.
                  <br />
                  Born too late to explore the universe.
                  <br />
                  Born just in time to explore the internet.
                </q>
              </div>
            </div>

            {/* ==================================================
                END: QUOTE AREA
                ================================================== */}

          </div>
        </section>

        {/* ======================================================
            END: PERSONAL INFO SECTION
            ====================================================== */}

        {/* ======================================================
            START: SKILLS SECTION
            ====================================================== */}

        <section id="skills" className="page-section">
          <div className="section-content skills-content">
            <div className="skills-panel">

              <div className="skills-heading">
                <div>
                  <div className="eyebrow">
                    TECHNICAL PROFICIENCY
                  </div>

                  <h2>SKILLS</h2>
                </div>

                <span className="skills-heading-marker">
                  001
                </span>
              </div>

              <div className="skill-bars">

                <div className="skill-bar-row">
                  <span>JAVA</span>

                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: "55%" }}
                    />
                  </div>

                  <span className="skill-value">MID</span>
                </div>

                <div className="skill-bar-row">
                  <span>HTML</span>

                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: "76%" }}
                    />
                  </div>

                  <span className="skill-value">HIGH</span>
                </div>

                <div className="skill-bar-row">
                  <span>CSS</span>

                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: "68%" }}
                    />
                  </div>

                  <span className="skill-value">HIGH</span>
                </div>

                <div className="skill-bar-row">
                  <span>PHP</span>

                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: "50%" }}
                    />
                  </div>

                  <span className="skill-value">MID</span>
                </div>

                <div className="skill-bar-row">
                  <span>JAVASCRIPT</span>

                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: "32%" }}
                    />
                  </div>

                  <span className="skill-value">BASIC</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ======================================================
            END: SKILLS SECTION
            ====================================================== */}

        {/* ======================================================
            START: PROJECTS SECTION
            ====================================================== */}

        <section id="projects" className="page-section">
          <div className="section-content projects-content">
            <div className="project-grid">

              <article className="project-box">
                <div className="project-number">01</div>

                <div className="project-body">
                  <div className="eyebrow">
                    SYSTEM PROJECT
                  </div>

                  <h3>
                    DONUT BUSINESS MANAGEMENT SYSTEM
                  </h3>

                  <p>
                    A web-based system for managing a student
                    donut business, including inventory,
                    reservations, sales, remaining stock, and
                    demand tracking.
                  </p>

                  <div className="tech-list">
                    <span>PHP</span>
                    <span>MYSQL</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                  </div>
                </div>
              </article>

              <article className="project-box">
                <div className="project-number">02</div>

                <div className="project-body">
                  <div className="eyebrow">
                    WEB PROJECT
                  </div>

                  <h3>PERSONAL PROFILE</h3>

                  <p>
                    A personal profile website presenting
                    personal information, skills, projects,
                    interests, and contact information through
                    a technical interface design.
                  </p>

                  <div className="tech-list">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JAVASCRIPT</span>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* ======================================================
            END: PROJECTS SECTION
            ====================================================== */}

        {/* ======================================================
            START: CONTACT SECTION
            ====================================================== */}

        <section id="contact" className="page-section">
          <div className="section-content contact-content">

            <div className="contact-main">
              <div>
                <div className="eyebrow">
                  COMMUNICATION CHANNEL
                </div>

                <h3>COMMUNICATION NODE</h3>

                <p>
                  Contact information for communication,
                  collaboration, and project-related inquiries.
                </p>
              </div>
            </div>

            <div className="contact-box">
              <div className="box-heading">
                <span>CONTACT DATA</span>
              </div>

              <div className="contact-row">
                <span>EMAIL</span>
                <strong>chr1st14nd4v323@gmail.com</strong>
              </div>

              <div className="contact-row">
                <span>PHONE</span>
                <strong>09069565428</strong>
              </div>

              <div className="contact-row">
                <span>FACEBOOK</span>
                <strong>ChristianDave Namuhe Mainit</strong>
              </div>
            </div>

          </div>
        </section>

        {/* ======================================================
            END: CONTACT SECTION
            ====================================================== */}

        {/* ======================================================
            START: FOOTER
            ====================================================== */}

        <footer className="site-footer">
          <span>SYSTEM ONLINE</span>
          <span>PROFILE DATABASE // ACCESS LEVEL 01</span>
        </footer>

        {/* ======================================================
            END: FOOTER
            ====================================================== */}

      </div>
    </main>
  );
}