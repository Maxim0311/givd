import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function Auth() {
  const { login } = useAuth();

  const [form, setForm] = useState({
    login: '',
    password: '',
  });

  const loginHandler = () => {
    console.log(form);
    fetch(`http://192.168.0.16:7137/api/auth/authenticate`, {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(result => result.json())
      .then(data => {
        login(data?.result?.token, data?.result?.person.id);
      });
  };

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-form">
      <h1>Войти</h1>
      <input
        className="input"
        placeholder="Введите логин"
        type="text"
        name="login"
        onChange={changeHandler}
      />
      <input
        className="input"
        placeholder="Введите пароль"
        type="text"
        name="password"
        onChange={changeHandler}
      />
      <button onClick={loginHandler}>Войти</button>
    </div>
  );
}
