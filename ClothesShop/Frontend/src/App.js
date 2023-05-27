import React, { createContext, useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import Cart from "./components/cart/Cart";
import Catalog from "./components/mainPage/catalog/Catalog";
import Entry from "./components/authentification/entry/Entry";
import Registration from "./components/authentification/registration/Registration";
import { AuthProvider } from "./components/context/AuthContext";
import AddItemPage from "./components/mainPage/AddItemPage";
import "./App.css"


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Entry/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/main-page" element={<MainPage/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/add-item" element={<AddItemPage/>}></Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
