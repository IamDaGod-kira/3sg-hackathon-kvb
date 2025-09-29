import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function CreateAcc() {
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const [name, setName] = useState('');
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
        icon: 'success',
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
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center px-6 sm:px-8 md:px-12 py-12 bg-theme1-400">
      <div className="w-full max-w-2xl bg-theme2-400 rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12">
        <h2 className="font-header1 var-header1 text-2xl sm:text-3xl font-bold border-b-2 border-indigo-500 pb-3 mb-6 text-white text-center">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="font-text1 var-text1 flex flex-col gap-5">
          <input
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 caret-indigo-400"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 caret-indigo-400"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full px-5 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 caret-indigo-400"
            type="password"
            placeholder="Enter your Password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
            required
          />

          <button
            type="submit"
            className="mt-4 w-full py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
