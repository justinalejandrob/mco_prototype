import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features'; // Importamos la nueva sección
import RecentWork from '../components/RecentWork';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Features /> {/* La añadimos aquí */}
      <RecentWork />
      <Clients />
      <Footer />
      {/* Las siguientes secciones irán aquí abajo */}
    </div>
  );
};

export default Home;