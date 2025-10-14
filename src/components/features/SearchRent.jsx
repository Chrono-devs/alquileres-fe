import { FiSearch } from "react-icons/fi";

const SearchRent = () => {
    return (
        <form action="#" method="GET" className="flex w-full px-2.5 py-2 min-x-[300px] md:min-w-[760px] sm:min-w-[600px] mx-auto shadow-lg border border-gray-300 rounded-full overflow-hidden">
            <input type="text" className="flex-grow px-6 text-lg focus:outline-none" required placeholder="Buscar propiedades en alquiler" />
            <button type="submit" className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer">
                <FiSearch size={20} className="rounded-full" />
            </button>
        </form>
    );
}

export default SearchRent;