import SearchRent from "@/components/features/SearchRent";
import CategorySubtitle from "@/components/ui/CategorySubtitle";
import CategoryTitle from "@/components/ui/CategoryTitle";
import RentCard from "@/components/ui/RentCard";
import { useEffect, useState } from 'react';
import { NO_RESPONSE_MESSAGE } from '@/utils/errorHandler';
import { getAllRents, getAllRentsDestacados } from '@/services/rentsService';
import ZoneCard from "@/components/ui/ZoneCard";
import FAQ from "@/components/features/FAQ";
import Skeleton from "@/components/ui/Skeleton";

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [others, setOthers] = useState([]);
  const [loadingFeatured, setLoadingFeatured] = useState(true);
  const [loadingOthers, setLoadingOthers] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const f = await getAllRentsDestacados();
      if (mounted) {
        if (Array.isArray(f)) {
          setFeatured(f);
          setLoadingFeatured(false);
        } else if (f && f.message !== NO_RESPONSE_MESSAGE) {
          // Hubo error, pero no es por falta de respuesta: dejamos de cargar para no bloquear UI
          setFeatured([]);
          setLoadingFeatured(false);
        }
        // Si no hubo respuesta, mantenemos loading en true
      }

      const n = await getAllRents();
      if (mounted) {
        if (Array.isArray(n)) {
          setOthers(n);
          setLoadingOthers(false);
        } else if (n && n.message !== NO_RESPONSE_MESSAGE) {
          setOthers([]);
          setLoadingOthers(false);
        }
      }
    })();
    return () => { mounted = false; };
  }, []);

  // Página del usuario comun
  return (
    <main className="max-w-6xl mx-auto px-4 mt-2 sm:mt-4">
      <section className="py-4 mb-4 sm:py-6">
        <SearchRent />
      </section>
      <CategoryTitle text="Propiedades destacadas" />
      <CategorySubtitle text="Las mejores propiedades seleccionadas para ti!" />
      
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-6">
        {loadingFeatured
          ? Array.from({ length: 4 }).map((_, i) => (
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
          : featured.map((rent) => (
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
      <figure className="w-full h-44 mt-12 bg-gray-200 border border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500 hover:bg-purple-50 hover:border-purple-300 cursor-pointer transition-colors mb-18">
        <h1>Crea tu anuncio</h1>
      </figure>
      <CategoryTitle text="Otras propiedades" />
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-6">
        {loadingOthers
          ? Array.from({ length: 4 }).map((_, i) => (
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
          : others.map((rent) => (
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
      <CategoryTitle text="Zonas destacadas" />
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-14 md:gap-6">
        <ZoneCard title="Palermo" linkUrl="/zona/palermo" />
        <ZoneCard title="Belgrano" linkUrl="/zona/belgrano" />
        <ZoneCard title="Recoleta" linkUrl="/zona/recoleta" />
        <ZoneCard title="Caballito" linkUrl="/zona/caballito" />
      </section>
      <CategorySubtitle text="No encontraste tu zona?" />
      <section className="py-8 flex flex-col md:flex-row items-center mt-4 justify-between gap-6 bg-purple-50 border border-purple-200 rounded-lg p-6">
        <span className="text-lg font-semibold text-gray-700">Explora todas las zonas de la ciudad</span>
        <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 active:scale-95 transition-transform shadow-md">
          Ver todas las zonas
        </button>
      </section>

      {/* Preguntas frecuentes */}
      <div className="mt-12">
        <CategoryTitle text="Preguntas frecuentes" />
        <section className="py-6">
          <FAQ />
        </section>
      </div>
    </main>
  );
};

export default Home;