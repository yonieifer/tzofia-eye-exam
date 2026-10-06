import { useEffect, useState } from "react";
import type { User } from "../types/user";
import UserCard from "../components/UserCard";
import useUsers from "../hooks/useUsers";

function AdminPage() {
    const [users, setAllusers] = useState<User[]>([]);
    const { error, isLoading, getAll } = useUsers();

    useEffect(() => {
        getAll(setAllusers);
    }, [users]);
    return (
        <>
            {users.map((user) => (
                <UserCard user={user} key={user.id} />
            ))}
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
        </>
    );
}

export default AdminPage;
