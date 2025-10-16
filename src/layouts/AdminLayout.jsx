import { Outlet, Link } from 'react-router-dom';
import CookieConsent from '@/components/features/CookieConsent.jsx';

// Layout para zona administrativa / desarrolladores
const AdminLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">
        {/* TODO: contenido admin */}
        <CookieConsent />
    </div>
  );
};

export default AdminLayout;