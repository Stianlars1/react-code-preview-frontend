"use client";
import { navLinks } from "@/content/content";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarNav = () => {
  const pathname = usePathname();

  console.log("\n\n\nrouter: ", pathname);
  const isActive = (pathnameArg: string) => pathnameArg === pathname;

  return (
    <nav>
      <ul>
        {Object.entries(navLinks).map(([key, value]) => {
          console.log("value: ", value);
          console.log("pathname", pathname);
          console.log("isActive(value.url)", isActive(value.url));
          return (
            <li
              key={key}
              className={isActive(value.url) ? "navlink-active" : ""}
            >
              <Link href={value.url}>{value.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
