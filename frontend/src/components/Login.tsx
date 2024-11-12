import React from 'react'

export const Login = () => {
  return (
    <>
    <div>Login</div>
    <form>
        <div>
        <label htmlFor="user-email">Email</label>
        <input type="email" placeholder='Enter Email' id="user-email" />
        </div>

        <div>
        <label htmlFor="user-password">Password</label>
        <input type="password" placeholder='Enter Password' id="user-password" />
        </div>

        <button>Login</button>
        <p />
        <button>SignUp</button>
    </form>
    </>
  )
}
