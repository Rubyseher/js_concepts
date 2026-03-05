interface User {
    id: number;
    name: string;
    email: string;
    balance: number
}
interface ApiResponse<T> {
    success: boolean;
    data: T | null;
    error?: number;
}

const userResponse: ApiResponse<User> = {
    success: true,
    data: {
        id: 1,
        name: "bob",
        email: "a@gmail",
        balance: 123
    },
    error: 404,
}