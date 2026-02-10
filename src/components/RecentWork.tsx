import { useState } from 'react';
import { Link } from 'react-router-dom'; // Vital para evitar el 404 en Vercel
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const projects = [
  { id: 1, title: "Movimiento de Tierras", category: "Infraestructura", img: "img/sostenibilidad/image-01.jpeg", desc: "Ejecución de nivelación de suelos para plataformas industriales en la región amazónica." },
  { id: 2, title: "Obra Civil", category: "Obra Civil", img: "img/recentwork/image-09.jpeg", desc: "Pavimentación de vías principales con estándares de alta resistencia para tráfico pesado." },
  { id: 3, title: "Mantenimiento Industrial", category: "Maquinaria", img: "img/recentwork/image-10.jpeg", desc: "Mantenimiento preventivo y correctivo de arterias viales estratégicas." },
  { id: 4, title: "Excavaciones", category: "Minería", img: "img/recentwork/image-11.jpeg", desc: "Excavaciones de gran magnitud para cimentaciones estructurales de alta complejidad." },
  { id: 5, title: "Gestión de Aguas", category: "Ingeniería", img: "img/sostenibilidad/image-02.jpeg", desc: "Diseño e implementación de sistemas de control de aguas lluvias para zonas urbanas." },
  { id: 6, title: "Preparción de Terreno", category: "Construcción", img: "img/sostenibilidad/image-03.jpeg", desc: "Montaje de estructuras metálicas para pasos elevados de alta capacidad." },
  { id: 7, title: "Operaciones Logísticas", category: "Infraestructura", img: "img/recentwork/image-12.jpeg", desc: "Conformación de taludes y terraplenes para estabilización de terrenos." },
  { id: 8, title: "Mantenimiento", category: "Servicios", img: "img/recentwork/image-13.jpeg", desc: "Desbroce y limpieza de terrenos para nuevos proyectos de expansión civil." },
];

const RecentWork = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);
  const currentIndex = projects.findIndex(p => p.id === selectedId);

  const nextProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % projects.length;
    setSelectedId(projects[nextIdx].id);
  };

  const prevProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedId(projects[prevIdx].id);
  };

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden font-sans">
      {/* Decoración de fondo minimalista */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabecera Refinada */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-amber-500" />
              <span className="text-amber-500 font-medium uppercase tracking-[0.5em] text-[10px]">Portafolio Industrial</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-white tracking-tighter">
              Trabajos <span className="font-semibold text-white/90">Recientes</span>
            </h2>
          </div>
          {/* ✅ Corregido: Uso de Link en lugar de <a> */}
          <Link to="/proyectos" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-amber-500 transition-all duration-300">
            Ver portafolio completo <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        {/* Grid de Proyectos Estilo Galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/5 bg-white/5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer border-[0.5px] border-white/5"
            >
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-40"
              />

              {/* Overlay de información sutil */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <Maximize2 size={20} strokeWidth={1} className="text-amber-500" />
                </div>
                <span className="text-amber-500 text-[9px] uppercase tracking-[0.4em] font-bold mb-2 block">{project.category}</span>
                <h4 className="text-white text-xl font-medium tracking-tight uppercase">{project.title}</h4>
              </div>
              
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX EMERGENTE */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            {/* ✅ Botón X Optimizado: Más visible, fondo sólido y mejor contraste */}
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center bg-amber-500 text-slate-950 rounded-full shadow-2xl hover:scale-110 transition-all z-[120]"
              aria-label="Cerrar"
            >
              <X size={28} strokeWidth={2.5} />
            </button>

            <div 
              className="relative w-full max-w-7xl flex flex-col lg:flex-row bg-slate-900/40 rounded-2xl overflow-hidden border border-white/10 shadow-3xl" 
              onClick={e => e.stopPropagation()}
            >
              
              {/* Navegación - Adaptada para móvil (sección inferior) */}
              <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 flex gap-4 z-50">
                <button onClick={prevProject} className="w-12 h-12 lg:w-14 lg:h-14 border border-white/20 bg-slate-950/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all">
                  <ChevronLeft size={24} strokeWidth={1.5} />
                </button>
                <button onClick={nextProject} className="w-12 h-12 lg:w-14 lg:h-14 border border-white/20 bg-slate-950/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all">
                  <ChevronRight size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Imagen Principal - Adaptada a altura móvil */}
              <div className="w-full lg:w-[65%] h-[40vh] sm:h-[50vh] lg:h-[75vh] relative overflow-hidden">
                <motion.img 
                  key={selectedProject.img}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={selectedProject.img} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Info del Proyecto - Estilo Ficha Técnica */}
              <div className="w-full lg:w-[35%] p-8 lg:p-16 bg-slate-900 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
                <div className="mb-6 lg:mb-10">
                  <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[9px] mb-3 block">Ficha Técnica</span>
                  <h3 className="text-white text-3xl lg:text-5xl font-light uppercase tracking-tighter leading-tight mb-4">
                    {selectedProject.title.split(' ')[0]} <br />
                    <span className="font-bold text-amber-50/90">{selectedProject.title.split(' ').slice(1).join(' ')}</span>
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-slate-300 text-sm lg:text-base leading-relaxed font-light italic border-l-2 border-amber-500/50 pl-5">
                    {selectedProject.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-slate-500 mb-1">Sector</span>
                        <span className="text-white text-[10px] lg:text-xs uppercase font-bold tracking-widest bg-white/5 px-2 py-1 rounded-sm">{selectedProject.category}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] uppercase tracking-widest text-slate-500 mb-1">Ubicación</span>
                        <span className="text-white text-[10px] lg:text-xs uppercase font-bold tracking-widest">Amazonía, EC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RecentWork;