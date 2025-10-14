# Alquileres

## Rutas y Layouts añadidos

Se configuró `react-router-dom` con tres layouts principales:

- `AuthLayout`: Contiene las vistas de autenticación (`/login`, `/register`). Estructura centrada y contenedor reducido.
- `MainLayout`: Layout público para la landing y futuras secciones generales (`/`). Incluye navegación básica y footer.
- `AdminLayout`: Panel administrativo (`/admin`) diseñado para desarrolladores / gestión de dueños y propiedades.

Archivo principal de rutas: ahora `src/routes/AppRoutes.jsx` usando la sintaxis declarativa `<BrowserRouter><Routes><Route/>`.

Rutas actuales:

```text
/                -> Landing (MainLayout)
/login           -> Login (AuthLayout)
/register        -> Register (AuthLayout)
/admin           -> AdminDashboard (AdminLayout)
* (fallback)     -> 404 simple
```

Para agregar nuevas rutas:
1. Crear la página en `src/pages/...`
2. Editar `src/routes/index.jsx` agregando el objeto de ruta apropiado como hijo del layout correspondiente.

En `App.jsx` ahora se renderiza: `<AppRoutes />`.

## Providers Globales

Se añadió un patrón para centralizar contextos globales:

- Carpeta: `src/providers/`
	- `AuthProvider.jsx`: Placeholder con `user`, `login`, `logout`, `isAuthenticated` y `loading`.
	- `Providers.jsx`: Encapsula todos los providers y se utiliza en `App.jsx`.

Uso en componentes:
```jsx
import { useAuth } from '../providers/AuthProvider.jsx';

const Perfil = () => {
	const { user, logout } = useAuth();
	return (
		<div>
			<p>Hola {user?.name}</p>
			<button onClick={logout}>Salir</button>
		</div>
	);
};
```

Para añadir nuevos providers (ej. ThemeProvider, React Query):
1. Crear el provider en `src/providers/NombreProvider.jsx`.
2. Importarlo y envolverlo dentro de `Providers.jsx`.

Ejemplo rápido:
```jsx
// Providers.jsx
import { AuthProvider } from './AuthProvider.jsx';
import { ThemeProvider } from './ThemeProvider.jsx';

const Providers = ({ children }) => (
	<AuthProvider>
		<ThemeProvider>
			{children}
		</ThemeProvider>
	</AuthProvider>
);
```
