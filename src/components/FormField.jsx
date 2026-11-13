export default function FormField({ id, label, error, children }) {
    return (
        <div>
            <label htmlFor={id} className="block text-gray-700 font-semibold mb-1">{label}</label>
            {children}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}