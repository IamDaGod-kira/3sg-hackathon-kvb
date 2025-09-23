// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBCfVSpAw4jkx1h5D6f_HZoUCsNoOEbRc",
  authDomain: "kvb-3sg-2025.firebaseapp.com",
  projectId: "kvb-3sg-2025",
  storageBucket: "kvb-3sg-2025.firebasestorage.app",
  messagingSenderId: "335740100338",
  appId: "1:335740100338:web:376074b7589dbc0b1e3a6b",
  measurementId: "G-JC4P0H0RZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);