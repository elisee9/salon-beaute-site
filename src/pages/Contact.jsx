// src/pages/Contact.jsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
   const form = useRef();
   const [sent, setSent] = useState(false);
   const [error, setError] = useState(false);

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs
         .sendForm(
            "your_service_id", // remplace par ton ID EmailJS
            "your_template_id", // remplace par ton template ID
            form.current,
            "your_public_key" // remplace par ta clé publique EmailJS
         )
         .then(
            () => {
               setSent(true);
               setError(false);
               form.current.reset();
            },
            () => {
               setError(true);
            }
         );
   };

   return (
      <>
         {/* <Helmet>
            <title>Contact | Beauté Élégance</title>
            <meta
               name="description"
               content="Contactez-nous pour une réservation, une question ou un conseil beauté personnalisé. Nous sommes à votre écoute !"
            />
         </Helmet> */}

         <section className="min-h-screen bg-pink-100 px-4 py-16 text-gray-800">
            <div className="max-w-4xl mx-auto">
               <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-6"
               >
                  Contactez-nous
               </motion.h2>

               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center text-lg md:text-xl text-gray-600 mb-10"
               >
                  Nous sommes ravies de répondre à vos questions ou de prendre
                  votre rendez-vous !
               </motion.p>

               <motion.form
                  ref={form}
                  onSubmit={sendEmail}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-pink-50 shadow-md rounded-2xl p-8 space-y-6"
               >
                  <div>
                     <label className="block mb-1 font-medium">
                        Nom complet
                     </label>
                     <input
                        type="text"
                        name="user_name"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                     />
                  </div>
                  <div>
                     <label className="block mb-1 font-medium">Email</label>
                     <input
                        type="email"
                        name="user_email"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                     />
                  </div>
                  <div>
                     <label className="block mb-1 font-medium">Message</label>
                     <textarea
                        name="message"
                        rows="5"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                     ></textarea>
                  </div>
                  <div>
                     <button
                        type="submit"
                        className="w-full bg-pink-500 cursor-pointer hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
                     >
                        ✉️ Envoyer le message
                     </button>
                  </div>

                  {sent && (
                     <p className="text-green-600 text-center">
                        Message envoyé avec succès !
                     </p>
                  )}
                  {error && (
                     <p className="text-red-600 text-center ">
                        Une erreur est survenue. Réessayez.
                     </p>
                  )}
               </motion.form>
            </div>
         </section>
      </>
   );
}
