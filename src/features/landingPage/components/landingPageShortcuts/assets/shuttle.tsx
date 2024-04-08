"use client";
import { useTheme } from "@/hooks/useTheme";
import { ReactElement, RefObject, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
export const ShuttleSvg = ({
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

  // #85c0ff
  const color = useTheme().theme === "dark" ? "#85c0ff" : "#7c3aed";
  const secondaryColor = "#a1a1aa";
  const UniqueId = uuid();

  useEffect(() => {
    if (cardRef?.current && cursor?.x && cursor?.y) {
      const cardRec = cardRef.current.getBoundingClientRect();
      const cxPercent = (cursor.x / cardRec.width) * 100;
      const cyPercent = (cursor.y / cardRec.height) * 100;
      setGradientCenter({ cx: `${cxPercent}%`, cy: `${cyPercent}%` });
    }
  }, [cardRef, cursor]);
  return (
    <svg
      viewBox="0 0 24 24"
      width={widthAndHeight}
      height={widthAndHeight}
      xmlns="http://www.w3.org/2000/svg"
      className="shuttle-svg"
      key={cardRef?.current?.id}
    >
      <defs>
        <radialGradient
          id={`shuttleGradient`}
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
        stroke={`url(#shuttleGradient`}
        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
};
