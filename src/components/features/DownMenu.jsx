import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Menu = ({ subLinks, onItemClick }) => {
    return (
        <div className="absolute right-0 sm:right-12 select-none top-10 bg-white border border-gray-200 rounded-md shadow-lg w-52 sm:w-48 z-50" role="menu">
            {subLinks.map((subLink, index) => (
                <Link
                    key={index}
                    to={subLink.url}
                    className="block p-3 hover:bg-gray-200"
                    role="menuitem"
                    onClick={onItemClick}         
                >
                    {subLink.label}
                </Link>
            ))}
        </div>
    );
};

const DownMenu = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close on click outside and on Escape key
    useEffect(() => {
        if (!isOpen) return;

        const handleClick = (e) => {
            if (!containerRef.current) return;
            if (!containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        const handleKey = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);
        document.addEventListener('keydown', handleKey);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('touchstart', handleClick);
            document.removeEventListener('keydown', handleKey);
        };
    }, [isOpen]);

    return (
        <div ref={containerRef} className="relative flex sm:min-w-32 justify-end">
            <FiMenu
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-haspopup="menu"
                className="w-8 h-8 text-black hover:text-gray-800 cursor-pointer "
            />
            {isOpen && (
                <Menu
                    subLinks={links}
                    onItemClick={() => setIsOpen(false)}
                />
            )}
        </div>
        );
    };

    export default DownMenu;