import { Outlet, Link } from 'react-router-dom';
import CookieConsent from '@/components/features/CookieConsent.jsx';

// Layout para zona de dueño
const DuenoLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">
        <Outlet />
        <CookieConsent />
    </div>
  );
};

export default DuenoLayout;