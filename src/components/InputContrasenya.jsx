import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputContrasenya(props) {
    const [show, setShow] = useState(false);
    return (
        <div className="relative">
            <input {...props} type={show ? "text" : "password"} required
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]" />
            <button type="button" onClick={() => setShow(!show)}
                aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#A4133C] transition">
                {show ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    );
}