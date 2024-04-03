"use client";
import { useEffect } from "react";
import "./css/backdrop.css";

export const Backdrop = () => {
  const handleCloseModal = () => {
    const isOpen = document.body.getAttribute("data-nav-open");
    document.body.setAttribute("data-nav-open", String(!isOpen));
  };

  useEffect(() => {
    // Set the data-nav-open attribute to false on initial load
    document.body.setAttribute("data-nav-open", "false");
  }, []);

  return <div className="backdrop" onClick={handleCloseModal} />;
};
