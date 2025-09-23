import './App.css'
import bareIcon from './assets/bare-icon.png';
import kvLogo from './assets/kv-logo.png';
import vidyasetuLogo from './assets/vidyasetu-logo.png';

function App() {
  return (
    <div className="p-3 min-h-screen min-w-full flex flex-col justify-center items-center bg-purple-800 text-slate-800">
      <h2 className="text-3xl text-slate-200 font-bold mb-4">
        Smart Study Schedule Generator
      </h2>
      <p className='text-lg text-slate-100 italic mb-8 text-center'>
        A <a className='italic border-b-2 border-fuchsia-400' href='https://www.vidyasetu.ai/'>Hackathon</a> project by <a className='italic border-b-2 border-fuchsia-400' href="https://github.com/IamDaGod-kira/">CodeCrafters</a>
      </p>
      <div className="flex justify-center items-start gap-8 w-full max-w-[100%]">
        <div className="bg-slate-200 p-8 rounded shadow text-center flex-1 max-w-full">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia, ipsa illum ad assumenda inventore dolorum modi maxime excepturi? Non aperiam sit laudantium quidem corporis temporibus officia, placeat molestias voluptate?</p>
        </div>

        <div className="bg-slate-200 p-8 rounded shadow text-center flex-1 max-w-md">
          <h2 className="text-1.5xl border-4 border-double border-indigo-800 rounded-lg p-2 mb-4">
            Login to the App
          </h2>
          <input
            className="min-w-full mb-4 px-4 py-2 rounded bg-purple-100 text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 caret-purple-700 hover:border-emerald-600 hover:border-2"
            type="email"
            name="email"
            placeholder="Enter your Email"
          />
          <br />
          <input
            className="min-w-full px-4 py-2 rounded bg-purple-100 text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 caret-purple-700 hover:border-emerald-600 hover:border-2"
            type="password"
            name="passwd"
            placeholder="Enter your Password"
          />
          <br /><br />
          <button
            type="submit"
            className="text-slate-900 border-3px-indigo-800 hover:border-emerald-600"
            style={{ backgroundColor: "#FFFDD0" }}
          >
            Login ≫
          </button>
          <br /><br />
          <hr />
          <br />
          <a className='text-blue-600 border-double border-b-2 border-fuchsia-700' href="">
            Create <i>New Account</i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
