import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
   {
      image: "/images/salon-hero.jpg",
      title: "Sublimez votre beauté naturelle",
      subtitle:
         "Réservez votre moment de détente dans notre salon élégant et chaleureux.",
   },
   {
      image: "/images/salon-hero2.jpg",
      title: "L’élégance au service de vos cheveux",
      subtitle:
         "Des soins capillaires professionnels adaptés à chaque type de chevelure.",
   },
   {
      image: "/images/salon-hero3.jpg",
      title: "Un lieu de bien-être et de raffinement",
      subtitle:
         "Profitez d’une expérience sensorielle unique dans une ambiance apaisante.",
   },
];

export default function HeroSection() {
   const [index, setIndex] = useState(0);

   // Changement automatique toutes les 7s
   useEffect(() => {
      const interval = setInterval(() => {
         nextSlide();
      }, 7000);
      return () => clearInterval(interval);
   }, [index]);

   const nextSlide = () => {
      setIndex((prev) => (prev + 1) % slides.length);
   };

   const prevSlide = () => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
   };

   const goToSlide = (i) => {
      setIndex(i);
   };

   const current = slides[index];

   return (
      <section className="relative h-[70vh] sm:h-[90vh] w-full overflow-hidden">
         {/* Image de fond */}
         <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{
               backgroundImage: `url('${current.image}')`,
               filter: "blur(2px)",
               transform: "scale(1.02)",
            }}
         >
            <div className="absolute inset-0 bg-black/40 md:bg-black/50 backdrop-blur-[1px]" />
         </div>

         {/* Contenu animé */}
         <motion.div
            key={index}
            className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
         >
            <div className="max-w-2xl mx-auto">
               <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 leading-tight text-white">
                  {current.title}
               </h1>
               <p className="text-base sm:text-lg md:text-xl mb-5 sm:mb-6 text-white/90 max-w-lg mx-auto">
                  {current.subtitle}
               </p>
               <motion.a
                  href="/contact"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-full shadow-lg transition text-sm sm:text-base"
                  whileHover={{
                     scale: 1.05,
                     boxShadow: "0 5px 15px rgba(236, 72, 153, 0.4)",
                  }}
               >
                  👉 Prendre rendez-vous
               </motion.a>
            </div>
         </motion.div>

         {/* Flèches */}
         <div className="absolute z-20 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 opacity-75">
            <button
               onClick={prevSlide}
               className="bg-black/20 hover:bg-black/60 text-white p-2 rounded-full cursor-pointer"
            >
               <ChevronLeft size={24} />
            </button>
            <button
               onClick={nextSlide}
               className="bg-black/20 hover:bg-black/60 text-white p-2 rounded-full cursor-pointer"
            >
               <ChevronRight size={24} />
            </button>
         </div>

         {/* Indicateurs (dots) */}
         <div className="absolute bottom-4 z-20 w-full flex justify-center gap-2">
            {slides.map((_, i) => (
               <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-3 h-3 rounded-full transition ${
                     i === index ? "bg-pink-500" : "bg-white/40"
                  }`}
               />
            ))}
         </div>
      </section>
   );
}
