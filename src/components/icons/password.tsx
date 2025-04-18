interface Props {
  className?: string;
}

function PasswordIcon({ className, ...props }: Props) {
  return (
    <svg
      {...props}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <g fill="none" stroke="currentColor">
        <path
          strokeWidth="1.5"
          d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M6 10V8a6 6 0 0 1 11.811-1.5"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 16h.009m3.982 0H12m3.991 0H16"
        ></path>
      </g>
    </svg>
  );
}

export default PasswordIcon;
