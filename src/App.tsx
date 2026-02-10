import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MCO_Asociacion from './pages/MCO_Asociacion'; 
import MCO_Mision from './pages/MCO_Mision'; 
import MCO_Vision from './pages/MCO_Vision';
import MCO_Sostenibilidad from './pages/MCO_Sostenibilidad';
import MCO_Contacto from './pages/MCO_Contacto';
import MCO_Empleo from './pages/MCO_Empleo';
import MCO_Infraestructura from './pages/MCO_Infraestructura';
import MCO_Prensa from './pages/MCO_Prensa';
import MCO_Galeria1 from './pages/MCO_Galeria1';
import MCO_Galeria2 from './pages/MCO_Galeria2';
import MCO_Proyectos from './pages/MCO_Proyectos';

import './App.css';

function App() {
  return (
    <div className="antialiased">
      <Router>
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Home />} />

          {/* Ruta para la página de Asociación */}
          <Route path="/asociacion" element={<MCO_Asociacion />} />
          
          {/* Ruta para la pagina de Mision */}
          <Route path="/mision" element={<MCO_Mision />} /> 
          
          {/* Ruta para la pagina de Vision */}
          <Route path="/vision" element={<MCO_Vision />} />

          {/* Ruta para la pagina de Sostenibilidad */}
          <Route path="/sostenibilidad" element={<MCO_Sostenibilidad />} /> 

           {/* Ruta para la pagina de Contacto*/}
          <Route path="/contacto" element={<MCO_Contacto />} />

           {/* Ruta para la pagina de Empleo*/}
          <Route path="/empleo" element={<MCO_Empleo />} /> 

          {/* Ruta para la pagina de Infraestructura*/}
          <Route path="/infraestructura" element={<MCO_Infraestructura />} />

          {/* Ruta para la pagina de Prensa*/}
          <Route path="/prensa" element={<MCO_Prensa />} /> 

           {/* Ruta para la pagina de Galeria 2026*/}
          <Route path="/galeria-2026" element={<MCO_Galeria1 />} />

          {/* Ruta para la pagina de Galeria 2027*/}
          <Route path="/galeria-2027" element={<MCO_Galeria2 />} />

          {/* Ruta para la pagina de Proyectos*/}
          <Route path="/proyectos" element={<MCO_Proyectos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;