import { FaGithub } from "react-icons/fa";

import { HamburgerMenu } from "@/components/hamburger/hamburger";
import { socialMedia } from "@/content/content";
import { iconSize } from "@/utils/constants";
import { Button } from "@stianlarsen/react-ui-kit";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import "./css/navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        {/* <Image src="/logo.svg" alt="logo" /> */}
        <div className="title-burger-wrapper">
          <HamburgerMenu />
          <Link className="title" href={"/"}>
            <pre>
              <code className={GeistMono.className}>React UI kit</code>
            </pre>
          </Link>
        </div>

        <nav className="grid-container__navbar__nav ">
          <Button variant="icon" href={socialMedia.GITHUB.url}>
            <FaGithub fontWeight={200} size={iconSize} />
          </Button>
        </nav>
      </div>
    </div>
  );
};
