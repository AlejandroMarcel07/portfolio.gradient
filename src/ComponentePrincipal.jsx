import React from "react";
import "../src/ComponentePrincipal.css";
import "../src/BackgroundFondoGradiente.css";

import { Menu } from "./ComponentesDelPortafolio/Menu";
import { SobreMi } from "./ComponentesDelPortafolio/SobreMi";
import { Musica } from "./ComponentesDelPortafolio/Musica";
import { FechaDia } from "./ComponentesDelPortafolio/FechaDia";
import { Tecnologia } from "./ComponentesDelPortafolio/Tecnologia";
import { Hobbie } from "./ComponentesDelPortafolio/Hobbie";
import { Objetivo } from "./ComponentesDelPortafolio/Objetivo";
import { CardProyecto } from "./ComponentesDelPortafolio/CardProyecto";
import { MensajesConsolas } from "./ComponentesDelPortafolio/MensajesConsolas";

export function ComponentePrincipal() {
  return (
    <>
      <div className="ContenedorFondoGradiente">
        <div className="BolaGradiente ba1  "></div>
        <div className="BolaGradiente ba2 "></div>
        </div>
        <div className="container containerPrincipal">
          <div className="row ContenedorCentral ContenedorCentral">
            {/* Componente Menu */}
            <div className="col-12 ColumnaAlto01">
              <div className="ColumnaApariencia BackgroundMenu">
                <Menu />
              </div>
            </div>
            <div className="col-6 ColumnaAlto02">
              <div className="ColumnaApariencia BackgroundSobreMi">
                <SobreMi />
              </div>
            </div>
            <div className="col-3 ColumnaAlto02">
              <div className="ColumnaApariencia BackgroundPerfil">
                <FechaDia />
              </div>
            </div>
            <div className="col-3 ColumnaAlto02">
              <div className="ColumnaApariencia BackgroundMusica">
                <Musica />
              </div>
            </div>
            <div className="col-3 ColumnaAlto03">
              <div className="ColumnaApariencia BackgroundPrueba">
                <Hobbie />
              </div>
            </div>
            <div className="col-3 ColumnaAlto03">
              <div className="ColumnaApariencia BackgroundPrueba">
                <Objetivo />
              </div>
            </div>
            <div className="col-6 mb-4 ColumnaAlto03">
              <div className="ColumnaApariencia BackgroundPrueba">
                <Tecnologia />
              </div>
            </div>

            {/* <div className='col-6 mb-5 ColumnaAlto04'>
                <div className='ColumnaApariencia BackgroundPrueba '>
                  <MensajesConsolas/>
                </div>
            </div>
            <div className='col-3 mb-5 ColumnaAlto04'>
                <div className='ColumnaApariencia BackgroundProyecto '>
                   <CardProyecto/>
                </div>
            </div>
            <div className='col-3 mb-5 ColumnaAlto04'>
                <div className='ColumnaApariencia BackgroundProyecto '>
                <CardProyecto/>
                </div>
            </div> */}

            {/* <div className='col-7 ColumnaAlto03'>
                <div className='ColumnaApariencia Background02'>
                  
                </div>
            </div>
            <div className='col-2 ColumnaAlto03'>
                <div className='ColumnaApariencia Background01'>
                  
                </div>
            </div>
            <div className='col-2 ColumnaAlto03'>
                <div className='ColumnaApariencia Background03'>
                  
                </div>
            </div>
            <div className='col-5 ColumnaAlto03'>
                <div className='ColumnaApariencia Background02'>
                  
                </div>
            </div> */}
            {/* <div className='col-5 ColumnaAlto03'>
                <div className='ColumnaApariencia Background01'>
                  
                </div>
            </div>
            <div className='col-3 ColumnaAlto03'>
                <div className='ColumnaApariencia Background03'>
                  
                </div>
            </div>
            <div className='col-7 ColumnaAlto03'>
                <div className='ColumnaApariencia Background01'>
                  
                </div>
            </div>
            <div className='col-2 ColumnaAlto03 mb-4'>
                <div className='ColumnaApariencia Background02'>
                  
                </div>
            </div> */}
          </div>
        </div>
  
    </>
  );
}
