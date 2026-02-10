import { motion } from 'framer-motion';
import { Home, ChevronRight, Briefcase, CheckCircle2, FileText, Send, Users, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MCO_Empleo = () => {
  const requirements = [
    { title: "Experiencia", detail: "Manejo de maquinaria pesada y obra civil." },
    { title: "Disponibilidad", detail: "Inmediata y capacidad de movilización." },
    { title: "Actitud", detail: "Proactiva, emprendedora y orientada a resultados." },
    { title: "Logística", detail: "Control de inventarios y bodega (preferible)." }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-orange-500">
      <Navbar />

      {/* HERO SECTION - Estilo Corporativo */}
      <section className="relative h-[35vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="img/empleo/imagen-01.png" 
            className="w-full h-full object-cover" 
            alt="Trabaja con nosotros" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500 mb-4">
              <a href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home size={12}/> Inicio</a>
              <ChevronRight size={10} className="text-slate-600" />
              <span className="text-slate-400">Carreras</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
              Únase a nuestro <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                equipo de expertos
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LADO IZQUIERDO: DETALLES DE LA VACANTE */}
            <div className="lg:col-span-7 space-y-12">
              <motion.article 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-orange-500 p-3 rounded-2xl text-slate-900 shadow-lg shadow-orange-500/20">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Trabaja con nosotros</h2>
                    <p className="text-orange-600 text-xs font-bold uppercase tracking-widest">Vacante: Personal de Obra Civil</p>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    ¿Eres conocedor del sector de la construcción y obras viales? En <strong>MCO</strong> buscamos profesionales proactivos que deseen formar parte de proyectos de gran escala en la región amazónica.
                  </p>

                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6 border-l-4 border-orange-500 pl-4">Requisitos del Perfil</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {requirements.map((req, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-orange-500 transition-colors">
                        <CheckCircle2 className="text-orange-600 shrink-0" size={18} />
                        <div>
                          <p className="text-xs font-bold text-slate-900 uppercase tracking-tight">{req.title}</p>
                          <p className="text-[11px] text-slate-500">{req.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
                    <Star className="absolute -right-4 -bottom-4 text-white/5" size={120} />
                    <h4 className="text-xl font-bold mb-4">¿Qué ofrecemos?</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        Sueldo competitivo acorde al mercado.
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        Oportunidad de crecimiento en proyectos viales.
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        Estabilidad laboral en un entorno profesional.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.article>
            </div>

            {/* LADO DERECHO: FORMULARIO DE POSTULACIÓN */}
            <div className="lg:col-span-5">
              <aside className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                  <div className="text-center mb-8">
                    <div className="inline-flex p-4 bg-slate-50 rounded-full mb-4">
                      <FileText className="text-slate-900" size={28} />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Envía tu CV</h4>
                    <p className="text-xs text-slate-500 mt-2">Postúlate directamente a través de este formulario</p>
                  </div>

                  <form className="space-y-4">
                    <input type="text" placeholder="Nombre completo" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-orange-500 outline-none" />
                    <input type="email" placeholder="Correo electrónico" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-orange-500 outline-none" />
                    <input type="tel" placeholder="Número de contacto" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-sm focus:border-orange-500 outline-none" />
                    
                    <div className="relative group">
                      <div className="w-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-6 text-center group-hover:border-orange-500 transition-colors">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Adjuntar Hoja de Vida (PDF)</p>
                      </div>
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                    </div>

                    <button className="w-full py-4 bg-orange-500 hover:bg-slate-900 hover:text-white text-slate-900 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 uppercase text-[10px] tracking-widest">
                      <Send size={14} /> Enviar Postulación
                    </button>
                  </form>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-orange-600" size={20} />
                    <h5 className="font-bold text-slate-900 text-[11px] uppercase tracking-widest">Creemos en ti</h5>
                  </div>
                  <p className="text-xs italic text-slate-500 leading-relaxed">
                    "La actitud positiva es una decisión personal. Nuestra elección es ser nosotros mismos y alcanzar nuestro potencial sacando la mejor versión de sí mismo."
                  </p>
                </div>
              </aside>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MCO_Empleo;