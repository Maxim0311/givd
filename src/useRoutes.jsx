import { Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import Main from './pages/Main';
import Profile from './pages/Profile';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/Main" replace />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/Main" replace />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Auth" element={<Auth />} />
    </Routes>
  );
};
