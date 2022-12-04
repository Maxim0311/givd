import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Main() {
  const { token } = useAuth();
  const isAuthenticate = !!token;
  const click = () => console.log(!!token);
  return (
    <div>
      <h1>Главная страница</h1>
      <button onClick={click}>CLICK</button>
      {isAuthenticate ? (
        <Link to="/Profile">Мой профиль</Link>
      ) : (
        <Link to="/Auth">Авторизоваться</Link>
      )}
    </div>
  );
}
