import { motion } from 'framer-motion';
import { 
  Home, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Youtube, 
  ArrowUpRight, 
  Share2, 
  BellRing
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Icono personalizado para X (anteriormente Twitter)
const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

// Icono personalizado para TikTok
const TikTokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-4.17.07-8.33.07-12.5z"/>
  </svg>
);

const MCO_Prensa = () => {
  const newsImages = [
    "img/prensa/image-02.png",
    "img/prensa/image-02.png",
    "img/prensa/image-02.png"
  ];

  const socialLinks = [
    { 
      name: "YouTube", 
      icon: <Youtube size={24} />, 
      user: "Maquinarias y Constructora Olvera S.A", 
      color: "hover:bg-[#FF0000]",
      link: "https://www.youtube.com/channel/UCSNmayPkr5au8U7MkUQ65Jg" 
    },
    { 
      name: "X ", 
      icon: <XIcon />, 
      user: "@MCO_Ecuador", 
      color: "hover:bg-slate-950",
      link: "https://x.com/MCO_Ecuador?s=20" 
    },
    { 
      name: "TikTok", 
      icon: <TikTokIcon />, 
      user: "@mcoecuador", 
      color: "hover:bg-black",
      link: "https://www.tiktok.com/@mcoecuador" 
    },
    { 
      name: "Facebook", 
      icon: <Facebook size={24} />, 
      user: "Maquinarias y Constructora Olvera S.A", 
      color: "hover:bg-[#1877F2]",
      link: "https://www.facebook.com/profile.php?id=61588036224351" 
    },
    { 
      name: "Instagram", 
      icon: <Instagram size={24} />, 
      user: "@mco_ecuador", 
      color: "hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600",
      link: "https://www.instagram.com/mco_ecuador/" 
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="img/prensa/image-01.png" 
            className="w-full h-full object-cover" 
            alt="Prensa MCO" 
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
              <span className="text-slate-400">Prensa</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
              Canales y <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                Comunicación
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* IZQUIERDA: REDES SOCIALES */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-10"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600">
                  <BellRing size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Canales Oficiales</span>
                </div>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                  Nuestra comunidad <br /> <span className="text-slate-400 font-light italic">en tiempo real</span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-justify italic border-l-2 border-orange-500 pl-6">
                  Siga nuestras cuentas oficiales para obtener noticias de impacto ambiental, ofertas laborales exclusivas y hitos de ingeniería en la Amazonía ecuatoriana.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -5 }}
                    className={`group p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-5 transition-all duration-500 ${social.color}`}
                  >
                    <div className="p-3 bg-white rounded-2xl text-slate-900 group-hover:bg-transparent group-hover:text-white transition-colors duration-500 shadow-sm flex items-center justify-center">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/80 transition-colors">{social.name}</h4>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-white transition-colors">{social.user}</p>
                    </div>
                    <ArrowUpRight className="ml-auto text-slate-300 group-hover:text-white transition-colors" size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* DERECHA: SIDEBAR */}
            <div className="lg:col-span-5">
              <aside className="sticky top-32 space-y-8">
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Share2 size={100} />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tighter mb-4 relative z-10">Ecosistema <br /> Digital MCO</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10">
                    Centralizamos nuestra comunicación para brindarle transparencia y cercanía en cada kilómetro construido.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                      <p className="text-orange-500 font-black text-xl leading-none">+10K</p>
                      <p className="text-[9px] text-slate-500 uppercase font-bold mt-1 tracking-widest">Seguidores</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                      <p className="text-orange-500 font-black text-xl leading-none">24/7</p>
                      <p className="text-[9px] text-slate-500 uppercase font-bold mt-1 tracking-widest">Información</p>
                    </div>
                  </div>
                </div>

                <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-xl">
                  <img src={newsImages[1]} className="w-full h-full object-cover" alt="MCO Actividad" />
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

export default MCO_Prensa;