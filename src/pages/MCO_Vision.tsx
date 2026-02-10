import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ChevronRight, Eye } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MCO_Vision = () => {
  const images = [
    "img/vision/image-01.jpeg",
    "img/vision/image-02.jpeg",
    "img/vision/image-03.jpeg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="bg-white min-h-screen pt-24 lg:pt-32">
      <Navbar />

      {/* COMPONENTE 1: Inner Headline (Breadcrumbs) */}
      <section className="bg-slate-900 py-12 border-b-4 border-orange-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
              Visión
            </h1>
          </div>
          
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="/" className="hover:text-text-orange-400 transition-colors flex items-center gap-1">
              <Home size={14} /> Inicio
            </a>
            <ChevronRight size={12} />
            <a href="/mision" className="hover:text-orange-400 transition-colors">Misión</a>
            <ChevronRight size={12} />
            <span className="text-orange-400">Somos</span>
          </nav>
        </div>
      </section>

      {/* COMPONENTE 2: Contenido de Visión */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Texto Descriptivo */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Eye className="text-orange-400" size={24} />
                <span className="text-orange-400 font-bold uppercase tracking-widest text-xs">Proyección a Futuro</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                Nuestra <span className="text-orange-400">Visión</span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-slate-600 text-lg leading-relaxed text-justify border-l-4 border-slate-100 pl-6">
                  Consolidarnos como una empresa líder en el sector de la construcción y maquinaria pesada, reconocida por la excelencia operativa, la calidad de nuestros servicios y el compromiso con cada proyecto ejecutado.
                </p>
                <p className="text-slate-500 text-base leading-relaxed text-justify">
                  Aspiramos a un crecimiento sostenido que nos permita posicionarnos como referentes a nivel local y nacional, contribuyendo al desarrollo de infraestructura del país mediante soluciones eficientes, innovadoras y responsables.
                </p>
              </div>
            </motion.div>

            {/* Slider de Visión */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-100 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={images[current]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                  alt="Visión MCO"
                />
              </AnimatePresence>
              
              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      current === i ? 'w-8 bg-orange-500' : 'w-2 bg-white/50 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Línea divisoria decorativa */}
          <div className="mt-24 w-full h-px bg-slate-200 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-white">
              <div className="w-2 h-2 rotate-45 border-2 border-orange-500" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MCO_Vision;