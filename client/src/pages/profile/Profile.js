import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import AuthContext from '../../contexts/authContext';

function Profile() {
    const navigate = useNavigate()

    const { authState, setAuthState } = useContext(AuthContext);

    const [newName, setNewName] = useState("");

    const changeInputName = (event) => {
        setNewName(event.target.value)
    }

    const updateUser = () => {

        axios.put(`http://localhost:8000/user/profile/${authState.id}`, {
            ...authState,
            name: newName
        }, {            
            headers: {
            'Content-Type': 'application/json',
            'accessToken': localStorage.getItem("accessToken")
        }}).then((response) => {
            console.log(response.data)
            localStorage.setItem("accessToken", response.data.accessToken)

            setAuthState({
                ...response.data.user,
                status: true
            });
        })
    }

    useEffect(() => {
        axios.post("http://localhost:8000/user/profile/", {}, {            
            headers: {
            'Content-Type': 'application/json',
            'accessToken': localStorage.getItem("accessToken")
        }}).then((response) => {
            if(response.data.error) {
                console.log("Tried to update another user page");
                navigate('/');
            }
        })
    })

    return (
        <div>
            Hello, {authState.name} | {authState.id}

            <div>
                <span>name</span>
                <input name='name' type="text" onChange={changeInputName}/>
            </div>

            <button onClick={updateUser} >
                update user
            </button>

        </div>

        
    )
}

export default Profile;
