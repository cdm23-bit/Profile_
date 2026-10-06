import Image from "next/image";

export default function CharacterPortrait({
  name,
  active,
}: {
  name: string;
  active: boolean;
}) {
  return (
    <figure
      className={`character-portrait${active ? " is-active" : ""}`}
      aria-label={`${name} profile character`}
    >
      <div className="portrait-art">
        <Image
          src="/profile.jpg"
          alt="Illustrated character artwork from the existing profile assets"
          width={720}
          height={720}
          sizes="(max-width: 680px) 42vw, 300px"
          priority
        />
        <span className="portrait-scanline" aria-hidden="true" />
        <span className="portrait-corner portrait-corner--top" aria-hidden="true" />
        <span className="portrait-corner portrait-corner--bottom" aria-hidden="true" />
      </div>
      <figcaption className="portrait-caption">
        <span className="portrait-status">
          <i aria-hidden="true" />
          {active ? "SPEAKING" : "STANDBY"}
        </span>
        <strong>{name}</strong>
        <span>PROFILE / 001</span>
      </figcaption>
    </figure>
  );
}
