import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/*Componentes*/
import HeaderLogIn from "../components/Header";
import Footer from "../components/Footer";
import FormField from "../components/FormField";
import InputContrasenya from "../components/InputContrasenya";

import { useAuth } from "../context/AuthContext";

const countries = [
    { name: "Argentina", prefix: "+54" },
    { name: "Bolivia", prefix: "+591" },
    { name: "Brasil", prefix: "+55" },
    { name: "Chile", prefix: "+56" },
    { name: "Colombia", prefix: "+57" },
    { name: "Ecuador", prefix: "+593" },
    { name: "Guyana", prefix: "+592" },
    { name: "Paraguay", prefix: "+595" },
    { name: "Perú", prefix: "+51" },
    { name: "Surinam", prefix: "+597" },
    { name: "Uruguay", prefix: "+598" },
    { name: "Venezuela", prefix: "+58" },
    { name: "España", prefix: "+34" }
];

// Clases comunes de los inputs (antes estaban repetidas en cada campo)
const inputClass =
    "w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]";

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

    // La foto se guarda como texto base64, así que el nombre del archivo va aparte
    const [photoName, setPhotoName] = useState("");

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        let { name, value } = e.target;

        // Teléfono: solo números, sin prefijo (+34 / 0034) y máximo 9 dígitos
        if (name === "phone") {
            value = value.replace(/\D/g, "");                  // quita +, espacios, guiones...
            value = value.replace(/^00/, "");                  // 0034... -> 34...
            if (value.startsWith("34","") && value.length > 9) {
                value = value.slice(2);                        // quita el prefijo 34
            }
            value = value.slice(0, 9);
        }

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
            setPhotoName(file.name);
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
            !/^[0-9]{7,10}$/.test(value)
        ) {
            error = "El teléfono debe tener entre 7 y 10 dígitos";
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
            countryPrefix: countries.find((c) => c.name === formData.country)?.prefix,
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
            <HeaderLogIn />

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
                        <FormField id="name" label="Nombre" error={errors.name}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Escriba su nombre"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className={inputClass}
                            />
                        </FormField>

                        {/* EMAIL */}
                        <FormField id="email" label="Email" error={errors.email}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Escriba su correo"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className={inputClass}
                            />
                        </FormField>

                        {/* CONTRASEÑA */}
                        <FormField id="password" label="Contraseña" error={errors.password}>
                            <InputContrasenya
                                id="password"
                                name="password"
                                placeholder="Escriba su contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </FormField>

                        {/* CONFIRMAR CONTRASEÑA */}
                        <FormField id="confirmPassword" label="Confirmar contraseña" error={errors.confirmPassword}>
                            <InputContrasenya
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirme su contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </FormField>

                        {/* PAÍS */}
                        <FormField id="country" label="País" error={errors.country}>
                            <select
                                name="country"
                                id="country"
                                value={formData.country}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                className={inputClass}
                            >
                                <option value="">
                                    Seleccione un país
                                </option>

                                {countries.map((country) => (
                                    <option key={country.name} value={country.name}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </FormField>

                        {/* TELÉFONO */}
                        <FormField id="phone" label="Teléfono" error={errors.phone}>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Escriba su número de teléfono"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputMode="tel"
                                required
                                className={inputClass}
                            />
                        </FormField>

                        {/* FOTO */}
                        <FormField
                            id="photo"
                            label={
                                <>
                                    Foto de perfil
                                    <span className="font-normal text-gray-500">
                                        {" "}(opcional)
                                    </span>
                                </>
                            }
                            error={errors.photo}
                        >
                            <div className="flex items-center gap-3">

                                {/* Este label hace de botón; el de arriba ya enlaza con el input */}
                                <label
                                    htmlFor="photo"
                                    className="cursor-pointer bg-[#F480AD] hover:bg-[#e66b9a] text-black px-4 py-2 rounded-lg shadow transition font-medium"
                                >
                                    📁 Seleccionar archivo
                                </label>

                                <span className="text-sm text-gray-600 truncate">
                                    {photoName || "Ningún archivo seleccionado"}
                                </span>

                                <input
                                    type="file"
                                    name="photo"
                                    id="photo"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="hidden"
                                />

                            </div>
                        </FormField>

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
            <Footer />

        </div>
    );
};

export default Register;