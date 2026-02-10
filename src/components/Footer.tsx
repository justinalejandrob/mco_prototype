import { Link } from 'react-router-dom'; // Importación vital para evitar el 404
import { 
  Youtube, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';

// Icono personalizado para X (anteriormente Twitter)
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);

// Icono personalizado para TikTok
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-4.17.07-8.33.07-12.5z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "https://www.facebook.com/profile.php?id=61588036224351", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "https://www.instagram.com/mco_ecuador/", label: "Instagram" },
    { icon: <XIcon />, href: "https://x.com/MCO_Ecuador?s=20", label: "X" },
    { icon: <TikTokIcon />, href: "https://www.tiktok.com/@mcoecuador", label: "TikTok" },
    { icon: <Youtube size={18} />, href: "https://www.youtube.com/channel/UCSNmayPkr5au8U7MkUQ65Jg", label: "YouTube" },
  ];

  const contactInfo = [
    { role: "Gerencia", phone: "(+593) 098 174 0392", email: "gerencia@mco-ec.com" },
    { role: "Logística", phone: "(+593) 098 567 2959", email: "logistica@mco-ec.com" },
    { role: "TTHH", phone: "(+593) 099 912 8487", email: "tthh@mco-ec.com" },
    { role: "Proyectos", phone: "(+593) 099 174 6636", email: "proyectos@mco-ec.com" },
  ];

  return (
    <footer className="bg-[#0a0f1a] text-slate-400 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Somos (Rutas Internas) */}
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-orange-400"></span> Somos
            </h5>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: 'Asociación', path: '/asociacion' },
                { name: 'Misión', path: '/mision' },
                { name: 'Visión', path: '/vision' },
                { name: 'Sostenibilidad', path: '/sostenibilidad' }
              ].map((item) => (
                <li key={item.name}>
                  {/* ✅ Corregido: Uso de Link para navegación interna */}
                  <Link 
                    to={item.path} 
                    className="hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight 
                      size={12} 
                      className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-orange-400" 
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 2: Trabajos */}
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-orange-400"></span> Proyectos
            </h5>
            <ul className="space-y-3 text-[13px] font-light">
              {[
                'Proyecto 1', 
                'Proyecto 2', 
                'Proyecto 3', 
                'Proyecto 4', 
                'Proyecto 5',
                'Proyecto 6'
              ].map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer border-b border-white/5 pb-2 last:border-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto Dinámico */}
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-orange-400"></span> Contacto
            </h5>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="text-[12px] border-l border-white/10 pl-4 hover:border-orange-400 transition-colors">
                  <p className="text-orange-400 font-bold uppercase mb-1 tracking-wider">{info.role}</p>
                  <div className="flex items-center gap-2 mb-1 hover:text-white transition-colors cursor-pointer">
                    <Phone size={10} className="text-slate-500" /> <span>{info.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                    <Mail size={10} className="text-slate-500" /> <span>{info.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna 4: Ubicación (Enlace Externo) */}
          <div>
            <h5 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-8 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-orange-400"></span> Ubícanos
            </h5>
            <div className="bg-white/[0.02] p-6 rounded-sm border border-white/5 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-400/5 -mr-10 -mt-10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <address className="not-italic text-sm leading-relaxed mb-6 font-light">
                <strong className="text-white block mb-2 font-bold tracking-tight">Ecuador</strong>
                Provincia de Orellana<br />
                Cantón La Joya de los Sachas
              </address>
              {/* ✅ Mantenemos <a> porque es un link externo a Maps */}
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-black text-orange-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                <MapPin size={14} /> Mapa de Ubicación
              </a>
            </div>
          </div>
        </div>

        {/* --- BARRA INFERIOR --- */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
            <p className="mb-2">
              © {currentYear} <span className="text-white font-black">MCO Maquinarias</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start opacity-40">
              <span>Diseñado por <a href="#" className="hover:text-orange-400 transition-colors">Géminis</a></span>
              <span className="hidden md:inline">|</span>
              <a 
                href="https://www.mco-ec.com:2096/" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-orange-400 flex items-center gap-1 transition-colors"
              >
                Web Mail <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Redes Sociales (Enlaces Externos) */}
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-orange-400 hover:border-orange-400 hover:text-[#0a0f1a] transition-all duration-500 shadow-xl"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;