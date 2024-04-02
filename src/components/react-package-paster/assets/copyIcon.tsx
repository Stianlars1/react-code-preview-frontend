export const CopyIcon = ({
  onClick,
  className = " ",
  showSuccessIcon = false,
}: {
  onClick: () => void;
  className?: string;
  showSuccessIcon?: boolean;
}) => {
  if (showSuccessIcon) {
    return (
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="32px"
        width="32px"
        xmlns="http://www.w3.org/2000/svg"
        className={`copy-icon ${className}`}
      >
        <path d="m12 15 2 2 4-4"></path>
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
      </svg>
    );
  }
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="1"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="32px"
      width="32px"
      xmlns="http://www.w3.org/2000/svg"
      className={`copy-icon ${className}`}
      onClick={() => onClick()}
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
    </svg>
  );
};
