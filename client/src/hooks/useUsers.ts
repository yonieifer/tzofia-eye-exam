import { useState } from "react";
import api from "../config/api";
import useAuthStore from "../store/useAuthStore";
import type { AxiosError } from "axios";
import type { User } from "../types/user";

interface serverError {
    message: string;
}

function useUsers() {
    const [data, setdata] = useState<string | null>(null);
    const [msg, setMsg] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setLoading] = useState(false);
    const login = useAuthStore((state) => state.login);

    const catchError = (err: AxiosError<serverError>) => {
        const serverMsg = err.response?.data?.message;
        setError(typeof serverMsg === "string" ? serverMsg : "server error");
    };

    const create = (user: User) => {
        setLoading(true);
        api.post("/api/auth/register", { user })
            .then((res) => setMsg(res.data.message))
            .catch(catchError)
            .finally(() => setLoading(false));
    };

    const getAll = (setAllUsers: (users: User[]) => void) => {
        setLoading(true);
        api.get("/api/auth/users")
            .then((res) => setAllUsers(res.data.users))
            .catch(catchError)
            .finally(() => setLoading(false));
    };

    const getOne = (setUser: (user: User) => void) => {
        setLoading(true);
        api.get(`/api/auth/me`)
            .then((res) => setUser(res.data.user))
            .catch(catchError)
            .finally(() => setLoading(false));
    };

    const remove = (id: string) => {
        setLoading(true);
        api.delete(`/api/auth/users/${id}`)
            .then((res) => setMsg(res.data.message))
            .catch(catchError)
            .finally(() => setLoading(false));
    };

    const loginUser = (email: string, password: any) => {
        setLoading(true);
        api.post(`/api/auth/login`, { email, password })
            .then((res) => {
                const { user, token } = res.data;
                login(user, token);
            })
            .catch(catchError)
            .finally(() => setLoading(false));
    };
    return {
        data,
        msg,
        error,
        isLoading,
        create,
        getAll,
        getOne,
        remove,
        loginUser,
    };
}

export default useUsers;
