import { FaSearch } from "react-icons/fa";

const SearchRent = () => {
    return (
        <form action="#" method="GET" className="flex w-full p-2 min-w-[500px] mx-auto shadow-lg border border-gray-300 rounded-full overflow-hidden">
            <input type="text" className="flex-grow px-6 focus:outline-none" placeholder="Buscar propiedades en alquiler" />
            <button type="submit" className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white">
                <FaSearch className="rounded-full" />
            </button>
        </form>
    );
}

export default SearchRent;