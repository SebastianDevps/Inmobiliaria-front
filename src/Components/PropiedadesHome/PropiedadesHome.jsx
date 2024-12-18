import React, { useRef } from "react";
import { inmobiliario } from "../dataInmobiliarios";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import Price from "../Price/Price"; 

export default function PropiedadesHome() {
  const swiperRef = useRef(null);
  SwiperCore.use([Navigation, Pagination, Autoplay]);

  return (
    <div className="py-[10px] px-[3%]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{ delay: 3000 }} // Cambia el valor de 'delay' según tus preferencias
        onSwiper={(swiper) => {
          // console.log(swiper);
          swiperRef.current = swiper;
        }}
      >
        {inmobiliario.map((item) => (
          <SwiperSlide key={item.id} style={{ width: "40vh", margin: "10px" }}>
            <Link
              className="w-[40vh] overflow-hidden rounded-lg border border-[#00000037] flex flex-col gap-2"
              to={`/propiedades/${item.id}/${item.titulo}`}
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
                autoplay={{ delay: 3000 }} // Cambia el valor de 'delay' según tus preferencias
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                //   console.log(swiper);
                  swiperRef.current = swiper;
                }}
              >
                {[
                  { img: item.img, id: 1 },
                  { img: item.img2, id: 2 },
                  { img: item.img3, id: 3 },
                  { img: item.img4, id: 4 },
                  { img: item.img5, id: 5 }
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
                  {item.descripcion.slice(0, 50)}{" "}
                  <span className="text-[var(--color1)] text-sm">{" "}Leer más</span>
                </p>
                
                <Price price={item.precio} descuento={item.descuento} />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
