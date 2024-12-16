import React, { useEffect, useRef } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter, faTimes } from "@fortawesome/free-solid-svg-icons";
import { usePropiedadesStore } from "./propiedadesLogic";
import ModalFilter from "../../Components/modalFilter/ModalFilter";
import { utils } from "../../utils/Utils";

export default function Propierties() {
  const swiperRef = useRef(null);
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  const {
    searchTerm,
    setSearchTerm,
    selectedLocations,
    propertiesToShow,
    setPropertiesToShow,
    withDescuento,
    setWithDescuento,
    isFilterOpen,
    setIsFilterOpen,
    clearFilters,
    getFilteredProperties,
    handleLocationChange,
  } = usePropiedadesStore();

  const filteredProperties = getFilteredProperties();
  const noResults = filteredProperties.length === 0;

  const loadMoreProperties = () => {
    setPropertiesToShow(propertiesToShow + 12);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-[130px] xl:px-[5%] lg:px-[3%] px-[3%]">
      <div className="flex w-full gap-4 mb-6">
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            aria-hidden="true"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Buscar propiedad"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" pl-10  lg:w-[60vh] pr-4 py-2 rounded-md border border-gray-200 outline-none"
          />
        </div>
        <button
          onClick={() => setIsFilterOpen(true)}
          className="px-4 py-2 border text-[var(--text-color2)] border-gray-200 rounded-md flex items-center gap-2"
        >
          <FontAwesomeIcon
            aria-hidden="true"
            className="text-[var(--color1)]"
            icon={faFilter}
          />
          Filtrar
        </button>
      </div>
      {/* Filtros activos */}
      {(withDescuento || selectedLocations.length > 0) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {withDescuento && (
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              Con descuento
              <button
                onClick={() => setWithDescuento(false)}
                className="text-gray-500"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </span>
          )}
          {selectedLocations.map((location) => (
            <span
              key={location}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm flex items-center gap-2"
            >
              {location.split(",")[0]}
              <button
                onClick={() => handleLocationChange(location)}
                className="text-gray-500"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </span>
          ))}
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Limpiar filtros
          </button>
        </div>
      )}
      {/* Lista de propiedades */}
      <div className="flex  gap-[29px] lg:gap-[27px] flex-wrap">
        {noResults ? (
          <p className="text-[var(--text-color2)] m-0 lg:mt-[3rem] mt-[1rem] lg:mr-[40vh] mr-[1rem]">
            No hay resultados
          </p>
        ) : (
          filteredProperties.slice(0, propertiesToShow).map((item) => (
            <Link
              key={item.id}
              className="w-full xl:w-[44vh] lg:w-[32vh] overflow-hidden rounded-lg border-[0.3px] border-[#00000037]"
              to={`/inmobiliario/${item.id}/${item.titulo}`}
            >
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
                <p className="text-[var(--text-color2)] uppercase text-[14px] ">
                  {item.descripcion.slice(0, 60)}{" "}
                  <span className="text-[var(--color1)] text-sm">
                    {" "}
                    Leer más
                  </span>
                </p>
                <div className="flex flex-col gap-1">
                  {item.descuento > 0 ? (
                    <h4 className="text-red-500 text-[14px] font-bold">
                      COP{" "}
                      {utils.priceFormatter(
                        item.precio - (item.precio * item.descuento) / 100
                      )}
                    </h4>
                  ) : (
                    <h4 className="text-[var(--color1)] text-[14px] font-bold">
                      COP {utils.priceFormatter(item.precio)}
                    </h4>
                  )}
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      {/* Modal de filtros */}
      <ModalFilter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />

      {propertiesToShow < filteredProperties.length && (
        <button
          className="border-none bg-transparent text-[var(--text-color2)] cursor-pointer flex mt-[2rem]"
          onClick={loadMoreProperties}
        >
          Mostrar más...
        </button>
      )}
    </div>
  );
}
