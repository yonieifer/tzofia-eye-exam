import { useState } from "react";
import useUsers from "../hooks/useUsers";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { error, isLoading, loginUser } = useUsers();

    return (
        <>
            <form onSubmit={() => loginUser(email, password)}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    required
                />
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
                {isLoading && <p>Loading...</p>}
            </form>
        </>
    );
}

export default LoginPage;
