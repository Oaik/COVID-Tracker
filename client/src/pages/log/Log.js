import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';

import { Form, Button, FloatingLabel } from 'react-bootstrap';

function Log() {
    const navigate = useNavigate()

    const [logState, setLogState] = useState({
        temperature: 0,
        latitude: 0,
        longitude: 0,
        age: 0,
        isVaccinated: false,
        gender: "Other"
    })

    const updateInputAttribute = (event) => {
        console.log(event.target.name);
        setLogState({
            ...logState,
            [event.target.name]: event.target.value
        })
    }

    const changeCheckboxInput = (event) => {
        setLogState({
            ...logState,
            [event.target.name]: event.target.checked
        })
    }

    const setPositionCoordinaties = (coordinaties) => {
        setLogState({
            ...logState,
            longitude: coordinaties.longitude,
            latitude: coordinaties.latitude
        })
    }

    useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            navigate('/login');
        }
        
        navigator.geolocation.getCurrentPosition((position) => {
            setPositionCoordinaties(position.coords);
        });
    }, [])

    const createLog = (event) => {
        event.preventDefault();
        console.log(logState);
        axios.post("http://localhost:8000/api/log", {
            ...logState          
        }, {            
            headers: {
                'Content-Type': 'application/json',
                'accessToken': localStorage.getItem("accessToken")
            }
        }).then((response) => {
            console.log("log", response.data);
        })
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="email">
                <FloatingLabel controlId="temperature" label="temperature" className="mt-3">
                    <Form.Control name='temperature' type="number" placeholder="Enter temperature" onChange={updateInputAttribute} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <FloatingLabel controlId="age" label="age" className="mt-3">
                    <Form.Control name='age' type="number" placeholder="Enter age" onChange={updateInputAttribute} />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-3" controlId="isVaccinated">
                <Form.Check onChange={changeCheckboxInput}
                    type="switch"
                    id="isVaccinated"
                    name="isVaccinated"
                    label="Are you Vaccinated"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="gender">
  
                    <FloatingLabel controlId="floatingSelect" label="Select your gender">
                        <Form.Select name="gender" aria-label="Floating label select example" onChange={updateInputAttribute}>
                            <option value="Other">...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </FloatingLabel>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={createLog}>
                Create new log
            </Button>
        </Form>
    )
}

export default Log;
