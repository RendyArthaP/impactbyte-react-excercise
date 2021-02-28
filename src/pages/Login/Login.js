import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleLogin = () => {
    const userLogin = JSON.parse(localStorage.getItem("user"))

    if(user.email === "" && user.password === "") {
      alert("Tolong isi form login")
    } else if(user.email !== userLogin.email || user.password !== userLogin.password) {
      alert("Email atau password anda salah atau tidak terdaftar")
    } else {
      alert("Login berhasil")
      history.push("/home")
    }
  } 

  return (
    <div>
      <h1>Form Login</h1>
      <div>
        <label>Email</label>
        <input 
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input 
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Sign in</button>
        <Link to="/register">
          Register Here
        </Link>
      </div>
    </div>
  )
}

export default Login
