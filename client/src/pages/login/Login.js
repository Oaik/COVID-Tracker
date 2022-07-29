import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

import { Form, Button, FloatingLabel } from 'react-bootstrap';

import AuthContext from '../../contexts/authContext';

function Login() {
    const navigate = useNavigate()

    const { setAuthState } = useContext(AuthContext);

    const [userState, setUserState] = useState({
        email: "",
        password: ""
    })

    const updateInputAttribute = (event) => {
        setUserState({
            ...userState,
            [event.target.name]: event.target.value
        })
    }

    const loginUser = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/auth/login", {
            ...userState
        }, {            
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if(response.data.accessToken) {
                localStorage.setItem("accessToken", response.data.accessToken);

                console.log("inside login", response.data);
                setAuthState({
                    name: response.data.name,
                    id: response.data.id,
                    status: true,
                });

                navigate('/dashboard');
            }

        }).catch((error) => {
            console.log("Error while logging", error);
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="email">
                <FloatingLabel controlId="email" label="Email" className="mt-3">
                    <Form.Control name='email' type="email" placeholder="Enter email" onChange={updateInputAttribute} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <FloatingLabel controlId="password" label="Password" className="mt-3">
                    <Form.Control name='password' type="password" placeholder="Enter password" onChange={updateInputAttribute} />
                </FloatingLabel>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={loginUser}>
                Login
            </Button>
        </Form>
    )
}

export default Login;
