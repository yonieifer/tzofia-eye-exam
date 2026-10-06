export type User = {
    username: string;
    password: string;
    email: string;
    role: "arena_user" | "general_user" | "admin";
    assignedArena: "North" | "South" | "Center" | "All";
};
