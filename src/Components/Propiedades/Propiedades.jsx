import React, { useState, useEffect, useRef } from "react";
import "./Propiedades.css";
import { inmobiliario } from "../dataInmobiliarios";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import formatPrice from "../../utils/PriceFormatter";

export default function Propiedades() {
  const swiperRef = useRef(null);
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [propertiesToShow, setPropertiesToShow] = useState(9); // Muestra 4 propiedades iniciales
  const propertiesPerLoad = 9; // Cantidad de propiedades a cargar en cada clic
  const [withDescuento, setWithDescuento] = useState(false);

  const ubicacionesUnicas = [
    ...new Set(inmobiliario.map((item) => item.ubicacion)),
  ];

  const handleLocationChange = (location) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(
        selectedLocations.filter((item) => item !== location)
      );
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const [priceRange, setPriceRange] = useState({
    // Inicializa priceRange
    min: 300000,
    max: 100000000, // Establece el rango máximo según tus necesidades
  });

  const filteredProperties = inmobiliario.filter((item) => {
    // Filtro por término de búsqueda
    const matchesSearch = item.titulo
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Filtro por ubicación
    const matchesLocation =
      selectedLocations.length === 0 ||
      selectedLocations.includes(item.ubicacion);

    // Filtro por precio
    const price = parseFloat(item.precio.toString().replace(/[^0-9.-]+/g, ""));
    const withDiscount = item.descuento > 0;

    const matchesPrice = price >= priceRange.min && price <= priceRange.max;
    return (
      matchesSearch &&
      matchesLocation &&
      matchesPrice &&
      (withDescuento ? withDiscount : true)
    );
    // Se mostrará la propiedad si coincide con ambos filtros
  });
  const noResults = filteredProperties.length === 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-[130px] px-[3%]">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <div>
          <fieldset className="bg-transparent w-[35vh] lg:w-[50vh] !important flex items-center gap-2 py-[5px] px-[20px] rounded-md border-[0.3px] mb-[2rem] border-[#00000037] text-[var(--text-color2)]">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar propiedad"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none bg-transparent"
            />
          </fieldset>
          <fieldset className="filtros">
            <h3>Filtrar por precio:</h3>
            <input
              type="range"
              min="300000"
              max="100000000" // Ajusta el rango máximo según tus necesidades
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
              <div className="flex flex-col">
                <span>Precio Mínimo {formatPrice(priceRange.min)}</span>
                <span>Precio Máximo {formatPrice(priceRange.max)}</span>
                <span
                  onClick={() => setWithDescuento(!withDescuento)}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={withDescuento}
                    className="w-4 h-4"
                    onChange={() => setWithDescuento(!withDescuento)}
                  />
                  Propiedades con descuento
                </span>
              </div>
            </div>
          </fieldset>

          <fieldset className="filtros">
            <h3>Filtrar por ubicación:</h3>
            {ubicacionesUnicas.map((location) => (
              <label key={location} className="deFlexInput">
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
        <div className="deColumns">
          <div className="cardsContain">
            {noResults ? (
              <div className="moreBtn">
                <p className="noresult">No hay resultados</p>
              </div>
            ) : (
              filteredProperties.slice(0, propertiesToShow).map((item) => (
                <Link
                  className="card"
                  to={`/inmobiliario/${item.id}/${item.titulo}`}
                >
                  {" "}
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 2.5,
                    }}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                  >
                    {[
                      { img: item.img, id: 1 },
                      { img: item.img2, id: 2 },
                      { img: item.img3, id: 3 },
                      { img: item.img4, id: 4 },
                      { img: item.img5, id: 5 },
                    ].map((slide) => (
                      <SwiperSlide key={`${item.id}-${slide.id}`}>
                        <div className="relative">
                          <img
                            src={slide.img}
                            alt={`Imagen ${slide.id} de ${item.titulo}`}
                            className="w-full relative h-[25vh] object-cover"
                          />
                          {item.descuento > 0 && (
                            <span className="absolute -right-12 top-4 bg-gradient-to-r from-red-600 to-red-800 text-white text-[12px] font-bold py-1 px-12 rotate-45 transform origin-center shadow-md before:absolute before:content-[''] before:h-full before:w-full before:top-0 before:left-0">
                              -{item.descuento}% OFF
                            </span>
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="flex flex-col gap-2 py-2 px-2 pb-4">
                    <h3 className="text-[var(--text-color)] text-[16px] font-semibold">
                      {item.titulo.slice(0, 30)}
                    </h3>
                    <p className="text-[var(--text-color2)] text-[14px] ">
                      {item.descripcion.slice(0, 50)}{" "}
                      <span className="text-[var(--color1)] text-sm">
                        {" "}
                        Leer más
                      </span>
                    </p>
                    <div className="flex flex-col gap-1">
                      {item.descuento > 0 ? (
                        <h4 className="text-red-500 text-[14px] font-bold">
                          COP{" "}
                          {formatPrice(
                            item.precio - (item.precio * item.descuento) / 100
                          )}
                        </h4>
                      ) : (
                        <h4 className="text-[var(--color1)] text-[14px] font-bold">
                          COP {formatPrice(item.precio)}
                        </h4>
                      )}
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          {propertiesToShow < filteredProperties.length && (
            <div className="moreBtn">
              <button
                onClick={() =>
                  setPropertiesToShow(propertiesToShow + propertiesPerLoad)
                }
              >
                Mostrar más...
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
