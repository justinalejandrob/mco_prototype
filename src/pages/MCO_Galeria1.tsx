import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Camera, Calendar, Play } from 'lucide-react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

// Tipado actualizado para soportar videos
interface GalleryItem {
  id: number;
  src: string;
  category: "Fotos" | "Videos";
  title: string;
  type: "image" | "video";
  thumbnail?: string; // Opcional: una imagen previa para el video
}

const galleryItems: GalleryItem[] = [
  // VIDEOS (Añadidos primero)
  { id: 101, src: "/media/video1.mp4", category: "Videos", type: "video", title: "Operación de Maquinaria Pesada" },
  { id: 102, src: "/media/video2.mp4", category: "Videos", type: "video", title: "Infraestructura en la Amazonía" },
  { id: 103, src: "/media/video3.mp4", category: "Videos", type: "video", title: "Logística y Transporte" },
  { id: 104, src: "/media/video4.mp4", category: "Videos", type: "video", title: "Proyectos Civiles 2026" },
  
  // FOTOS (Existentes)
  { id: 1, src: "/img/asociacion/image-01.jpeg", category: "Fotos", type: "image", title: "Infraestructura Corporativa I" },
  { id: 2, src: "/img/asociacion/image-02.jpeg", category: "Fotos", type: "image", title: "Infraestructura Corporativa II" },
  { id: 3, src: "/img/vision/image-01.jpeg", category: "Fotos", type: "image", title: "Infraestructura Corporativa III" },
  { id: 4, src: "/img/sostenibilidad/image-01.jpeg", category: "Fotos", type: "image", title: "Desarrollo Vial Sacha" },
  { id: 5, src: "/img/sostenibilidad/image-02.jpeg", category: "Fotos", type: "image", title: "Movimiento de Tierras" },
  { id: 6, src: "/img/sostenibilidad/image-03.jpeg", category: "Fotos", type: "image", title: "Cimentación Profunda" },
  { id: 7, src: "/img/vision/image-02.jpeg", category: "Fotos", type: "image", title: "Obras Civiles Complejas" },
  { id: 8, src: "/img/mision/image-01.jpeg", category: "Fotos", type: "image", title: "Compromiso Técnico" },
  { id: 9, src: "/img/mision/image-02.jpeg", category: "Fotos", type: "image", title: "Estándares de Calidad" },
  { id: 10, src: "/img/mision/image-03.png", category: "Fotos", type: "image", title: "Seguridad Industrial" },
  { id: 11, src: "/img/recentwork/image-13.jpeg", category: "Fotos", type: "image", title: "Operaciones Amazónicas" },
  { id: 12, src: "/img/recentwork/image-12.jpeg", category: "Fotos", type: "image", title: "Mantenimiento de Flota" },
  { id: 13, src: "/img/recentwork/image-11.jpeg", category: "Fotos", type: "image", title: "Logística de Equipos" },
];

const categories = ["Todos", "Fotos", "Videos"];

const MCO_Galeria1 = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState("Todos");

  const filteredItems = filter === "Todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 font-sans">
        {/* HEADER DE SECCIÓN */}
        <div className="container mx-auto px-6 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-10">
            <div>
              <div className="flex items-center gap-3 text-amber-600 mb-4">
                <div className="w-12 h-[1px] bg-amber-600" />
                <span className="text-xs font-bold uppercase tracking-[0.3em]">Portafolio Multimedia</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
                Trabajos <span className="font-semibold text-slate-900">2026</span>
              </h2>
            </div>
            
            <div className="mt-8 md:mt-0">
              <nav className="flex flex-wrap gap-4 md:gap-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 pb-2 border-b-2 ${
                      filter === cat ? "border-amber-500 text-slate-900" : "border-transparent text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {cat === "Todos" ? "Todos" : cat}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* GRILLA DE CONTENIDO */}
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-[350px] overflow-hidden bg-slate-100 rounded-sm cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                  onClick={() => setSelectedItem(item)}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="relative w-full h-full bg-slate-200">
                      {/* En una app real usarías un poster, aquí simulamos con un overlay de play */}
                      <video className="w-full h-full object-cover muted">
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                        <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform">
                          <Play className="text-white fill-white" size={24} />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay Profesional */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-amber-500 text-[9px] uppercase tracking-[0.3em] font-bold mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-white text-lg font-light tracking-wide mb-4">
                        {item.title}
                      </h3>
                      <div className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-slate-900 transition-colors">
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* LIGHTBOX / MODAL ACTUALIZADO */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={() => setSelectedItem(null)}
            >
              <X size={40} strokeWidth={1} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-6xl w-full flex flex-col md:flex-row bg-white overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-2/3 bg-black flex items-center justify-center min-h-[50vh]">
                {selectedItem.type === "image" ? (
                  <img 
                    src={selectedItem.src} 
                    alt={selectedItem.title} 
                    className="w-full h-auto max-h-[70vh] md:max-h-[85vh] object-contain"
                  />
                ) : (
                  <video 
                    src={selectedItem.src} 
                    controls 
                    autoPlay 
                    className="w-full max-h-[70vh] md:max-h-[85vh]"
                  />
                )}
              </div>
              
              <div className="md:w-1/3 p-12 flex flex-col justify-between bg-white">
                <div>
                  <span className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">Detalles Multimedia</span>
                  <h3 className="text-3xl font-light text-slate-900 mb-6 tracking-tight leading-tight uppercase">
                    {selectedItem.title}
                  </h3>
                  <div className="space-y-4 border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-4 text-slate-500">
                      <Camera size={16} className="text-amber-500" />
                      <span className="text-xs uppercase tracking-widest font-medium">Formato: {selectedItem.category}</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-500">
                      <Calendar size={16} className="text-amber-500" />
                      <span className="text-xs uppercase tracking-widest font-medium">Año: 2026</span>
                    </div>
                  </div>
                  <p className="mt-8 text-slate-400 text-sm leading-relaxed italic">
                    Material audiovisual técnico de Constructora Olvera S.A. documentando procesos de ingeniería y ejecución de obra bajo normativas internacionales.
                  </p>
                </div>
                
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="mt-12 w-full border border-slate-900 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-slate-900 hover:text-white transition-all duration-300"
                >
                  Regresar a la Galería
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MCO_Galeria1;