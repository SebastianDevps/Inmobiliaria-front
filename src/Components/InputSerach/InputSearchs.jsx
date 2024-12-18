import React, { useState } from "react";
import { inmobiliario } from "../dataInmobiliarios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function InputSearch({
  containerWidth = "w-[25em]", // ancho por defecto
  inputHeight = "h-10", // altura por defecto
  modalMaxHeight = "max-h-[30vh]", // altura máxima del modal por defecto
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInmobiliario, setFilteredInmobiliario] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = inmobiliario.filter((inmobiliario) => {
      return (
        inmobiliario.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        inmobiliario.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredInmobiliario(results);
    setShowResults(searchTerm !== "");
    setNoResults(searchTerm !== "" && results.length === 0);
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <fieldset
          className={`flex items-center gap-2.5 bg-[var(--gris)] rounded-[20px] border border-[#00000037] p-[5px_10px] ${containerWidth} text-[var(--text-color2)]`}
        >
          <FontAwesomeIcon
            icon={faSearch}
            className="bg-[var(--color1)] text-white p-2 text-sm rounded-full"
          />
          <input
            type="text"
            placeholder="Buscar propiedad..."
            value={searchTerm}
            onChange={handleSearch}
            className={`w-[90%] ${inputHeight} bg-transparent border-none outline-none`}
          />
        </fieldset>

        {showResults && (
          <div
            className={`absolute top-full left-0 w-full bg-[var(--gris)] shadow-md p-2.5 z-[9999] ${modalMaxHeight} overflow-y-auto rounded-lg transition-all duration-400 ease mt-2.5`}
          >
            {filteredInmobiliario.map((item) => (
              <div key={item.id}>
                <Link
                  to={`/propiedades/${item.id}/${item.titulo}`}
                  className="flex items-center gap-5 p-2.5 text-[var(--color1)] hover:bg-[var(--color1)] hover:text-white rounded-lg transition-all duration-500 no-underline"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  <p className="text-sm font-medium text-[var(--text-color2)] hover:text-white m-0">
                    {item.titulo} - {item.categoria}
                  </p>
                </Link>
              </div>
            ))}
            {noResults && (
              <p className="text-sm text-[var(--text-color2)]">
                No se encontraron resultados.
              </p>
            )}
          </div>
        )}
      </div>

      {/* Estilos para la scrollbar */}
      <style jsx="true">{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 7px;
          height: 7px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: var(--color1);
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
