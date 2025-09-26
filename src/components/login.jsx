import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import Swal from 'sweetalert2';

// ensure compat auth is loaded above
// provider
const provider = new firebase.auth.GoogleAuthProvider();

// helper to check initialization
const isFirebaseInitialized = () => {
  try {
    return Array.isArray(firebase.apps) && firebase.apps.length > 0;
  } catch (e) {
    return false;
  }
};

const funk = async () => {
  if (!isFirebaseInitialized()) {
    // clear, user-friendly instruction instead of crashing
    Swal.fire({
      icon: 'error',
      title: 'Firebase not initialized',
      html:
        'Firebase is not initialized. Create a firebase init file (e.g. <code>src/firebase.js</code>) and call <code>firebase.initializeApp(config)</code>, then import it before using login.',
    });
    console.error('Firebase not initialized. Call firebase.initializeApp(config) first.');
    return;
  }

  try {
    const current = firebase.auth().currentUser;
    if (!current) {
      const result = await firebase.auth().signInWithPopup(provider);
      const user = result.user;
      Swal.fire(`User Logged in: ${user.displayName || user.email}`);
    } else {
      Swal.fire({ title: 'User already signed in' });
    }
  } catch (err) {
    console.error('Login error', err);
    Swal.fire({ icon: 'error', title: 'Login error', text: err.message || String(err) });
  }
};

export default function Login() {
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
        />
        <input
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 caret-indigo-400"
          type="password"
          placeholder="Enter your Password"
        />
        <button
          type="button"
          onClick={funk}
          className="mt-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-colors"
        >
          Login ≫
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
