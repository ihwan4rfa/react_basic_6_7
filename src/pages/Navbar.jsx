import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <h1 className="navbar-text">Home</h1>
            </Link>
            <Link to="/login">
                <h1 className="navbar-text">Login</h1>
            </Link>
        </div>
    )
}

export default Navbar;