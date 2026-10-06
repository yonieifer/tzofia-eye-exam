import { useEffect, useState } from "react";
import type { User } from "../types/user";
import UserCard from "../components/UserCard";
import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

function UsersPage() {
    const [users, setAllusers] = useState<User[]>([]);
    const { error, isLoading, getAll } = useUsers();
    const navigate = useNavigate();

    useEffect(() => {
        getAll(setAllusers);
    }, [users]);
    return (
        <>
            <button onClick={() => navigate("/home")}>Back to Home</button>
            <button onClick={() => navigate("/register")}>
                Register New User
            </button>
            {users.map((user) => (
                <UserCard user={user} key={user.id} />
            ))}
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
        </>
    );
}

export default UsersPage;
