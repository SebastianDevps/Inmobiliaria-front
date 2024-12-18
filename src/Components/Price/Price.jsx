import React from "react";
import { priceFormatter } from "./priceLogic";

const Price = ({ price, descuento, xl }) => {
  const className = xl ? "text-2xl" : "";

  return (
    <div className={`flex flex-col gap-1`}>
      {descuento > 0 ? (
        <h4 className={`text-red-500 ${className} font-bold`}>
          COP{" "}
          {priceFormatter(price - (price * descuento) / 100)}
        </h4>
      ) : (
        <h4 className={`text-[var(--color1)] ${className} font-bold`}>
          COP {priceFormatter(price)}
        </h4>
      )}
    </div>
  );
};
    
export default Price;
