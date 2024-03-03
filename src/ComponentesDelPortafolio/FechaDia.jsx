import React from 'react'
import '../ComponentePrincipal.css'

function ObtenerFechaActual() {
    const fechaActual = new Date();
    const opcionesFormatoFecha = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    const formatoFecha = fechaActual.toLocaleDateString(
      "es-ES",
      opcionesFormatoFecha
    );
    const nombreDia = new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
    }).format(fechaActual);
  
    // Capitalizar la primera letra del nombre del día
    const nombreDiaCapitalizado =
      nombreDia.charAt(0) + nombreDia.slice(1);
  
    return { nombreDia: nombreDiaCapitalizado, formatoFecha };
  }

  function ObtenerHoraActual() {
    const fechaActual = new Date();
    const opcionesFormatoHora = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
  
    const horaActual = fechaActual.toLocaleTimeString(
      "en-US",
      opcionesFormatoHora
    );
  
    // Dividir la cadena de la hora en partes
    const [hora, ampm] = horaActual.split(" ");
  
    return { hora, ampm };
  }

  const intervaloActualizacion = setInterval(() => {
    const { hora, ampm } = ObtenerHoraActual();
    // Actualiza el elemento del DOM con la hora y el AM/PM
    document.getElementById("PHora").innerHTML = hora;
    document.getElementById("PAMPM").innerHTML = ampm;
  }, 1000); // Actualizar cada segundo

  


export function FechaDia  () {

    const { nombreDia, formatoFecha } = ObtenerFechaActual();
    

  return (
    <>
    <div className='ComponenteFechaDia'>
        <h5> Universidad Unan Managua </h5>
        <span style={{color:"rgb(0, 255, 115)"}}> Ing Sistemas 2do año</span>
        <p>Hoy es {nombreDia} {formatoFecha}</p>
        <p>| Masaya Nicaragua</p>
        <div className='ComponenteTiempo'>
        <p id="PHora"></p>
        <p id="PAMPM"></p>
        </div>
    </div>
    </>
  )
}
