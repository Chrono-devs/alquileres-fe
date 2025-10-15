import SearchRent from "@/components/features/SearchRent";
import RentCard from "@/components/ui/RentCard";

const Home = () => {

  // Página del usuario comun
  return (
    <>
      <section className="max-w-5xl mx-auto py-8">
        <SearchRent />
      </section>
      <section className="max-w-7xl mx-auto py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </>
  );
};

export default Home;