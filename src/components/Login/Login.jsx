import React from 'react';
import s from './Login.module.sass'
import { useFormik } from 'formik';

const Login = (props) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    onSubmit: (values) => {
      props.loginUser(values)
    },
  });

  return (
    <div className={s.login}>
      <h2><b>Login</b></h2>
      <form onSubmit={ formik.handleSubmit }>
        <input
          className={`${s.input} input`} 
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="text"
          id="email"
          name="email"
        />
        <input
          className={`${s.input} input`} 
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          id="password"
          name="password"
        />
        <div>
          <input 
            type="checkbox" 
            id="rememberMe"
            name="rememberMe"
            onChange={formik.handleChange}
            value={formik.values.rememberMe}
          />
          <label htmlFor="rememberMe">Remember Me</label> 
        </div>
        <br/>
        <button type='submit' className="button">Login</button>
      </form>
    </div>
  )
}

export default Login;