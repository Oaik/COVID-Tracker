import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

import { Form, Button, FloatingLabel } from 'react-bootstrap';

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

    const loginUser = (event) => {
        event.preventDefault();

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
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <FloatingLabel controlId="floatingInput" label="Email" className="mt-3">
                    <Form.Control name='email' type="email" placeholder="Enter email" onChange={changeInputEmail} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <FloatingLabel controlId="floatingInput" label="Password" className="mt-3">
                    <Form.Control name='email' type="email" placeholder="Enter email" onChange={changeInputPassword} />
                </FloatingLabel>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={loginUser}>
                Login
            </Button>
        </Form>
    )
}

export default Login;
