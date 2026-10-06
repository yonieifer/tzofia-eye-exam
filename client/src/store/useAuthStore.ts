import { create } from "zustand";
import type { User } from "../types/user";
import { persist } from "zustand/middleware";

interface AuthState {
    user: User | null;
    token: string | null;
    logout: () => void;
    login: (user: User, token: string) => void;
}

export default create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            token: null,
            logout: () => set({ user: null, token: null }),
            login: (user: User, token: string) =>
                set({ user: user, token: token }),
        }),
        { name: "auth" },
    ),
);
