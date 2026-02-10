import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  User, ChevronDown, Plus, Minus, Phone, MapPin, Globe, 
  X, Mail, Lock, ShieldCheck, ArrowRight, UserPlus, Menu
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showTop, setShowTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil
  
  // Lógica de Modales
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>('login');

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setAuthMode('login'), 300);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}>
        
        {/* 1. TOP INFO BAR */}
        <div 
          className={`bg-slate-900 text-slate-400 overflow-hidden transition-all duration-500 ease-in-out ${
            showTop ? 'max-h-20 border-b border-slate-800' : 'max-h-0'
          }`}
        >
          <div className="w-full px-6 py-3 flex justify-between items-center text-xs tracking-widest uppercase">
            <div className="flex gap-8">
              <span className="flex items-center gap-2">
                <MapPin size={12} className="text-yellow-500" /> <span className="hidden sm:inline">Joya de los Sachas, Ecuador</span>
              </span>
              <span className="flex items-center gap-2">
                <Phone size={12} className="text-yellow-500" /> (+593) 099 912 8487
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Globe size={12} /> mcomaquinarias.com
            </div>
          </div>
        </div>

        {/* 2. MAIN NAVIGATION */}
        <div className="w-full relative px-6 md:px-12">
          
          <div className="absolute right-6 md:right-12 top-0 z-10">
            <button 
              onClick={() => setShowTop(!showTop)}
              className="bg-yellow-500 text-slate-900 p-1.5 hover:bg-yellow-400 transition-all shadow-md rounded-b-sm"
            >
              {showTop ? <Minus size={16} /> : <Plus size={16} />}
            </button>
          </div>

          <div className="flex items-center justify-between h-24">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-4 group cursor-pointer relative z-50">
              <div className="flex flex-col border-l-4 border-slate-900 pl-3">
                <h1 className="text-2xl font-black text-slate-900 leading-none tracking-tighter">
                  MCO <span className="text-yellow-600 font-light text-xl italic">Maquinarias</span>
                </h1>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mt-1 font-medium">
                  Constructora Olvera S.A.
                </p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
                <li className="group">
                  <Link to="/" className={`relative ${location.pathname === '/' ? 'text-slate-900' : ''}`}>
                    Inicio
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500 transition-transform ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                  </Link>
                </li>
                
                <li className="relative group cursor-pointer">
                  <span className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                    Empresa <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
                  </span>
                  <ul className="absolute left-0 top-full pt-4 hidden group-hover:block w-48 animate-in fade-in slide-in-from-top-2">
                    <div className="bg-white shadow-2xl border border-slate-100 py-2">
                      <li><Link to="/asociacion" className="block px-6 py-3 hover:bg-slate-50 hover:text-yellow-600 transition-all text-[10px]">Asociación</Link></li>
                      <li><Link to="/mision" className="block px-6 py-3 hover:bg-slate-50 hover:text-yellow-600 transition-all text-[10px]">Misión</Link></li>
                      <li><Link to="/vision" className="block px-6 py-3 hover:bg-slate-50 hover:text-yellow-600 transition-all text-[10px]">Visión</Link></li>
                      <li><Link to="/sostenibilidad" className="block px-6 py-3 hover:bg-slate-50 hover:text-yellow-600 transition-all text-[10px]">Sostenibilidad</Link></li>
                    </div>
                  </ul>
                </li>

                <li className="relative group cursor-pointer">
                  <span className="flex items-center gap-1 hover:text-slate-900 transition-colors">
                    Galería <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
                  </span>
                  <ul className="absolute left-0 top-full pt-4 hidden group-hover:block w-48 animate-in fade-in slide-in-from-top-2">
                    <div className="bg-white shadow-2xl border border-slate-100 py-2">
                      <li><Link to="/galeria-2026" className="block px-6 py-3 hover:bg-slate-50 hover:text-yellow-600 transition-all text-[10px]">Galería 2026</Link></li>
                      <li><Link to="/galeria-2027" className="block px-6 py-3 hover:bg-slate-50 hover:text-yellow-600 transition-all text-[10px]">Galería 2027</Link></li>
                    </div>
                  </ul>
                </li>

                <li className="hover:text-slate-900 transition-colors"><Link to="/proyectos">Proyectos</Link></li>
                
                <li>
                  <Link to="/contacto" className="border border-slate-900 px-6 py-3 hover:bg-slate-900 hover:text-white transition-all duration-300">
                    Ubícanos
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Acceso y Menú Hamburguesa */}
            <div className="flex items-center gap-2 sm:gap-4 pl-4 border-l border-slate-100">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-3 text-slate-400 hover:text-slate-900 transition-all group"
              >
                <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-yellow-500 group-hover:text-white transition-all">
                  <User size={18} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden xl:block">
                  Iniciar Sesión
                </span>
              </button>

              {/* Toggle Menú Móvil */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-lg transition-all"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MENÚ MÓVIL (DRAWER) --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            {/* Panel lateral */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-8 pt-24 overflow-y-auto flex-grow">
                <nav>
                  <ul className="space-y-6">
                    <li>
                      <Link to="/" className="text-xl font-black text-slate-900 uppercase tracking-tighter block border-b border-slate-50 pb-2">Inicio</Link>
                    </li>
                    <li className="space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-600 block">Empresa</span>
                      <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-slate-100 text-sm font-bold text-slate-600">
                        <Link to="/asociacion">Asociación</Link>
                        <Link to="/mision">Misión</Link>
                        <Link to="/vision">Visión</Link>
                        <Link to="/sostenibilidad">Sostenibilidad</Link>
                      </div>
                    </li>
                    <li className="space-y-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-600 block">Portafolio</span>
                      <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-slate-100 text-sm font-bold text-slate-600">
                        <Link to="/galeria-2026">Galería 2026</Link>
                        <Link to="/galeria-2027">Galería 2027</Link>
                        <Link to="/proyectos">Proyectos</Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/contacto" className="text-xl font-black text-slate-900 uppercase tracking-tighter block border-b border-slate-50 pb-2">Contacto</Link>
                    </li>
                  </ul>
                </nav>

                <div className="mt-12 space-y-4">
                   <div className="flex items-center gap-3 text-slate-500 text-xs">
                     <MapPin size={14} className="text-yellow-600" /> Joya de los Sachas
                   </div>
                   <div className="flex items-center gap-3 text-slate-500 text-xs">
                     <Phone size={14} className="text-yellow-600" /> (+593) 099 912 8487
                   </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50">
                <button 
                  onClick={() => { setIsMenuOpen(false); setIsModalOpen(true); }}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3"
                >
                  Mi Cuenta <User size={16} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODALES DE AUTENTICACIÓN */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[440px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="h-2 w-full bg-gradient-to-r from-yellow-400 via-yellow-600 to-slate-900" />
              <button onClick={closeModal} className="absolute top-8 right-8 p-2 text-slate-400 hover:text-slate-900 transition-all">
                <X size={20} />
              </button>

              <div className="p-12">
                <div className="mb-10 text-center">
                  <ShieldCheck className="mx-auto text-yellow-600 mb-4" size={32} />
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                    {authMode === 'login' && 'Iniciar Sesión'}
                    {authMode === 'register' && 'Crear Cuenta'}
                    {authMode === 'forgot' && 'Recuperación'}
                  </h2>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  {authMode === 'register' && (
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-600 transition-colors" size={18} />
                      <input type="text" placeholder="Nombre Completo" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-yellow-500 focus:bg-white transition-all" />
                    </div>
                  )}

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-600 transition-colors" size={18} />
                    <input type="email" placeholder="Correo Electrónico" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-yellow-500 focus:bg-white transition-all" />
                  </div>

                  {authMode !== 'forgot' && (
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-600 transition-colors" size={18} />
                      <input type="password" placeholder="Contraseña" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-yellow-500 focus:bg-white transition-all" />
                    </div>
                  )}

                  <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-yellow-600 transition-all group">
                    {authMode === 'login' && 'Iniciar Sesión'}
                    {authMode === 'register' && 'Registrarse'}
                    {authMode === 'forgot' && 'Enviar Correo'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col gap-4 text-center">
                  {authMode === 'login' && (
                    <>
                      <button onClick={() => setAuthMode('forgot')} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">¿Olvidó su contraseña?</button>
                      <button onClick={() => setAuthMode('register')} className="text-[9px] font-black text-yellow-600 uppercase tracking-widest hover:text-slate-900 transition-colors flex items-center justify-center gap-2"><UserPlus size={14} /> Crear una cuenta nueva</button>
                    </>
                  )}
                  {authMode !== 'login' && (
                    <button onClick={() => setAuthMode('login')} className="text-[9px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">Volver al inicio de sesión</button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;