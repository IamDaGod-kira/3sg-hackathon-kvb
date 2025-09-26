import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleEmailLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;
      Swal.fire(`User Logged in: ${user.displayName || user.email}`);
    } catch (err) {
      console.error("Login error", err);
      Swal.fire({ icon: "error", title: "Login error", text: err.message || String(err) });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      Swal.fire(`User Logged in: ${user.displayName || user.email}`);
    } catch (err) {
      console.error("Google login error", err);
      Swal.fire({ icon: "error", title: "Login error", text: err.message || String(err) });
    }
  };

  return (
    <div className="bg-theme2-400 p-6 rounded-2xl shadow-xl flex-1 max-w-md self-center md:self-stretch">
      <h2 className="text-lg sm:text-xl font-semibold border-b-2 border-indigo-500 pb-2 mb-4 text-white">
        Login to the App
      </h2>
      <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
        <input
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 caret-indigo-400"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 caret-indigo-400"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={handleEmailLogin}
          className="mt-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-colors"
        >
          Login with Email ≫
        </button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-colors"
        >
          Login with Google ≫
        </button>
      </form>
      <div className="mt-4 text-center">
        <a
          className="text-sm text-cyan-300 hover:text-cyan-200 border-b border-cyan-400 transition-colors"
          href="#"
        >
          Create <i>New Account</i>
        </a>
      </div>
    </div>
  );
}
