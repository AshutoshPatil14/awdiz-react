import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    let nav = useNavigate()
  return (
    <>
        <button onClick={()=> {nav("/")}}>🏠 Home</button>
        <button onClick={()=> {nav("/login")}}>Login</button>
        <button onClick={()=> {nav("/register")}}>Register</button>
    </>
  )
}

export default Navbar