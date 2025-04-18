interface Props {
  className?: string;
}
function ArrowLeftIcon({ className, ...props }: Props) {
  return (
    <svg
      {...props}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21 11H6.83l3.58-3.59L9 6l-6 6l6 6l1.41-1.41L6.83 13H21z"
      ></path>
    </svg>
  );
}

export default ArrowLeftIcon;
