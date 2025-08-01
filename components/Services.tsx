"use client";

const services = [
    {
        title: 'Page de lancement',
        description: 'Captez un max de prospects grâce à une page optimisée pour la conversion',
        message: 'Bonjour, votre offre sur la création de Page de lancement m\'interesse, peut on en discuter ?'
    },
    {
        title: 'Site vitrine Professionnel',
        description: 'Faites une excellente première impression avec un site à votre image',
        message: 'Bonjour, votre offre sur la création de Site vitrine Pro m\'interesse, peut on en discuter ?'
    },
    {
        title: 'Site E-commerce',
        description: 'Lancez votre boutique en ligne : simple, sûre et prête à vendre',
        message: 'Bonjour, votre offre sur la création de Site E-commerce m\'interesse, peut on en discuter ?'
    },
    {
        title: 'Refonte de Site Web',
        description: 'Transformez votre site existant pour convertir plus et séduire vos visiteurs',
        message: 'Bonjour, votre offre sur la Refonte de Site web m\'interesse, peut on en discuter ?'
    },
];

export default function Services() {

    const handleClick = (message: string) => {
        const number = '22891902824';
        const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="w-full px-4 md:px-12 mb-4 md:mb-8">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-10" id="services">Ce que nous vous proposons</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col justify-between">
                        <div className="relative flex-1 flex flex-col gap-4 h-full border border-[#1DAEFF]/20 rounded-xl p-4 cursor-pointer">
                            <h3 className="text-xl md:text-2xl font-semibold text-[#005098] text-center">{service.title}</h3>
                            <p className="relative bottom-0 text-sm md:text-xl text-gray-700 text-center">{service.description}</p>
                            {/* <div className="mt-auto text-right">
                                <a href="#" className="text-[#1DAEFF] text-sm hover:underline">En savoir plus →</a>
                            </div> */}
                        </div>

                        <button 
                        className="mt-3 w-full text-[#379461] border border-[#379461] rounded-xl px-4 py-2 text-sm hover:bg-[#379461] hover:text-white transition cursor-pointer"
                            onClick={(e) => handleClick(service.message)}
                        >
                            Je veux ce service
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
