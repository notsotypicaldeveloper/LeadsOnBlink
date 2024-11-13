import React, { useState } from 'react';


export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
  return (
    <>
    <div className='signUp'>
    <h2>SignUp</h2>
    
    <form action="POST">
        <input type="email" onChange={(e)=> {setEmail(e.target.value)}} placeholder='Email' />
        <br/>
        <input type="password" onChange={(e)=> {setPassword(e.target.value)}} placeholder='Password' />
        <br/>
        <input type="confirmPassword" onChange={(e)=> {setConfirmPassword(e.target.value)}} placeholder='Confirm Password' />
        <br/>
        <button >SignUp</button>
    </form>
    </div>
    </>
  )
}
