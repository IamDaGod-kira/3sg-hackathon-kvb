import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { AuthProvider } from './components/protected/AuthContext'; // updated path

const firebaseConfig = {
  apiKey: 'AIzaSyDBCfVSpAw4jkx1h5D6f_HZoUCsNoOEbRc',
  authDomain: 'kvb-3sg-2025.firebaseapp.com',
  projectId: 'kvb-3sg-2025',
  storageBucket: 'kvb-3sg-2025.firebasestorage.app',
  messagingSenderId: '335740100338',
  appId: '1:335740100338:web:376074b7589dbc0b1e3a6b',
  measurementId: 'G-JC4P0H0RZB',
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
