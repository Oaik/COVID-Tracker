import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div>
        <Link to="/"> Home</Link>
        <Link to="/dashboard"> Dashboard</Link>
        <Link to="/log"> Log</Link>
        <Link to="/login"> Login</Link>
        <Link to="/register"> Register</Link>
        <Link to="/logout"> Logout</Link>
    </div>
    )
};

export default Navbar;