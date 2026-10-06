"use client";

export default function ExploreButton() {
  const enterProfile = () => {
    document.getElementById("personal-info")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button className="explore-button" onClick={enterProfile}>
      <span className="explore-button-line" />
      <span className="explore-button-text">EXPLORE</span>
      <span className="explore-button-arrow">→</span>
      <span className="explore-button-line" />
    </button>
  );
}
