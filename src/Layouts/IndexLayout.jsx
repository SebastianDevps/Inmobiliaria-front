import React, { useState, useEffect } from "react";
import Header from "../Pages/Header/Header";

import ButonScroll from "../Components/ButonScroll/ButonScroll";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import CardsHome from "../Components/CardsHome/CardsHome";
import PropiedadesHome from "../Components/PropiedadesHome/PropiedadesHome";
import ListadoCard from "../Components/ListadoCard/ListadoCard";
import TilteSection from "../Components/TilteSection/TilteSection";
import Develloper from "../Components/Developer/Developer";
import Galery from "../Components/Galery/Galery";
import Skeleton from "../Components/Skeleton/Skeleton";

export default function IndexLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error loading initial data:", error);
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div>
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
      <ListadoCard />
      <TilteSection
        title="Listados de propiedades que te pueden interesar"
        more="Ver más"
        link="propiedades"
      />
      <Galery />
      <Footer />
      <Develloper />
      <ButonScroll />
    </div>
  );
}
