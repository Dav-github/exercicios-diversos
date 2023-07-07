export default function UseAuth() {
    const saveToken = (newToken: string) => {
        localStorage.setItem("token", newToken);
    };

    const loadToken = (): string | null => {
        return localStorage.getItem("token");
    };

    const removeToken = () => {
        localStorage.removeItem("token");
    };

    return {
        saveToken,
        loadToken,
        removeToken,
    };
}
