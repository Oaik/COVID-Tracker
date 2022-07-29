import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

import { Form, Button, FloatingLabel } from 'react-bootstrap';

function Register() {
    const navigate = useNavigate()

    const [userState, setUserState] = useState({
        email: "",
        name: "",
        password: ""
    })

    const updateInputAttribute = (event) => {
        setUserState({
            ...userState,
            [event.target.name]: event.target.value
        })
    }

    const registerUser = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/auth/register", {
            ...userState
        }, {            
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if(response.data === "User created") {
                navigate('/login');
            } else {
                console.log("can not register", response.data);
            }
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="email">
                <FloatingLabel controlId="email" label="Email" className="mt-3">
                    <Form.Control name='email' type="email" placeholder="Enter email" onChange={updateInputAttribute} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <FloatingLabel controlId="name" label="Name" className="mt-3">
                    <Form.Control name='name' type="text" placeholder="Enter name" onChange={updateInputAttribute} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <FloatingLabel controlId="password" label="Password" className="mt-3">
                    <Form.Control name='password' type="password" placeholder="Enter password" onChange={updateInputAttribute} />
                </FloatingLabel>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={registerUser}>
                Register
            </Button>
        </Form>
        
    )
}

export default Register;
