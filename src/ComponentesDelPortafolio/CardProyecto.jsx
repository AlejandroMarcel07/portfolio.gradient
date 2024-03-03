import React from "react";
import "../ComponentePrincipal.css";
import { CompAncor01 } from "./ComponentesBoton/CompAncor01";
import { FaCode  } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
const IcoVer = <IoEyeSharp  style={{ fontSize: "20px" }} />;
const IcoCode = <FaCode  style={{ fontSize: "20px" }} />;

export function CardProyecto() {
  return (
    <div className="ComponenteCard">
      <>
       
        <div className="ContenedorTituloCard">
        <h5>Nombre proyecto</h5>
        <p>
          <span style={{color:"rgba(64, 223, 149, 0.678)"}}>Crear experiencias digitales </span>que inspiren y conecten, dando vida a
          ideas que impacten.
        </p>

        </div>
        <div className="ContenedorArcorIco">

        <h5>Proyecto</h5>

        <div>
        <CompAncor01
          ulrlink={
            "https://chat.openai.com/c/6046321d-0440-4f27-944b-c4145825c82a"
          }
          icoAncor={IcoVer}
          fondo={"rgba(147, 105, 219, 0.062)"}
        />
                <CompAncor01
          ulrlink={
            "https://chat.openai.com/c/6046321d-0440-4f27-944b-c4145825c82a"
          }
          icoAncor={IcoCode}
          fondo={"rgba(147, 105, 219, 0.062)"}
        />
        </div>
        </div>
        
      </>
    </div>
  );
}
