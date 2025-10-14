import { Outlet, Link } from 'react-router-dom';

// Layout principal para la app pública / landing
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Outlet />
    </div>
  );
};

export default MainLayout;