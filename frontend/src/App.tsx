import { useState } from 'react'
import './App.css'
import {AuthForm} from './components/AuthForm';
import {LeadCard} from './components/LeadCard';

function App() {
  return (
    <>
      {/* <AuthForm /> */}

      <LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } />
      <LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } />
      <LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } />

    </>
  )
}

export default App
