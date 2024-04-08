"use client";
import { useTheme } from "@/hooks/useTheme";
import { ReactElement, RefObject, useEffect, useState } from "react";

export const TroubleshootSvg = ({
  widthAndHeight,
  cursor,
  cardRef,
  mouseOnCard,
}: {
  widthAndHeight?: number;
  mouseOnCard: boolean;
  cursor?: { x: number; y: number };
  cardRef?: RefObject<HTMLAnchorElement>;
}): ReactElement => {
  const [gradientCenter, setGradientCenter] = useState({
    cx: "50%",
    cy: "50%",
  });
  const color = useTheme().theme === "dark" ? "#516ff4" : "#7c3aed";
  const secondaryColor = "#a1a1aa";

  useEffect(() => {
    if (cardRef?.current && cursor?.x && cursor?.y) {
      const cardRec = cardRef.current.getBoundingClientRect();
      const cxPercent = (cursor.x / cardRec.width) * 100 - 25;
      const cyPercent = (cursor.y / cardRec.height) * 100;
      setGradientCenter({ cx: `${cxPercent}%`, cy: `${cyPercent}%` });
    }
  }, [cursor, cardRef]);
  return (
    <svg
      viewBox="0 0 24 24"
      width={widthAndHeight}
      height={widthAndHeight}
      xmlns="http://www.w3.org/2000/svg"
      className="components-svg-"
    >
      <defs>
        <radialGradient
          id={`troubleshoot-gradient`}
          gradientUnits="userSpaceOnUse"
          r={"50%"}
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnCard && <stop stopColor={color} />}
          <stop offset={1} stopColor={secondaryColor} />
        </radialGradient>
      </defs>

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="url(#troubleshoot-gradient)"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
      />
    </svg>
  );
};
