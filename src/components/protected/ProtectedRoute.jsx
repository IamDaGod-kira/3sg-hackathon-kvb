// src/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-white">Loading...</div>;
  if (!user) return <Navigate to="/" replace />;
  return children;
}
