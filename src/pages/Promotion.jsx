import TargetPricing from "@ui/TargetPricing";
import { Planes } from "@/constants/planes";

const Promotion = () => {
  return (
    <div>
        <main className="max-w-6xl mx-auto px-4 mt-10 sm:mt-12 mb-20">
            <h1 className="text-3xl font-bold text-center mb-8">Elige el plan que mejor se adapte a ti</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Planes && Object.values(Planes).map((plan, index) => (
                    <TargetPricing 
                        key={index}
                        planName={plan.planName}
                        popular={plan.popular}
                        price={plan.price}
                        description={plan.description}
                        buttonText={plan.buttonText}
                        list={plan.list}
                    />
                ))}
            </div>
        </main>
    </div>
  );
};

export default Promotion;