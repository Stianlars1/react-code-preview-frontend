"use client";
import { IconChevron } from "@/assets/icons";
import { NavlinkType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { handleCloseNav } from "../../../utils";

export const NavlinkMenu = ({ value }: { value: NavlinkType }) => {
  const { url, name, menu } = value;

  const pathname = usePathname();
  const isActive = url === pathname || pathname.includes(url);
  const isHighlighted = url !== pathname && pathname.includes(url);
  const [menuOpen, setMenuOpen] = useState(url === pathname);

  const collapsed = menu && menuOpen;
  // const collapsed = menu && ((menuOpen && !isActive) || isActive);

  const liClassName = `navlink-menu ${isActive ? "navlink-menu-active" : ""} ${
    isHighlighted ? "navlink-menu-highlighted" : " "
  } ${menuOpen ? "navlink-menu-open" : ""}`;

  useEffect(() => {
    if (isActive) {
      setMenuOpen(true);
    }
  }, [isActive]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuLickClick = () => {
    handleCloseNav();
  };

  return (
    <li className={liClassName}>
      <div className="navlink-menu__link-wrapper">
        <Link className="" key={url} onClick={handleMenuClick} href={url}>
          {name}
        </Link>{" "}
        <IconChevron
          size={16}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      </div>

      {collapsed && (
        <>
          <ul className="navlink-menu__ul">
            {menu.map((item, index: number) => {
              const isMenuActive = item.url === pathname;
              const menuLiClassname = `navlink-menu__ul__link ${
                isMenuActive ? " navlink-menu-active__ul__link-active " : ""
              } `;
              return (
                <Link
                  className={menuLiClassname}
                  key={item.url}
                  href={item.url}
                  onClick={handleMenuLickClick}
                  style={{ animationDelay: `${index * 35}ms` }}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </>
      )}
    </li>
  );
};
