import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

import AuthContext from '../../contexts/authContext';

function Login() {
    const navigate = useNavigate()

    const { setAuthState } = useContext(AuthContext);

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
                localStorage.setItem("accessToken", response.data.accessToken);
                setAuthState({
                    name: response.data.name,
                    id: response.data.id,
                    status: true,
                });
                navigate('/dashboard');
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
