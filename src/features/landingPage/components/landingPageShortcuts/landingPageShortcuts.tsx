import { navLinks } from "@/content/content";
import { LandingPageShortcut } from "../landingPageShortcut/landingPageShortcut";
import "./css/landingPageShortcuts.css";
export const LandingPageShortCuts = () => {
  return (
    <div className="landing-page-shortcuts">
      <ul className="landing-page-shortcuts__ul">
        {Object.entries(navLinks)
          .filter(([, value]) => value.url !== "/")
          .map(([key, value]) => (
            <LandingPageShortcut key={key} value={value} />
          ))}
      </ul>
    </div>
  );
};
