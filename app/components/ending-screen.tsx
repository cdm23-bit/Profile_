import type { ProfileData } from "@/lib/profile-data";

export default function EndingScreen({
  profile,
  onRestart,
  onTitle,
}: {
  profile: ProfileData;
  onRestart: () => void;
  onTitle: () => void;
}) {
  return (
    <section className="ending-screen" aria-labelledby="ending-title">
      <div className="ending-stamp" aria-hidden="true">END<br />OF FILE</div>
      <p className="ending-eyebrow">SESSION COMPLETE // CREDITS</p>
      <h2 id="ending-title">STORY<br /><span>COMPLETE.</span></h2>
      <div className="ending-rule" />
      <p className="ending-credit">{profile.fullName}</p>
      <p className="ending-program">{profile.program}</p>
      <div className="ending-actions">
        <button className="continue-button" type="button" onClick={onRestart}>
          <span>PLAY AGAIN</span>
          <span aria-hidden="true">↻</span>
        </button>
        <button className="text-button" type="button" onClick={onTitle}>
          RETURN TO TITLE
        </button>
      </div>
    </section>
  );
}
