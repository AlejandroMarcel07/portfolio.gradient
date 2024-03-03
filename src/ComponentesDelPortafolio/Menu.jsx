import React from "react";
import "../ComponentePrincipal.css";
import { CompButton } from "./ComponentesBoton/CompButton";
import { MdModeNight } from "react-icons/md";

//Iconos a utilizar
const IcoNoche = <MdModeNight fontSize={"25px"} />;

export function Menu() {
  return (
    <>
      <div className="ComponenteMenu">
        <h5>Bienvenido</h5>
        <CompButton IcoButton={IcoNoche} margen={"0 10px 0 0"} />
      </div>
    </>
  );
}
