import { FiChevronDown } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

const CustomSelect = ({ labelText, id, items = [], placeholder, value = '', onChange, labelKey, valueKey }) => {

    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null); // Attach ref for click-outside handling

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (item) => {
        const newValue = item[valueKey || 'value'];
        setIsOpen(false);

        if (onChange) { 
            onChange(newValue);
        }
    };

    const getSelectedLabel = () => {
        const selected = items.find(item => item[valueKey || 'value'] === value);
        return selected ? selected[labelKey || 'label'] : placeholder;

    };

    return (
        <div id={id} className="flex justify-between items-center w-full " ref={selectRef}>
            <div className="relative flex items-center justify-between border border-gray-300 px-2 py-2 rounded-lg w-full cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <span className="text-gray-700 select-none">{getSelectedLabel()}</span>
                <div className="inline-flex items-center justify-center bg-gray-100 rounded-sm w-8 h-8">
                    <FiChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </div>
                {isOpen && (
                    <div className="absolute left-0 right-0 top-full select-none mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 overflow-auto">
                        {items.length === 0 && (
                            <div className="px-4 py-2 text-gray-400">Sin opciones</div>
                        )}
                        {items.map((item) => (
                            <div
                                key={item[valueKey || 'value']}
                                onClick={() => handleSelect(item)}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {item[labelKey || 'label']}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CustomSelect;