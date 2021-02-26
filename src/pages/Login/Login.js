import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <h1>Form Login</h1>
      <div>
        <label>Email</label>
        <input type="email"/>
      </div>
      <div>
        <label>Password</label>
        <input type="password"/>
      </div>
      <div>
        <button>Sign in</button>
        <Link to="/register">
          Register Here
        </Link>
      </div>
    </div>
  )
}

export default Login
