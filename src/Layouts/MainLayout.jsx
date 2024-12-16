import React, { useEffect, useState } from "react";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import ButonScroll from "../Components/ButonScroll/ButonScroll";
import Footer from "../Components/Footer/Footer";

export default function MainLayout() {
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
          <Outlet />
          <Footer />
          {/* <Develloper /> */}
          <ButonScroll />
        </>
      )}
    </>
  );
}
