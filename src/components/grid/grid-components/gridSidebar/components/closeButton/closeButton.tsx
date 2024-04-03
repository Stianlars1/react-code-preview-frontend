"use client";
import { Icon } from "@/components/ui/icon/icon";
import { iconSize } from "@/utils/utils";
import { IoCloseOutline } from "react-icons/io5";

export const CloseButton = () => {
  const handleCloseModal = () => {
    const isOpen = document.body.getAttribute("data-nav-open");
    document.body.setAttribute("data-nav-open", String(!isOpen));
  };
  return (
    <Icon className={"close-button"} onClick={() => handleCloseModal()}>
      <IoCloseOutline size={iconSize} />
    </Icon>
  );
};
