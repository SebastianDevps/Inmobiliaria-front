import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faUsers,
  faCircleCheck,
  faAward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import "react-loading-skeleton/dist/skeleton.css";
import aboutBg from "../../images/aboutBg.jpg";

const About = () => {
  return (
    <div className="flex flex-col py-5 px-[3%]">
      {/* Hero Section */}
      <div className="relative h-[68vh] w-full">
        <img
          src={aboutBg}
          alt="Edificio moderno"
          className="w-full rounded-xl h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 px-3 flex items-center justify-center">
          <div className="text-center mb-12">
            <h2 className=" text-[40px] lg:text-[60px] flex justify-start lg:justify-center font-bold mb-4 text-white">
              Nuestra Misión
            </h2>
            <p className="text-lg text-white max-w-3xl text-left lg:text-center mx-auto">
              En nuestra inmobiliaria, nos dedicamos a transformar la manera en
              que las personas encuentran su hogar ideal. Con años de
              experiencia en el mercado, ofrecemos un servicio personalizado y
              profesional que supera las expectativas de nuestros clientes.
            </p>
          </div>
        </div>
      </div>

      <section className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: faBuilding,
              title: "Experiencia",
              description:
                "Más de 15 años en el mercado inmobiliario brindando servicios de calidad.",
            },
            {
              icon: faUsers,
              title: "Compromiso",
              description:
                "Dedicados a encontrar la propiedad perfecta para cada cliente.",
            },
            {
              icon: faCircleCheck,
              title: "Profesionalismo",
              description:
                "Equipo altamente calificado y comprometido con la excelencia.",
            },
            {
              icon: faAward,
              title: "Confianza",
              description:
                "Transparencia y honestidad en cada transacción inmobiliaria.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <FontAwesomeIcon
                icon={value.icon}
                className="w-12 h-12 text-[var(--color1)] mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-color)]">
                {value.title}
              </h3>
              <p className="text-[var(--text-color2)]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[var(--color1)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "1500+", label: "Propiedades Vendidas" },
              { value: "2000+", label: "Clientes Satisfechos" },
              { value: "15+", label: "Años de Experiencia" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text-color)]">
          Nuestro Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Carlos Rodríguez",
              role: "Director Ejecutivo",
              image: "ruta-imagen-1",
            },
            {
              name: "Ana Martínez",
              role: "Directora de Ventas",
              image: "ruta-imagen-2",
            },
            {
              name: "Luis García",
              role: "Asesor Senior",
              image: "ruta-imagen-3",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-color)]">
                {member.name}
              </h3>
              <p className="text-[var(--text-color2)] text-center">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-color)]">
            ¿Listo para encontrar tu hogar ideal?
          </h2>
          <p className="text-lg text-[var(--text-color2)] mb-8">
            Nuestro equipo está aquí para ayudarte en cada paso del camino
          </p>
          <button className="bg-[var(--color1)] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300">
            Contáctanos
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
