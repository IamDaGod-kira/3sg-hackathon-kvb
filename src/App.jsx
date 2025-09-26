import "./App.css";
import bareIcon from "./assets/bare-icon.png";
import kvLogo from "./assets/kv-logo.png";
import vidyasetuLogo from "./assets/vidyasetu-logo.png";
import Login from './components/login';

function App() {
  return (<>
    <div className="min-h-screen w-full flex flex-col items-center bg-theme1-400 text-theme5-900">
      {/* Header Section */}
      <div className="w-full max-w-[1100px] flex flex-col items-center py-6 px-4">
        {/* Logos Row */}
        <div className="flex flex-row justify-center items-center gap-4 sm:gap-8 mb-3">
          <img
            src={kvLogo}
            alt="PM Shri K.V. Ballygunge"
            className="h-10 sm:h-14 md:h-20 w-auto drop-shadow-md"
          />
          <img
            src={bareIcon}
            alt="Bare Icon"
            className="h-12 sm:h-20 md:h-28 w-auto drop-shadow-lg"
          />
          <img
            src={vidyasetuLogo}
            alt="AI Vidyasetu"
            className="h-10 sm:h-14 md:h-20 w-auto drop-shadow-md"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide text-center drop-shadow-lg">
          Smart Study Schedule Generator
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-xs sm:text-sm md:text-base text-theme3-400 italic mb-6 text-center">
        A{" "}
        <a
          className="italic border-b-2 border-fuchsia-400 hover:border-fuchsia-300 transition-colors"
          href="https://www.vidyasetu.ai/"
        >
          Hackathon
        </a>{" "}
        project by{" "}
        <a
          className="italic border-b-2 border-fuchsia-400 hover:border-fuchsia-300 transition-colors"
          href="https://github.com/IamDaGod-kira/"
        >
          CodeCrafters
        </a>
      </p>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full max-w-[1100px] px-4 mb-10">
        {/* Login Component */}
        <Login />

        {/* Info Card */}
        <div className="bg-theme2-400 p-6 rounded-2xl shadow-xl flex-1">
          <h2 className="text-xl sm:text-2xl font-semibold text-cyan-300 border-b-2 border-cyan-400 pb-2">
            What is this and Why should one use it?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-200 leading-relaxed">
            Students often feel overwhelmed and confused when trying to plan study time around
            classes, homework, and personal activities. They lack a simple way to see their free
            hours and organize them efficiently. This app provides a smart, automated schedule to
            bring clarity, balance, and productivity.
          </p>
        </div>
      </div>
    </div>
  </>);
}

export default App;
