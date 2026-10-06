import type { SceneId } from "@/data/visual-novel-script";

export default function SceneBackground({ scene }: { scene: SceneId }) {
  return (
    <div className={`scene-background scene-background--${scene}`} aria-hidden="true">
      <div className="scene-landscape" />
      <div className="scene-grid" />
      <div className="scene-vignette" />
      <div className="scene-crosshair scene-crosshair--one" />
      <div className="scene-crosshair scene-crosshair--two" />
    </div>
  );
}
