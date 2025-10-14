// Wrapper global para todos los context providers de la app.
// Agrega aquí nuevos providers (ThemeProvider, QueryClientProvider, etc.).

import { AuthProvider } from '@providers/AuthProvider.jsx';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default Providers;