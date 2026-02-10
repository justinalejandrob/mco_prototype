import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importación necesaria para SPA
import { Settings, HardHat, Newspaper, Users, ArrowRight, ExternalLink } from 'lucide-react';

const services = [
  {
    title: "MCO Maquinarias",
    desc: "Líderes en servicios y construcciones de obra civil en La Joya de los Sachas, Orellana.",
    icon: <Settings strokeWidth={1} className="w-7 h-7" />, 
    link: "/asociacion"
  },
  {
    title: "Infraestructura",
    desc: "Maquinaria pesada de última generación para tratamiento de tierras y vías de alto nivel.",
    icon: <HardHat strokeWidth={1} className="w-7 h-7" />,
    link: "/infraestructura"
  },
  {
    title: "Prensa y Noticias",
    desc: "Mantente al día con nuestros proyectos, eventos y el impacto diario de nuestra labor.",
    icon: <Newspaper strokeWidth={1} className="w-7 h-7" />,
    link: "/prensa"
  },
  {
    title: "Bolsa de Empleo",
    desc: "Únete a nuestra familia. Descubre las oportunidades laborales que generamos en la región.",
    icon: <Users strokeWidth={1} className="w-7 h-7" />,
    link: "/empleo"
  }
];

const Features = () => {
  return (
    <section className="relative bg-[#f8fafc] pt-10 pb-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- Sección CTA Corporativo --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-30 bg-slate-900 overflow-hidden rounded-sm p-10 md:p-16 mb-24 flex flex-col md:flex-row items-center justify-between shadow-2xl"
        >
          {/* Decoración de fondo sutil */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <div className="relative z-10 text-center md:text-left mb-10 md:mb-0">
            <h3 className="text-2xl md:text-3xl text-white font-light tracking-tight leading-tight">
              ¿En qué te podemos ayudar? 
              <span className="block text-orange-400 font-black uppercase italic mt-2 text-xl md:text-2xl">
                Contactémonos hoy mismo
              </span>
            </h3>
            <p className="text-slate-400 text-sm mt-4 font-normal tracking-wide max-w-md">
              Soluciones técnicas especializadas para el desarrollo de infraestructura estratégica.
            </p>
          </div>
          
          {/* ✅ Corregido: Link en lugar de <a> */}
          <Link 
            to="/contacto"
            className="relative z-10 bg-transparent border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-slate-900 px-10 py-5 font-bold uppercase text-[10px] tracking-[0.3em] transition-all duration-500 flex items-center gap-4 group"
          >
            Solicitar Cotización
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>

        {/* --- Cuadrícula de Servicios - Estilo Minimalista --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 border border-slate-200 bg-white shadow-sm">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative p-12 hover:bg-slate-50 transition-all duration-500 flex flex-col items-start"
            >
              {/* Icono */}
              <div className="w-14 h-14 flex items-center justify-center mb-10 text-slate-400 group-hover:text-amber-600 transition-colors duration-500">
                {item.icon}
              </div>
              
              <div className="mb-6">
                <span className="text-[10px] text-amber-600 font-bold tracking-[0.4em] uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  Servicio 0{index + 1}
                </span>
                <h6 className="text-lg font-medium text-slate-900 uppercase tracking-tight">
                  {item.title}
                </h6>
              </div>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-10 font-light">
                {item.desc}
              </p>
              
              <div className="mt-auto w-full">
                {/* ✅ Corregido: Link en lugar de <a> */}
                <Link 
                  to={item.link}
                  className="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-amber-600 transition-all"
                >
                  Explorar detalles <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;