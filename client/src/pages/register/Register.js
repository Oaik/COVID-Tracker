import { useState } from 'react';
import { useNavigate } from "react-router-dom"

import axios from 'axios';

function Register() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const changeInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const changeInputName = (event) => {
        setName(event.target.value)
    }

    const changeInputPassword = (event) => {
        setPassword(event.target.value)
    }

    const registerUser = () => {
        axios.post("http://localhost:8000/auth/register", {
            email,
            name,
            password
        }, {            
            headers: {
            'Content-Type': 'application/json'
        }}).then((response) => {
            if(response.data === "User created") {
                navigate('/login');
            } else {
                console.log("can not register", response.data);
            }
        })
    }

    return (
        <div>
            <div>
                <span>Email</span>
                <input name='email' type="text" onChange={changeInputEmail}/>
            </div>

            <div>
                <span>name</span>
                <input name='name' type="text" onChange={changeInputName}/>
            </div>

            <div>
                <span>password</span>
                <input name='password' type="text" onChange={changeInputPassword} />
            </div>

            <button onClick={registerUser} >
                Register
            </button>
        </div>
    )
}

export default Register;
