 import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Registration(){
    const [user, setUser] = useState({
        name: "",
        password: "",
        email: ""
    })

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        try {
          const response = await axios.post("http://localhost:8080/register", user)
          navigate("/main-page") // пока что этой страницы нет, потому что вы еще ее не сделали
        } catch (error) {
          console.error('Ошибка авторизации:', error)
        }
    };

    return(
        <div className="registration-main">
            <h2>Registration</h2>
            <form>
                <input type="text" id="login" value={user.name} onChange={event => setUser({...user, name: event.target.value})} required />
                <input type="email" id="email" value={user.email} onChange={event => setUser({...user, email: event.target.value})} required />
                <input type="password" id="password" value={user.password} onChange={event => setUser({...user, password: event.target.value})} required />
                <Link to="/">Already have an account?</Link>
                <button id="register"
                    onClick={(event) => {
                        event.preventDefault()
                        console.log(user)
                        handleSubmit()
                        // navigate("/main-page")
                    }}
                >Register</button>
            </form>
            
        </div>)
}

export default Registration;