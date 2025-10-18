import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout.jsx';
import AuthLayout from '@layouts/AuthLayout.jsx';
import AdminLayout from '@layouts/AdminLayout.jsx';
import DuenoLayout from '@layouts/DuenoLayout.jsx';
// Pages
import Home from '@/pages/Home.jsx';
import Login from '@pages/auth/Login.jsx';
import Register from '@pages/auth/Register.jsx';
import AdminDashboard from '@pages/admin/Dashboard.jsx';
import NotFound from '@pages/NotFound.jsx';
import SearchPage from '@/pages/Search';
import DuenoDashboard from '@pages/dueno/Dashboard.jsx';

// Componente que encapsula toda la definición de rutas usando la sintaxis declarativa
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas con MainLayout */}
        <Route element={<MainLayout />}> 
          <Route path='/' element={<Home />} />
          <Route path='/propriedades' element={<SearchPage />} />
        </Route>

        {/* Rutas de autenticación */}
        <Route element={<AuthLayout />}> 
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Área administrativa */}
        <Route path="admin" element={<AdminLayout />}> 
          <Route index element={<AdminDashboard />} />
          {/* Futuras rutas admin */}
        </Route>

        {/* Área de dueño */}
        <Route path="dueno" element={<DuenoLayout />}> 
          <Route index element={<DuenoDashboard />} />
          {/* Futuras rutas dueño */}
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;