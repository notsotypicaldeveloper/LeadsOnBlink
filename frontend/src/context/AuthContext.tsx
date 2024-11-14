import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>("");

type AuthContextProviderProps = {
    children: React.ReactNode;
}


export const AuthContextProvider = (props: AuthContextProviderProps)=>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [leads, setLeads] = useState([]);
    const storeTokenInLocalStorage = (serverToken: string) => {
        return localStorage.setItem("token", serverToken);
    };

    let loggedIn = !!token;

    console.log("loggedIn===::", loggedIn)
    const LogoutUser = () => {
        setToken("");
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
        <AuthContext.Provider value={{storeTokenInLocalStorage, LogoutUser,loggedIn, leads}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    console.log("jejejejejejejejej")
    const authContextValue =  useContext(AuthContext);
    console.log("fkfkfkfkfkfk")

    console.log("authContextValue = ::::", authContextValue);
    if(!authContextValue) {
        throw new Error("useAuth is used outside the provider");
    }
    return authContextValue;
}
 