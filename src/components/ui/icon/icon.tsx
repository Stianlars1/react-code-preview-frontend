"use client";
import { ReactElement, ReactNode } from "react";
import "./css/icon.css";

export const Icon = ({
  children,
  onClick,
  className = " ",
}: {
  children: ReactElement | ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      className={`icon-wrapper ${className}`}
    >
      {children}
    </div>
  );
};
