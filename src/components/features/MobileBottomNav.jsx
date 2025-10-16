import { NavLink } from 'react-router-dom';
import { FiSearch, FiHome, FiHelpCircle, FiBookOpen } from 'react-icons/fi';

// Barra de navegación inferior solo para mobile, estilo app nativa
// Considera safe-area y cambios del viewport cuando el navegador móvil oculta/muestra la URL
const MobileBottomNav = () => {
  const items = [
      { to: '/', label: 'Inicio', Icon: FiHome },
    { to: '/search', label: 'Buscar', Icon: FiSearch },
    { to: '/ayuda', label: 'Ayuda', Icon: FiHelpCircle },
    { to: '/blog', label: 'Blog', Icon: FiBookOpen },
  ];

  return (
    <nav
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/90"
      role="navigation"
      aria-label="Mobile bottom navigation"
    >
      <ul className="grid grid-cols-4 gap-0">
        {items.map(({ to, label, Icon }) => (
          <li key={to} className="">
            <NavLink
              to={to}
              className={({ isActive }) =>
                [
                  'flex flex-col items-center justify-center gap-1 py-3',
                  'text-xs font-medium tracking-wide select-none',
                  isActive ? 'text-purple-600' : 'text-neutral-500',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 rounded-sm',
                ].join(' ')
              }
              aria-label={label}
            >
              <Icon size={22} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileBottomNav;
