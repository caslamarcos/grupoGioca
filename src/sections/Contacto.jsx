import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-widest uppercase">
            Contacto
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Hablemos por <span className="text-blue-600">WhatsApp</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Consultanos por planes, cobertura o cualquier duda. Te respondemos al toque.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            
            <a  href="https://wa.me/541131148656"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl transition text-lg shadow-lg shadow-green-200"
            >
              <span dangerouslySetInnerHTML={{ __html: "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'><path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z'/></svg>" }} />
              Escribinos por WhatsApp
            </a>

            
            <a  href="mailto:soporte@gioca.com.ar"
              className="flex items-center gap-3 border border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-2xl transition text-lg"
            >
              soporte@gioca.com.ar
            </a>
          </div>

          <p className="mt-8 text-sm text-gray-400">Lunes a viernes de 9am a 5pm · Galicia 1035, CABA</p>
        </motion.div>
      </div>
    </section>
  );
}
