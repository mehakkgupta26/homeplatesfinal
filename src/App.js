
import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
// import UserContext from "./utlis/UserContext";
// import { useEffect } from "react";
// import { useState } from "react";
import { Provider } from "react-redux";
import Appstore from "./utlis/Appstore";
import { AuthProvider } from "./utlis/AuthContext";
import Sidebar from "./layout/Sidebar";

function App() {

  // const [userName, setuserName] = useState()

  // useEffect(() => {
  //   const data = {
  //     name: "Hii"
  //   };
  //   setuserName(data.name)
  // }, [])


  return (

    <Provider store={Appstore}>
       <AuthProvider>
      {/* <UserContext.Provider value={{ loggedInUser: userName, setuserName }} > */}
        <>
        
          <Header />
        
          <Outlet />
          <Footer />
        </>

      {/* </UserContext.Provider> */}
      </AuthProvider>
    </Provider>
  );
}

export default App;
