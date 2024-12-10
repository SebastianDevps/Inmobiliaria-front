import React, {useEffect, useState} from "react";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";
import ButonScroll from "../Components/ButonScroll/ButonScroll";
import Footer from "../Components/Footer/Footer";
import Develloper from "../Components/Developer/Developer";
import Skeleton from "../Components/Skeleton/Skeleton";

export default function MainLayout() {
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
      <Outlet />

      <Footer />
      <Develloper />
      <ButonScroll />
    </div>
  );
}
