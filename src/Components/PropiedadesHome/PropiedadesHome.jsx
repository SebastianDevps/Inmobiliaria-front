import React, { useState, useEffect, useRef } from 'react'
import './PropiedadesHome.css'
import { inmobiliario } from '../dataInmobiliarios';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.css';

export default function PropiedadesHome() {
    const swiperRef = useRef(null);
    SwiperCore.use([Navigation, Pagination, Autoplay]);








    return (
        <div className='PropiedadesHomeContain'>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                autoplay={{ delay: 3000 }} // Cambia el valor de 'delay' según tus preferencias

                onSwiper={(swiper) => {
                    console.log(swiper);
                    swiperRef.current = swiper;
                }}
                id={"swiper_container_scroll"}
            >






                {
                    inmobiliario.map((item) => (
                        <SwiperSlide id={"swiperCardScroll"} >
                            <Link className='cardScroll' to={`/inmobiliario/${item.id}/${item.titulo}`}>

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

                                >
                                    <SwiperSlide  >
                                        <img src={item.img} alt="" />

                                    </SwiperSlide>
                                    <SwiperSlide   >
                                        <img src={item.img2} alt="" />

                                    </SwiperSlide>
                                    <SwiperSlide   >
                                        <img src={item.img3} alt="" />

                                    </SwiperSlide>
                                    <SwiperSlide >
                                        <img src={item.img4} alt="" />

                                    </SwiperSlide>
                                    <SwiperSlide   >
                                        <img src={item.img5} alt="" />

                                    </SwiperSlide>

                                </Swiper>

                                <div className='cardText'>
                                    <h3>{item.titulo.slice(0, 30)}</h3>
                                    <p>{item.descripcion.slice(0, 50)}...</p>
                                    <h4>USD {item.precio}</h4>
                                </div>
                            </Link>
                        </SwiperSlide>

                    ))
                }


            </Swiper>


        </div>
    )
}
