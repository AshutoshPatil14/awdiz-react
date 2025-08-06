import React, { useState } from "react";


function Register() {
  const [userDetails, setUserDetails] = useState({name: "", email:"", password:"", confPassword:""})

const InputHandler = (event) => {
  setUserDetails({...userDetails, [event.target.name]: event.target.value})
}

const Submit = (event) => {
  event.preventDefault()

}
  return (
    <div>
      <h1>This is the Register Page</h1>
      <form onSubmit={Submit}>
        <input id="name" name="name" type="text" placeholder="Enter your name" onChange={InputHandler}/>
        <input id="email" name="email" type="email" placeholder="Enter your email" onChange={InputHandler}/>
        <input id="password" name="password" type="password" placeholder="Create a password" onChange={InputHandler}/>
        <input id="confPassword" name="confPassword" type="password" placeholder="Confirm your password" onChange={InputHandler}/>
        <button type="submit">Register</button>
      </form>
      <div>
        <h3>Name: {userDetails.name}</h3>
        <h3>Email: {userDetails.email}</h3>
        <h3>Password: {userDetails.password}</h3>
        <h3>Confirm Password: {userDetails.confPassword}</h3>
      </div>
    </div>
  );
}

export default Register;
