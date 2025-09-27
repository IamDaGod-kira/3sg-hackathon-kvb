import React from 'react';
import Swal from 'sweetalert2';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const [email, setEmail] = React.useState('');
const [passwd, setPasswd] = React.useState('');
const [name, setName] = React.useState('');
const auth = getAuth();

const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, passwd);

    if (name) {
      await updateProfile(userCred.user, { displayName: name });
    }

    Swal.fire({
      title: 'Success!',
      text: 'Account created successfully. Now go to main page and login',
      icon: 'question',
    });

    setEmail('');
    setPasswd('');
    setName('');
  } catch (err) {
    Swal.fire({
      title: 'Error',
      text: `Error creating account: ${err.message}`,
      icon: 'error',
    });
  }

  return (
    <div className="bg-theme2-400 p-6 rounded-2xl shadow-xl flex-1 max-w-md self-center md:self-stretch">
      <h2 className="text-lg sm:text-xl font-semibold border-b-2 border-indigo-500 pb-2 mb-4 text-white">
        Create Account
      </h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-3">
        <input
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 caret-indigo-400"
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 caret-indigo-400"
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 caret-indigo-400"
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
