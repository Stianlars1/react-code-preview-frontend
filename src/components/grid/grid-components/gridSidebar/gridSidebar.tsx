import { Divider } from "@/components/ui/divider/divider";
import Link from "next/link";
import { Backdrop } from "./components/backdrop/backdrop";
import { CloseButton } from "./components/closeButton/closeButton";
import { SidebarNav } from "./components/sidebarNav/sidebarNav";
import "./css/gridSidebar.css";

export const GridSidebar = () => {
  return (
    <aside className="grid-container__sidebar sidebar">
      <CloseButton />
      <Backdrop />
      <Link href={"/"}>
        <pre>
          <code>React UI kit</code>
        </pre>
      </Link>

      <Divider />

      <SidebarNav />
    </aside>
  );
};
