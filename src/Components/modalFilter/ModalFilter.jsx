import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formatPrice from "../../utils/PriceFormatter";
import { usePropiedadesLogic } from "../Propiedades/propiedadesLogic";

const ModalFilter = ({ isOpen, onClose, onApply, onClear }) => {
  const {
    searchTerm,
    setSearchTerm,
    selectedLocations,
    withDescuento,
    setWithDescuento,
    priceRange,
    setPriceRange,
    ubicacionesUnicas,
    handleLocationChange,
  } = usePropiedadesLogic();

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed right-0 top-0 h-full w-[300px] sm:w-[540px] bg-white transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-full max-w-4xl mx-auto space-y-4 p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Filtros de búsqueda</h2>
              <p className="text-sm text-gray-500">
                Ajusta los filtros para encontrar la propiedad perfecta
              </p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="grid gap-6 py-4">
            {/* Filtro de precio */}
            <div className="space-y-4">
              <h3 className="font-medium">Filtrar por precio:</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="300000"
                  max="100000000"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, min: e.target.value })
                  }
                  className="w-full"
                />
                <input
                  type="range"
                  min="300000"
                  max="100000000"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, max: e.target.value })
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>{formatPrice(priceRange.min)}</span>
                  <span>{formatPrice(priceRange.max)}</span>
                </div>
              </div>
            </div>

            {/* Filtro de descuento */}
            <div className="space-y-4">
              <h3 className="font-medium">Propiedades con descuento</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="discount"
                  checked={withDescuento}
                  onChange={() => setWithDescuento(!withDescuento)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="discount" className="text-sm text-gray-700">
                  Mostrar solo propiedades con descuento
                </label>
              </div>
            </div>

            {/* Filtro de ubicación */}
            <div className="space-y-4">
              <h3 className="font-medium">Filtrar por ubicación:</h3>
              <div className="grid gap-2 max-h-[200px] overflow-y-auto">
                {ubicacionesUnicas.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={location}
                      checked={selectedLocations.includes(location)}
                      onChange={() => handleLocationChange(location)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor={location} className="text-sm text-gray-700">
                      {location}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex justify-end gap-2 pt-4 border-t">
            <button
              onClick={onClear}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 bg-gray-100 rounded-md"
            >
              Limpiar filtros
            </button>
            <button
              onClick={onApply}
              className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;
