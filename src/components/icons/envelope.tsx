interface Props {
  className?: string;
}

function EnvelopeIcon({ className, ...props }: Props) {
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.804 8.353c-.28 2.603-.268 5.605.122 8.198a3.14 3.14 0 0 0 2.831 2.66l1.51.13c3.15.274 6.316.274 9.466 0l1.51-.13a3.14 3.14 0 0 0 2.831-2.66c.39-2.593.402-5.595.122-8.198a30 30 0 0 0-.122-.904a3.14 3.14 0 0 0-2.831-2.66l-1.51-.13a54.7 54.7 0 0 0-9.465 0l-1.51.13a3.14 3.14 0 0 0-2.832 2.66q-.068.452-.122.904m4.593-2.2a53 53 0 0 1 9.205 0l1.51.131a1.64 1.64 0 0 1 1.479 1.389l.034.233l-5.561 3.09a4.25 4.25 0 0 1-4.128 0l-5.561-3.09l.034-.233a1.64 1.64 0 0 1 1.478-1.389zM19.808 9.52a29 29 0 0 1-.217 6.807a1.64 1.64 0 0 1-1.478 1.389l-1.51.131a53 53 0 0 1-9.206 0l-1.51-.131a1.64 1.64 0 0 1-1.478-1.389a29 29 0 0 1-.218-6.807l5.016 2.787a5.75 5.75 0 0 0 5.585 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default EnvelopeIcon;
