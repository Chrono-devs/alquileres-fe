const Footer = () => {
    return (
        <footer className="flex py-4 mt-8 border-t border-gray-300">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Duenodirecto. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;