export interface GridProps {
  children: React.ReactNode;
}

export interface NavlinkType {
  name: string;
  url: string;
}
export interface NavlinksType {
  [key: string]: NavlinkType;
}
