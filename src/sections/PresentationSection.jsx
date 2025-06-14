import { motion } from "framer-motion";

export default function PresentationSection() {
   return (
      <section className="py-10 bg-pink-50 relative">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            {/* Bloc Image animé */}
            <motion.div
               initial={{ opacity: 0, x: -80 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
               className="relative"
            >
               {/* Badge flottant */}
               <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                  className="absolute -top-5 -left-2 bg-pink-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg z-10"
               >
                  Depuis 2015
               </motion.div>

               {/* Image stylisée */}
               <motion.img
                  src="/images/presentation-salon.jpg"
                  alt="Salon de beauté"
                  className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.03 }}
               />
            </motion.div>

            {/* Bloc Texte animé */}
            <motion.div
               initial={{ opacity: 0, x: 80 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600">
                  Bienvenue dans notre univers beauté
               </h2>
               <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                  Notre salon vous accueille dans une ambiance chaleureuse et
                  relaxante. Nous mettons notre expertise à votre service pour
                  révéler votre beauté naturelle.
               </p>
               <p className="text-gray-700 text-base leading-relaxed">
                  Soins du visage, coiffure, manucure ou maquillage
                  professionnel : chaque prestation est réalisée avec passion et
                  professionnalisme, dans le respect de votre style et de vos
                  envies.
               </p>
            </motion.div>
         </div>
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
         >
            <a
               href="/services"
               className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full shadow-md transition"
            >
               👉 Voir nos prestations
            </a>
         </motion.div>
      </section>
   );
}
