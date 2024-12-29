import React, { createContext,useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./components/pages/Home";
import Signup from "./components/authpages/Signup";
import Signin from "./components/authpages/Signin";
import Profile from "./components/pages/Profile";
import Createpost from "./components/pages/Createpost";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./context/Logincontext";
import Modal from "./components/pages/modal";

function App() {
  const [userlogin, setUserlogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <BrowserRouter>
      <LoginContext.Provider value={{setUserlogin, setModalOpen}}>
        <Navbar login={userlogin}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create-post" element={<Createpost />}></Route>
        </Routes>
        <ToastContainer theme="dark" />
        {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
