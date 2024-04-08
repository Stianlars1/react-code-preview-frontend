import { ReactElement, RefObject } from "react";

export interface GridProps {
  children: React.ReactNode;
}

export interface NavlinkType {
  name: string;
  url: string;
  title: string;
  description: string;
  assets?: {
    imagePath?: string;
    Svg: ({
      widthAndHeight,
      cursor,
      cardRef,
      mouseOnCard,
    }: {
      widthAndHeight: number;
      cursor: { x: number; y: number };
      cardRef: RefObject<HTMLAnchorElement>;
      mouseOnCard: boolean;
    }) => ReactElement;
    widthAndHeight: number;
  };
  menu?: {
    name: string;
    url: string;
  }[];
}
export interface NavlinksType {
  [key: string]: NavlinkType;
}
