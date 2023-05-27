import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function AddItem(){

    const [item, setItem] = useState({
        name: "",
        description: "",
        category: "",
        price: ""
    }
    )

    const imageRef = useRef()

    const handleClick = async (e) =>{
      e.preventDefault()
        try {
            const response = await axios.post("http://localhost:8080/admin/products/add", item, {
              headers: {
                'Authorization': `Bearer ${token.token}`}
              }
            )
            console.log('Успешное добавление:', response.data)
          } catch (error) {
            console.error('Ошибка:', error)
          }
    }

    const { token, setToken } = useContext(AuthContext);

    const [selectedImage, setSelectedImage] = useState();

    const [id, setId] = useState()

    const handleImageChange = (e) => {
        setSelectedImage(e.target.files[0]);
    };

    const handleImage = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append('file', selectedImage);
          console.log(formData.getAll('file'))
          console.log(token.token)
          const response = await axios.post(`http://localhost:8080/admin/load_image/${id}`,
          formData
          , {
            headers: {
                'Authorization': `Bearer ${token.token}`,
                'Content-Type': 'multipart/form-data'
            }
          }
          );
    
          // Обработка успешной загрузки на бэкенд
          console.log('Успешная загрузка:', response.data);
        } catch (error) {
          // Обработка ошибки загрузки на бэкенд
          console.error('Ошибка загрузки:', error);
        }
      };

    return(
        <div className="add-item-main">
            <h2>Add new item</h2>
            <form>
            <input type="text" id="name" value={item.name} onChange={e => setItem({...item, name: e.target.value})} placeholder="name"/>
            <input type="text" id="decription" value={item.description} onChange={e => setItem({...item, description: e.target.value})} placeholder="description"/>
            <input type="text" id="category" value={item.category} onChange={e => setItem({...item, category: e.target.value})} placeholder="category"/>
            <input type="text" id="price" value={item.price} onChange={e => setItem({...item, price: e.target.value})} placeholder="price"/>
            <button onClick={handleClick}>Add Item</button>
            </form>
            <form>
            <h2>Add image for item</h2>
            <input ref={imageRef} type="file" accept="image/*" onChange={(e)=>handleImageChange(e)} />
            <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="id of item"/>
            <button onClick={handleImage}>Add image</button>
            </form>
        </div>

    )
}

export default AddItem;