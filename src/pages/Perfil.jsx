// src/pages/Perfil.jsx
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Perfil() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfaf3]">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="bg-[#FAEDCD] p-8 rounded-xl shadow-2xl w-full max-w-md border border-[#E6D7A9] text-center">
          {user.photo ? (
            <img src={user.photo} alt={`Foto de ${user.name}`}
                 className="w-28 h-28 rounded-full object-cover mx-auto mb-4" />
          ) : (
            <div className="w-28 h-28 rounded-full bg-[#A4133C] text-white text-4xl flex items-center justify-center mx-auto mb-4">
              {user.name?.[0]?.toUpperCase()}
            </div>
          )}
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <dl className="mt-6 space-y-2 text-gray-700 text-left">
            <div><dt className="font-semibold inline">Email: </dt><dd className="inline">{user.email}</dd></div>
            <div><dt className="font-semibold inline">País: </dt><dd className="inline">{user.country}</dd></div>
            <div><dt className="font-semibold inline">Teléfono: </dt><dd className="inline">{user.phone}</dd></div>
          </dl>
          <button onClick={logout}
                  className="mt-6 w-full bg-[#A4133C] text-white py-2 rounded-lg hover:bg-[#C72A55] transition font-semibold">
            Cerrar sesión
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}