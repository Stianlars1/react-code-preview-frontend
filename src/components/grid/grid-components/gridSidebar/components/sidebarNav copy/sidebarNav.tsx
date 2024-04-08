import { navLinks } from "@/content/content";
import { NavLink } from "./components/navlink";
import { NavlinkMenu } from "./components/navlinkMenu";

export const SidebarNav = () => {
  return (
    <nav>
      <ul>
        {Object.entries(navLinks).map(([key, value]) => {
          const hasMenu = value.menu && value.menu.length > 0;
          if (hasMenu) {
            return <NavlinkMenu key={value.url} value={value} />;
          }
          return <NavLink key={value.url} value={value} />;
        })}
      </ul>
    </nav>
  );
};
