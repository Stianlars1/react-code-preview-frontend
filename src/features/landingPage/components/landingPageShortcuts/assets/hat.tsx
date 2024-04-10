"use client";
import { useTheme } from "@/hooks/useTheme";
import { ReactElement, RefObject, useEffect, useState } from "react";

export const Hat = ({
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
  const color = useTheme().theme === "dark" ? "#22c55e" : "#7c3aed";
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
      className="shuttle-svg"
    >
      <defs>
        <radialGradient
          id={`hat-gradient`}
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
        stroke={`url(#hat-gradient`}
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  );
};
