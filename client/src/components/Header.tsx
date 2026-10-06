import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

function Header() {
    const user = useAuthStore((state) => state.user);
    return (
        <>
            <h1>Tzofia eye</h1>
            <p>Alert system</p>
            <article>
                <h2>{user?.username}</h2>
                <p>{user?.role}</p>
            </article>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/alert/new">Add New Alert</Link>
                {user?.role === "admin" && (
                    <>
                        <Link to="/admin">Admin Page</Link>
                        <Link to="/admin/register">Register Page</Link>
                    </>
                )}
            </nav>
        </>
    );
}

export default Header;
