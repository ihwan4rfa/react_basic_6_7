import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const token = localStorage.getItem('access_token')
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("access_token");

        setTimeout(() => {
            navigate("/login")
        }, 1000)
    }

    return (
        <div className="navbar">
            <Link className="link" to="/">
                <h1>Home</h1>
            </Link>
            <Link className="link" to="/login">
                <h1>Login</h1>
            </Link>
            {token && <button className="link" onClick={handleLogout}>logout</button>}
        </div>
    )
}

export default Navbar;