import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e: any) {
        e.preventDefault();
        try 
        {
            let result = await axios.post("http://localhost:5000/login", {email, password});

            console.log("result = :::", result);
            const {response} = result.data ;
            console.log("response = ::",response);

        }
        catch(e:any) {
            console.log("error of axios", e);
            console.log("e.code  = ", e.code );

            if(e.code == "ERR_NETWORK") {
                console.log(`Sorry! Backend server is down or busy!`);
                toast(`Sorry! Backend server is down or busy!`);
            }
        }
    }
  return (
    <div className='login'>
        <h2>Login</h2>
        
        <form action="POST">
            <input type="email" onChange={(e)=> {setEmail(e.target.value)}} placeholder='Email' />
            <input type="password" onChange={(e)=> {setPassword(e.target.value)}} placeholder='Password' />
            <button onClick={submit}>Login</button>
        </form>
    </div>
  )
}
