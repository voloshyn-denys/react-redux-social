import React from 'react';
import s from './Login.module.sass'

const Login = () => {

  return (
    <div className={s.login}>
      <h2><b>Login</b></h2>
      <input 
        className={`${s.input} input`} 
        placeholder="Login" 
        type="text"
      />
      <input 
        className={`${s.input} input`} 
        placeholder="Password" 
        type="password"
      />
      <button className="button">Login</button>
    </div>
  )
}

export default Login;