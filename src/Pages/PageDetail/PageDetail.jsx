import React from "react";
import Detail from "../../Components/Detail/Detail";
import PropiedadesHome from "../../Components/PropiedadesHome/PropiedadesHome";
import TilteSection from "../../Components/TilteSection/TilteSection";

export default function PageDetail() {
  return (
    <div>
      <Detail />
      <TilteSection
        title="Listado de propiedades que te pueden interesar"
        more="Ver más"
        link="propiedades"
      />
      <PropiedadesHome />
    </div>
  );
}
