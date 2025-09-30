import { useState, useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import Swal from 'sweetalert2';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleEmailLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      Swal.fire(`User Logged in: ${userCred.user.displayName || userCred.user.email}`);
    } catch (err) {
      console.error('Login error', err);
      Swal.fire({ icon: 'error', title: 'Login error', text: err.message || String(err) });
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Swal.fire('Logged out successfully');
    } catch (err) {
      console.error('Logout error', err);
      Swal.fire({ icon: 'error', title: 'Logout error', text: err.message || String(err) });
    }
  };

  return (
    <div className="bg-theme2-400 p-6 rounded-2xl shadow-xl flex-1 max-w-md self-center md:self-stretch">
      {!user ? (
        <>
          <h2 className="font-header1 var-header1 text-lg sm:text-xl font-semibold border-b-2 border-indigo-500 pb-2 mb-4 text-white">
            Login to the App
          </h2>
          <form
            className="font-text1 var-text1 flex flex-col gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
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
              className="font-text1 var-text1 mt-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-colors"
            >
              Login with Email ≫
            </button>
          </form>
          <div className="mt-4 text-center">
            <a
              className="text-sm text-cyan-300 hover:text-cyan-200 border-b border-cyan-400 transition-colors"
              href="/signup"
            >
              Create <i className="font-header1 var-header1">New Account</i>
            </a>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-lg sm:text-xl font-semibold border-b-2 border-indigo-500 pb-2 mb-4 text-white">
            Dashboard
          </h2>
          <div className="flex flex-col gap-3 text-white">
            <p>
              <strong>Name:</strong> {user.displayName || 'N/A'}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <button
              type="button"
              onClick={handleLogout}
              className="mt-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-colors"
            >
              Logout
            </button>
            <a
              href="/dashboard"
              className="mt-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-colors text-center"
            >
              Go to 3sg Dashboard
            </a>
          </div>
        </>
      )}
    </div>
  );
}
