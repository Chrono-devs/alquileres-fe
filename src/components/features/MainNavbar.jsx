import { Link } from 'react-router-dom';

const MainNavbar = () => {
	return (
		<nav
			className="fixed top-0 left-0 w-full h-22 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="mx-auto max-w-7xl h-full px-4 sm:px-6 flex items-center justify-between gap-6">
				{/* Left actions */}
				<div className="select-none">
					<Link
						to="/"
						className="text-xl font-semibold tracking-tight text-neutral-900"
					>
						Duenodirecto
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<Link
						to="/publicar"
						className="text-md font-medium tracking-wider text-black/90 hover:text-black focus-visible:outline-none rounded-sm transition-colors"
					>
						Publicar
					</Link>
					<Link
						to="/buscar"
						className="text-md font-medium tracking-wider text-black/90 hover:text-black focus-visible:outline-none rounded-sm transition-colors"
					>
						Buscar
					</Link>
				</div>

				{/* Right logo */}
			</div>
		</nav>
	);
};

export default MainNavbar;
