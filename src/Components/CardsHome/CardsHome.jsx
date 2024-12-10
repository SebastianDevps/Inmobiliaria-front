import React from 'react';
import './CardsHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHandshake, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function CardsHome() {
    const cards = [
        {
            titulo: "Requisitos para alquilar",
            descripcion: "Conocé los requisitos para alquilar una propiedad.",
            icono: faCheckCircle,

        },
        {
            titulo: "Guía para alquilar",
            descripcion: "Paso a paso y superfácil, todo lo que necesitas saber para alquilar.",
            icono: faHandshake,

        },
        {
            titulo: "Conocé Inmobiliaria",
            descripcion: "Toda la información sobre cómo usar nuestro portal y mucho más.",
            icono: faInfoCircle,

        },
    ];

    return (
        <div className='cardsHomeContain'>

            {cards.map((card, index) => (
                <div className='cardHome' key={index} >
                    <FontAwesomeIcon icon={card.icono} className='iconCard' />
                    <div>
                        <h3>{card.titulo}</h3>
                        <p>{card.descripcion}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}
