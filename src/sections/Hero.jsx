import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Fibra optica en tu barrio
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Internet que <span className="text-blue-600">conecta</span> tu comunidad
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-lg">
            Llevamos fibra optica de alta velocidad a los barrios que mas lo necesitan. Simple, rapido y sin vueltas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            
            <a href="#planes"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Ver planes
            </a>
            
             <a href="https://wa.me/541131148656"
              target="_blank"
              rel="noreferrer"
              className="border border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4"
        >
          {["100 Mb", "300 Mb", "500 Mb"].map((plan) => (
            <div
              key={plan}
              className="bg-white border border-blue-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <p className="text-2xl font-bold text-blue-600">{plan}</p>
              <p className="text-xs text-gray-400 mt-1">Fibra optica</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
