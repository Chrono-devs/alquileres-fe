import TargetPricing from "@ui/TargetPricing";

const Planes = {
    basico: {
        planName: "Básico",
        popular: "Más Popular",
        price: "22000",
        description: "Funcionalidades esenciales de gestión de propiedade.",
        buttonText: "Seleccionar Plan Básico",
        list: [
            "1 propiedad activa por tiempo ilimitado",
            "Métricas de visitas y contactos",
            "Soporte por correo electrónico",
            "Acceso a estadísticas básicas",
            "Publicación durante 30 días",
        ]
    },
    premium: {
        planName: "Premium",
        popular: "Recomendado",
        price: "49000",
        description: "Perfecto para propietarios con múltiples propiedades y gestión avanzada.",
        buttonText: "Seleccionar Plan Premium",
        list: [
            "Publica hasta 15 propiedades",
            "Soporte prioritario por correo electrónico",
            "Acceso a estadísticas avanzadas",
            "Publicación durante 60 días",
            "Métricas de visitas y contactos",
        ]
    },
    ilimitado: {
        planName: "Ilimitado",
        popular: "Sin Límites",
        price: "99000",
        description: "Para microempresas y agentes inmobiliarios dedicados a la gestión de propiedades.",
        buttonText: "Seleccionar Plan Ilimitado",
        list: [
            "Publica propiedades ilimitadas",
            "Soporte prioritario por chat",
            "Acceso a todas las estadísticas",
            "Publicación durante 90 días",
            "Métricas de visitas y contactos",
        ]
    }
}

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