const services = [
  { id: "01", title: "Corporate Structuring", desc: "Optimal entity formation, holding company setups, and regulatory compliance tailored for the UAE market." },
  { id: "02", title: "Market Entry Strategy", desc: "Comprehensive feasibility studies, competitor analysis, and go-to-market execution for foreign entities." },
  { id: "03", title: "Operational Optimization", desc: "Streamlining workflows, supply chain restructuring, and digital transformation for established firms." },
  { id: "04", title: "Mergers & Acquisitions", desc: "Due diligence, valuation modeling, and post-merger integration for complex enterprise transactions." },
  { id: "05", title: "Financial Restructuring", desc: "Capital raising advisory, debt restructuring, and cash flow optimization to ensure liquidity and growth." },
  { id: "06", title: "Risk Management", desc: "Identifying systemic vulnerabilities and implementing robust mitigation frameworks for volatile markets." }
];

export default function ConsultationServices() {
  return (
    <section id="services" className="w-full py-32 bg-white text-[var(--color-black)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Comprehensive <br />
            <span className="text-[var(--color-gold)]">Advisory Solutions.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl text-[16px] font-light leading-relaxed">
            We don't offer generic advice. We provide highly specialized, actionable blueprints designed to solve complex challenges and accelerate enterprise value.
          </p>
        </div>

        {/* Clean, Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {services.map((service) => (
            <div key={service.id} className="p-10 border-b border-r border-gray-200 hover:bg-gray-50 transition-colors group">
              <span className="text-3xl font-light text-gray-300 group-hover:text-[var(--color-gold)] transition-colors mb-6 block">
                {service.id}
              </span>
              <h3 className="text-xl font-bold mb-4 text-[var(--color-black)]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {service.desc}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-black)] group-hover:text-[var(--color-gold)] transition-colors cursor-pointer">
                Learn More 
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}