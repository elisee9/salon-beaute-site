import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Merci from "../pages/Merci";
import ReservationAnnule from "../pages/ReservationAnnule";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
   const routes = useRoutes([
      {
         path: "/",
         element: <MainLayout />,
         children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "services", element: <Services /> },
            { path: "gallery", element: <Gallery /> },
            { path: "contact", element: <Contact /> },
            { path: "merci", element: <Merci /> },
            { path: "reservation-annule", element: <ReservationAnnule /> },
         ],
      },
      { path: "*", element: <NotFound /> },
   ]);

   return routes;
}
