import React from 'react';
import './ListadoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ListadoCard() {
    const cards = [
        {
            titulo: "Departamentos en alquiler más vistos",



        },
        {
            titulo: "Las propiedades recién publicadas",



        },
        {
            titulo: "Propiedades que bajaron de precio",



        },

        {
            titulo: "Departamentos más nuevos en alquiler",



        },
    ];

    return (
        <div className='cardsHomeContain'>

            {cards.map((card, index) => (
                <div className='cardHome' key={index} >
                    <h3>{card.titulo}</h3>
                    <FontAwesomeIcon icon={faArrowRight} className='iconCard' />
                </div>
            ))}

        </div>
    )
}
