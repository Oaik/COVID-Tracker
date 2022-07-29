import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

import { Form, Button, FloatingLabel, Container, Row, Col } from 'react-bootstrap';

import AuthContext from '../../contexts/authContext';

import "./login.css"

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
        <div className='input-container'>
            <Container>
                <Row className='pt-5'>
                    <Col md={{span: 4, offset: 2}} className='pt-5'>
                        <h3>
                            COVID Tracker
                        </h3>
                        <p className='text-white'>
                            Join the COVID Tracker now and start to track your logs
                        </p>
                    </Col>

                    <Col md={{span: 4, offset: 1}} className='pt-5'>
                        <h4 className='mb-4 text-welcome'>
                            Login into your account
                        </h4>
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
                            <Row>
                                <Col className="mt-4 mb-2">
                                    <div className='d-grid gap-2' >
                                        <Button variant="primary" type="submit" size="lg" onClick={loginUser}>
                                            Log in
                                        </Button>
                                    </div>
                                </Col>
                            </Row>


                            <div className='text-center text-welcome'>
                                Dont have an account? 
                                <Link to="/register" className='text-light'>
                                    Create
                                </Link>
                            </div>
                        </Form>
                    </Col>


                </Row>

            </Container>
        </div>
        
    )
}

export default Login;
