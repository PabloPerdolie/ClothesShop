import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="navigation">
                <div className="nav-list">
                    <ul className="navigation-list">
                        <li className="navigation-item">{<Link to="/cart">Cart</Link>}</li>
                        <li className="navigation-item">{<Link to="/main-page">Catalog</Link>}</li>
                        <li className="navigation-item">{<Link to="/add-item">Add item</Link>}</li>
                        <li className="navigation-item">{<Link to="/">Log out</Link>}</li>
                        
                    </ul>
                </div>
        </nav>
    )
}

export default Nav;