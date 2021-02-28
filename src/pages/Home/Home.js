import React from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  const history = useHistory()
  const userLogin = JSON.parse(localStorage.getItem("user"))
  const isLoggedin = JSON.parse(localStorage.getItem("isLogin"))

  if(!isLoggedin) {
    history.push("/")
  }
  
  return (
    <div>
      <Navbar />
      <h1>Hello {userLogin.name}</h1>
    </div>
  )
}

export default Home
