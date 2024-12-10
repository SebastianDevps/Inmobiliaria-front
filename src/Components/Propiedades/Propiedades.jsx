import React, { useState, useEffect, useRef } from 'react'
import './Propiedades.css'
import { inmobiliario } from '../dataInmobiliarios';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
export default function Propiedades() {
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [propertiesToShow, setPropertiesToShow] = useState(9); // Muestra 4 propiedades iniciales
    const propertiesPerLoad = 9; // Cantidad de propiedades a cargar en cada clic

    const ubicacionesUnicas = [...new Set(inmobiliario.map(item => item.ubicacion))];

    const handleLocationChange = (location) => {
        if (selectedLocations.includes(location)) {
            setSelectedLocations(selectedLocations.filter(item => item !== location));
        } else {
            setSelectedLocations([...selectedLocations, location]);
        }
    };

    const [priceRange, setPriceRange] = useState({ // Inicializa priceRange
        min: 1000,
        max: 10000// Establece el rango máximo según tus necesidades
    });

    const filteredProperties = inmobiliario.filter((item) => {
        // Filtro por término de búsqueda
        const matchesSearch = item.titulo.toLowerCase().includes(searchTerm.toLowerCase());

        // Filtro por ubicación
        const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(item.ubicacion);


        // Filtro por precio
        const price = parseFloat(item.precio.toString().replace(/[^0-9.-]+/g, ''));

        const matchesPrice =
            price >= priceRange.min && price <= priceRange.max;
        return matchesSearch && matchesLocation && matchesPrice;
        // Se mostrará la propiedad si coincide con ambos filtros

    });
    const noResults = filteredProperties.length === 0;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='propiedadesContain'>

            <div className='gridContain'>
                <div>

                    <fieldset className='inputFiltro'>
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Buscar propiedad"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="input"
                        />

                    </fieldset>
                    <fieldset className='filtros'>
                        <h3>Filtrar por precio:</h3>
                        <input
                            type="range"
                            min="1000"
                            max="10000" // Ajusta el rango máximo según tus necesidades
                            value={priceRange.min}
                            onChange={(e) =>
                                setPriceRange({ ...priceRange, min: e.target.value })
                            }
                        />
                        <input
                            type="range"
                            min="1000"
                            max="10000" // Ajusta el rango máximo según tus necesidades
                            value={priceRange.max}
                            onChange={(e) =>
                                setPriceRange({ ...priceRange, max: e.target.value })
                            }
                        />
                        <div className="price-range-labels">
                            <span>Min {priceRange.min} / </span>
                            <span>Max {priceRange.max}</span>
                        </div>
                    </fieldset>

                    <fieldset className='filtros'>
                        <h3>Filtrar por ubicación:</h3>
                        {ubicacionesUnicas.map((location) => (
                            <label key={location} className='deFlexInput'>
                                <input
                                    type="checkbox"
                                    value={location}
                                    checked={selectedLocations.includes(location)}
                                    onChange={() => handleLocationChange(location)}
                                />
                                {location}
                            </label>
                        ))}
                    </fieldset>
                </div>
                <div className='deColumns'>
                    <div className='cardsContain'>

                        {noResults ? (
                            <div className='moreBtn'>
                                <p className='noresult'>No hay resultados</p>
                            </div>

                        ) : (

                            filteredProperties.slice(0, propertiesToShow).map((item) => (

                                <Link className='card' to={`/inmobiliario/${item.id}/${item.titulo}`}>

                                    <Swiper
                                        effect={'coverflow'}
                                        grabCursor={true}
                                        loop={true}
                                        slidesPerView={'auto'}
                                        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                                        autoplay={{ delay: 3000 }} // Cambia el valor de 'delay' según tus preferencias
                                        pagination={{ clickable: true, }}
                                        onSwiper={(swiper) => {
                                            console.log(swiper);
                                            swiperRef.current = swiper;
                                        }}
                                        id={"swiper_container_scroll"}
                                    >
                                        <SwiperSlide id='SwiperSlide-scroll'  >
                                            <img src={item.img} alt="" />

                                        </SwiperSlide>
                                        <SwiperSlide id='SwiperSlide-scroll'  >
                                            <img src={item.img2} alt="" />

                                        </SwiperSlide>
                                        <SwiperSlide id='SwiperSlide-scroll'  >
                                            <img src={item.img3} alt="" />

                                        </SwiperSlide>
                                        <SwiperSlide id='SwiperSlide-scroll'  >
                                            <img src={item.img4} alt="" />

                                        </SwiperSlide>
                                        <SwiperSlide id='SwiperSlide-scroll'  >
                                            <img src={item.img5} alt="" />

                                        </SwiperSlide>

                                    </Swiper>

                                    <div className='cardText'>
                                        <h3>{item.titulo.slice(0, 30)}</h3>
                                        <p>{item.descripcion.slice(0, 60)}...</p>
                                        <h4>USD {item.precio}</h4>
                                    </div>
                                </Link>
                            ))
                        )}


                    </div>
                    {propertiesToShow < filteredProperties.length && (
                        <div className='moreBtn'>
                            <button onClick={() => setPropertiesToShow(propertiesToShow + propertiesPerLoad)}>
                                Mostrar más...
                            </button>
                        </div>
                    )}
                </div>


            </div>

        </div>
    )
}
