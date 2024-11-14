import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {

  const {isLoggedIn} =  useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="brand-logo">
            <NavLink to="/">Small Big Growth</NavLink>
          </div>        
          <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
           </li>

            {isLoggedIn ? 
           <li>
              <NavLink to="/logout">Logout</NavLink>
            </li>
            :
            <>
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>

            <li>
              <NavLink to="/login">Login</NavLink>
            </li>

            <li>
              <NavLink to="/leads">Leads</NavLink>
            </li>

            </>
          }
          </ul>
        </nav>
      </div>
      </header>
    </>
  );
};
