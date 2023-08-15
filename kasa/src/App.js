import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Error from "./pages/Error";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/accueil"/>} />
        <Route path="/accueil" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/housing/:id" element={<Logement/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
