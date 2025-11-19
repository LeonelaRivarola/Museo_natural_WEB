import { useEffect, useState } from "react";

export function useAuth() {
    const [user, setUser] = useState(null); // Sin tipos
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkSession = () => {
            try {
                const token = localStorage.getItem("token");
                const storedUser = localStorage.getItem("user");

                if (token && storedUser) {
                    const parsed = JSON.parse(storedUser);
                    setUser({ nombre: parsed.nombre, rol: parsed.rol });
                } else {
                    setUser(null);
                }
            } catch (err) {
                console.error("Error leyendo sesión:", err);
            } finally {
                setLoading(false);
            }
        };

        checkSession();
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return { user, loading, logout };
}
