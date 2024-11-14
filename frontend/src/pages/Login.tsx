import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {toast} from "react-toastify";


export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
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

    const handleSubmit = async(e:any)=> {
        e.preventDefault();
        console.log("user = ", user);
        try {
          const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
          })
  
          if(response.ok) {
            const res_data = await response.json();

            // localStorage.setItem("token", res_data.token);

            const {storeTokenInLocalStorage} = useAuth();
            storeTokenInLocalStorage(res_data.token);

            setUser({
              email: "",
              password: "",
            })

            toast.success(res_data.message)
            navigate("/leads");

          }
          else {
            const res_data = await response.json();
  
            toast.error(res_data.message)
            return;
          }
        }
        catch(e:any){
          console.error(e);
          toast.error(e.message)

        }
    
    
    } 


  return (
    <>
    <section>
      <main>
        <div className="section-login">
          <div className = "container grid grid-two-cols">
            <div className='login-image'>
              <img src='/images/login.png' alt='fill login form image' width="650px" height="500px"  />
            </div>
            <div className='login-form'>
              <h2 className='main-heading mb-3'>Login Form</h2>
              <br/>
              <form onSubmit={handleSubmit}>

                <input type="email" name="email" placeholder='Email'   onChange={handleInput} value={user.email} autoComplete='off' required/>
                <br/><br/>
                <input type="password" name="password" placeholder='Password' onChange={handleInput} value={user.password} autoComplete='off' required/>
                <br/><br/>
                <button type="submit" className='btn btn-submit'>login</button>

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


/*

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
*/
