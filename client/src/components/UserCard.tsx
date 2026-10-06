import type { User } from "../types/user";
import useUsers from "../hooks/useUsers";

function UserCard({ user }: { user: User }) {
    const { error, isLoading, remove } = useUsers();

    return (
        <article>
            <h3>{user.username}</h3>
            <h4>{user.role}</h4>
            <p>{user.assignedArena}</p>
            <p>{user.email}</p>
            <button onClick={() => remove(user.id!)}>Delete User</button>
            {error && <p>{error}</p>}
            {isLoading && <p>Loading...</p>}
        </article>
    );
}

export default UserCard;
