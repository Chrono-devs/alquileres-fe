import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { PROVINCES, PROPERTY_TYPES } from '@constants/filters';

// Estado global de filtros de búsqueda de alquileres
const FiltersContext = createContext(null);

// Listas base importadas desde @constants/filters

export const FiltersProvider = ({ children }) => {
  // Precio
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Orden
  const [sort, setSort] = useState('newest');

  // Ubicación
  const [province, setProvince] = useState('');
  const [locality, setLocality] = useState('');

  // Características
  const [petsAllowed, setPetsAllowed] = useState(null); // null | true | false
  const [garage, setGarage] = useState(null); // null | true | false

  // Cantidades
  const [bathrooms, setBathrooms] = useState('');
  const [ambientes, setAmbientes] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  // Tipos de propiedad (multi)
  const [propertyTypes, setPropertyTypes] = useState([]); // string[]

  // Acciones
  const resetPrices = useCallback(() => { setMinPrice(''); setMaxPrice(''); }, []);
  const resetLocation = useCallback(() => { setProvince(''); setLocality(''); }, []);
  const resetFeatures = useCallback(() => { setPetsAllowed(null); setGarage(null); }, []);
  const resetCounts = useCallback(() => { setBathrooms(''); setAmbientes(''); setBedrooms(''); }, []);
  const resetTypes = useCallback(() => { setPropertyTypes([]); }, []);
  const resetAll = useCallback(() => {
    resetPrices();
    resetLocation();
    resetFeatures();
    resetCounts();
    resetTypes();
    setSort('newest');
  }, [resetPrices, resetLocation, resetFeatures, resetCounts, resetTypes]);

  const togglePropertyType = useCallback((type) => {
    setPropertyTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]);
  }, []);

  const appliedCount = useMemo(() => {
    let n = 0;
    if (minPrice || maxPrice) n++;
    if (sort !== 'newest') n++;
    if (province || locality) n++;
    if (petsAllowed !== null || garage !== null) n++;
    if (bathrooms || ambientes || bedrooms) n++;
    if (propertyTypes.length) n++;
    return n;
  }, [minPrice, maxPrice, sort, province, locality, petsAllowed, garage, bathrooms, ambientes, bedrooms, propertyTypes]);

  const value = useMemo(() => ({
    // state
    minPrice, maxPrice, sort,
    province, locality,
    petsAllowed, garage,
    bathrooms, ambientes, bedrooms,
    propertyTypes,
    provinces: PROVINCES,
    propertyTypeOptions: PROPERTY_TYPES,
    // setters
    setMinPrice, setMaxPrice, setSort,
    setProvince, setLocality,
    setPetsAllowed, setGarage,
    setBathrooms, setAmbientes, setBedrooms,
    setPropertyTypes,
    // actions
    resetPrices, resetLocation, resetFeatures, resetCounts, resetTypes, togglePropertyType, resetAll,
    // computed
    appliedCount,
  }), [minPrice, maxPrice, sort, province, locality, petsAllowed, garage, bathrooms, ambientes, bedrooms, propertyTypes, resetPrices, resetLocation, resetFeatures, resetCounts, resetTypes, togglePropertyType, resetAll, appliedCount]);

  return <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>;
};

export const useFilters = () => {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error('useFilters debe usarse dentro de <FiltersProvider>');
  return ctx;
};

export default FiltersProvider;
