import { GridProps } from "@/types/types";
import "./css/gridMain.css";

export const GridMain = ({ children }: GridProps) => {
  return <main className="grid-container__main">{children}</main>;
};
