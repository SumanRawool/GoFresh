import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";
import Carousal from "./components/Carousal";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<SignUp />} />
          <Route exact path="/myOrder" element={<MyOrder />} />
          <Route exact path="/caro" element={<Carousal />} />
          <Route exact path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
