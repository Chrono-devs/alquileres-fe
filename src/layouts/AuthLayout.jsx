import { Outlet } from 'react-router-dom';

// Layout para autenticación (login / register)
const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;