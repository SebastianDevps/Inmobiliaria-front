import React, {useEffect, useState} from "react";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";
import ButonScroll from "../Components/ButonScroll/ButonScroll";
import Footer from "../Components/Footer/Footer";
import Develloper from "../Components/Developer/Developer";

export default function MainLayout() {
  
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
