import React from "react";
import { Link } from "react-router-dom";

/*======== Ruta del Logo ========*/
import logo from "../assets/img/LogooDEF.webp";

export default function HeaderLogIn() {
    const logoImage = logo;
    return (
        <header className="bg-[#F480AD] text-black shadow-md px-6 py-6 relative ">
            <div className="container mx-auto flex items-center justify-between">

                <Link
                    to="/welcome"
                    className="relative font-[Open_Sans] text-lg
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px]
                                    after:w-0 after:bg-white after:transition-all
                                    hover:after:w-full transition"
                >
                    Welcome 
                </Link>

                {/* Logo centrado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
                    <img src={logoImage} alt="Logo de la empresa Silpaza" className="w-20 h-20 object-contain rounded-full" />
                </div>

            </div>
        </header>
    );
}
