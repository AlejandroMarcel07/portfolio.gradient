import React, { lazy, useEffect, useRef, useState } from "react";
import musica from "../assets/MS01.mp3";
import "../ComponentePrincipal.css";
import IMG01 from "../assets/IMG01.jpg";
import { BsSkipForwardBtnFill ,BsSkipBackwardBtnFill } from "react-icons/bs";

import { CgPlayPauseR } from "react-icons/cg";
import { HiPlay } from "react-icons/hi2";
import { CardProyecto } from "./CardProyecto";


export function Musica() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playPromise = isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {})
        .catch((error) => {
          console.error("La reproducción automática falló:", error);
        });
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 2;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 2;
  };

  const handleEnd = () => {
    // Pausar la reproducción y establecer el tiempo actual en cero
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    // Cambiar el estado a "no está reproduciendo"
    setIsPlaying(false);
  };

  return (
    <>

      <div className={`ComponenteMusica ${isPlaying ? "play" : ""}`}>
        
        <div className="ContenedorImagen BordeAnimadoBodyHijo ">
          <img src={IMG01} />
        </div>
        <div className="ContenedorTItuloSong">
        <h5><span style={{color:"rgb(255, 115, 0)", fontFamily:"Nunito", fontWeight:"bold"}}> Subwoofer</span> Luballaby</h5>
        </div>
        <p>| C418</p>
        <div className="ContendorBotonesMusica">
          <div className="custom-button" onClick={skipBackward}>
            <BsSkipBackwardBtnFill style={{fontSize:"30px", color:"white", cursor:"pointer"}} />
          </div>
          <div className="custom-button" onClick={togglePlay}>
            {isPlaying ? (
              <CgPlayPauseR style={{fontSize:"30px", color:"rgb(255, 115, 0)", cursor:"pointer"}} />
            ) : (
                <HiPlay style={{fontSize:"30px", color:"white", cursor:"pointer"}} />
            )}
          </div>
          <div className="custom-button" onClick={skipForward}>
          <BsSkipForwardBtnFill style={{fontSize:"30px", color:"white", cursor:"pointer"}} />
          </div>
        </div>
        <audio
          ref={audioRef}
          src={musica}
          type="audio/mp3"
          onEnded={handleEnd}
        />
      </div>
      
    </>
  );
}
