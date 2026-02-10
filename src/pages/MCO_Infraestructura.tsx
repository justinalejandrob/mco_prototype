import { motion } from 'framer-motion';
import { Home, ChevronRight} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MCO_Infraestructura = () => {
  const images = [
    "img/infraestructura/image-02.png",
    "img/infraestructura/image-01.png",
    "img/infraestructura/image-03.png"
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-orange-500">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="img/infraestructura/image-04.png" 
            className="w-full h-full object-cover" 
            alt="Infraestructura MCO" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500 mb-4">
              <a href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home size={12}/> Inicio</a>
              <ChevronRight size={10} className="text-slate-600" />
              <span className="text-slate-400">Tecnología</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
              Capacidad e <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Infraestructura
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            
            {/* LADO IZQUIERDO: TEXTO ESTATÉGICO */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-xs font-bold text-orange-600 uppercase tracking-[0.4em]">Poder Operativo</h2>
                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                  Ingeniería de <br /> <span className="text-slate-500 font-light italic">Clase Mundial</span>
                </h3>
                <div className="w-20 h-1.5 bg-orange-500"></div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed text-justify">
                <strong>Maquinarias y Constructora Olvera</strong> es una empresa ecuatoriana especialista en ingeniería de construcción de proyectos civiles e integrales, así como también logísticos para los sectores petrolero, energético e industrial.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-slate-900">
                <p className="text-slate-600 italic">
                  "Contamos con maquinaria amarilla pesada, equipos de traslado de tierras y toda la infraestructura necesaria para la realización de mega proyectos de escala nacional."
                </p>
              </div>
            </motion.div>

            {/* LADO DERECHO: GRID DE IMÁGENES TIPO MOSAICO */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-2 h-64 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img src={images[0]} className="w-full h-full object-cover" alt="Maquinaria MCO" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-48 rounded-3xl overflow-hidden shadow-xl"
              >
                <img src={images[1]} className="w-full h-full object-cover" alt="Obra Civil" />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-48 rounded-3xl overflow-hidden shadow-xl"
              >
                <img src={images[2]} className="w-full h-full object-cover" alt="Logística" />
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MCO_Infraestructura;