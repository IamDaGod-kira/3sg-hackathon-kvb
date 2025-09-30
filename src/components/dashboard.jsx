// src/components/Dashboard.jsx
import { getAuth, signOut } from 'firebase/auth';

export default function Dashboard() {
  const auth = getAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme1-400 text-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h1>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-colors"
      >
        Logout
      </button>
    </div>
  );
}
