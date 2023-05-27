import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";


function CartItem({item, data, setData}){
    
    const { token, setToken } = useContext(AuthContext);

    const handleClick = async(e) => {
        try{
            const response = await axios.post(`http://localhost:8080/cart/delete/${item.id}`,"", {
                headers: {
                    'Authorization': `Bearer ${token.token}`}
                })
            console.log("Succeed")
            setData(data.filter(clothes=>clothes.id !== item.id))
        }catch(error){
            console.log(error)
        }

    }

    

    return(
        <li className="cart-item">
            <div className="item-details"> 
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">{item.price}</p>
            </div>
            <button className="item-button" onClick={(e)=>handleClick(e)}>DELETE</button>
        </li>
    )
}
export default CartItem;