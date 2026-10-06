import type { SceneChoice } from "@/data/visual-novel-script";

export default function ChoiceMenu({
  choices,
  onChoose,
}: {
  choices: SceneChoice[];
  onChoose: (choice: SceneChoice) => void;
}) {
  return (
    <nav className="choice-menu" aria-label="Story choices">
      <span className="choice-heading">CHOOSE A PATH</span>
      <div className="choice-list">
        {choices.map((choice, index) => (
          <button
            className="choice-button"
            key={`${choice.nextScene}-${choice.label}`}
            onClick={() => onChoose(choice)}
          >
            <span className="choice-number">{String(index + 1).padStart(2, "0")}</span>
            <span>{choice.label}</span>
            <span className="choice-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
