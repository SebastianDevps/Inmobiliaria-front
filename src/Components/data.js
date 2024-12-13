import {
  faCheckCircle,
  faHandshake,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "/propiedades", label: "Propiedades" },
  { path: "/alquileres", label: "Alquileres" },
  { path: "/cabanas", label: "Cabañas" },
];

export const cardsTips = [
  {
    titulo: "Requisitos para alquilar",
    descripcion: "Conocé los requisitos para alquilar una propiedad.",
    icono: faCheckCircle,
  },
  {
    titulo: "Guía para alquilar",
    descripcion:
      "Paso a paso y superfácil, todo lo que necesitas saber para alquilar.",
    icono: faHandshake,
  },
  {
    titulo: "Conocé Inmobiliaria",
    descripcion:
      "Toda la información sobre cómo usar nuestro portal y mucho más.",
    icono: faInfoCircle,
  },
];

export const cardsSugerencias = [
  {
    titulo: "Departamentos en alquiler más vistos",
  },
  {
    titulo: "Las propiedades recién publicadas",
  },
  {
    titulo: "Propiedades que bajaron de precio",
  },

  {
    titulo: "Departamentos más nuevos en alquiler",
  },
];
