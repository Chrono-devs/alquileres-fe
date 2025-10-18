import { FiSearch, FiFilter } from "react-icons/fi";
import { useModal } from "@providers/ModalProvider.jsx";
import { useFilters } from "@providers/FiltersProvider.jsx";
import CustomSelect from "@ui/CustomSelect.jsx";
import CustomSpan from "@ui/CustomSpan.jsx";

const SearchRent = () => {
    const { open } = useModal();
    const {
        // precio y orden
        minPrice, maxPrice, sort,
        setMinPrice, setMaxPrice, setSort,
        resetPrices,
        // ubicación
        province, locality, provinces,
        setProvince, setLocality, resetLocation,
        // features
        petsAllowed, garage, setPetsAllowed, setGarage, resetFeatures,
        // counts
        bathrooms, ambientes, bedrooms, setBathrooms, setAmbientes, setBedrooms, resetCounts,
        // tipos
        propertyTypes, propertyTypeOptions, togglePropertyType, resetTypes,
        // global
        resetAll, appliedCount,
    } = useFilters();

    const FilterSheetContent = ({ close }) => {
        return (
            <>
                <div className="modal-handle" />
                <div className="sheet-body space-y-4">
                    <div className="filter-row">
                        <span className="filter-section-title">Filtrar por:</span>
                    </div>
                    <div className="filter-row mt-2">
                        <h3 className="text-base font-medium">Precio</h3>
                        <button type="button" className="filter-reset" onClick={resetPrices}>Reset</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <label className="flex flex-col gap-1">
                            <CustomSpan>Mínimo</CustomSpan>
                            <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="border border-gray-400 rounded-xl px-3 py-2" placeholder="0" />
                        </label>
                        <label className="flex flex-col gap-1">
                            <CustomSpan>Máximo</CustomSpan>
                            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="border border-gray-400 rounded-xl px-3 py-2" placeholder="100000" />
                        </label>
                    </div>
                    <div className="filter-row mt-2">
                        <h3 className="text-base font-medium">Ubicación</h3>
                        <button type="button" className="filter-reset" onClick={resetLocation}>Reset</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label htmlFor="province" className="flex flex-col gap-1">
                            <CustomSpan>Provincia</CustomSpan>
                            <CustomSelect
                                id="province"
                                placeholder="Todas"
                                items={provinces.map(p => ({ label: p, value: p }))}
                                value={province}
                                onChange={(newValue) => setProvince(newValue)}
                            />
                        </label>
                        <label htmlFor="locality" className="flex flex-col gap-1">
                            <CustomSpan>Localidad</CustomSpan>
                            <input type="text" id="locality" value={locality} onChange={(e) => setLocality(e.target.value)} className="border border-gray-400 rounded-xl px-3 py-2" placeholder="Ej: Palermo" />
                        </label>
                    </div>

                    {/* Características */}
                    <div className="filter-row mt-2">
                        <h3 className="text-base font-medium">Características</h3>
                        <button type="button" className="filter-reset" onClick={resetFeatures}>Reset</button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" checked={petsAllowed === true} onChange={(e) => setPetsAllowed(e.target.checked ? true : null)} />
                            <span>Acepta mascotas</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="checkbox" checked={garage === true} onChange={(e) => setGarage(e.target.checked ? true : null)} />
                            <span>Garage</span>
                        </label>
                    </div>

                    {/* Cantidades */}
                    <div className="filter-row mt-2">
                        <h3 className="text-base font-medium">Cantidades</h3>
                        <button type="button" className="filter-reset" onClick={resetCounts}>Reset</button>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <label className="flex flex-col gap-1">
                            <span className="text-sm text-gray-600">Baños</span>
                            <input type="number" min={0} value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className="border border-gray-400 rounded-xl px-3 py-2" placeholder="2" />
                        </label>
                        <label className="flex flex-col gap-1">
                            <span className="text-sm text-gray-600">Ambientes</span>
                            <input type="number" min={0} value={ambientes} onChange={(e) => setAmbientes(e.target.value)} className="border border-gray-400 rounded-xl px-3 py-2" placeholder="3" />
                        </label>
                        <label className="flex flex-col gap-1">
                            <span className="text-sm text-gray-600">Habitaciones</span>
                            <input type="number" min={0} value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="border border-gray-400 rounded-xl px-3 py-2" placeholder="2" />
                        </label>
                    </div>

                    {/* Tipos de propiedad */}
                    <div className="filter-row mt-2">
                        <h3 className="text-base font-medium">Tipo de propiedad</h3>
                        <button type="button" className="filter-reset" onClick={resetTypes}>Reset</button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {propertyTypeOptions.map((t) => (
                            <button
                                key={t}
                                type="button"
                                onClick={() => togglePropertyType(t)}
                                aria-pressed={propertyTypes.includes(t)}
                                className={`px-3 py-2 rounded-xl border ${propertyTypes.includes(t) ? 'bg-purple-600 text-white border-transparent' : 'bg-white text-gray-700'}`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>

                    {/* Orden */}
                    <div className="filter-row mt-2">
                        <h3 className="text-base font-medium">Ordenar por</h3>
                        <span className="filter-reset" onClick={() => setSort('newest')}>Reset</span>
                    </div>
                    <div>
                        <select className="w-full border border-gray-400 rounded-xl px-3 py-2" value={sort} onChange={(e) => setSort(e.target.value)}>
                            <option value="newest">Más nuevo primero</option>
                            <option value="oldest">Más antiguo primero</option>
                            <option value="low">Precio: menor a mayor</option>
                            <option value="high">Precio: mayor a menor</option>
                        </select>
                    </div>
                </div>

                {/* Footer fijo en mobile */}
                <div className="sheet-footer md:mt-4">
                    <div className="flex items-center gap-2 justify-between md:justify-end">
                        <button type="button" onClick={close} className="w-full md:w-auto md:px-6 py-3 text-lg rounded-lg font-semibold bg-purple-50 md:bg-transparent cursor-pointer text-purple-600">Cancelar</button>
                        <button type="button" onClick={close} className="w-full md:w-auto md:px-6 py-3 text-lg rounded-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors cursor-pointer">Aplicar filtros{appliedCount ? `(${appliedCount})` : ''}</button>
                    </div>
                </div>
            </>
        );
    };

    const openFilters = (e) => {
        e.preventDefault();
        open(({ close }) => (
            <FilterSheetContent close={close} />
        ), {
            showCloseButton: false,
            overlayClassName: 'modal-sheet',
            panelClassName: 'modal-panel'
        });
    };

    return (
        <section className="flex items-center md:pb-4">
            <form action="#" method="GET" className="flex w-full px-2.5 py-2 mx-auto shadow-lg border border-gray-300 rounded-full overflow-hidden">
                <input type="text" className="flex-grow px-6 text-lg focus:outline-none" required placeholder="Buscar propiedades en alquiler" />
                <div className="flex gap-2">
                    <button onClick={openFilters} className=" w-12 h-12 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer">
                        <FiFilter size={20} className="rounded-full" />
                    </button>
                    <button type="submit" className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer">
                        <FiSearch size={20} className="rounded-full" />
                    </button>
                </div>
            </form>
        </section>
    );
}

export default SearchRent;