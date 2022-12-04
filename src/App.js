import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './useRoutes';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';

function App() {
  const { token } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return <BrowserRouter>{routes}</BrowserRouter>;
}

export default App;
