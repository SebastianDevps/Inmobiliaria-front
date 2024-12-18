import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faMapMarker,
  faBed,
  faBath,
  faRulerCombined,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import DetailSkeleton from "./DetailSkeleton";
import { useDetailLogic } from "./detailLogic";
import Price from "../Price/Price";

export default function Detail() {
  const { id } = useParams();
  const {
    inmo,
    activeImage,
    setActiveImage,
    handleCompartirClick,
    handleTabChange,
    isActiveTab,
    handleSubmit,
    formData,
    handleInputChange,
  } = useDetailLogic(id);

  if (!inmo) return <DetailSkeleton />;

  const images = [inmo.img, inmo.img2, inmo.img3, inmo.img4].filter(Boolean);

  return (
    <div className="min-h-screen py-[60px] bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <div className="pb-4 mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Volver</span>
          </button>
          <button
            onClick={handleCompartirClick}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all"
          >
            <FontAwesomeIcon icon={faShare} className="w-4 h-4" />
            <span>Compartir</span>
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galería */}
            <section className="relative rounded-xl overflow-hidden aspect-video bg-gray-100">
              <img
                src={images[activeImage]}
                alt={inmo.titulo}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-white/90 backdrop-blur-sm rounded-full">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeImage === idx
                        ? "bg-blue-500 scale-125"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </section>

            {/* Información Principal */}
            <section>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {inmo.titulo}
              </h1>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <FontAwesomeIcon icon={faMapMarker} className="h-5 w-5" />
                <span>{inmo.ubicacion}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: faBed, label: `${inmo.dormitorios} Dormitorios` },
                  { icon: faBath, label: `${inmo.baños} Baños` },
                  {
                    icon: faRulerCombined,
                    label: `${inmo.metros_totales} m² Totales`,
                  },
                  {
                    icon: faHome,
                    label: `${inmo.metros_cubiertos} m² Cubiertos`,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 text-gray-700"
                  >
                    <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tabs de Descripción y Ubicación */}
            <div className="rounded-xl overflow-hidden">
              <div className="border-b">
                <div className="flex">
                  <button
                    onClick={() => handleTabChange("description")}
                    className={`px-6 py-4 font-medium transition-colors
          ${
            isActiveTab("description")
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
                  >
                    Descripción
                  </button>
                  <button
                    onClick={() => handleTabChange("location")}
                    className={`px-6 py-4 font-medium transition-colors
          ${
            isActiveTab("location")
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
                  >
                    Ubicación
                  </button>
                </div>
              </div>
              <div className="p-6">
                {isActiveTab("description") ? (
                  <p className="text-gray-600 leading-relaxed">
                    {inmo.descripcion}
                  </p>
                ) : (
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: inmo.mapa }} />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6">
              <div className="mb-6">
                <Price
                  price={inmo.precio}
                  descuento={inmo.descuento}
                  xl={true}
                />
                {inmo.descuento > 0 && (
                  <span className="text-gray-500 mt-1">
                    Descuento {inmo.descuento}%
                  </span>
                )}
                <p className="text-gray-500 mt-1">
                  Consulta por esta propiedad
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu Nombre"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 
                              focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Tu Email"
                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 
                              focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Tu Mensaje"
                    rows={4}
                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 
                              focus:border-blue-500 transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700 
                           transition-all flex items-center justify-center gap-2 text-lg font-medium
                           shadow-lg shadow-green-200"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <span>Contactar por WhatsApp</span>
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Al enviar aceptas nuestros términos y condiciones
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
