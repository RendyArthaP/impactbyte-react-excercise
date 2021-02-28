import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Register = () => {
  const history = useHistory()
  const [userProfile, setUserProfile] = useState({
    name: "",
    hobby: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserProfile({
      ...userProfile,
      [name]: value
    })
  }

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(userProfile))
    alert("Registrasi Berhasil, silahkan login")
    history.push('/')
  }
  return (
    <div>
      <h1>Form Register</h1>
      <div>
        <label>Nama</label>
        <input 
          type="text"
          name="name"
          value={userProfile.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Hobby</label>
        <input 
          type="text"
          name="hobby"
          value={userProfile.hobby}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input 
          type="email"
          name="email"
          value={userProfile.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input 
          type="password"
          name="password"
          value={userProfile.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleRegister}>Register</button>
        <Link to="/">
          Login Here
        </Link>
      </div>
    </div>
  )
}

export default Register
