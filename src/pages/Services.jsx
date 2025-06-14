// src/pages/Services.jsx
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";

const Services = () => {
   return (
      <div className="min-h-screen px-4 py-12 bg-pink-50 text-gray-800">
         <div className="max-w-6xl mx-auto text-center">
            <motion.h1
               initial={{ opacity: 0, y: -30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-4xl md:text-5xl font-bold mb-6 text-pink-600"
            >
               Nos soins et prestations beauté
            </motion.h1>

            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="mb-12 text-lg md:text-xl text-gray-600"
            >
               Offrez-vous un moment de bien-être dans notre salon
               professionnel.
            </motion.p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
               {servicesData.map((service, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.4, delay: index * 0.1 }}
                     viewport={{ once: true }}
                     className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-pink-300 hover:scale-[1.02] transition-transform cursor-pointer"
                  >
                     <div className="text-5xl mb-4">{service.icon}</div>
                     <h3 className="text-xl font-semibold text-pink-500 mb-2">
                        {service.title}
                     </h3>
                     <p className="text-gray-600 text-sm">
                        {service.description}
                     </p>
                  </motion.div>
               ))}
            </div>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               viewport={{ once: true }}
               className="mt-12"
            >
               <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full shadow-md transition"
               >
                  👉 Prendre rendez-vous
               </a>
            </motion.div>
         </div>
      </div>
   );
};

export default Services;
