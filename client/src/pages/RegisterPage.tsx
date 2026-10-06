import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import type { AssignedArena, Role, User } from "../types/user";

function RegisterPage() {
    const [newUser, setNewUser] = useState<User>({
        username: "",
        password: "",
        email: "string",
        role: "arena_user",
        assignedArena: "North",
    });
    const { error, isLoading, create } = useUsers();
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate("/home")}>Back to Home</button>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    create(newUser);
                }}
            >
                <input
                    type="text"
                    value={newUser.username}
                    onChange={(e) =>
                        setNewUser({ ...newUser, username: e.target.value })
                    }
                    placeholder="username"
                    required
                />
                <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) =>
                        setNewUser({ ...newUser, password: e.target.value })
                    }
                    placeholder="password"
                    required
                />

                <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                    placeholder="email"
                    required
                />

                <select
                    name="role"
                    onChange={(e) =>
                        setNewUser({ ...newUser, role: e.target.value as Role })
                    }
                    required
                >
                    <option value="">--Please choose role--</option>
                    <option value="arena_user">Arena User</option>
                    <option value="general_user">General User</option>
                    <option value="admin">Admin</option>
                </select>

                <select
                    name="assignedArena"
                    onChange={(e) =>
                        setNewUser({
                            ...newUser,
                            assignedArena: e.target.value as AssignedArena,
                        })
                    }
                    required
                >
                    <option value="">--Please choose assignedArena--</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="Center">Center</option>
                    <option value="All">All</option>
                </select>

                <button type="submit">Register</button>
                {error && <p>{error}</p>}
                {isLoading && <p>Loading...</p>}
            </form>
        </>
    );
}

export default RegisterPage;
