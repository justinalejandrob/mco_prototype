import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importación vital para evitar el 404
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    image: "/img/hero1.png",
    title: "Ingeniería de Potencia",
    subtitle: "MCO MAQUINARIAS",
    description: "Liderando la construcción de infraestructura civil en la Amazonía ecuatoriana con precisión técnica y estándares de calidad superior.",
    buttonText: "Nuestros Proyectos",
    link: "/proyectos"
  },
  {
    image: "/img/hero2.png",
    title: "Soluciones Integrales",
    subtitle: "CONSTRUCTORA OLVERA S.A.",
    description: "Transformamos terrenos en progreso. Más de dos décadas diseñando y ejecutando obras de alta complejidad estructural.",
    buttonText: "Leer Más",
    link: "/asociacion"
  },
  {
    image: "/img/hero3.png",
    title: "Maquinaria de Vanguardia",
    subtitle: "POTENCIA Y RENDIMIENTO",
    description: "Contamos con una flota de última generación y equipo humano altamente calificado para el éxito de su inversión.",
    buttonText: "Ver Infraestructura",
    link: "/infraestructura"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const VIDEO_SOURCE = "/media/hero_video.mp4"; 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900 font-sans">
      
      {/* --- CAPA DE FONDO (VIDEO PARA PC, IMÁGENES PARA MÓVIL) --- */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent z-10" />

        <div className="hidden md:block w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover object-center scale-105"
          >
            <source src={VIDEO_SOURCE} type="video/mp4" />
          </video>
        </div>

        <div className="md:hidden w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={`bg-${current}`}
              src={slides[current].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="h-full w-full object-cover object-center"
              alt="Background"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* --- CONTENIDO DE TEXTO --- */}
      <div className="relative z-20 h-full w-full flex items-center px-6 sm:px-12 md:px-24 pt-20 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="w-6 md:w-8 h-[1px] bg-amber-500" />
                <span className="text-amber-500 font-medium tracking-[0.4em] md:tracking-[0.6em] uppercase text-[9px] md:text-xs">
                  {slides[current].subtitle}
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-light text-white leading-[1.1] mb-6 md:mb-8 tracking-tight">
                {slides[current].title.split(' ')[0]} <br />
                <span className="font-semibold text-white">
                  {slides[current].title.split(' ').slice(1).join(' ')}
                </span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-md md:max-w-lg font-normal leading-relaxed mb-8 md:mb-12 opacity-90 italic border-l border-amber-500/50 pl-6 md:pl-8">
                {slides[current].description}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
                {/* CAMBIO CLAVE: De <a> a <Link> */}
                <Link
                  to={slides[current].link}
                  className="group relative flex items-center gap-4 bg-transparent border border-white/40 text-white px-8 md:px-10 py-3 md:py-4 font-bold uppercase text-[9px] md:text-[10px] tracking-[0.3em] hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 transition-all duration-500"
                >
                  <span className="relative z-10">{slides[current].buttonText}</span>
                  <ArrowRight size={14} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <div className="hidden sm:flex gap-3">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-[2px] transition-all duration-700 ${
                        current === i ? 'w-10 md:w-12 bg-amber-500' : 'w-4 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- NAVEGACIÓN LATERAL (FLECHAS) --- */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex gap-3 z-30">
        <button 
          onClick={prevSlide} 
          className="w-12 h-12 md:w-16 md:h-16 border-2 border-white/20 bg-slate-950/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 transition-all duration-300"
        >
          <ChevronLeft size={24} strokeWidth={2} />
        </button>
        <button 
          onClick={nextSlide} 
          className="w-12 h-12 md:w-16 md:h-16 border-2 border-white/20 bg-slate-950/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 hover:text-slate-900 transition-all duration-300"
        >
          <ChevronRight size={24} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
};

export default Hero;