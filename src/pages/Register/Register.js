import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <h1>Form Register</h1>
      <div>
        <label>Nama</label>
        <input type="text"/>
      </div>
      <div>
        <label>Email</label>
        <input type="email"/>
      </div>
      <div>
        <label>Password</label>
        <input type="password"/>
      </div>
      <div>
        <button>Register</button>
        <Link to="/">
          Login Here
        </Link>
      </div>
    </div>
  )
}

export default Register
