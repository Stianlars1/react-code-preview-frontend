import { ShuttleSvg } from "@/features/landingPage/components/landingPageShortcuts/assets/shuttle";
import { StackSvg } from "@/features/landingPage/components/landingPageShortcuts/assets/stack";
import { TroubleshootSvg } from "@/features/landingPage/components/landingPageShortcuts/assets/troubleshoot";
import { NavlinksType } from "@/types/types";
import { FaGithub } from "react-icons/fa";

export const socialMedia = {
  GITHUB: {
    name: "GitHub",
    url: "https://github.com/stianlars1/react-ui-kit",
    Icon: FaGithub,
  },
};

export const navLinks: NavlinksType = {
  INTRODUCTION: {
    name: "Introduction",
    title: "React UI Kit",
    url: "/",
    description: "Learn about the React UI Kit",
  },
  INSTALLATION: {
    name: "Installation",
    url: "/installation",
    title: "Get started",
    description: "Learn how to get started with the React UI Kit",
    assets: {
      imagePath: "/assets/landingPage/shuttle.png",
      Svg: ShuttleSvg,
      widthAndHeight: 96,
    },
  },
  // HOW_TO: {
  //   name: "Get started",
  //   url: "/get-started",
  //   title: "Get started",
  //   description: "Get started with the React UI Kit",
  //   assets: {
  //     imagePath: "/assets/landingPage/shuttle.png",
  //     Svg: Hat,
  //     widthAndHeight: 96,
  //   },
  // },
  COMPONENTS: {
    name: "Components",
    url: "/components",
    title: "Explore components",
    description: "Explore the components",
    menu: [
      { name: "Button", url: "/components/button" },
      { name: "Loaders", url: "/components/loader" },
      { name: "Cards", url: "/components/cards" },
    ],
    assets: {
      imagePath: "/assets/landingPage/shuttle.png",
      Svg: StackSvg,
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
