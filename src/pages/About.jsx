import { motion } from "framer-motion";

function About() {
   return (
      <section className="py-16 bg-pink-50 px-4">
         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Texte */}
            <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
            >
               <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 max-sm:text-center">
                  À propos de nous
               </h2>
               <p className="text-gray-700 text-lg mb-4 leading-relaxed text-justify">
                  Chez{" "}
                  <span className="font-semibold text-pink-500">
                     Beauté Élégance
                  </span>
                  , nous croyons que chaque femme mérite de se sentir belle,
                  confiante et choyée.
               </p>
               <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  Depuis plusieurs années, notre salon est un lieu de détente et
                  d’expertise où passion et professionnalisme se rencontrent. De
                  la coiffure aux soins du visage, notre objectif est de révéler
                  votre beauté naturelle dans un cadre raffiné et chaleureux.
               </p>
            </motion.div>

            {/* Image */}
            <motion.div
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
            >
               <img
                  src="/images/a-propos-salon.jpg"
                  alt="Salon Beauté Élégance"
                  className="w-full rounded-2xl shadow-lg object-cover max-h-[500px]"
                  onContextMenu={(e) => {
                     e.preventDefault();
                     alert("Merci de ne pas télécharger cette image");
                  }}
               />
            </motion.div>
         </div>
      </section>
   );
}

export default About;
