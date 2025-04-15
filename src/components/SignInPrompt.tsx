import Button from "./ui/button";

function SignInPrompt() {
  return (
    <div className="flex w-xs flex-col items-center justify-center gap-4 px-8 text-white">
      <h3 className="text-5xl">Welcome Back!</h3>
      <p className="text-left text-lg">
        Already have an account? Log in by clicking the button below. Get access
        to all your saved preferences and exclusive content.
      </p>
      <Button className="px-6 uppercase" variant="outline">
        Login
      </Button>
    </div>
  );
}

export default SignInPrompt;
