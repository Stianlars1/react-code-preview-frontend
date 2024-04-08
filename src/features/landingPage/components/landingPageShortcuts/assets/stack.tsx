"use client";
import { useTheme } from "@/hooks/useTheme";
import { ReactElement, RefObject, useEffect, useState } from "react";

export const StackSvg = ({
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
      const cxPercent = (cursor.x / cardRec.width) * 100;
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
      className="stack-svg"
    >
      <defs>
        <radialGradient
          id={`stack-gradient`}
          gradientUnits="userSpaceOnUse"
          r={"35%"}
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
        radius={"35%"}
        stroke="url(#stack-gradient)"
        d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
      />
    </svg>
  );
};
