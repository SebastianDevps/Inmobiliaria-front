import React from "react";
export default function Footer() {

  return (
    <div className="w-full h-full py-2 px-[2%] lg:px-[5%] bg-gray-100 ">
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 border-none py-[50px] px-0">
        <div>
          <h5 className="text-[var(--color1)]">Teléfono</h5>
          <p className="lg:text-center text-[var(--text-color2)]">
            (+57) 321 123 45 67 - (+57) 321 123 45 67
          </p>
        </div>
        <div>
          <h5 className="text-[var(--color1)]">Direccion</h5>
          <p className="lg:text-center text-[var(--text-color2)]">
            Medellin, Colombia
          </p>
        </div>
        <div>
          <h5 className="text-[var(--color1)]">Correo electrónico</h5>
          <p className="lg:text-center text-[var(--text-color2)]">
            contactcompany@example.com
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <section className="relative">
        {/* Contenido */}
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative rounded-2xl px-6 py-10 bg-[var(--color1)] overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-blue-600 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                ></path>
                <path
                  className="text-blue-800 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                ></path>
              </svg>
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  ¿Listo para encontrar tu hogar ideal?
                </h2>
                <p className="mt-6 text-lg text-white/90">
                  Nuestro equipo de expertos está preparado para guiarte en cada
                  paso del camino hacia tu nueva propiedad.
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

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between py-[30px]">
        <p className="text-center flex flex-col lg:gap-2 items-center justify-center lg:flex-row">
          Copyright © 2024 <span className="hidden lg:block"> - </span>{" "}
          <span>
            Desarrollado por{" "}
            <a
              href="https://js-webs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color1)]"
            >
              SebastianDevps
            </a>
          </span>
        </p>
        <div className="flex gap-2 text-[var(--text-color2)]">
          <a href="https://facebook.com/tuempresa">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://instagram.com/tuempresa">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/company/tuempresa">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/tuempresa">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://wa.me/tunumero">
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
