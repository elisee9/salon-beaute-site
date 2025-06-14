// src/data/servicesData.js
import { FaSpa, FaCut, FaKissWinkHeart, FaStore } from "react-icons/fa";

export const servicesData = [
   // SERVICES CAPILLAIRES
   {
      icon: "💇‍♀️",
      title: "Coupe & Brushing",
      description: "Coiffure personnalisée adaptée à votre style.",
   },
   {
      icon: <FaCut style={{ color: "#4ECDC4" }} />,
      title: "Stylisme Capillaire",
      description: "Coupe, brushing et style sur-mesure.",
   },
   {
      icon: "🎨",
      title: "Coloration & Mèches",
      description: "Couleurs vibrantes et techniques de balayage.",
   },
   {
      icon: "👰",
      title: "Coiffure de Mariée",
      description: "Styles élégants pour votre grand jour.",
      popular: true,
   },

   // SOINS VISAGE & CORPS
   {
      icon: <FaSpa style={{ color: "#FF6B6B" }} />,
      title: "Soins du Visage",
      description: "Hydratation, éclat & relaxation profonde.",
      popular: true,
   },
   {
      icon: "🧖‍♀️",
      title: "Rituel Corps Complet",
      description: "Nettoyage, hydratation & éclat naturel.",
   },
   {
      icon: "💆‍♀️",
      title: "Massage Relaxant",
      description: "Détente absolue avec huiles essentielles.",
   },

   // ÉPILATION & MAQUILLAGE
   {
      icon: "☀️",
      title: "Épilation Douce",
      description: "Cire naturelle pour tous types de peaux.",
   },
   {
      icon: <FaKissWinkHeart style={{ color: "#FF69B4" }} />,
      title: "Maquillage Permanent",
      description: "Contour des lèvres et eye-liner durable.",
   },
   {
      icon: "💄",
      title: "Maquillage professionnel",
      description: "Pour vos occasions spéciales ou shooting.",
   },

   // ONGLERIE
   {
      icon: "💅",
      title: "Manucure & Pédicure",
      description: "Ongles soignés avec vernis longue durée.",
   },

   // PRODUITS
   {
      icon: <FaStore style={{ color: "#9370DB" }} />,
      title: "Boutique Cosmétique",
      description: "Produits professionnels pour votre routine.",
   },
];

export default servicesData;
