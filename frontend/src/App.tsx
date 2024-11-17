import './App.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {SignUp} from './pages/SignUp';
import {Home} from './pages/Home';
import {Login} from './pages/Login';
import {Leads} from './pages/Leads';
import {Navbar} from "./components/Navbar";
import { Logout } from './pages/Logout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/leads" element={<Leads />} />

              <Route path="/*" element={<Home />} />
    
          </Routes>
      </BrowserRouter>
     

      {/* <LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } />
      <LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } />
      <LeadCard firstName ={"aba"} lastName= {"aba"}  companyName={"aba"} linkedinProfile= {"aba"} jobTitle= {"aba"} emailAddress= {"aba"} phoneNumber= {"aba" } /> */}

    </>
  )
}

export default App
