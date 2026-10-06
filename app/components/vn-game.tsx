"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ChoiceMenu from "@/app/components/choice-menu";
import CharacterPortrait from "@/app/components/character-portrait";
import DialogueBox from "@/app/components/dialogue-box";
import EndingScreen from "@/app/components/ending-screen";
import SceneBackground from "@/app/components/scene-background";
import TitleScreen from "@/app/components/title-screen";
import {
  createVisualNovelScript,
  type SceneChoice,
  type SceneId,
} from "@/data/visual-novel-script";
import type { ProfileData } from "@/lib/profile-data";

const SCENE_ORDER: SceneId[] = [
  "introduction",
  "personal-information",
  "skills",
  "projects",
  "contact",
  "ending",
];

const TYPEWRITER_INTERVAL = 22;

export default function VNGame({ profile }: { profile: ProfileData }) {
  const script = useMemo(() => createVisualNovelScript(profile), [profile]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentScene, setCurrentScene] = useState<SceneId>("introduction");
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionLock = useRef(false);

  const scene = script[currentScene];
  const currentEntry = scene.entries[dialogueIndex];
  const isEnding = currentScene === "ending";
  const isTyping =
    isPlaying && !isEnding && visibleCharacters < currentEntry.text.length;
  const sceneFinished =
    !isEnding &&
    dialogueIndex === scene.entries.length - 1 &&
    !isTyping;
  const visibleText = isEnding
    ? ""
    : currentEntry.text.slice(0, visibleCharacters);

  useEffect(() => {
    if (!isPlaying || isTransitioning || isEnding) {
      return;
    }

    const timer = window.setInterval(() => {
      setVisibleCharacters((count) =>
        Math.min(count + 1, currentEntry.text.length),
      );
    }, TYPEWRITER_INTERVAL);

    return () => window.clearInterval(timer);
  }, [currentEntry, isEnding, isPlaying, isTransitioning]);

  const moveToScene = useCallback((nextScene: SceneId) => {
    if (transitionLock.current) {
      return;
    }

    transitionLock.current = true;
    setIsTransitioning(true);
    window.setTimeout(() => {
      setCurrentScene(nextScene);
      setDialogueIndex(0);
      setVisibleCharacters(0);
      window.setTimeout(() => {
        transitionLock.current = false;
        setIsTransitioning(false);
      }, 140);
    }, 180);
  }, []);

  const startStory = useCallback(() => {
    setCurrentScene("introduction");
    setDialogueIndex(0);
    setVisibleCharacters(0);
    setIsPlaying(true);
  }, []);

  const handleContinue = useCallback(() => {
    if (!isPlaying || isTransitioning || isEnding) {
      return;
    }

    if (isTyping) {
      setVisibleCharacters(currentEntry.text.length);
      return;
    }

    if (currentEntry.choices) {
      return;
    }

    if (dialogueIndex < scene.entries.length - 1) {
      setDialogueIndex((index) => index + 1);
    }
  }, [
    currentEntry,
    dialogueIndex,
    isEnding,
    isPlaying,
    isTransitioning,
    isTyping,
    scene.entries.length,
  ]);

  const handleChoice = useCallback(
    (choice: SceneChoice) => moveToScene(choice.nextScene),
    [moveToScene],
  );

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || (event.key !== "Enter" && event.key !== " ")) {
        return;
      }

      const target = event.target;
      if (
        target instanceof HTMLElement &&
        target.closest("button, a, input, textarea, select, [contenteditable='true']")
      ) {
        return;
      }

      event.preventDefault();
      handleContinue();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleContinue, isPlaying]);

  const restartStory = () => {
    setCurrentScene("introduction");
    setDialogueIndex(0);
    setVisibleCharacters(0);
    setIsPlaying(true);
  };

  if (!isPlaying) {
    return <TitleScreen profile={profile} onStart={startStory} />;
  }

  const sceneNumber = SCENE_ORDER.indexOf(currentScene) + 1;

  return (
    <main className="vn-shell">
      <div
        className={`game-frame${isTransitioning ? " is-transitioning" : ""}`}
        data-scene={currentScene}
      >
        <header className="game-header">
          <div className="game-brand">
            <span className="brand-mark"><i aria-hidden="true" /> CDM / ARCHIVE</span>
            <span className="brand-divider" aria-hidden="true" />
            <span className="game-file-label">A PROFILE STORY</span>
          </div>
          <div className="game-status">
            <span className="status-light" aria-hidden="true" />
            <span>LOCAL STORY FILE</span>
            <span className="status-divider" aria-hidden="true">/</span>
            <span>{String(sceneNumber).padStart(2, "0")} : {String(SCENE_ORDER.length).padStart(2, "0")}</span>
          </div>
        </header>

        {isEnding ? (
          <EndingScreen
            profile={profile}
            onRestart={restartStory}
            onTitle={() => setIsPlaying(false)}
          />
        ) : (
          <>
            <section className="scene-stage" aria-label={`${scene.title} scene`}>
              <SceneBackground scene={currentScene} />
              <div className="scene-location">
                <span className="scene-location-marker" aria-hidden="true" />
                {scene.setting}
              </div>
              <div className="scene-coordinate" aria-hidden="true">
                SCENE {String(sceneNumber).padStart(2, "0")}<br />
                PROFILE / {profile.id.toUpperCase()}
              </div>
              <div className="scene-bottom-mark" aria-hidden="true">
                <span />
                SIGNAL STABLE
              </div>
              <CharacterPortrait
                name={profile.fullName}
                active={currentEntry.speaker === profile.fullName}
              />
            </section>

            <div
              className={`story-controls${!isTyping && currentEntry.choices ? " has-choices" : ""}`}
            >
              <DialogueBox
                entry={currentEntry}
                scene={scene}
                visibleText={visibleText}
                isTyping={isTyping}
                sceneFinished={sceneFinished}
                onContinue={handleContinue}
              />

              {!isTyping && currentEntry.choices && (
                <ChoiceMenu choices={currentEntry.choices} onChoose={handleChoice} />
              )}
            </div>
          </>
        )}

        <footer className="game-footer">
          <span>PROFILE DATABASE <i aria-hidden="true">/</i> ACCESS LEVEL 01</span>
          <span>CHRISTIAN DAVE MAINIT</span>
        </footer>
        <div className="transition-shutter" aria-hidden="true" />
      </div>
    </main>
  );
}
