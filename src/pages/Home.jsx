// src/pages/Home.jsx
import HeroSection from "../sections/HeroSection";
import PresentationSection from "../sections/PresentationSection";
import ReservationSection from "../sections/ReservationSection";
import { motion } from "framer-motion";
import PourquoiNousChoisir from "../sections/PourquoiNousChoisir";

export default function Home() {
   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
         >
            <HeroSection />
            <PresentationSection />
            <PourquoiNousChoisir />
            <ReservationSection />
         </motion.div>
      </>
   );
}
