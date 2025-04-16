import { useState } from "react";
import SignIn from "./components/signin/SignIn";
import SignInPrompt from "./components/signin/SignInPrompt";
import SignUpPrompt from "./components/signup/SignUpPrompt";
import clsx from "clsx";
import Button from "./components/ui/button";
import SignUp from "./components/signup/SignUp";

type FormType = "signin" | "signup";

function App() {
  const [activeForm, setActiveForm] = useState<FormType>("signin");
  return (
    <div className="page-wrapper flex h-screen items-center justify-center font-sans select-none">
      <div className="bg-primary-background/70 flex w-4xl overflow-hidden shadow-md">
        <div className="flex h-148 flex-1 items-center justify-center bg-white px-8">
          <div className="w-xs">
            {activeForm === "signin" ? <SignIn /> : <SignUp />}
          </div>
        </div>
        <div className="flex w-xs flex-col items-center justify-center gap-4 px-8">
          {activeForm === "signin" ? <SignUpPrompt /> : <SignInPrompt />}
          <Button
            className="relative w-32 overflow-hidden p-0 uppercase"
            variant="outline"
            onClick={() =>
              setActiveForm(activeForm === "signin" ? "signup" : "signin")
            }
          >
            <span
              className={clsx(
                "absolute w-full",
                activeForm === "signin" ? "-left-32" : "left-0",
              )}
            >
              Sign in
            </span>
            <span
              className={clsx(
                "absolute w-full",
                activeForm === "signup" ? "-right-32" : "left-0",
              )}
            >
              Sign up
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
