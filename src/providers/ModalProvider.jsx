import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import "@styles/GenericModal.css";

// Contexto para gestionar un modal global y un hook simple para abrir/cerrar
const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    content: null, // ReactNode | (helpers) => ReactNode
    props: {},
    options: {
      closeOnBackdrop: true,
      showCloseButton: true,
      onClose: undefined,
      overlayClassName: '',
      panelClassName: '',
    },
  });

  const close = useCallback(() => {
    setState(prev => {
      // Ejecuta callback de cierre si existe
      try { prev?.options?.onClose?.(); } catch { /* noop */ }
      return { ...prev, isOpen: false, content: null };
    });
  }, []);

  const open = useCallback((content, options = {}) => {
    setState({
      isOpen: true,
      content,
      props: options.props ?? {},
      options: {
        closeOnBackdrop: options.closeOnBackdrop ?? true,
        showCloseButton: options.showCloseButton ?? true,
        onClose: options.onClose,
        overlayClassName: options.overlayClassName ?? '',
        panelClassName: options.panelClassName ?? '',
      },
    });
  }, []);

  const value = useMemo(() => ({
    isOpen: state.isOpen,
    open,
    close,
  }), [state.isOpen, open, close]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      <ModalRenderer state={state} close={close} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal debe usarse dentro de <ModalProvider>');
  return ctx;
};

// Renderiza el modal en un portal cuando está abierto
const ModalRenderer = ({ state, close }) => {
  const { isOpen, content, props, options } = state;
  const [exiting, setExiting] = useState(false);

  const requestClose = useCallback(() => {
    // Reproduce animación de salida antes de desmontar
    setExiting(true);
    const timeout = setTimeout(() => {
      close();
      setExiting(false);
    }, 230); // debe sincronizar con la duración en CSS
    return () => clearTimeout(timeout);
  }, [close]);

  // Cerrar con tecla Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') requestClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, requestClose]);

  if (!isOpen) return null;

  const handleBackdrop = (e) => {
    if (options?.closeOnBackdrop && e.target === e.currentTarget) requestClose();
  };

  const contentNode = typeof content === 'function'
    ? content({ close: requestClose, ...props })
    : content;

  const modal = (
    <div className={`modal ${options?.overlayClassName || ''} ${exiting ? 'closing' : ''}`} onClick={handleBackdrop}>
      <div className={`${options?.panelClassName} ${exiting ? 'is-closing' : ''}`}
      >
        {options?.showCloseButton && (
          <button
            aria-label="Cerrar"
            className="close-button"
            onClick={requestClose}
            type="button"
          >
            ✕
          </button>
        )}
        {contentNode}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default ModalProvider;
