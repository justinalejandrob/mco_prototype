import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Hammer, ArrowRight, Construction } from 'lucide-react';

// IMPORTACIÓN DE COMPONENTES DE ESTRUCTURA
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const MCO_Galeria2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow flex items-center justify-center pt-32 pb-20 font-sans">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* ICONO Y BADGE */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center mb-8"
            >
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100 shadow-sm">
                <Construction className="text-amber-600" size={32} strokeWidth={1.5} />
              </div>
              <div className="flex items-center gap-3 text-amber-600">
                <div className="w-8 h-[1px] bg-amber-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Próximamente</span>
                <div className="w-8 h-[1px] bg-amber-600" />
              </div>
            </motion.div>

            {/* TÍTULO PRINCIPAL */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-light text-slate-900 tracking-tighter mb-8"
            >
              Galería de Proyectos <span className="font-semibold italic text-slate-900">2027</span>
            </motion.h2>

            {/* DESCRIPCIÓN PROFESIONAL */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
            >
              Estamos documentando nuestra expansión operativa y nuevos desarrollos de infraestructura para el próximo ciclo. Este espacio albergará la excelencia técnica de Constructora Olvera S.A.
            </motion.p>

            {/* TIMELINE / STATUS CARDS */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            >
              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-sm group hover:bg-white hover:shadow-xl transition-all duration-500">
                <Calendar className="text-slate-400 mb-4 group-hover:text-amber-600 transition-colors" size={20} />
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-2">Lanzamiento</h4>
                <p className="text-xs text-slate-400">Primer Trimestre 2027</p>
              </div>

              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-sm group hover:bg-white hover:shadow-xl transition-all duration-500">
                <Hammer className="text-slate-400 mb-4 group-hover:text-amber-600 transition-colors" size={20} />
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-2">Fase Actual</h4>
                <p className="text-xs text-slate-400">Ejecución de Obra</p>
              </div>

              <div className="p-8 border border-slate-100 bg-slate-50/50 rounded-sm group hover:bg-white hover:shadow-xl transition-all duration-500">
                <Construction className="text-slate-400 mb-4 group-hover:text-amber-600 transition-colors" size={20} />
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-2">Proyectos</h4>
                <p className="text-xs text-slate-400">Sector Hidrocarburífero</p>
              </div>
            </motion.div>

            {/* CTA ACCIÓN */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a 
                href="/galeria-2026" 
                className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 border-b-2 border-amber-500 pb-2 hover:gap-6 transition-all"
              >
                Ver Galería Anterior <ArrowRight size={16} />
              </a>
            </motion.div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MCO_Galeria2;