import React from 'react'
import '../ComponentePrincipal.css'
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function MensajesConsolas  ()  {

    const [typeEffect] = useTypewriter({
        words: [
          'console.log("¡Hola, mundo!");',
          'print("¡Hola, mundo!")',
          ' System.out.println("¡Hola, mundo!");',
          'Console.WriteLine("¡Hola, mundo!");',
          'puts "Hola mundo"',
        ],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 20,
      });

  return (
    <>
    <div className='ComponenteMensajeConsolas'>
        <h5>Mensajes por consolas</h5>
        <p className='lenguajesMensaje'>| Javascript, Java, C#, Python, Ruby</p>
        <p className='mensajeMensaje'><span style={{color:"rgba(64, 223, 149, 0.678)"}}> {typeEffect}
        </span>
        <span>
            <Cursor  cursorColor="white" />
          </span>
        </p>
        <p className='fraseMensaje'>
        "En el código me sumerjo, donde cada línea es un destello. Con ingenio y determinación, alcanzo mi objetivo sin recelo."
        </p>
    </div>
    </>
  )
}
