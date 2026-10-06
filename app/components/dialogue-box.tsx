import type { DialogueEntry, VNScene } from "@/data/visual-novel-script";

export default function DialogueBox({
  entry,
  scene,
  visibleText,
  isTyping,
  sceneFinished,
  onContinue,
}: {
  entry: DialogueEntry;
  scene: VNScene;
  visibleText: string;
  isTyping: boolean;
  sceneFinished: boolean;
  onContinue: () => void;
}) {
  return (
    <section className="dialogue-panel" aria-label="Visual novel dialogue">
      <div className="dialogue-topline">
        <span>{scene.chapter} <i aria-hidden="true">/</i> {scene.title}</span>
        <span className="dialogue-state">
          <i aria-hidden="true" />
          {isTyping ? "RECEIVING" : sceneFinished ? "CHOICE AVAILABLE" : "READY"}
        </span>
      </div>

      <div className="dialogue-content">
        <div className="dialogue-copy">
          <span className="speaker-name">{entry.speaker}</span>
          <button
            className="dialogue-text-button"
            type="button"
            onClick={onContinue}
            aria-label={`${entry.speaker}: ${entry.text}. ${isTyping ? "Finish dialogue" : "Continue"}`}
          >
            <span className="dialogue-text">
              {visibleText}
              {isTyping && <span className="typing-caret" aria-hidden="true" />}
            </span>
          </button>

          {entry.skill && !isTyping && (
            <div className="skill-readout" aria-label={`${entry.skill.name}: ${entry.skill.mastery}%`}>
              <div className="skill-readout-heading">
                <span>{entry.skill.name}</span>
                <strong>{entry.skill.mastery}%</strong>
              </div>
              <div
                className="skill-readout-track"
                role="meter"
                aria-label={`${entry.skill.name} listed proficiency`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={entry.skill.mastery}
              >
                <span style={{ width: `${entry.skill.mastery}%` }} />
              </div>
            </div>
          )}

          {entry.project && !isTyping && (
            <div className="project-readout">
              <span className="project-status">{entry.project.status}</span>
              <div className="technology-list" aria-label="Technologies">
                {entry.project.technologies.map((technology) => (
                  <span key={technology.id}>{technology.name}</span>
                ))}
              </div>
            </div>
          )}

          {entry.contacts && !isTyping && (
            <div className="contact-readout">
              {entry.contacts.map((contact) => (
                <a
                  className="contact-line"
                  href={contact.href}
                  key={contact.id}
                  target={contact.opensNewTab ? "_blank" : undefined}
                  rel={contact.opensNewTab ? "noopener noreferrer" : undefined}
                >
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                  <span className="contact-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="dialogue-footer">
        <span className="advance-hint">
          <kbd>ENTER</kbd> / <kbd>SPACE</kbd> <span>TO {isTyping ? "REVEAL" : "CONTINUE"}</span>
        </span>
        {!entry.choices && (
          <button className="continue-button" type="button" onClick={onContinue}>
            <span>{isTyping ? "REVEAL LINE" : "CONTINUE"}</span>
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </section>
  );
}
