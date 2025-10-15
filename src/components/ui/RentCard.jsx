import { FaBed, FaExpand, FaMapMarkerAlt, FaMap } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";

import ArsPrice from "@/utils/ArsPrice";

const RentCard = ({ title, price, imageUrl, size, location, rooms }) => {
    const [isFavorited, setIsFavorite] = useState(false);

    const handleFavoriteToggle = () => {
        setIsFavorite(!isFavorited);
    }

    const favoriteButtonClass = isFavorited
        ? "bg-amber-100 text-amber-400 hover:text-amber-800 hover:bg-red-100 active:text-amber-600 active:scale-95 active:bg-amber-200"
        : "bg-white/90 text-gray-700 hover:text-purple-600 hover:bg-white/50 active:text-amber-300 active:scale-95 active:bg-amber-100";

    return (
        <div className="flex flex-col gap-2">
            <div className="relative">
                <img className=" border border-gray-300 h-52 rounded w-full shadow-lg" src={imageUrl} alt={title} />
                <button
                    type="button"
                    aria-label="Agregar a favoritos"
                    title="Agregar a favoritos"
                    className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${favoriteButtonClass} shadow-md cursor-pointer`}
                    onClick={(e) => { e.preventDefault(); handleFavoriteToggle(); }}
                >
                    <FiHeart size={20} />
                </button>
            </div>
            <span className="font-semibold text-xl">$ {ArsPrice(price)} / mes</span>
            <div className="flex justify-between max-w-8 gap-3">
                <span className="flex items-center text-md font-semibold tracking-wide text-gray-950 gap-2 border-r border-gray-400 pr-3" ><FaExpand className="text-purple-500" /> <span>{size}</span> m²</span>
                <span className="flex items-center text-md font-semibold tracking-wide text-gray-950 gap-1 border-r border-gray-400 pr-3" ><FaMapMarkerAlt className="text-purple-500" /> <span>{location}</span></span>
                <span className="flex items-center text-md font-semibold tracking-wide text-gray-950 gap-2" ><FaBed className="text-purple-500" /> <span>{rooms}</span></span>
            </div>
        </div>
    );
}

export default RentCard;