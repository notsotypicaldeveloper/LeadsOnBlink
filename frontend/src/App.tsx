import { useState } from 'react'
import './App.css'
import {AuthForm} from './components/AuthForm';
import {LeadCard} from './components/LeadCard';
import {Login} from './components/Login';
import {SignUp} from './components/SignUp';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      {/* <SignUp /> */}
      <Login />
      {/* <div className='App'>
        <Router>
            <Routes>
              <Route path="/" element={<AuthForm />}></Route>
              <Route path="/list" element={<LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } />}></Route>

            </Routes>
        </Router>
      </div> */}
      {/* <AuthForm /> */}

      {/* <LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } />
      <LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } />
      <LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } /> */}

    </>
  )
}

export default App
