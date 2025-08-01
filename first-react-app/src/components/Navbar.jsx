import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    let nav = useNavigate()
  return (
    <>
        <button onClick={()=> {nav("/")}}>🏠 Home</button>
    </>
  )
}

export default Navbar