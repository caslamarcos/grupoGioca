import { motion } from "framer-motion";

const zonas = [
  { barrio: "Villa Soldati", sectores: ["Monoblock", "Karrillo", "Los Piletones"] },
  { barrio: "1-11-14", sectores: ["Barrio Illia", "Barrio Rivadavia I y II", "Los Peruanos", "Los Paraguayos"] },
  { barrio: "San Martin", sectores: ["Loma Hermosa"] },
  { barrio: "La Matanza", sectores: ["Consultar disponibilidad"] },
];

export default function Cobertura() {
  return (
    <section id="cobertura" className="py-24 bg-blue-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">Donde llegamos</span>
          <h2 className="text-4xl font-bold text-gray-900">Cobertura en tu <span className="text-blue-600">barrio</span></h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">Llevamos fibra optica a los barrios que mas lo necesitan.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zonas.map((z, i) => (
            <motion.div key={z.barrio} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-3xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-blue-600 text-lg">📌</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{z.barrio}</h3>
              <ul className="flex flex-col gap-2">
                {z.sectores.map((s) => (
                  <li key={s} className="text-sm text-gray-500 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-12 text-center">
          <p className="text-gray-500 mb-4">No encontras tu barrio? Consulta con nosotros.</p>
          <a href="https://wa.me/541131148656" target="_blank" rel="noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition">
            Consultar cobertura
          </a>
        </motion.div>
      </div>
    </section>
  );
}
