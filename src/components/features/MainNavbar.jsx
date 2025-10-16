import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const MainNavbar = () => {
	return (
		<nav
			className="fixed top-0 left-0 w-full h-16 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className=" flex mx-auto max-w-[1800px] h-full px-4 items-center justify-between gap-6">
				<div className="select-none">
					<Link
						to="/"
						className="text-xl font-semibold tracking-tight text-neutral-900 sm:min-w-32"
					>
						Duenodirecto
					</Link>
				</div>
				<div className="items-center gap-4 hidden sm:flex">
					<Link to="/ayuda" className="text-md font-medium tracking-wider text-black/90 hover:text-black focus-visible:outline-none rounded-sm transition-colors">
						Ayuda
					</Link>
					<Link
						to="/publicar"
						className="text-md font-medium tracking-wider text-black/90 hover:text-black focus-visible:outline-none rounded-sm transition-colors"
					>
						Publicar
					</Link>
					<Link
						to="/blog"
						className="text-md font-medium tracking-wider text-black/90 hover:text-black focus-visible:outline-none rounded-sm transition-colors"
					>
						Blog
					</Link>
				</div>
				<FiMenu size={32} className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer sm:min-w-32" />
			</div>
		</nav>
	);
};

export default MainNavbar;