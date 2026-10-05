export default function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <svg
        className="ambient-vector"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="ambient-facets">
          <path d="M-80 160 260 0h260L180 250H-80z" />
          <path d="m1320-60 360 120v210l-500-80z" />
          <path d="m-40 700 330-180 180 40-340 270H-40z" />
          <path d="m1110 820 370-310 220 60v350h-480z" />
        </g>
        <g className="ambient-contours">
          <path d="M-50 230 220 80h190L130 310H-50" />
          <path d="m1230 30 230 65-125 165-220-36z" />
          <path d="m-20 760 290-160 130 28-250 190" />
          <path d="m1190 850 260-220 180 48" />
        </g>
        <g className="ambient-orbit">
          <path d="M1040 505a220 220 0 0 1 350-172" />
          <path d="M1408 365a220 220 0 0 1-120 355" />
          <path d="M390 420a120 120 0 0 1 195-95" />
          <path d="M600 357a120 120 0 0 1-66 194" />
        </g>
        <g className="ambient-markers">
          <path d="M1110 490h48m-24-24v48" />
          <path d="M143 590h38m-19-19v38" />
          <path d="M1360 180h28m-14-14v28" />
          <circle cx="1280" cy="478" r="4" />
          <circle cx="490" cy="610" r="3" />
        </g>
      </svg>
      <div className="ambient-grain" />
    </div>
  );
}
