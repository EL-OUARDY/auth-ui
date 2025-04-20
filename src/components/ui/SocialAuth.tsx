import GoogleIcon from "../icons/google";
import FacebookIcon from "../icons/facebook";
import XIcon from "../icons/x";
import AppleIcon from "../icons/apple";

function SocialAuth() {
  return (
    <>
      <FacebookIcon className="hover:text-foreground size-8.5 cursor-pointer rounded-full border p-1.5" />
      <GoogleIcon className="hover:text-foreground size-8.5 cursor-pointer rounded-full border p-1.5" />
      <XIcon className="hover:text-foreground size-8.5 cursor-pointer rounded-full border p-1.5" />
      <AppleIcon className="hover:text-foreground size-8.5 cursor-pointer rounded-full border p-1.5" />
    </>
  );
}

export default SocialAuth;
