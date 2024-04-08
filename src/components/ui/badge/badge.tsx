import { ReactElement, ReactNode } from "react";
import "./css/badge.css";
export const Badge = ({
  children,
  variant,
}: {
  children: ReactElement | ReactNode;
  variant: "primary" | "secondary" | "muted" | "outlined";
}) => {
  return <div className={`badge badge-${variant}`}>{children}</div>;
};
