import { Hat } from "@/features/landingPage/components/landingPageShortcuts/assets/hat";
import { ShuttleSvg } from "@/features/landingPage/components/landingPageShortcuts/assets/shuttle";
import { TroubleshootSvg } from "@/features/landingPage/components/landingPageShortcuts/assets/troubleshoot";
import { NavlinksType } from "@/types/types";
import { FaGithub } from "react-icons/fa";

export const socialMedia = {
  GITHUB: {
    name: "GitHub",
    url: "https://github.com/stianlars1/react-code-preview",
    Icon: FaGithub,
  },
};

export const navLinks: NavlinksType = {
  INTRODUCTION: {
    name: "Introduction",
    title: "React code preview",
    url: "/",
    description: "Learn more about React code preview",
  },
  INSTALLATION: {
    name: "Installation",
    url: "/installation",
    title: "Get started",
    description: "Learn how to install React code preview",
    assets: {
      imagePath: "/assets/landingPage/shuttle.png",
      Svg: ShuttleSvg,
      widthAndHeight: 96,
    },
  },
  HOW_TO: {
    name: "Usage",
    url: "/usage",
    title: "Usage",
    description: "Get started with React code preview",
    assets: {
      imagePath: "/assets/landingPage/shuttle.png",
      Svg: Hat,
      widthAndHeight: 96,
    },
  },

  TROUBLESHOOT: {
    name: "Troubleshoot",
    url: "/troubleshoot",
    title: "Troubleshoot",
    description: "Troubleshoot common issues",
    assets: {
      imagePath: "/assets/landingPage/shuttle.png",
      Svg: TroubleshootSvg,
      widthAndHeight: 96,
    },
  },
};
