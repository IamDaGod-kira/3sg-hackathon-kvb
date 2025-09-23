import './App.css'
import bareIcon from './assets/bare-icon.png';
import kvLogo from './assets/kv-logo.png';
import vidyasetuLogo from './assets/vidyasetu-logo.png';

function App() {
  return (
    <div className="min-h-screen min-w-full flex justify-center bg-purple-800 text-slate-800">
      <div className="bg-slate-200 p-8 rounded shadow text-center">
        <h2 className="text-3xl text-slate-800 font-bold mb-4">Smart Study Schedule Generator</h2>
        <p className='text-1.5xl p-5 italic'>A <a href='https://www.vidyasetu.ai/'>Hackathon</a> project by <a href="https://github.com/IamDaGod-kira/">CodeCrafters</a></p>
        <br />
        <h2
          className="text-1.5xl border-4 border-double border-indigo-800 rounded-lg p-2"
        >
          Login to the App
        </h2>
        <br />
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
      </div>
    </div>
  )
}

export default App
