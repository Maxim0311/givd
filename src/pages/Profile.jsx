import React from 'react';
import { useAuth } from '../hooks/useAuth';

export default function Profile() {
  const { userId, logout } = useAuth();
  return (
    <div>
      <div>Профиль</div>
      <div>Привет, ты авторизован, твой id: {userId}</div>
      <button onClick={logout}>Выйти</button>
    </div>
  );
}
