import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'cookieConsent.accepted';
const STORAGE_TS_KEY = 'cookieConsent.timestamp';
const COOKIE_NAME = 'cookie_consent';
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

const getCookie = (name) => {
  if (typeof document === 'undefined') return '';
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(name + '=')) || '';
};

const hasConsent = () => {
  try {
    if (typeof window === 'undefined') return false;
    const ls = window.localStorage?.getItem(STORAGE_KEY);
    if (ls === 'true') return true;
    return Boolean(getCookie(COOKIE_NAME));
  } catch {
    return Boolean(getCookie(COOKIE_NAME));
  }
};

const setConsent = () => {
  try {
    window.localStorage?.setItem(STORAGE_KEY, 'true');
    window.localStorage?.setItem(STORAGE_TS_KEY, String(Date.now()));
  } catch {
    // ignore localStorage errors (e.g., private mode)
  }
  try {
    document.cookie = `${COOKIE_NAME}=1; max-age=${ONE_YEAR_SECONDS}; path=/; SameSite=Lax`;
  } catch {
    // ignore cookie write errors
  }
};

/**
 * CookieConsent
 * Muestra una franja fija inferior para aceptar cookies. Se muestra una sola vez.
 * Sigue el estilo de la app con Tailwind y no bloquea la navegación.
 */
const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Mostrar solo si aún no hay consentimiento
    if (!hasConsent()) setVisible(true);
  }, []);

  const accept = useCallback(() => {
    setConsent();
    setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 pb-[env(safe-area-inset-bottom)]"
      role="dialog"
      aria-label="Aviso de uso de cookies"
    >
      <div className="w-full">
        <div className="bg-purple-600 shadow-xl p-4 sm:py-12">
          <div className="flex flex-col max-w-6xl px-4 mx-auto gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-md text-white font-semibold leading-relaxed md:pr-4">
              Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptás el uso de cookies.
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={accept}
                className="inline-flex items-center justify-center cursor-pointer rounded-lg bg-white text-purple-600 font-semibold text-md px-6 py-3 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 shadow-md focus-visible:ring-offset-2 transition-colors"
              >
                Aceptar
              </button>
              <a
                href="#"
                className="text-md text-gray-100 hover:text-gray-100 underline font-semibold underline-offset-2"
                rel="nofollow"
              >
                Más información
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
