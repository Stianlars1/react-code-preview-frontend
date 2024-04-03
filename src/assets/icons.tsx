import { iconSize } from "@/utils/utils";

export const IconHamburger = ({ size = iconSize }: { size?: number }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
    </svg>
  );
};