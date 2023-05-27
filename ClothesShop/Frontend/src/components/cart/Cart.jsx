import React, { useContext, useEffect, useState } from "react";
import Nav from "../mainPage/Nav";
import Item from "../mainPage/catalog/Item";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import CartItem from "./CartItem";

function Cart(){

    const [data, setData] = useState([])
    const {token, setToken} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/cart', 
            {
              headers: {
                'Authorization': `Bearer ${token.token}`
              }
            });
            setData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);
    
    

    return(
        <div className="cart-main">
            
            {<Nav/>}
            <h2 className="cart-title">Cart</h2>
            <ul className="cart-items">
                {data.map((item) => (
                  <li key={item.id} >
                    <CartItem item={item} data={data} setData={setData}/>
                  </li>
                ))}
            </ul>
            <button className="checkout-btn">ORDER</button>
        </div>
    )
}

export default Cart;