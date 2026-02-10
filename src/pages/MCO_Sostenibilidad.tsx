import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, ChevronRight, Leaf, Recycle, Wind } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MCO_Sostenibilidad = () => {
  const images = [
    "img/sostenibilidad/image-01.jpeg",
    "img/sostenibilidad/image-02.jpeg",
    "img/sostenibilidad/image-03.jpeg"
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

      {/* COMPONENTE 1: Inner Headline */}
      <section className="bg-slate-900 py-12 border-b-4 border-orange-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
              Sostenibilidad
            </h1>
          </div>
          
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="/" className="hover:text-orange-400 transition-colors flex items-center gap-1">
              <Home size={14} /> Inicio
            </a>
            <ChevronRight size={12} />
            <a href="/vision" className="hover:text-orange-400 transition-colors">Visión</a>
            <ChevronRight size={12} />
            <span className="text-orange-400">Somos</span>
          </nav>
        </div>
      </section>

      {/* COMPONENTE 2: Contenido de Sostenibilidad */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Texto Descriptivo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <Leaf className="text-green-600" size={24} />
                <span className="text-green-600 font-bold uppercase tracking-widest text-xs">Compromiso Ambiental</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                Nuestra <span className="text-orange-400">Sostenibilidad</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
                <p className="text-lg font-medium border-l-4 border-green-500 pl-6 bg-green-50/50 py-4">
                  En MCO Maquinarias y Constructora Olvera S.A. promovemos el uso eficiente y responsable de los recursos naturales, así como la implementación progresiva de prácticas sostenibles y alternativas energéticas que reduzcan el impacto ambiental de nuestras operaciones.
                </p>
                
                <p>
                  Buscamos preservar los recursos para evitar su agotamiento prematuro y generar un impacto positivo en la sociedad, contribuyendo al desarrollo local mediante la generación de empleo y una comunicación permanente con las comunidades cercanas a las zonas donde ejecutamos nuestros proyectos.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-slate-50 p-6 rounded-xl border-t-2 border-orange-500">
                    <Wind className="text-orange-400 mb-3" size={20} />
                    <h4 className="font-bold text-slate-900 uppercase text-xs mb-2">Reducción de Impacto</h4>
                    <p className="text-xs text-slate-500">Minimizamos emisiones de gases de efecto invernadero y combatimos la tala indiscriminada.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-xl border-t-2 border-green-500">
                    <Recycle className="text-green-600 mb-3" size={20} />
                    <h4 className="font-bold text-slate-900 uppercase text-xs mb-2">Gestión de Residuos</h4>
                    <p className="text-xs text-slate-500">Aplicamos modelos de gestión para reducir residuos tóxicos y facilitar el reciclaje.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visuals / Slider */}
            <div className="sticky top-32">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-[12px] border-slate-100 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current}
                    src={images[current]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                    alt="Sostenibilidad MCO"
                  />
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Indicadores */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        current === i ? 'w-10 bg-orange-500' : 'w-2 bg-white/50 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MCO_Sostenibilidad;