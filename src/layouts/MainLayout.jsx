import { Outlet } from 'react-router-dom';
import MainNavbar from '@/components/features/MainNavbar.jsx';

// Layout principal para la app pública / landing
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavbar />
      {/* Offset para que el contenido no quede debajo del navbar fijo (h-16) */}
      <div className="pt-16 flex-1 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;