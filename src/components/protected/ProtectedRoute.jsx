// src/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import LoadingScreen from './loadingscreen';
import Swal from 'sweetalert2';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <LoadingScreen message="Preparing your dashboard…" />;
  if (!user) {
    Swal.fire({
      title: 'Oops!',
      text: 'User not logged in! Consider logging it to use the app.',
      icon: 'info',
      timer: 3000,
    });
    return <Navigate to="/" replace />;
  }
  return children;
}
