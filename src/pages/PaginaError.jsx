import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from '../assets/img/logooDEF.webp';

export default function PaginaError() {
    return (
        <>
        <Header logoImage={logo}/>  
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#a91f46] px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Error 404 - Página No Encontrada
            </h1>
        
        </div>
        <Footer logoImage={logo}/>
        </>
    );
}
