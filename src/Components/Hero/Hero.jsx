import { React } from "react";
import InputSearchHome from "../InputSearchHome/InputSearchHome";

export default function Hero() {
  return (
    <div className="h-[80vh] bg-cover bg-center my-0 mx-[2%] lg:mx-[3%] lg:mb-[10px] rounded-xl bg-no-repeat bg-fixed bg-hero-pattern flex flex-col justify-center items-center self-center content-center gap-10 py-5 px-[3%]">
      <h1 className="font-bold text-white text-[40px] lg:text-[60px] flex justify-center items-center text-shadow">
        Encuentra tu próximo hogar
      </h1>
      <InputSearchHome />
    </div>
  );
}
