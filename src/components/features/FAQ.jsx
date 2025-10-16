import { useState, useMemo, Fragment } from 'react';

/**
 * FAQ - Preguntas frecuentes
 * - Diseño acorde al resto de la app (Tailwind, bordes suaves, acentos violeta)
 * - Accesible: botones con aria-expanded, aria-controls; panel con role="region"
 * - Controla múltiples items abiertos de forma independiente
 */
const DEFAULT_ITEMS = [
  {
    q: '¿Cómo publico un anuncio? ',
    a: 'Creá una cuenta o iniciá sesión, luego hacé clic en "Crear tu anuncio" y completá los datos de la propiedad. Podrás previsualizar antes de publicar.'
  },
  {
    q: '¿Tiene costo publicar?',
    a: 'Podés comenzar con un plan gratuito con visibilidad básica. También tenemos planes destacados para más alcance.'
  },
  {
    q: '¿Cómo contacto al dueño?',
    a: 'En cada propiedad verás un botón para enviar un mensaje o solicitar el teléfono, según la preferencia del anunciante.'
  },
  {
    q: '¿Puedo editar o pausar mi anuncio?',
    a: 'Sí, desde tu panel puedes editar información, actualizar fotos o pausar temporalmente sin perder los datos.'
  },
];

const FAQItem = ({ id, question, answer, open, onToggle }) => {
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="border-t border-gray-200 first:border-t-0">
      <button
        id={buttonId}
        className="w-full flex items-center justify-between text-left py-4 md:py-5 group focus:outline-none"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        type="button"
      >
        <span className="text-gray-900 font-medium">{question}</span>
        <svg
          className={`ml-3 h-5 w-5 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z" clipRule="evenodd" />
        </svg>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-[max-height] duration-200 ${open ? 'max-h-64' : 'max-h-0'}`}
      >
        <div className="pb-4 md:pb-5 text-sm text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = ({ items }) => {
  const data = useMemo(() => items?.length ? items : DEFAULT_ITEMS, [items]);
  const [openMap, setOpenMap] = useState(() => new Map());

  const toggle = (idx) => () => {
    setOpenMap(prev => {
      const next = new Map(prev);
      next.set(idx, !next.get(idx));
      return next;
    });
  };

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="p-4 md:p-6">
        {data.map((item, idx) => (
          <FAQItem
            key={idx}
            id={idx}
            question={item.q}
            answer={item.a}
            open={!!openMap.get(idx)}
            onToggle={toggle(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
