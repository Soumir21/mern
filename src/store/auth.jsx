import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user,setUser]=useState("");
  const [service,setService]=useState("");

  //function to stored the token in local storage
  const storeTokenInLS = (serverToken) => {
    
    setToken(serverToken);
    return localStorage.setItem("token", serverToken); 
  };

  //   this is the get the value in either true or false in the original state of token
  let isLoggedIn = !!token;


  //   to check whether is loggedIn or not
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };


// Authentication JWT- to get the currently logged in user data

const AuthorizationToken= `Bearer ${token}`

const userAuthentication = async () => {
  if(token){
    try {
    
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
  
        // our main goal is to get the user data 👇
        setUser(data.userData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
};

const serviceAuthentication = async () => {

    try {
    
      const response = await fetch("http://localhost:5000/api/data/service", {
        method: "GET",
        
      });
  
      if (response.ok) {
        const data = await response.json();
  
        // our main goal is to get the user data 👇
        setService(data.response);
        console.log(service)
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }

  
};

useEffect(() => {

  userAuthentication();
}, [token]);

useEffect(() => {

  serviceAuthentication();
}, []);


  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, 
    service,AuthorizationToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};