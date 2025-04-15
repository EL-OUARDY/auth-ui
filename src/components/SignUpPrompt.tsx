import Button from "./ui/button";

function SignUpPrompt() {
  return (
    <div className="flex w-xs flex-col items-center justify-center gap-4 px-8 text-white">
      <h3 className="text-5xl">Hi There!</h3>
      <p className="text-left text-lg">
        New here? We're excited to have you join us! Create an account by
        clicking the button below and start your journey with us today.
      </p>
      <Button className="px-6 uppercase" variant="outline">
        Sign up
      </Button>
    </div>
  );
}

export default SignUpPrompt;
