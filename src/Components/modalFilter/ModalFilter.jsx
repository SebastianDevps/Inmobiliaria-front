import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { priceFormatter } from "../../utils/PriceFormatter";
import { usePropiedadesStore } from "../../Pages/PagePropiedades/propiedadesLogic";
import { inmobiliario } from "../../Components/dataInmobiliarios";
import { useModalFilter } from "./modalLogic";

const ModalFilter = ({ isOpen, onClose }) => {
  const {
    selectedLocations,
    withDescuento,
    priceRange,
    setWithDescuento,
    setPriceRange,
    handleLocationChange,
  } = usePropiedadesStore();

  const { handleModalClick } = useModalFilter();
  const ubicacionesUnicas = [...new Set(inmobiliario.map(item => item.ubicacion))];

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={handleModalClick}
        className={`fixed right-0 top-0 h-full w-[300px] sm:w-[500px] bg-white transform transition-transform ${
          isOpen ? "translate-x-0 transition-all duration-700" : "translate-x-full transition-all duration-700"
        }`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-1">Filtros de búsqueda</h2>
              <p className="text-sm flex flex-col gap-1 text-gray-600">
                Ajusta los filtros para encontrar la propiedad perfecta
                <span className="text-xs text-gray-400">
                  El precio de las propiedades esta sujeto a la moneda Colombiana (COP)
                </span>
              </p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Cerrar"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Filtro de precio */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">Filtrar por precio:</h3>
            <input
              type="range"
              min="300000"
              max="100000000"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
              className="w-full mb-2 accent-blue-600"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{priceFormatter(priceRange.min)}</span>
              <span>{priceFormatter(priceRange.max)}</span>
            </div>
          </div>

          {/* Filtro de descuento */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">Propiedades con descuento</h3>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={withDescuento}
                onChange={() => setWithDescuento(!withDescuento)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm">
                Mostrar solo propiedades con descuento
              </span>
            </label>
          </div>

          {/* Filtro de ubicación */}
          <div className="mb-8">
            <h3 className="font-medium mb-4">Filtrar por ubicación:</h3>
            <div className="max-h-[300px] overflow-y-auto pr-2">
              {ubicacionesUnicas.map((location) => (
                <label
                  key={location}
                  className="flex items-center gap-2 py-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(location)}
                    onChange={() => handleLocationChange(location)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm">{location}</span>
                </label>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalFilter;
