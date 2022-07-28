import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from '../../contexts/authContext';

const Navbar = () => {
    const { authState } = useContext(AuthContext);

    return (
    <div>
        <Link to="/"> Home</Link>
        <Link to="/dashboard"> Dashboard</Link>
        {authState.status ? 
        <>
            <Link to="/log"> Log</Link>
            <Link to="/profile"> Profile</Link>
            <Link to="/logout"> Logout</Link>
        </>
        :
        <>
            <Link to="/login"> Login</Link>
            <Link to="/register"> Register</Link>
        </>
        }

    </div>
    )
};

export default Navbar;