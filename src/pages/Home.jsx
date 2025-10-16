import SearchRent from "@/components/features/SearchRent";
import CategorySubtitle from "@/components/ui/CategorySubtitle";
import CategoryTitle from "@/components/ui/CategoryTitle";
import RentCard from "@/components/ui/RentCard";

const Home = () => {

  // Página del usuario comun
  return (
    <main className="max-w-6xl mx-auto px-4">
      <section className="py-8">
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
      <figure className="w-full h-44 bg-gray-200 border border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500 hover:bg-purple-50 hover:border-purple-300 cursor-pointer transition-colors mb-12">
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
    </main>
  );
};

export default Home;