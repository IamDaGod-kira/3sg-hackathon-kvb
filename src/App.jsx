import './App.css';
import bareIcon from './assets/bare-icon.png';
import kvLogo from './assets/kv-logo.png';
import vidyasetuLogo from './assets/vidyasetu-logo.png';

function App() {
  return (
    <div className="p-2 sm:p-3 min-h-screen w-full flex flex-col justify-start items-center bg-theme8 text-theme1-500">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-2 sm:gap-6 mb-3 w-full">
        <img src={kvLogo} alt="PM Shri K.V. Ballygunge" className="h-10 sm:h-16 md:h-20 w-auto" />
        <div className="flex flex-col items-center mx-1">
          <img src={bareIcon} alt="Bare Icon" className="h-12 sm:h-20 md:h-28 w-auto" />
          <h2 className="text-lg sm:text-2xl md:text-3xl text-theme1 font-bold text-center mt-1">
            Smart Study Schedule Generator
          </h2>
        </div>
        <img src={vidyasetuLogo} alt="AI Vidyasetu" className="h-10 sm:h-16 md:h-20 w-auto" />
      </div>

      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-theme3-400 italic mb-4 text-center">
        A{' '}
        <a className="italic border-b-2 border-theme6-600 hover:border-theme5-300" href="https://www.vidyasetu.ai/">
          Hackathon
        </a>{' '}
        project by{' '}
        <a
          className="italic border-b-2 border-theme6-600 hover:border-theme5-300"
          href="https://github.com/IamDaGod-kira/"
        >
          CodeCrafters
        </a>
      </p>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-3 md:gap-6 w-full max-w-[1100px] px-1">
        {/* login div first */}
        <div className="bg-theme9-300 p-2 sm:p-4 md:p-6 rounded-lg shadow-lg flex-1 max-w-md self-center md:self-stretch order-1 md:order-none">
          <h2 className="text-sm sm:text-base md:text-lg border-2 md:border-4 border-double border-theme7-600 rounded-lg p-1 md:p-2 mb-2 md:mb-4 text-theme1">
            Login to the App
          </h2>
          <input
            className="w-full mb-2 px-2 py-1 md:px-4 md:py-2 rounded bg-theme8-400 text-theme1-900 placeholder-theme5-400 focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-theme5-400 caret-theme5-500"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            className="w-full mb-2 px-2 py-1 md:px-4 md:py-2 rounded bg-theme8-400 text-theme1-900 placeholder-theme5-400 focus:outline-none focus:ring-1 md:focus:ring-2 focus:ring-theme5-400 caret-theme5-500"
            type="password"
            placeholder="Enter your Password"
          />
          <button
            type="submit"
            className="hover:text-emerald-500 mt-2 px-2 py-1 md:px-4 md:py-2 rounded text-theme9-100 bg-theme6-500 hover:bg-theme6-400"
          >
            Login ≫
          </button>
          <hr className="my-2 md:my-4 border-theme7-600" />
          <a
            className="text-blue-700 border-double border-b border-theme6-600 text-xs sm:text-sm md:text-base hover:text-theme1"
            href=""
          >
            Create <i>New Account</i>
          </a>
        </div>

        {/* info div second */}
        <div className="bg-theme9-300 p-2 sm:p-4 md:p-6 rounded-lg shadow-lg flex-1 order-2">
          <h2 className="text-base sm:text-lg md:text-2xl text-blue-700 text-left">
            What is this and Why should one use this?
          </h2>
          <p className="text-left mt-2 text-xs sm:text-sm md:text-base text-theme3-400">
            Students often feel overwhelmed and confused when trying to plan study time around
            classes, homework, and personal activities. They lack a simple way to see their free
            hours and organize them efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
