import { useState } from 'react';
import { useNavigate } from "react-router-dom"

import axios from 'axios';

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeInputEmail = (event) => {
        setEmail(event.target.value)
    }

    const changeInputPassword = (event) => {
        setPassword(event.target.value)
    }

    const loginUser = () => {
        axios.post("http://localhost:8000/auth/login", {
            email,
            password
        }, {            
            headers: {
            'Content-Type': 'application/json'
        }}).then((response) => {
            if(response.data.accessToken) {
                navigate('/dashboard');
            }
            
            console.log("LOGIN: ", response.data.accessToken);
        })
    }

    return (
        <div>
            <div>
                <span>Email</span>
                <input name='email' type="text" onChange={changeInputEmail}/>
            </div>

            <div>
                <span>password</span>
                <input name='password' type="text" onChange={changeInputPassword} />
            </div>

            <button onClick={loginUser} >
                Login
            </button>
        </div>
    )
}

export default Login;
