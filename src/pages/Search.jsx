import SearchRent from "@/components/features/SearchRent";
import CategoryTitle from "@/components/ui/CategoryTitle";
import RentCard from "@/components/ui/RentCard";
import Skeleton from "@/components/ui/Skeleton";
import useRentsSearch from "@/hooks/useRentsSearch";
import { useEffect, useMemo } from "react";
import { useFilters } from "@/providers/FiltersProvider.jsx";

const SearchPage = () => {
  const {
    minPrice, maxPrice, sort,
    province, locality,
    petsAllowed, garage,
    bathrooms, ambientes, bedrooms,
    propertyTypes,
  } = useFilters();

  // Construimos params a partir de los filtros globales
  const paramsFromFilters = useMemo(() => ({
    // puedes ajustar estos nombres a los que tu API realmente espera
    query: 'normal',
    minPrice: minPrice || undefined,
    maxPrice: maxPrice || undefined,
    sort: sort || undefined,
    province: province || undefined,
    locality: locality || undefined,
    petsAllowed: petsAllowed === null ? undefined : petsAllowed,
    garage: garage === null ? undefined : garage,
    bathrooms: bathrooms || undefined,
    ambientes: ambientes || undefined,
    bedrooms: bedrooms || undefined,
    propertyTypes: propertyTypes.length ? propertyTypes.join(',') : undefined,
    page: 1,
    limit: 20,
  }), [minPrice, maxPrice, sort, province, locality, petsAllowed, garage, bathrooms, ambientes, bedrooms, propertyTypes]);

  const { results, loading, setParams, refresh } = useRentsSearch(paramsFromFilters);

  // Sincroniza cambios de filtros -> parámetros del hook
  useEffect(() => {
    setParams(paramsFromFilters);
  }, [paramsFromFilters, setParams]);

  return (
    <main className="max-w-6xl mx-auto px-4 mt-2 sm:mt-4">
      <section className="py-4 mb-4 sm:py-6">
        <SearchRent />
      </section>

      <CategoryTitle text="Resultados de la búsqueda" />

      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-52 w-full" />
                <Skeleton className="h-5 w-24" />
                <div className="flex gap-3">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>
            ))
          : results.map((rent) => (
              <RentCard
                key={rent.id}
                id={rent.id}
                title={rent.title}
                price={rent.price}
                imageUrl={rent.imageUrl}
                size={rent.size}
                location={rent.location}
                rooms={rent.rooms}
              />
            ))}
      </section>

      {/* Acciones opcionales */}
      <div className="flex items-center justify-center my-8">
        <button type="button" onClick={refresh} className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 active:scale-95 transition-transform shadow-md">
          Recargar resultados
        </button>
      </div>
    </main>
  );
};

export default SearchPage;
