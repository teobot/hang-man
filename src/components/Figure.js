import React from "react";

export default function Figure({ stage, scale }) {
  let style = {
    white: "#fff",
    black: "#000",
    stroke: 12,
  };

  return (
    <svg width="330" height="400" transform={`scale(${scale || "0.75"})`}>
      {stage >= 2 ? (
        <>
          {/* HEAD */}
          <circle cx="248" cy="110" r="40" fill={style.white} />
        </>
      ) : null}

      {stage >= 3 ? (
        <>
          {/* BODY */}
          <line
            x1="250"
            y1="145"
            x2="250"
            y2="255"
            stroke={style.white}
            strokeWidth={style.stroke}
          />
        </>
      ) : null}

      {stage >= 6 ? (
        <>
          {/* LEFT ARM */}
          <line
            x1="250"
            y1="175"
            x2="180"
            y2="205"
            stroke={style.white}
            strokeWidth={style.stroke}
          />
        </>
      ) : null}

      {stage >= 7 ? (
        <>
          {/* RIGHT ARM */}
          <line
            x1="250"
            y1="175"
            x2="320"
            y2="205"
            stroke={style.white}
            strokeWidth={style.stroke}
          />
        </>
      ) : null}

      {stage >= 4 ? (
        <>
          {/* LEFT LEG */}
          <line
            x1="250"
            y1="255"
            x2="180"
            y2="295"
            stroke={style.white}
            strokeWidth={style.stroke}
          />
        </>
      ) : null}

      {stage >= 5 ? (
        <>
          {/* RIGHT LEG */}
          <line
            x1="250"
            y1="255"
            x2="320"
            y2="295"
            stroke="white"
            strokeWidth={style.stroke}
          />
        </>
      ) : null}

      {stage >= 1 ? (
        <>
          {/* ROPE */}
          <line
            x1="248"
            y1="10"
            x2="248"
            y2="110"
            stroke={style.white}
            strokeWidth={style.stroke}
          />

          {/* TOP BAR */}
          <line
            x1={60 - style.stroke / 2}
            y1="10"
            x2={248 + style.stroke / 2}
            y2="10"
            stroke={style.white}
            strokeWidth={style.stroke}
          />

          {/* SUPPORT */}
          <line
            x1="154"
            y1="10"
            x2="60"
            y2="110"
            stroke={style.white}
            strokeWidth={style.stroke}
          />

          {/* POLE */}
          <line
            x1="60"
            y1="10"
            x2="60"
            y2="390"
            stroke={style.white}
            strokeWidth={style.stroke}
          />

          {/* BOTTOM OF POLE */}
          <line
            x1="10"
            y1="390"
            x2="110"
            y2="390"
            stroke={style.white}
            strokeWidth={style.stroke}
          />
        </>
      ) : null}
    </svg>
  );
}
