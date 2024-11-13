import React, { useState } from 'react'

export const AuthForm = () => {
    const [accessingLogin, setAccessingLogin] = useState(true);

  
    
  return (
    <>
        <div className='auth-background'>
        <div className='auth-container'>
            <div className='auth-form'>
                <div className='auth-form-toggle'>
                    <button className={accessingLogin ? "active":""} onClick={()=> setAccessingLogin(true)}> Login</button>
                    <button className={!accessingLogin ? "active":""} onClick={()=> setAccessingLogin(false)}>SignUp</button>
                </div>
                {accessingLogin? 
                    <div className='auth-input-form'>
                        <h2>Login Form</h2>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required/>
                        <button>Login</button>
                        <p>OR</p>

                        <button className='googleButton'>Continue With Google</button>
                        <br/>
                        <div>
                            Don't have an Account ? <a href="#" onClick={()=>setAccessingLogin(false)}>SignUp Here</a>
                        </div>
                    </div>:
                    <div className='auth-input-form'>
                        <h2>SignUp Form</h2>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required/>
                        <input type="password" placeholder="Confirm Password" required/>

                        <button>SignUp</button>
                        <hr/>
            
                    </div>
                }
               
            </div>

        </div>
        </div>
    </>
  )
}
