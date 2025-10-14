import { createContext, useContext, useState, useCallback, useMemo } from 'react';

// Contexto de autenticación (placeholder). Reemplazar lógica con API real más adelante.
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { id, name, role } | null
  const [loading, setLoading] = useState(false);

  const login = useCallback(async ({ email, password }) => {
    setLoading(true);
    try {
      // TODO: Llamar a API real. Simulación:
      await new Promise(r => setTimeout(r, 500));
      setUser({ id: 1, name: 'Demo User', role: 'admin', email });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: 'Error de login' };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(() => ({
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
  }), [user, loading, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
};

export default AuthProvider;
