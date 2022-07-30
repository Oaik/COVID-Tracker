import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom"
import axios from "axios";

import { Form, Button, FloatingLabel, Container, Row, Col } from 'react-bootstrap';

import AuthContext from '../../contexts/authContext';
import LogsContainer from "../../components/LogsContainer/LogsContainer";

function Profile() {
    const navigate = useNavigate()

    const { authState, setAuthState } = useContext(AuthContext);

    const [userLogs, setUserLogs] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updatedUserState, setUpdatedUserState] = useState({
        name: ""
    })
    const [showLogs, setShowLogs] = useState(false);

    const toogleUpdateForm = () => {
        setIsUpdating(!isUpdating);
    }

    const toogleLogs = () => {
        setShowLogs(!showLogs);
    }

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
            toogleUpdateForm();
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

            setUserLogs(response.data.logs);
        })
    })

    return (
        <div>
            <Container fluid>
                <Row className=''>
                    <Col xs={{span: 12}} md={{span: 3, offset: 1}} className="pt-5">
                        
                        <img src="https://i.pravatar.cc/150?img=60" className="rounded-circle mb-3"/>
                        {!isUpdating ? 
                        (
                            <div>
                                <h3 className="mb-3">
                                    Hello, {authState.name}
                                </h3>

                                <Button variant="dark" type="submit" onClick={toogleUpdateForm}>
                                    update Profile
                                </Button>
                            </div>

                        ) 
                        : 
                        (
                        <Form className='pt-5 me-5'>
                            <Form.Group className="mb-3" controlId="name">
                                <FloatingLabel controlId="name" label="name" className="mt-3">
                                    <Form.Control name='name' type="text" onChange={updateInputAttribute} />
                                </FloatingLabel>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={updateUser}>
                                update user
                            </Button>
                        </Form>
                        )
                        }


                    </Col>

                    <Col md={{span: 6}} className='pt-5'>
                        <h5>
                            Your Logs
                            
                        </h5>
                        
                        <hr />

                        <h5>
                            You have created {userLogs.length} logs
                        </h5>
                        
                        <Button variant={showLogs ? "dark" : "primary"} type="submit" onClick={toogleLogs} className="my-3">
                            {showLogs ? "hide" : "Show"} logs
                        </Button>

                        {showLogs && <LogsContainer logs={userLogs} /> }

                        <br />
                        
                        <Link to="/log" className="text-muted">
                           Create new log?
                           
                        </Link>
                    </Col>


                </Row>
            </Container>
        </div>

        
    )
}

export default Profile;
