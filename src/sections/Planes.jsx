import { motion } from "framer-motion";

const planes = [
  { nombre: "Basico", velocidad: "100 Mb", features: ["Fibra optica", "Simetrico", "Sin limite de datos", "Soporte tecnico"] },
  { nombre: "Estandar", velocidad: "300 Mb", features: ["Fibra optica", "Simetrico", "Sin limite de datos", "Soporte tecnico", "Ideal para familias"], destacado: true },
  { nombre: "Premium", velocidad: "500 Mb", features: ["Fibra optica", "Simetrico", "Sin limite de datos", "Soporte tecnico", "Ideal para empresas"] },
];

export default function Planes() {
  return (
    <section id="planes" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">Nuestros planes</span>
          <h2 className="text-4xl font-bold text-gray-900">Elegi el plan que mejor <span className="text-blue-600">se adapta</span></h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">Todos nuestros planes incluyen fibra optica simetrica y sin limite de datos.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {planes.map((p, i) => (
            <motion.div key={p.nombre} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`rounded-3xl p-8 border flex flex-col gap-6 ${p.destacado ? "bg-blue-600 border-blue-600 text-white shadow-xl scale-105" : "bg-white border-gray-100 text-gray-900 shadow-sm hover:shadow-md"} transition`}>
              <div>
                <p className={`text-sm font-semibold uppercase tracking-widest ${p.destacado ? "text-blue-100" : "text-blue-600"}`}>{p.nombre}</p>
                <p className="text-5xl font-bold mt-2">{p.velocidad}</p>
                <p className={`text-sm mt-1 ${p.destacado ? "text-blue-100" : "text-gray-400"}`}>de velocidad</p>
              </div>
              <ul className="flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${p.destacado ? "bg-white text-blue-600" : "bg-blue-100 text-blue-600"}`}>?</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/541131148656" target="_blank" rel="noreferrer" className={`mt-auto text-center font-semibold py-3 rounded-xl transition ${p.destacado ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                Consultar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
