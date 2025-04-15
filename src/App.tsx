import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="page-wrapper flex h-screen items-center justify-center font-sans select-none">
      <div className="min-w-sm overflow-hidden bg-white p-8 shadow-xl">
        <SignIn />
      </div>
    </div>
  );
}

export default App;
