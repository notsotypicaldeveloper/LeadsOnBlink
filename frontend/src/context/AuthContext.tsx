import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

type AuthContextProviderProps = {
    children: React.ReactNode;
}


export const AuthContextProvider = (props: AuthContextProviderProps)=>{

    const BACKEND_API_URL = import.meta.env.VITE_APP_URI_API;

    console.log("BACKEND_API_URL = ", BACKEND_API_URL);

    const [leads, setLeads] = useState([
        {
            "_id": "6735f76383968288e8925151",
            "firstName": "Jenny",
            "Company": "Google",
            "email": "******@***.com",
            "linkedinUrl": "https://www.linkedin.com/jenny",
            "phoneNumber": "+91-763633030",
            "price": "100"
        },
        {
            "_id": "6735f80083968288e8925152",
            "firstName": "James",
            "Company": "SmallBigGrowth\"",
            "email": "******@***.com",
            "linkedinUrl": "https://www.linkedin.com/james",
            "phoneNumber": "+91-7839933030",
            "price": "500"
        },
        {
            "_id": "6735f81983968288e8925154",
            "firstName": "Shruti",
            "Company": "Microsoft",
            "email": "******@***.com",
            "linkedinUrl": "https://www.linkedin.com/shruti",
            "phoneNumber": "+91-990220002",
            "price": "70"
        },
        {
            "_id": "67362ccfa776271e68eb6060",
            "firstName": "Jimmy",
            "Company": "Microsoft",
            "email": "******@***.com",
            "linkedinUrl": "https://www.linkedin.com/jimmy",
            "phoneNumber": "+91-990220002",
            "price": "170"
        }]);

        
    // const [token, setToken] = useState(localStorage.getItem("token"));

    // const setAccessToken = (token: any)=> {
    //     setToken(token);
    //     return localStorage.setItem("token", token);
    // }
    const LogoutUser = () => {
        // setToken("");
        return localStorage.removeItem("token");
    }

    const getLeads = async() =>{
        try {
            const response = await fetch("http://localhost:5000/api/leads", {
                method: "GET"
            })

            if(response.ok) {
                const apiResponse = await response.json();
                console.log("apiResponse = ",apiResponse);
                setLeads(apiResponse.data);
            }
        }
        catch(error) {
            console.log(`error in get leads: ${error}`);
        }
    }
    // get leads data
    useEffect(()=>{
        getLeads();
    }, [])
    
    return (
        <AuthContext.Provider value={{ LogoutUser, leads, BACKEND_API_URL}}>

        {/* <AuthContext.Provider value={{setAccessToken, LogoutUser, leads, BACKEND_API_URL}}> */}
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const authContextValue =  useContext(AuthContext);

    if(!authContextValue) {
        throw new Error("useAuth is used outside the provider");
    }
    return authContextValue;
}
 