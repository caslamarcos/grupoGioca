import { motion } from "framer-motion";

const items = [
  { icono: "📡", titulo: "Fibra optica real", desc: "No cable coaxial. Fibra optica de verdad hasta tu barrio." },
  { icono: "⚡", titulo: "Velocidad simetrica", desc: "Misma velocidad de subida y bajada. Sin sorpresas." },
  { icono: "🏠", titulo: "Donde otros no llegan", desc: "Nos especializamos en barrios populares de Buenos Aires." },
  { icono: "📱", titulo: "Soporte directo", desc: "Sin call center ni esperas. Te atendemos por WhatsApp." },
];

export default function PorQueGioca() {
  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">Por que elegirnos</span>
          <h2 className="text-4xl font-bold text-gray-900">Internet pensado para <span className="text-blue-600">tu comunidad</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div key={item.titulo} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">{item.icono}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
