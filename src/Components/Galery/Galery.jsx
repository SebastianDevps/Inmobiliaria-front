import React, { useMemo } from "react";
import { inmobiliario } from "../dataInmobiliarios";
import { Link as Anchor } from "react-router-dom";

export default function Galery() {
  const randomProperties = useMemo(() => {
    return [...inmobiliario]
      .sort(() => Math.random() - 0.5)
      .slice(0, 7)
      .map((prop) => ({
        id: prop.id,
        title: prop.titulo,
        img: prop.img,
      }));
  }, []);

  return (
    <div className="w-full m-auto py-[10px] px-[3%]">
      <div
        className="flex overflow-x-auto  gap-6 pb-4 px-2
                          scroll-smooth hover:scroll-auto
                          [&::-webkit-scrollbar]:h-2
                          [&::-webkit-scrollbar-track]:rounded-full
                        //   [&::-webkit-scrollbar-track]:bg-[var(--color2]
                          [&::-webkit-scrollbar-thumb]:rounded-full
                          [&::-webkit-scrollbar-thumb]:bg-transparent
                          [&::-webkit-scrollbar-thumb]:hover:bg-tansparent"
      >
        {randomProperties.map((item) => (
          <Anchor
            to={`/propiedades/${item.id}/${item.title}`}
            key={item.id}
            className="flex-none"
          >
            <div className="group cursor-pointer">
              <img
                src={item.img}
                alt={`Propiedad ${item.id}`}
                className="w-[158px] h-[100px] 
                         xl:w-[220px] xl:h-[140px]
                         object-cover rounded-xl transition-all duration-300
                         group-hover:scale-[1.02]"
              />
            </div>
          </Anchor>
        ))}
      </div>
    </div>
  );
}
