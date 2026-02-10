//import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Ruler, MapPin, ChevronRight, BarChart3 } from 'lucide-react';

// IMPORTACIÓN DE COMPONENTES DE ESTRUCTURA
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    title: "Mantenimiento Vial Sector Sacha",
    location: "Joyas de los Sachas, Ecuador",
    status: "En Ejecución",
    category: "Infraestructura",
    description: "Optimización de vías de acceso para transporte de carga pesada y maquinaria industrial."
  },
  {
    id: 2,
    title: "Movimiento de Tierras Bloque 61",
    location: "Región Amazónica",
    status: "Finalizado",
    category: "Petróleo & Energía",
    description: "Preparación de plataformas y adecuación de suelos para instalaciones extractivas."
  },
  {
    id: 3,
    title: "Logística de Maquinaria Pesada",
    location: "Nacional",
    status: "Constante",
    category: "Servicios",
    description: "Despliegue estratégico de flota Caterpillar para proyectos de alta envergadura."
  }
];

const MCO_Proyectos = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 font-sans">
        {/* HERO SECCIÓN PROYECTOS */}
        <div className="container mx-auto px-6 mb-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-amber-600 mb-6"
            >
              <BarChart3 size={18} />
              <span className="text-xs font-bold uppercase tracking-[0.4em]">Operaciones Estratégicas</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-light text-slate-900 tracking-tight mb-8">
              Nuestros <span className="font-semibold">Proyectos</span>
            </h1>
            <p className="text-slate-500 text-lg font-light leading-relaxed border-l-2 border-amber-500 pl-6">
              Soluciones integrales en ingeniería y construcción. Gestionamos activos críticos con precisión técnica y compromiso con la seguridad operativa en cada zona de intervención.
            </p>
          </div>
        </div>

        {/* GRILLA DE PROYECTOS (PLACEHOLDERS) */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white border border-slate-200 overflow-hidden hover:border-amber-500/50 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Espacio para Imagen del Proyecto */}
                  <div className="md:w-1/3 h-64 md:h-auto bg-slate-200 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2">
                      <HardHat size={40} strokeWidth={1} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Registro Visual Pendiente</span>
                    </div>
                    {/* Cuando tengas las fotos, solo descomenta el <img> de abajo */}
                    {/* <img src={`/img/proyectos/p${project.id}.jpg`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /> */}
                  </div>

                  {/* Contenido Técnico */}
                  <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] bg-slate-900 text-white px-3 py-1 uppercase tracking-widest font-bold">
                          {project.category}
                        </span>
                        <span className="flex items-center gap-2 text-amber-600 text-[10px] font-bold uppercase tracking-widest">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                          {project.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-slate-400 mb-6">
                        <MapPin size={14} />
                        <span className="text-xs uppercase tracking-wider">{project.location}</span>
                      </div>
                      
                      <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
                      <div className="flex gap-8">
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase text-slate-400 tracking-tighter">Estándar</span>
                          <span className="text-xs font-bold text-slate-700">ISO 9001 / 45001</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] uppercase text-slate-400 tracking-tighter">Equipamiento</span>
                          <span className="text-xs font-bold text-slate-700">Flota Pesada</span>
                        </div>
                      </div>
                      
                      <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-900 group-hover:gap-4 transition-all">
                        Ficha Técnica <ChevronRight size={14} className="text-amber-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECCIÓN DE CONTACTO RÁPIDO */}
        <div className="container mx-auto px-6 mt-20">
          <div className="bg-slate-900 p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Ruler size={200} className="text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-light text-white mb-6">¿Tiene un proyecto en <span className="font-semibold italic">planificación?</span></h3>
            <p className="text-slate-400 max-w-lg mx-auto mb-10 text-sm">
              Nuestro equipo técnico está listo para realizar el levantamiento de información y presupuesto para su próxima obra.
            </p>
            <a 
              href="/contacto" 
              className="inline-block bg-amber-600 hover:bg-amber-500 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-10 py-5 transition-colors"
            >
              Solicitar Consultoría Técnica
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MCO_Proyectos;