import { motion } from 'framer-motion';

const clients = [
  { id: 1, name: "Cliente 01", logo: "/img/clients/image-01.jpg" },
  { id: 2, name: "Cliente 02", logo: "/img/clients/image-02.jpg" },
  { id: 3, name: "Cliente 03", logo: "/img/clients/image-03.jpg" },
  { id: 4, name: "Cliente 04", logo: "/img/clients/image-04.jpg" },
  { id: 5, name: "Cliente 05", logo: "/img/clients/image-04.png" },
  { id: 6, name: "Cliente 06", logo: "/img/clients/image-05.png" },
  { id: 7, name: "Cliente 07", logo: "/img/clients/image-06.png" },
  { id: 8, name: "Cliente 08", logo: "/img/clients/image-07.png" },
];

const Clients = () => {
  // Cuadruplicamos la lista para garantizar el flujo continuo en cualquier resolución
  const infiniteClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 text-amber-600 mb-4">
            <div className="w-8 h-[1px] bg-amber-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Confianza Institucional</span>
            <div className="w-8 h-[1px] bg-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 tracking-tight">
            Nuestros <span className="font-semibold text-slate-900">Aliados Estratégicos</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Degradados laterales para suavidad visual */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {infiniteClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-12 md:px-20 py-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-16 text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-medium max-w-2xl mx-auto leading-relaxed">
          Garantizando la excelencia operativa a través de relaciones sólidas con líderes de la industria
        </p>
      </div>
    </section>
  );
};

export default Clients;