import { Link } from 'react-router-dom';
import DownMenu from '@features/DownMenu';

const MainNavbar = () => {
	return (
		<nav
			className="fixed top-0 left-0 w-full h-22 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
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
					<Link
						to="/publicar"
						className="text-md font-medium tracking-wider text-black/90 hover:text-black focus-visible:outline-none rounded-sm transition-colors"
					>
						Publicar
					</Link>
					<Link
						to="/propriedades"
						className="text-md font-medium tracking-wider text-black/90 hover:text-black focus-visible:outline-none rounded-sm transition-colors"
					>
						Propiedades
					</Link>
					<Link to="/ayuda" className="text-md font-medium tracking-wider text-black/90 hover:text-black focus-visible:outline-none rounded-sm transition-colors">
						Ayuda
					</Link>
					<Link
						to="/blog"
						className="text-md font-medium tracking-wider text-black/90 hover:text-black focus-visible:outline-none rounded-sm transition-colors"
					>
						Blog
					</Link>
				</div>
				<DownMenu links={
					[
						{ label: 'Iniciar sesión', url: '/login' },
						{ label: 'Crear cuenta', url: '/register' },
						{ label: 'Publicar', url: '/publicar' },
						{ label: 'Ayuda', url: '/ayuda' },
						{ label: 'Blog', url: '/blog' },
					]} />
			</div>
		</nav>
	);
};

export default MainNavbar;