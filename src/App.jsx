import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import PorQueGioca from "./sections/PorQueGioca";
import Planes from "./sections/Planes";
import Cobertura from "./sections/Cobertura";
import Contacto from "./sections/Contacto";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <PorQueGioca />
        <Planes />
        <Cobertura />
        <Contacto />
      </main>
      <footer className="py-6 text-center text-sm text-gray-400 border-t border-gray-100">
        2026 Grupo Gioca · Todos los derechos reservados
      </footer>
    </div>
  );
}
