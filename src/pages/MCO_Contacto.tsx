import { useState, useEffect, useRef } from 'react'; // Se agregó useRef
import { motion } from 'framer-motion';
import { Home, ChevronRight, Phone, Mail, MapPin, Send, MessageSquare, Smartphone, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Importación necesaria
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MCO_Contacto = () => {
  const formRef = useRef<HTMLFormElement>(null); // Referencia para el formulario
  const images = [
    "img/contacto/image-01.png",
    "img/contacto/image-02.png",
    "img/contacto/image-03.png"
  ];

  const [current, setCurrent] = useState(0);
  
  // ESTADOS PARA EL FORMULARIO
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const contacts = [
    { area: "Gerencia General", phone: "(+593) 098 174 0392", email: "gerencia@mco-ec.com" },
    { area: "Departamento Logístico", phone: "(+593) 098 567 2959", email: "logistica@mco-ec.com" },
    { area: "Talento Humano", phone: "(+593) 099 912 8487", email: "tthh@mco-ec.com" },
    { area: "Dirección de Proyectos", phone: "(+593) 099 174 6636", email: "proyectos@mco-ec.com" }
  ];

  // FUNCIÓN DE ENVÍO CON EMAILJS (Actualizada con tus credenciales)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('submitting');

    const SERVICE_ID = "service_lfygsxk";
    const TEMPLATE_ID = "template_xpms347";
    const PUBLIC_KEY = "LQO_T2bq8ffWNBq55";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('submitted');
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('error');
      });
  };

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[35vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={images[0]} 
            className="w-full h-full object-cover" 
            alt="Fondo Contacto" 
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
              <span className="text-slate-400">Contacto</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
              Solicite una <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                cotización hoy
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CUERPO PRINCIPAL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* LADO IZQUIERDO: Información */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-xs font-bold text-orange-600 uppercase tracking-[0.4em] mb-3">Atención Inmediata</h2>
                <h3 className="text-2xl font-light text-slate-900 leading-snug">
                  Maquinarias y Constructora Olvera <br /> 
                  <strong>respaldando sus obras.</strong>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contacts.map((c, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    className="group border-l-2 border-slate-100 pl-5 py-1 hover:border-orange-500 transition-all"
                  >
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-orange-600 transition-colors">
                      {c.area}
                    </h5>
                    <div className="flex flex-col mt-1">
                      <a href={`tel:${c.phone}`} className="text-md font-bold text-slate-800 hover:text-orange-600 transition-colors">
                        {c.phone}
                      </a>
                      <a href={`mailto:${c.email}`} className="text-xs text-slate-500 hover:text-slate-900 transition-colors">
                        {c.email}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-50">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 p-3 rounded-xl text-orange-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-tight">Sede Principal</h4>
                    <p className="text-slate-500 text-sm leading-relaxed italic">
                      Av. Los Alamos y Calle 3,<br /> 
                      La Joya de los Sachas, Orellana - Ecuador.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LADO DERECHO: Formulario */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                <MessageSquare className="absolute -right-10 -top-10 text-slate-200/30" size={180} />
                
                <div className="relative z-10 mb-8">
                  <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Contáctanos</h4>
                  <div className="w-12 h-1 bg-orange-500 mt-2"></div>
                </div>

                {status === 'submitted' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 size={60} className="text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900">¡Mensaje enviado con éxito!</h3>
                    <p className="text-slate-500 mt-2 text-sm">Nuestro equipo de gerencia se pondrá en contacto con usted en la brevedad posible.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-orange-600 font-bold text-[10px] uppercase tracking-widest hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Nombre Completo</label>
                      <input name="name" required type="text" className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all" placeholder="Nombre Completo" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email Corporativo</label>
                      <input name="email" required type="email" className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all" placeholder="email@empresa.com" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Número de Celular</label>
                      <div className="relative">
                        <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input name="phone" required type="tel" className="w-full bg-white border border-slate-200 rounded-xl p-3.5 pl-10 text-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all" placeholder="Numero de Celular" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Asunto</label>
                      <input name="subject" required type="text" className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all" placeholder="Asunto" />
                    </div>
                    <div className="md:col-span-2 space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Mensaje o Requerimiento</label>
                      <textarea name="message" required rows={4} className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-sm focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all resize-none" placeholder="¿En qué podemos ayudarle?"></textarea>
                    </div>
                    <div className="md:col-span-2 pt-2">
                      <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className="group w-full md:w-max px-10 py-4 bg-slate-900 hover:bg-orange-500 text-white hover:text-slate-900 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.2em] disabled:opacity-50"
                      >
                        {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                        <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      {status === 'error' && (
                        <p className="text-red-500 text-[10px] font-bold mt-2 uppercase">Ocurrió un error. Inténtelo de nuevo.</p>
                      )}
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section className="h-[50vh] w-full relative group">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7695532130224!2d-76.8572376852467!3d-0.28328599979331204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe7ffc1ba54f66f5!2zMMKwMTYnNTkuOCJTIDc2wrA1MScxOC4yIlc!5e0!3m2!1ses-419!2sec!4v1674094881041!5m2!1ses-419!2sec"
          className="w-full h-full border-0"
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 z-10 bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-700/50 max-w-[280px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </div>
            <h4 className="font-black text-white uppercase text-[10px] tracking-[0.2em]">Sede Principal</h4>
          </div>
          
          <div className="space-y-1">
            <p className="text-[13px] text-white font-bold uppercase tracking-tight">
              Centro de Operaciones MCO
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
              VÍA PRINCIPAL SACHA - ORELLANA<br />
              LA JOYA DE LOS SACHAS, ECUADOR
            </p>
          </div>

          <a 
            href="https://www.google.com/maps?ll=-0.282988,-76.854487&z=16&t=m&hl=es-419&gl=EC&mapclient=embed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 w-full py-2.5 bg-orange-400 hover:bg-orange-500 text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all duration-300"
          >
            <MapPin size={14} />
            Abrir en Google Maps
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MCO_Contacto;