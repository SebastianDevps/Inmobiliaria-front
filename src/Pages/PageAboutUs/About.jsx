import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { valuesAboutUs, teamMembers } from "../../Components/data";
import "react-loading-skeleton/dist/skeleton.css";
import aboutBg from "../../images/aboutBg.jpg";

const About = () => {
  return (
    <div className="flex flex-col px-[3%]">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
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

      {/* Values section */}
      <section className="w-full py-[20px] border-radius-[1em] flex flex-col lg:flex-row gap-[20px]">
        {valuesAboutUs.map((value, index) => (
          <div
            key={index}
            className="transition-all w-full duration-300 hover:shadow-md overflow-hidden rounded-xl border border-[#00000037] flex flex-row items-center gap-[1rem] p-[20px] bg-[var(--blanco)]"
          >
            <FontAwesomeIcon
              icon={value.icon}
              className="p-[10px] bg-[var(--color2)] rounded-full w-[1.6rem] h-[1.6rem] text-[var(--color1)]"
            />
            <div>
              <h3 className="font-semibold text-[17px]">{value.title}</h3>
              <p className="text-[14px] text-[var(--text-color2)]">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Team Section */}
      <section className="py-5 lg:py-10 px-4 md:px-6 lg:px-8 max-w-8xl mx-auto">
        <div className="text-left lg:text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-color)] mb-4 relative inline-block">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-[var(--text-color2)] max-w-3xl mx-auto ">
            Un equipo de profesionales inmobiliarios altamente capacitados y
            comprometidos con tu éxito, brindando servicios de alta calidad y
            asesoramiento personalizado para encontrar tu hogar ideal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transform transition-all duration-500 hover:-translate-y-2">
                {/* Banner superior decorativo */}
                <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400"></div>

                {/* Contenido principal */}
                <div className="relative px-6 pb-8">
                  {/* Avatar */}
                  <div className="relative -mt-16 mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                      <div className="w-full h-full flex items-center justify-center bg-gray-50">
                        <FontAwesomeIcon
                          icon={member.image}
                          className="w-20 h-20 text-blue-600/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Información */}
                  <div className="text-center h-[140px]">
                    <h3 className="text-2xl font-bold text-[var(--text-color)] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[var(--color1)] font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-[var(--text-color2)] text-sm">
                      {member.description}
                    </p>
                  </div>

                  <div className="my-6 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                  <div className="flex justify-around text-center">
                    <div>
                      <p className="text-2xl font-bold text-[var(--color1)]">
                        {member.value}
                      </p>
                      <p className="text-xs text-[var(--text-color2)] uppercase tracking-wider">
                        {member.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[var(--color1)]">
                        {member.valueSatisfaction}%
                      </p>
                      <p className="text-xs text-[var(--text-color2)] uppercase tracking-wider">
                        {member.titleSatisfaction}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color1)] to-blue-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative pt-10 mb-10">

        {/* Contenido */}
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-[var(--color1)] overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                <path className="text-blue-600 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"></path>
                <path className="text-blue-800 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"></path>
              </svg>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  ¿Listo para encontrar tu hogar ideal?
                </h2>
                <p className="mt-6 text-lg text-white/90">
                  Nuestro equipo de expertos está preparado para guiarte en cada paso del camino hacia tu nueva propiedad.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white to-blue-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <button className="relative flex items-center gap-2 px-8 py-4 bg-white text-[var(--color1)] rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
                  <span>Contáctanos Ahora</span>
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
