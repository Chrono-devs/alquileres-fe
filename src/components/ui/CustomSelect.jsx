import { FiChevronDown } from "react-icons/fi";

const CustomSelect = ({labelText = 'Selecciona una opcion'}) => {
    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center justify-center border border-gray-300 px-5 py-2  rounded-lg">

                <span>{labelText}</span>

                <div className="inline-flex items-center justify-center ml-10 bg-gray-100 rounded-sm w-10 h-10">
                    <FiChevronDown className="w-6 h-6 text-gray-500" />
                </div>
            </div>
        </div>
    )
}

export default CustomSelect;