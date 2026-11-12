import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import HeaderLogIn from "../components/HeaderLogIn";
import Footer from "../components/Footer";
import logoImage from "../assets/img/LogooDEF.webp";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const countries = [
    "Argentina", "Bolivia", "Brasil", "Chile", "Colombia",
    "Ecuador", "Guyana", "Paraguay", "Perú", "Surinam",
    "Uruguay", "Venezuela", "España"
];

const Register = () => {

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        country: "España",
        phone: "",
        photo: null
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // localStorage tiene poco espacio (~5 MB), así que limitamos el tamaño
        if (file.size > 500 * 1024) {
            setErrors((prev) => ({ ...prev, photo: "La foto no puede pesar más de 500 KB" }));
            e.target.value = "";   // vacía el input
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            // reader.result es la imagen convertida a texto base64
            setFormData((prev) => ({ ...prev, photo: reader.result }));
            setErrors((prev) => ({ ...prev, photo: "" }));
        };

        reader.readAsDataURL(file);
    };
    const validateField = (name, value) => {

        let error = "";

        if (name === "email" && !value.includes("@")) {
            error = "Debe ingresar un email válido";
        }

        if (name === "password" && value.length < 6) {
            error = "La contraseña debe tener al menos 6 caracteres";
        }

        if (
            name === "confirmPassword" &&
            value !== formData.password
        ) {
            error = "Las contraseñas no coinciden";
        }

        if (name === "name" && !value.trim()) {
            error = "El nombre es obligatorio";
        }

        if (name === "country" && !value) {
            error = "Seleccione un país";
        }

        if (
            name === "phone" &&
            !value.match(/^[0-9]{7,15}$/)
        ) {
            error = "Ingrese un número válido (solo dígitos)";
        }

        return error;
    };

    const handleBlur = (e) => {

        const { name, value } = e.target;

        const error = validateField(name, value);

        setErrors({
            ...errors,
            [name]: error
        });
    };

    const validateForm = () => {

        const newErrors = {};

        Object.keys(formData).forEach((key) => {

            // La foto es opcional
            if (key === "photo") return;

            const error = validateField(
                key,
                formData[key]
            );

            if (error) {
                newErrors[key] = error;
            }
        });

        return newErrors;
    };

    const handleRegister = (e) => {

        e.preventDefault();

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {

            setErrors(validationErrors);
            setSuccess(false);

            return;
        }

        const users =
            JSON.parse(localStorage.getItem("users")) || [];

        if (users.some((u) => u.email === formData.email)) {

            alert("Usuario ya existe");

            return;
        }

        const newUser = {
            email: formData.email,
            password: formData.password,
            name: formData.name,
            country: formData.country,
            phone: formData.phone,
            photo: formData.photo
        };

        users.push(newUser);

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        login(newUser);


        setSuccess(true);

        navigate("/home");
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#fdfaf3]">

            {/* HEADER */}
            <HeaderLogIn logoImage={logoImage} />

            {/* CONTENIDO */}
            <main className="flex-1 flex items-center justify-center px-4 py-12">

                <div className="bg-[#FAEDCD] p-8 rounded-xl shadow-2xl w-full max-w-lg border border-[#E6D7A9]">

                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-wide">
                        Crear cuenta
                    </h2>

                    <form
                        onSubmit={handleRegister}
                        className="space-y-5"
                    >

                        {/* NOMBRE */}
                        <div>

                            <label
                                className="block text-gray-700 font-semibold mb-1"
                                htmlFor="name"
                            >
                                Nombre
                            </label>

                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Escriba su nombre"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                            />

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}

                        </div>

                        {/* EMAIL */}
                        <div>

                            <label
                                className="block text-gray-700 font-semibold mb-1"
                                htmlFor="email"
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Escriba su correo"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}

                        </div>

                        {/* CONTRASEÑA */}
                        <div>
                            <label
                                className="block text-gray-700 font-semibold mb-1"
                                htmlFor="password"
                            >
                                Contraseña
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Escriba su contraseña"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#A4133C] transition"
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* CONFIRMAR CONTRASEÑA */}
                        <div>
                            <label
                                className="block text-gray-700 font-semibold mb-1"
                                htmlFor="confirmPassword"
                            >
                                Confirmar contraseña
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirme su contraseña"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#A4133C] transition"
                                    aria-label={
                                        showConfirmPassword
                                            ? "Ocultar contraseña"
                                            : "Mostrar contraseña"
                                    }
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        {/* PAÍS */}
                        <div>

                            <label
                                className="block text-gray-700 font-semibold mb-1"
                                htmlFor="country"
                            >
                                País
                            </label>

                            <select
                                name="country"
                                id="country"
                                value={formData.country}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                            >

                                <option value="">
                                    Seleccione un país
                                </option>

                                {countries.map((country) => (
                                    <option
                                        key={country}
                                        value={country}
                                    >
                                        {country}
                                    </option>
                                ))}

                            </select>

                            {errors.country && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.country}
                                </p>
                            )}

                        </div>

                        {/* TELÉFONO */}
                        <div>

                            <label
                                className="block text-gray-700 font-semibold mb-1"
                                htmlFor="phone"
                            >
                                Teléfono
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Escriba su número de teléfono"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                maxLength={9}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                            />

                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.phone}
                                </p>
                            )}

                        </div>

                        {/* FOTO */}
                        <div>

                            <label
                                className="block text-gray-700 font-semibold mb-2"
                                htmlFor="photo"
                            >
                                Foto de perfil
                                <span className="font-normal text-gray-500">
                                    {" "} (opcional)
                                </span>
                            </label>

                            <div className="flex items-center gap-3">

                                <label
                                    htmlFor="photo"
                                    className="cursor-pointer bg-[#F480AD] hover:bg-[#e66b9a] text-black px-4 py-2 rounded-lg shadow transition font-medium"
                                >
                                    📁 Seleccionar archivo
                                </label>

                                <span className="text-sm text-gray-600 truncate">
                                    {formData.photo
                                        ? formData.photo.name
                                        : "Ningún archivo seleccionado"}
                                </span>

                                <input
                                    type="file"
                                    name="photo"
                                    id="photo"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="hidden"
                                />

                                {errors.photo && (
                                    <p className="text-red-600 text-sm">{errors.photo}</p>
                                )}

                            </div>

                        </div>

                        {/* BOTÓN */}
                        <button
                            type="submit"
                            className="w-full bg-[#A4133C] text-white py-2 rounded-lg hover:bg-[#C72A55] transition-all shadow-md font-semibold"
                        >
                            Registrarse
                        </button>

                        {success && (
                            <p className="text-green-600 text-center">
                                ¡Registro exitoso!
                            </p>
                        )}

                        {/* LOGIN */}
                        <p className="text-center text-gray-700">
                            ¿Ya tienes cuenta?{" "}

                            <Link
                                to="/login"
                                className="text-[#770e2b] font-semibold hover:underline"
                            >
                                Inicia sesión
                            </Link>

                        </p>

                    </form>

                </div>

            </main>

            {/* FOOTER */}
            <Footer logo={logoImage} />

        </div>
    );
};

export default Register;

