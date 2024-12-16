import React from "react";
import { useState, useEffect } from "react";
import footerLogic, { getMachineId } from "./footerLogic";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [machineId, setMachineId] = useState("");

  useEffect(() => {
    setMachineId(getMachineId());
  }, []);

  const handleSubmit = () => {
    const props = {
      email: email,
      machineId: machineId,
    };
    footerLogic(props);
  };

  return (
    <div className="w-full h-full py-2 px-[2%] lg:px-[5%] bg-gray-100 ">
      <div className="w-full flex flex-col md:flex-row justify-between gap-10 border-none py-[50px] px-0">
        <div>
          <h5 className="text-[var(--color1)]">Teléfono</h5>
          <p className="lg:text-center text-[var(--text-color2)]">
            (+57) 321 123 45 67 - (+57) 321 123 45 67
          </p>
        </div>
        <div>
          <h5 className="text-[var(--color1)]">Direccion</h5>
          <p className="lg:text-center text-[var(--text-color2)]">
            Medellin, Colombia
          </p>
        </div>
        <div>
          <h5 className="text-[var(--color1)]">Correo electrónico</h5>
          <p className="lg:text-center text-[var(--text-color2)]">
            contactcompany@example.com
          </p>
        </div>
      </div>

      <div className="bg-cover bg-no-repeat bg-footer-pattern h-[20%] w-full flex items-center justify-center rounded-lg py-[30px] px-0">
        <div className="w-full flex flex-col md:flex-row gap-[5rem] py-[40px] px-[20px] border-none justify-between">
          <div className="text-white">
            <h6 className="text-[25px] md:text-[30px] font-semibold">
              SUSCRÍBASE A NUESTRA LISTA DE CORREO
            </h6>
            <p className="text-[16px]">
              Regístrese para recibir la información más reciente
            </p>
          </div>
          <form action="">
            <fieldset
              className="flex border-none rounded-lg  overflow-hidden -webkit-border-radius: 10px;
                        -moz-border-radius: 10px;
                        -ms-border-radius: 10px;
                        -o-border-radius: 10px;"
            >
              <div className="relative bg-white">
                <input
                  type="email"
                  id="floating_outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-white text-gray-900 bg-transparent border-1 border-gray-300 rounded-lg outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gray-900 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Ingresa tu correo
                </label>
              </div>
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="bg-[var(--color1)] text-white py-[14px] px-[30px] rounded-r-2xl"
              >
                Enviar
              </button>
            </fieldset>
          </form>
        </div>
      </div>

      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between py-[30px]">
        <p className="text-center flex flex-col lg:gap-2 items-center justify-center lg:flex-row">
          Copyright © 2024 <span className="hidden lg:block"> - </span>{" "}
          <span>
            Desarrollado por{" "}
            <a
              href="https://js-webs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color1)]"
            >
              SebastianDevps
            </a>
          </span>
        </p>
        <div className="flex gap-2 text-[var(--text-color2)]">
          <a href="https://facebook.com/tuempresa">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://instagram.com/tuempresa">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/company/tuempresa">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/tuempresa">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://wa.me/tunumero">
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
