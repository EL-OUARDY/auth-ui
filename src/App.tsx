import ForgotPassword from "./components/ForgotPassword";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="page-wrapper flex h-screen items-center justify-center font-sans select-none">
      <div className="w-sm overflow-hidden bg-white p-8 shadow-xl">
        <SignIn />
        {/* <SignUp /> */}
        {/* <ForgotPassword /> */}
      </div>
    </div>
  );
}

export default App;
