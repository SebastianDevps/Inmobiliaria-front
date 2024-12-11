import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardsTips } from "../data";

export default function CardsHome() {
 
  return (
        <div className="w-full  py-[10px] px-[3%] lg:px-[3%] border-radius-[1em] flex flex-col lg:flex-row gap-[20px]">
          {cardsTips.map((card, index) => (
            <div className="transition-all duration-300 hover:shadow-md overflow-hidden rounded-xl border border-[#00000037] flex flex-row items-center gap-[1rem] p-[20px] bg-[var(--blanco)]" key={index}>
              <FontAwesomeIcon
                icon={card.icono}
                className="p-[10px] bg-[var(--color2)] rounded-full w-[1.6rem] h-[1.6rem] text-[var(--color1)]"
              />
              <div>
                <h3 className="font-semibold text-[17px]">{card.titulo}</h3>
                <p className="text-[14px] text-[var(--text-color2)]">{card.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
  );
}
