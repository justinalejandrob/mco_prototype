import { useState } from 'react';
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
    <section className="py-32 bg-slate-950 relative overflow-hidden">
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
          <a href="/proyectos" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-amber-500 transition-all duration-300">
            Ver portafolio completo <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </a>
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
              
              {/* Línea de acento inferior en hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX EMERGENTE - DISEÑO ARQUITECTÓNICO */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            <button className="absolute top-10 right-10 text-white/30 hover:text-amber-500 transition-all z-[110]">
              <X size={32} strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-7xl flex flex-col lg:flex-row bg-transparent overflow-hidden" onClick={e => e.stopPropagation()}>
              
              {/* Botones Navegación Minimalistas */}
              <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 flex gap-4 z-50">
                <button onClick={prevProject} className="w-14 h-14 border border-white/10 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all">
                  <ChevronLeft size={24} strokeWidth={1} />
                </button>
                <button onClick={nextProject} className="w-14 h-14 border border-white/10 text-white flex items-center justify-center hover:bg-amber-500 hover:text-slate-950 transition-all">
                  <ChevronRight size={24} strokeWidth={1} />
                </button>
              </div>

              {/* Imagen Principal */}
              <div className="w-full lg:w-[65%] h-[50vh] lg:h-[70vh] relative overflow-hidden">
                <motion.img 
                  key={selectedProject.img}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={selectedProject.img} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Info del Proyecto - Estilo Ficha Técnica */}
              <div className="w-full lg:w-[35%] p-10 lg:p-20 bg-slate-900/50 flex flex-col justify-center border-y lg:border-y-0 lg:border-l border-white/5">
                <div className="mb-10">
                  <span className="text-amber-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block">Ficha de Proyecto</span>
                  <h3 className="text-white text-4xl lg:text-5xl font-light uppercase tracking-tighter leading-[0.9] mb-4">
                    {selectedProject.title.split(' ')[0]} <br />
                    <span className="font-bold">{selectedProject.title.split(' ').slice(1).join(' ')}</span>
                  </h3>
                </div>
                
                <div className="space-y-8">
                  <p className="text-slate-400 text-sm lg:text-base leading-relaxed font-light italic border-l border-amber-500/30 pl-6">
                    "{selectedProject.desc}"
                  </p>
                  
                  <div className="pt-8 border-t border-white/5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest text-slate-500 mb-1">Sector</span>
                        <span className="text-white text-xs uppercase font-bold tracking-widest">{selectedProject.category}</span>
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-widest text-slate-500 mb-1">Ubicación</span>
                        <span className="text-white text-xs uppercase font-bold tracking-widest">Ecuador</span>
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