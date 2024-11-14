import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {toast} from "react-toastify";


export const SignUp = () => {

  const [token, setToken]  = useState(localStorage.getItem("token"));

    const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
    });

    const navigate = useNavigate();

    const handleInput = (e:any)=>{
      console.log(e);
      let name = e.target.name;
      let value = e.target.value;
    
      setUser({
        ...user,
        [name]: value,
      })
    }

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:5000/api/signup", {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify(user)
        })

        console.log("response.ok === :::", response.ok);
        if(response.ok) {

          setUser({
            name: "",
            email: "",
            password: "",
          })


          const res_data = await response.json();

          console.log("res_data.data.token====:::1:::", res_data.data.token);

          // const {storeTokenInLocalStorage} = useAuth();

          console.log("res_data.data.token====:::2::::", res_data.data.token);
          // We will get token in data
          // storeTokenInLocalStorage(res_data.data.token);

          localStorage.setItem("token", res_data.data.token);

          toast.success(res_data.message)

          navigate("/leads");
        }
        else {
          const res_data = await response.json();

          toast.error(res_data.message)
          return;
        }
  
      }
      catch(error:any) {
        console.log("signup error", error);
        toast.error(error.message)

      }
     
    }
  return (
    <>
      <section>
        <main>
          <div className="section-signup">
            <div className = "container grid grid-two-cols">
              <div className='signup-image'>
                <img src='/images/signup.jpg' alt='signup me image' width="900px" height="480px"  />
              </div>
              <div className='signup-form'>
                <h2 className='main-heading mb-3'>SignUp Form</h2>
                <br />
                <form onSubmit={handleSubmit}>

                  <input type="text"  name="name"  placeholder='Name' onChange={handleInput} value={user.name} autoComplete='off' required/><br/>
                  <br/><br/>
                  <input type="email" name="email" placeholder='Email'   onChange={handleInput} value={user.email} autoComplete='off' required/>
                  <br/><br/>

                  <input type="password" name="password" placeholder='Password' onChange={handleInput} value={user.password} autoComplete='off' required/>
                  <br/><br/>
                 
                  <button type="submit" className='btn btn-submit'>SignUp</button>
                  {/* <p style={{textAlign: "center"}}>OR</p>
                  <button className='secondary-btn'>SignUp By Google</button> */}

                </form>
                <br/>
              </div>
            </div> 
          </div>
        </main>
      </section>
    </>
  )
}
