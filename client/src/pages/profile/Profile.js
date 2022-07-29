import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import { Form, Button, FloatingLabel } from 'react-bootstrap';

import AuthContext from '../../contexts/authContext';

function Profile() {
    const navigate = useNavigate()

    const { authState, setAuthState } = useContext(AuthContext);

    const [updatedUserState, setUpdatedUserState] = useState({
        name: ""
    })

    const updateInputAttribute = (event) => {
        setUpdatedUserState({
            ...updatedUserState,
            [event.target.name]: event.target.value
        })
    }

    const updateUser = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:8000/user/profile/${authState.id}`, {
            ...authState,
            ...updatedUserState
        }, {            
            headers: {
                'Content-Type': 'application/json',
                'accessToken': localStorage.getItem("accessToken")
            }
        }).then((response) => {
            localStorage.setItem("accessToken", response.data.accessToken)

            setAuthState({
                ...response.data.user,
                status: true
            });
        })
    }

    useEffect(() => {
        if(!localStorage.getItem("accessToken")) {
            navigate('/');
        }

        axios.post("http://localhost:8000/user/profile/", {}, {            
            headers: {
                'Content-Type': 'application/json',
                'accessToken': localStorage.getItem("accessToken")
           }
        }).then((response) => {
            if(response.data.error) {
                console.log("Tried to update another user page");
                navigate('/');
            }
        })
    })

    return (
        <div>
            Hello, {authState.name}

            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <FloatingLabel controlId="name" label="name" className="mt-3">
                        <Form.Control name='name' type="text" onChange={updateInputAttribute} />
                    </FloatingLabel>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={updateUser}>
                    Login
                </Button>
            </Form>
        </div>

        
    )
}

export default Profile;
