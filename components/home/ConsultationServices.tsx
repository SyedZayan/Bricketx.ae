import Image from 'next/image';

const services = [
  { 
    id: '/01', 
    title: "Strategic Market Entry", 
    description: "Navigate the UAE business landscape with precision. We handle corporate structuring, compliance, and licensing to ensure a flawless launch.",
    // Download an image, name it exactly this, and put it in public/images/
    image: "/images/service-1.jpg" 
  },
  { 
    id: '/02', 
    title: "Operational Excellence", 
    description: "Streamline workflows and optimize resource allocation. We engineer internal processes that drive efficiency and scale sustainably.",
    image: "/images/service-2.jpg" 
  },
  { 
    id: '/03', 
    title: "Financial Restructuring", 
    description: "Protect and grow your assets. Our advisory services identify fiscal vulnerabilities and implement robust capital growth strategies.",
    image: "/images/service-3.jpg" 
  },
  { 
    id: '/04', 
    title: "Investment Diligence", 
    description: "Make informed acquisitions. We provide comprehensive due diligence, market analysis, and risk assessment for high-stakes investments.",
    image: "/images/service-4.jpg" 
  }
];

export default function ConsultationServices() {
  return (
    <section className="w-full py-32 bg-[var(--color-black)] text-white relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-6 block">
              [ SERVICES ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
              How We Help You <br />
              Architect Success
            </h2>
          </div>
          <div className="max-w-sm lg:pb-2">
            <p className="text-[var(--color-grey)] text-[15px] leading-relaxed font-light">
              We help you safely navigate, restructure, and scale your business operations in the UAE. Ethically, securely, and with strategic intention.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden bg-[#111] cursor-pointer border border-white/5"
            >
              <Image 
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end transition-transform duration-500">
                
                <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-md mb-auto flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                   <div className="w-2 h-2 bg-[var(--color-gold)] rounded-full"></div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-end gap-4">
                    <h3 className="text-2xl font-medium leading-snug text-white">
                      {service.title}
                    </h3>
                    <span className="text-[var(--color-grey)] text-sm font-mono mb-1">
                      {service.id}
                    </span>
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-[var(--color-grey)] text-sm leading-relaxed pt-2 font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}