import { motion } from "framer-motion";
import { FaStar, FaSpa, FaHeart, FaLeaf } from "react-icons/fa";

const avantages = [
   {
      icon: <FaStar className="text-4xl text-pink-600 mb-4" />,
      title: "Savoir-faire d'excellence",
      description:
         "Nos esthéticiennes sont formées aux dernières tendances beauté pour vous offrir un service irréprochable.",
   },
   {
      icon: <FaSpa className="text-4xl text-pink-600 mb-4" />,
      title: "Cadre relaxant",
      description:
         "Plongez dans une ambiance apaisante et raffinée pour une expérience sensorielle unique.",
   },
   {
      icon: <FaHeart className="text-4xl text-pink-600 mb-4" />,
      title: "Approche personnalisée",
      description:
         "Chaque cliente est unique, nous adaptons nos soins à vos besoins pour révéler votre beauté naturelle.",
   },
   {
      icon: <FaLeaf className="text-4xl text-pink-600 mb-4" />,
      title: "Produits naturels",
      description:
         "Nous utilisons des produits respectueux de votre peau et de l’environnement.",
   },
];

export default function PourquoiNousChoisir() {
   return (
      <section className="py-10 bg-white px-4" >
         <div className="max-w-6xl mx-auto text-center">
            {/* Titre */}
            <motion.h2
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="text-3xl md:text-4xl font-bold text-pink-600 mb-6"
            >
               Pourquoi nous choisir ?
            </motion.h2>

            <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               viewport={{ once: true }}
               className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto"
            >
               Chez{" "}
               <span className="font-semibold text-pink-500">
                  Beauté Élégance
               </span>
               , nous mettons tout en œuvre pour vous offrir bien plus qu’un
               simple soin : une véritable expérience de bien-être.
            </motion.p>

            {/* Avantages */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {avantages.map((item, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: index * 0.2, duration: 0.6 }}
                     viewport={{ once: true }}
                     className="bg-pink-50 rounded-2xl p-6 shadow-lg hover:shadow-pink-300 transition duration-300 cursor-pointer"
                  >
                     <div>{item.icon}</div>
                     <h3 className="text-lg font-semibold text-pink-700 mb-2">
                        {item.title}
                     </h3>
                     <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
}
