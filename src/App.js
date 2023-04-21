import React from "react";
import { Routes, Route } from 'react-router-dom'

//style
import './style/All.css'

//components
import { Login } from "./components/other/Login";
import { HomePaje } from "./components/home/homePaje";

//context
import { AuthContextProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/chat" element={<HomePaje />} />
      </Routes>
    </AuthContextProvider>
  )
}


// {/* <Route path=':coin' element={''} /> */}

export default App;