import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import AuthContext from '../../contexts/authContext';

const Logout = () => {
    const navigate = useNavigate()

    const { setAuthState } = useContext(AuthContext);

    useEffect(() => {
        axios.post("http://localhost:8000/auth/logout").then(() => {
            localStorage.removeItem("accessToken");
            setAuthState({ username: "", id: 0, status: false });

            navigate('/');
        }).catch((error) => {
            console.log("Can not logout", error);
        })
    }, []);
};

export default Logout;