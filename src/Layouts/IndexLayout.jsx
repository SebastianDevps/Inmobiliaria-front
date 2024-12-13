import React, { useState, useEffect } from "react";
import Header from "../Pages/Header/Header";
import Loading from "../Components/Loading/Loading";
import ButonScroll from "../Components/ButonScroll/ButonScroll";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import CardsHome from "../Components/CardsHome/CardsHome";
import PropiedadesHome from "../Components/PropiedadesHome/PropiedadesHome";
import TilteSection from "../Components/TilteSection/TilteSection";
import Develloper from "../Components/Developer/Developer";
import Galery from "../Components/Galery/Galery";

export default function IndexLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Función para manejar la carga completa
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Si la página ya está cargada
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Si no está cargada, esperar al evento load
      window.addEventListener("load", handleLoad);
    }

    // Cleanup
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Hero />
          <CardsHome />
          <TilteSection
            title="Más propiedades similares a las que viste"
            more="Ver más"
            link="propiedades"
          />
          <PropiedadesHome />
          <TilteSection
            title="Listados de propiedades que te pueden interesar"
            more="Ver más"
            link="propiedades"
          />
          <Galery />
          <Footer />
          {/* <Develloper /> */}
          <ButonScroll />
        </>
      )}
    </>
  );
}
