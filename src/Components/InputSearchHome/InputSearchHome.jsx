import React, { useState } from "react";
import "./InputSearchHome.css";
import { inmobiliario } from '../dataInmobiliarios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons'; // Importa el icono de búsqueda

export default function InputSearchHome() {
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

        <div className="search-container-home">

            <fieldset className="inputSearchhHome">
                <FontAwesomeIcon icon={faSearch} className="search-icon-home" />
                <input
                    type="text"
                    placeholder="Buscar propiedad..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="input"
                />
            </fieldset>


            {showResults && (
                <div className="modalSearch">
                    {filteredInmobiliario.map((item) => (
                        <div key={item.id}>

                            <Link to={`/inmobiliario/${item.id}/${item.titulo}`}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> <p>{item.titulo} - {item.categoria}</p>
                            </Link>
                        </div>
                    ))}
                    {noResults && <p>No se encontraron resultados.</p>}
                </div>
            )}
        </div>

    );
}
