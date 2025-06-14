// src/pages/Gallery.jsx
import { motion } from "framer-motion";

// Exemple d’images. Tu peux remplacer les liens par tes vraies images.
const galleryImages = [
   { src: "/images/gallery1.jpg", alt: "Soin visage relaxant" },
   { src: "/images/gallery2.jpg", alt: "Coiffure élégante" },
   { src: "/images/gallery3.jpg", alt: "Manucure professionnelle" },
   { src: "/images/gallery4.jpg", alt: "Massage bien-être" },
   { src: "/images/gallery5.jpg", alt: "Soin capillaire en salon" },
   { src: "/images/gallery6.jpg", alt: "Beauté naturelle" },
   { src: "/images/gallery7.jpg", alt: "Équipe professionnelle" },
   { src: "/images/gallery8.jpg", alt: "Ambiance relaxante" },
   { src: "/images/gallery9.jpg", alt: "Produits de beauté" },
];

export default function Gallery() {
   return (
      <>
         <section className="min-h-screen px-6 py-8 bg-pink-50 text-gray-800">
            <div className="max-w-6xl mx-auto text-center">
               <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold mb-6 text-pink-600"
               >
                  Notre Galerie
               </motion.h2>

               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-12 text-lg md:text-xl text-gray-600"
               >
                  Un aperçu de notre passion pour la beauté, à travers nos
                  réalisations.
               </motion.p>

               <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 cursor-pointer">
                  {galleryImages.map((img, index) => (
                     <motion.div
                        key={index}
                        className="overflow-hidden rounded-2xl shadow-md hover:shadow-pink-300"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                     >
                        <img
                           src={img.src}
                           alt={img.alt}
                           loading="lazy"
                           onContextMenu={(e) => {
                              e.preventDefault();
                              alert("Merci de ne pas télécharger cette image");
                           }}
                           className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                        />
                     </motion.div>
                  ))}
               </div>
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-8"
               >
                  <a
                     href="/contact"
                     className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full shadow-md transition"
                  >
                     👉 Prendre rendez-vous
                  </a>
               </motion.div>
            </div>
         </section>
      </>
   );
}
