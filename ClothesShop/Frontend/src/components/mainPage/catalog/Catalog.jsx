import React, { useState, useEffect, useContext } from "react";
import Item from "./Item";
import axios from "axios";
import Nav from "../Nav";
import { AuthContext } from "../../context/AuthContext";

function Catalog(){

    const [data, setData] = useState([]);

    const {token, setToken} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/admin/products', 
            {
              headers: {
                Authorization: `Bearer ${token.token}`
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
        <div className="catalog">
            <ul className="items-list">
                {data.map((item) => (
                  <li key={item.id}>
                    <Item item={item}/>
                  </li>
                ))}
            </ul>
        </div>
    )
}

export default Catalog;