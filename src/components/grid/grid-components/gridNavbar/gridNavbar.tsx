import { FaGithub } from "react-icons/fa";

import { HamburgerMenu } from "@/components/hamburger/hamburger";
import { Icon } from "@/components/ui/icon/icon";
import { socialMedia } from "@/content/content";
import { iconSize } from "@/utils/utils";
import "./css/gridNavbar.css";
export const GridNavbar = () => {
  return (
    <div className="grid-container__navbar navbar">
      {/* <Image src="/logo.svg" alt="logo" /> */}
      <HamburgerMenu />

      <nav className="grid-container__navbar__nav navbar__">
        <Icon>
          <a href={socialMedia.GITHUB.url}>
            <FaGithub fontWeight={200} size={iconSize} />
          </a>
        </Icon>
      </nav>
    </div>
  );
};
