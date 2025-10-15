// Wrapper global para todos los context providers de la app.
// Agrega aquí nuevos providers (ThemeProvider, QueryClientProvider, etc.).

import { AuthProvider } from '@providers/AuthProvider.jsx';
import { ModalProvider } from '@providers/ModalProvider.jsx';
import { FiltersProvider } from '@providers/FiltersProvider.jsx';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <FiltersProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </FiltersProvider>
    </AuthProvider>
  );
};

export default Providers;