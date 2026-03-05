const values = [
  { id: '01', title: "Strategic Precision", desc: "Data-driven decisions that cut through market noise and identify true enterprise value." },
  { id: '02', title: "Absolute Integrity", desc: "Transparent, ethical, and secure financial frameworks built to withstand scrutiny." },
  { id: '03', title: "Operational Agility", desc: "Responsive restructuring and agile frameworks designed for modern, fast-moving enterprises." },
  { id: '04', title: "Global Reach", desc: "Deep local UAE expertise paired seamlessly with a broad international market outlook." },
];

export default function AboutValues() {
  return (
    <section className="w-full py-32 bg-[var(--color-black)] text-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[var(--color-gold)] text-xs font-bold uppercase tracking-widest mb-6 block">
              [ Core Principles ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Thoughtful Strategies. <br />
              <span className="text-gray-500">Flawless Execution.</span>
            </h2>
          </div>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => (
            <div 
              key={val.id} 
              // The magic happens here: Even index items are pushed down slightly on large screens
              className={`group flex flex-col p-10 bg-[#0a0a0a] rounded-[2rem] border border-white/5 hover:bg-white/5 transition-all duration-500 cursor-default
                ${index % 2 !== 0 ? 'lg:mt-16' : ''}
              `}
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[var(--color-gold)] font-mono text-sm border border-[var(--color-gold)]/30 rounded-full px-3 py-1">
                  {val.id}
                </span>
                {/* Clean SVG Arrow */}
                <svg className="w-5 h-5 text-gray-600 group-hover:text-[var(--color-gold)] transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H8M17 7V16" /></svg>
              </div>
              
              <h3 className="text-2xl font-medium mb-4 text-white group-hover:text-[var(--color-gold)] transition-colors">
                {val.title}
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}