
const ZoneCard = ({ title, linkUrl }) => {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <a href={linkUrl} className="flex p-4 hover:bg-gray-100 aspect-square justify-center items-center transition-colors">
                <h3 className="font-semibold text-lg">{title}</h3>
            </a>
        </div>
    );
};

export default ZoneCard;