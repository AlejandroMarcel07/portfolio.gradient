import React from "react";
import "../ComponentePrincipal.css";
import { CompButton } from "./ComponentesBoton/CompButton";
import { IoHome } from "react-icons/io5";

//Iconos a utilizar
const IcoHome = <IoHome fontSize={"25px"} />;

export function Menu() {
  return (
    <>
      <div className="ComponenteMenu">
        <h5>Bienvenido</h5>
        <CompButton IcoButton={IcoHome} margen={"0 10px 0 0"} />
      </div>
    </>
  );
}
