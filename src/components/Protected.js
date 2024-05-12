import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utlis/AuthContext";

const Protected = (props) => {
    const { Component } = props;
     const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    //m1
    // useEffect(() => {
    //     // Retrieve user sign-in data from local storage
    //     const signInData = localStorage.getItem("usersignin");
        
    //     // Check if sign-in data exists
    //     if (signInData) {
    //         const userData = JSON.parse(signInData);
    //         const signEmail = userData.email;
    //         const signpass = userData.password;

    //         // Retrieve user login data from local storage
    //         const loginData = localStorage.getItem("userlogindata");
            
    //         // Check if login data exists
    //         if (loginData) {
    //             const loginUserData = JSON.parse(loginData);
    //             const loginEmail = loginUserData.email;
    //             const loginpass = loginUserData.password;

    //             // Check if the stored credentials match
    //             if (signEmail === loginEmail && signpass === loginpass) {
    //                 setAuthenticated(true);
    //             } else {
    //                 // If credentials do not match, redirect to login page
    //                 navigate("/Login");
    //             }
    //         } else {
    //             // If no login data is found, redirect to login page
    //             navigate("/Login");
    //         }
    //     } else {
    //         // If no sign-in data is found, redirect to login page
    //         navigate("/Login");
    //     }
    // }, []);
    

    //m2 simply check status

const {isLoggedIn} = useContext(AuthContext);
useEffect (()=>{
if(isLoggedIn){
    setAuthenticated(true);
}
else{
    navigate("/Login");
}
}, [])

//m1
    // Render the Component only if user is authenticated
  return authenticated ? <Component /> : null;

//m2
  // return isLoggedIn ? <Component /> : navigate("/Login") ;
};

export default Protected;
