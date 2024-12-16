import {
  faCheckCircle,
  faHandshake,
  faInfoCircle,
  faBuilding,
  faUserCheck,
  faUsers,
  faChartLine,
  faAward,
  faStar,
  faBriefcase,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  { path: "/", label: "Inicio" },
  { path: "/sobre-nosotros", label: "Sobre Nosotros" },
  { path: "/propiedades", label: "Propiedades" },
  { path: "/servicios", label: "Servicios" },
  { path: "/contacto", label: "Contacto" },
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

export const valuesAboutUs = [
  {
    icon: faBuilding,
    title: "Experiencia",
    description:
      "Más de 15 años en el mercado inmobiliario brindando servicios de calidad.",
  },
  {
    icon: faUserCheck,
    title: "Profesionalismo",
    description:
      "Equipo altamente calificado y comprometido con la excelencia.",
  },
  {
    icon: faStar,
    title: "Confianza",
    description: "Transparencia y honestidad en cada transacción inmobiliaria.",
  },
];

export const teamMembers = [
  {
    name: "Carlos Rodríguez",
    role: "CEO & Fundador",
    description:
      "Visionario emprendedor con experiencia en startups inmobiliarias. Impulsor de nuevas tecnologías para revolucionar el sector inmobiliario.",
    value: 50,
    title: "Proyectos Exitosos",
    valueSatisfaction: 98,
    titleSatisfaction: "Índice de Éxito",
    image: faLightbulb,
  },
  {
    name: "Ana Martínez",
    role: "Directora Comercial",
    description:
      "Especialista en marketing digital y ventas. Líder en implementación de estrategias innovadoras para captación de clientes premium.",
    value: 120,
    title: "Propiedades Vendidas",
    valueSatisfaction: 96,
    titleSatisfaction: "Satisfacción Cliente",
    image: faChartLine,
  },
  {
    name: "Luis García",
    role: "Director de Operaciones",
    description:
      "Experto en optimización de procesos y gestión inmobiliaria. Enfocado en brindar la mejor experiencia a nuestros clientes.",
    value: 45,
    title: "Proyectos Gestionados",
    valueSatisfaction: 95,
    titleSatisfaction: "Eficiencia",
    image: faBriefcase,
  },
  {
    name: "María Sánchez",
    role: "Asesora Senior",
    description:
      "Especialista en propiedades de lujo y relaciones con clientes VIP. Certificada en asesoramiento inmobiliario internacional.",
    value: 80,
    title: "Clientes Premium",
    valueSatisfaction: 97,
    titleSatisfaction: "Fidelización",
    image: faHandshake,
  },
  {
    name: "David Torres",
    role: "Director de Desarrollo",
    description:
      "Innovador en tecnología inmobiliaria. Lidera la transformación digital y mejora continua de nuestros servicios.",
    value: 25,
    title: "Innovaciones",
    valueSatisfaction: 94,
    titleSatisfaction: "Adopción Tech",
    image: faUsers,
  },
  {
    name: "Laura Pérez",
    role: "Directora de Calidad",
    description:
      "Dedicada a mantener los más altos estándares de servicio. Experta en procesos de mejora continua y satisfacción del cliente.",
    value: 35,
    title: "Certificaciones",
    valueSatisfaction: 98,
    titleSatisfaction: "Calidad",
    image: faAward,
  },
];
