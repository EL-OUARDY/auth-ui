import SignIn from "./components/SignIn";
import SignInPrompt from "./components/SignInPrompt";
import SignUpPrompt from "./components/SignUpPrompt";

function App() {
  return (
    <div className="page-wrapper flex h-screen items-center justify-center font-sans select-none">
      <div className="bg-strong/70 flex w-4xl overflow-hidden shadow-md">
        <div className="flex flex-1 items-center justify-center bg-white px-8 py-32">
          <SignIn className="w-xs" />
        </div>
        <SignUpPrompt />
        {/* <SignInPrompt /> */}
      </div>
    </div>
  );
}

export default App;
