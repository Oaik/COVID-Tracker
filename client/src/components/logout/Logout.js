import { useContext } from "react";
import { useNavigate } from "react-router-dom"

import AuthContext from '../../contexts/authContext';

const Logout = () => {
    const navigate = useNavigate()

    const { setAuthState } = useContext(AuthContext);

    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
    
    navigate('/');
};

export default Logout;