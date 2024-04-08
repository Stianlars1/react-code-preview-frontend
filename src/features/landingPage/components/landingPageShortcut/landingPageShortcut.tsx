"use client";
import { NavlinkType } from "@/types/types";
import Link from "next/link";
import { useRef, useState } from "react";

export const LandingPageShortcut = ({ value }: { value: NavlinkType }) => {
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMoveMouse = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (cardRef.current !== null) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursor({ x, y });
    }
  };

  const SvgAsset = value.assets?.Svg;
  const widthAndHeight = value.assets?.widthAndHeight;
  const showIllustrations = !!SvgAsset && !!widthAndHeight;

  return (
    <Link
      ref={cardRef}
      key={value.name}
      className="landing-page-shortcuts__ul__card"
      href={value.url}
      onMouseEnter={() => setIsMouseOnCard(true)}
      onMouseLeave={() => setIsMouseOnCard(false)}
      onMouseMove={handleMoveMouse}
    >
      <>
        <div className="shortcut-header">
          <h2>{value.name}</h2>
          <p>{value.description}</p>
        </div>

        {showIllustrations && (
          <div
            className="landing-page-shortcuts__ul__card__assets-wrapper"
            style={{
              width: `${widthAndHeight}px`,
              height: `${widthAndHeight}px`,
            }}
          >
            {/* <Image
                src={value.assets?.imagePath || ""}
                width={widthAndHeight}
                height={widthAndHeight}
                alt="get started - shuttle icon"
              /> */}
            <SvgAsset
              widthAndHeight={widthAndHeight}
              cursor={cursor}
              cardRef={cardRef}
              mouseOnCard={isMouseOnCard}
            />
          </div>
        )}
      </>
    </Link>
  );
};
