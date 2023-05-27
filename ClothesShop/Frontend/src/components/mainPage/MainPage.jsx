import React from "react";
import Registration from "../authentification/registration/Registration";
import Entry from "../authentification/entry/Entry";
import Catalog from "./catalog/Catalog";
import AddItem from "./catalog/AddItem";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function MainPage(){
    return(
        <div className="main-page">
            <Nav/>
            <Catalog/>
        </div>
    )
}

export default MainPage;