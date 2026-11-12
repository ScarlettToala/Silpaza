//guarda quién está logueado y ofrece user, login() y logout() a cualquier componente.

import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// Lee el usuario guardado. Se ejecuta UNA vez, antes del primer render,
// así al recargar la página no te "desloguea" por un instante.
function leerUsuarioGuardado() {
    try {
        return JSON.parse(localStorage.getItem("userData"));
    } catch {
        return null;
    }
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(leerUsuarioGuardado);

    // Guarda la sesión. Quitamos la contraseña para no dejarla en userData.
    const login = (userData) => {
        // eslint-disable-next-line no-unused-vars
        const { password, ...usuarioSeguro } = userData;
        localStorage.setItem("userData", JSON.stringify(usuarioSeguro));
        setUser(usuarioSeguro);
    };

    const logout = () => {
        localStorage.removeItem("userData");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook para usar el contexto desde cualquier componente
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de <AuthProvider>");
    }
    return context;
}
