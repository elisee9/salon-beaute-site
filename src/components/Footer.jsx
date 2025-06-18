// src/components/Footer.jsx
function Footer() {
   return (
      <footer className="bg-black text-white text-center pt-10 pb-6 px-4">
         <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Beauté Élégance. Tous droits
            réservés.
         </p>
         <div className="mt-4 border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">
               Made with ❤️ by{" "}
               <a
                  href="https://gek-innovatech.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 hover:underline transition-colors"
               >
                  GEK Innovatech
               </a>
            </p>
         </div>
      </footer>
   );
}

export default Footer;
