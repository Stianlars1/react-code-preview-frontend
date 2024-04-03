import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { GridNavbar } from "@/components/grid/grid-components/gridNavbar/gridNavbar";
import { GridSidebar } from "@/components/grid/grid-components/gridSidebar/gridSidebar";
import { GridContainer } from "@/components/grid/gridContainer";
import "./globals.css";

export const metadata: Metadata = {
  title: "React UI kit",
  description:
    "This is the website for the npm package react-ui-kit. It is a collection of components for building React applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-nav-open={false} className={GeistSans.className}>
        <GridContainer>
          <GridNavbar />
          {children}
          <GridSidebar />
        </GridContainer>
      </body>
    </html>
  );
}
