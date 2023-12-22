import React from 'react'
import Templet from '../components/Templet'
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Templet
      title="Welcom Back"
      desc1="Build skills for today, tomorrow and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login