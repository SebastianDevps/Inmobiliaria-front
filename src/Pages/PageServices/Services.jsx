import React from "react";
import { useServices } from "./servicesLogic";
import servicesBg from "../../images/servicesBg.jpg";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const {
    services,
    horariosDisponibles,
    open,
    handleOpen,
    handleClose,
    handleWhatsapp,
  } = useServices();

  return (
    <div className="flex flex-col px-[3%]">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full">
        <img
          src={servicesBg}
          alt="Edificio moderno"
          className="w-full rounded-xl h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 px-3 flex items-center justify-center">
          <div className="text-center mb-12">
            <h2 className="text-[35px] lg:text-[60px] flex justify-start lg:justify-center font-bold mb-4 text-white">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-white max-w-3xl text-left lg:text-center mx-auto">
              Soluciones inmobiliarias integrales diseñadas para satisfacer
              todas tus necesidades con la más alta calidad y profesionalismo.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 py-10">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-4">
            <button
              onClick={handleOpen}
              className="w-full lg:w-[380px] mb-6 bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 
                           transition-all flex items-center justify-center gap-2 text-lg font-medium
                           shadow-lg shadow-blue-200"
            >
              <FontAwesomeIcon icon={faClock} />
              Ver Horarios de Atención
            </button>
            <button
              onClick={handleWhatsapp}
              type="button"
              className="w-full lg:w-[380px] mb-6 bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 
                           transition-all flex items-center justify-center gap-2 text-lg font-medium
                           shadow-lg shadow-green-200"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>Contactar por WhatsApp</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    <span className="text-2xl text-blue-600">
                      {service.icon}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Modal
          open={open}
          center={true}
          onClose={handleClose}
          closeOnEsc={false}
          showCloseIcon={false}
          blockScroll={true}
          classNames={{ modal: "modal-custom rounded-xl lg:w-[50%]" }}
        >
          <div className="w-full p-6">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-2">Horarios de Atención</h2>
            <p className="text-gray-600 mb-6">
              Consulta nuestros horarios de oficina y visitas
            </p>

            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 font-medium bg-gray-50 p-4">
                <div>Día</div>
                <div>Horario</div>
              </div>
              {horariosDisponibles.map((item, index, arr) => (
                <div
                  key={item.dia}
                  className={`grid grid-cols-2 p-4 ${
                    index !== arr.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div>{item.dia}</div>
                  <div
                    className={`${
                      item.dia === "Domingo" ? "text-red-500" : ""
                    }`}
                  >
                    {item.horario}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Services;
