# Ejemplo de archivo .env para alquileres-fe

Copia este archivo como `.env` y completa los valores según tu entorno.

```
VITE_API_URL=http://localhost:3000/api
```

- `VITE_API_URL`: URL base de la API backend (sin `/rents` al final).
- Este valor se usa en los servicios para construir las rutas de las peticiones.
- Si usas otro puerto o dominio, cámbialo aquí.

> **Importante:** No subas tu archivo `.env` real al repositorio, solo este ejemplo.
