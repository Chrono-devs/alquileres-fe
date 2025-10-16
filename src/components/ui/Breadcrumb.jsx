import { Link } from 'react-router-dom';
import { FiChevronRight, FiArrowLeft } from 'react-icons/fi';

const Breadcrumb = ({ items = [], backHref, onBack, maxItems = 5, className = '' }) => {
  const isInteractiveBack = Boolean(backHref || onBack);

  const getDisplayItems = (list, limit) => {
    if (!Array.isArray(list) || list.length === 0) return [];
    if (!limit || list.length <= limit) return list;
    const head = list[0];
    const tailCount = Math.max(1, limit - 2);
    const tail = list.slice(-tailCount);
    return [head, { label: '…', isEllipsis: true }, ...tail];
  };

  const displayItems = getDisplayItems(items, maxItems);

  const Back = () => (
    <div className="flex items-center gap-2 pr-3 mr-3 border-r border-slate-200">
      {isInteractiveBack ? (
        backHref ? (
          <Link to={backHref} className="inline-flex items-center gap-1 text-purple-600 hover:underline text-xs sm:text-sm">
            <FiArrowLeft /> Volver
          </Link>
        ) : (
          <a onClick={onBack} className="inline-flex items-center gap-1 text-purple-600 hover:underline text-xs sm:text-sm cursor-pointer">
            <FiArrowLeft /> Volver
          </a>
        )
      ) : (
        <span className="inline-flex items-center gap-1 text-slate-500 text-xs sm:text-sm">
          <FiArrowLeft /> Volver
        </span>
      )}
    </div>
  );

  return (
    <nav aria-label="Breadcrumb" className={`w-full py-2 text-slate-600 ${className}`}>
      <div className="flex items-center flex-wrap gap-2">
        {isInteractiveBack && <Back />}
        <ol className="flex items-center flex-wrap gap-1 text-xs sm:text-sm">
          {displayItems.map((item, idx) => {
            const isLast = idx === displayItems.length - 1;
            if (item.isEllipsis) {
              return (
                <li key={`ellipsis-${idx}`} className="flex items-center select-none">
                  <span className="px-1 text-slate-400">…</span>
                  {!isLast && <FiChevronRight className="mx-1 text-slate-300" />}
                </li>
              );
            }

            return (
              <li key={`bc-${idx}`} className="flex items-center">
                {isLast || !item.href ? (
                  <span aria-current={isLast ? 'page' : undefined} className={`truncate ${isLast ? 'text-slate-700 font-medium' : ''}`}>
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.href} className="text-purple-600 hover:underline">
                    {item.label}
                  </Link>
                )}
                {!isLast && <FiChevronRight className="mx-1 text-slate-300" />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
