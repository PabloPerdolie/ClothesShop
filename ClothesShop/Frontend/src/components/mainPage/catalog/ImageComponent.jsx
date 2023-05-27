import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ImageComponent = ({path}) => {
  const [imageUrl, setImageUrl] = useState('');

  const {token, setToken} = useContext(AuthContext)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:8080/image/${path}`, 
        {
          headers: {
          Authorization: `Bearer ${token.token}`}
        });
        if (response.ok) {
          const blob = await response.blob();
          const objectUrl = URL.createObjectURL(blob);
          setImageUrl(objectUrl);
        } else {
          console.log('Ошибка при получении файла', response);
        }
      } catch (error) {
        console.log('Ошибка при выполнении запроса:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageUrl && <img className="item-image" src={imageUrl} alt="Изображение"/>}
    </div>
  );
};

export default ImageComponent;