import SearchRent from "@/components/features/SearchRent";
import CategorySubtitle from "@/components/ui/CategorySubtitle";
import CategoryTitle from "@/components/ui/CategoryTitle";
import RentCard from "@/components/ui/RentCard";
import ZoneCard from "@/components/ui/ZoneCard";
import FAQ from "@/components/features/FAQ";

const Home = () => {

  // Página del usuario comun
  return (
    <main className="max-w-6xl mx-auto px-4 mt-2 sm:mt-4">
      <section className="py-4 mb-4 sm:py-6">
        <SearchRent />
      </section>
      <CategoryTitle text="Propiedades destacadas" />
      <CategorySubtitle text="Las mejores propiedades seleccionadas para ti!" />
      
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-6">
        <RentCard
          price={380000}
          imageUrl="https://www.propertyfinder.ae/property/cccf10b58cd3cfdee0f079deb0483238/416/272/MODE/7f14b6/15041321-a1a9fo.webp?ctr=ae"
          size={42}
          location="Belgrano"
          rooms={2}
        />
        <RentCard
          price={450000}
          imageUrl="https://images.adsttc.com/media/images/5c67/3545/284d/d151/2900/0073/medium_jpg/ISA_Tiny_Tower_8.jpg?1550267708"
          size={55}
          location="Palermo"
          rooms={3}
        />
        <RentCard
          price={380000}
          imageUrl="https://www.propertyfinder.ae/property/cccf10b58cd3cfdee0f079deb0483238/416/272/MODE/7f14b6/15041321-a1a9fo.webp?ctr=ae"
          size={42}
          location="Belgrano"
          rooms={2}
        />
        <RentCard
          price={450000}
          imageUrl="https://images.adsttc.com/media/images/5c67/3545/284d/d151/2900/0073/medium_jpg/ISA_Tiny_Tower_8.jpg?1550267708"
          size={55}
          location="Palermo"
          rooms={3}
        />
      </section>
      <figure className="w-full h-44 mt-12 bg-gray-200 border border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500 hover:bg-purple-50 hover:border-purple-300 cursor-pointer transition-colors mb-18">
        <h1>Crea tu anuncio</h1>
      </figure>
      <CategoryTitle text="Otras propiedades" />
      <section className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14 md:gap-6">
        <RentCard
          price={380000}
          imageUrl="https://www.propertyfinder.ae/property/cccf10b58cd3cfdee0f079deb0483238/416/272/MODE/7f14b6/15041321-a1a9fo.webp?ctr=ae"
          size={42}
          location="Belgrano"
          rooms={2}
        />
        <RentCard
          price={450000}
          imageUrl="https://images.adsttc.com/media/images/5c67/3545/284d/d151/2900/0073/medium_jpg/ISA_Tiny_Tower_8.jpg?1550267708"
          size={55}
          location="Palermo"
          rooms={3}
        />
        <RentCard
          price={380000}
          imageUrl="https://www.propertyfinder.ae/property/cccf10b58cd3cfdee0f079deb0483238/416/272/MODE/7f14b6/15041321-a1a9fo.webp?ctr=ae"
          size={42}
          location="Belgrano"
          rooms={2}
        />
        <RentCard
          price={450000}
          imageUrl="https://images.adsttc.com/media/images/5c67/3545/284d/d151/2900/0073/medium_jpg/ISA_Tiny_Tower_8.jpg?1550267708"
          size={55}
          location="Palermo"
          rooms={3}
        />
        <RentCard
          price={380000}
          imageUrl="https://www.propertyfinder.ae/property/cccf10b58cd3cfdee0f079deb0483238/416/272/MODE/7f14b6/15041321-a1a9fo.webp?ctr=ae"
          size={42}
          location="Belgrano"
          rooms={2}
        />
        <RentCard
          price={450000}
          imageUrl="https://images.adsttc.com/media/images/5c67/3545/284d/d151/2900/0073/medium_jpg/ISA_Tiny_Tower_8.jpg?1550267708"
          size={55}
          location="Palermo"
          rooms={3}
        />
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