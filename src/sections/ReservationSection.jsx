import { motion } from "framer-motion";

export default function ReservationSection() {
   return (
      <section className="bg-pink-50 py-14 px-4 relative overflow-hidden">
         <div className="max-w-5xl mx-auto text-center">
            {/* Titre */}
            <motion.h2
               initial={{ opacity: 0, y: -30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-bold text-pink-600 mb-4"
            >
               Réservez votre moment de beauté
            </motion.h2>

            {/* Sous-texte */}
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               viewport={{ once: true }}
               className="text-gray-700 text-lg mb-8"
            >
               Prenez rendez-vous facilement en ligne et laissez-nous prendre
               soin de vous.
            </motion.p>

            {/* Bouton */}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4, duration: 0.5 }}
               viewport={{ once: true }}
               className="relative z-10"
            >
               <a
                  href="/contact"
                  className="inline-block bg-pink-600 text-white font-semibold px-8 py-4 text-lg md:text-base rounded-full shadow-md hover:bg-pink-700 transition duration-300 min-w-[200px]"
               >
                  Réserver maintenant
               </a>
            </motion.div>
         </div>

         {/* Décoration circulaire */}
         <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
         <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      </section>
   );
}
