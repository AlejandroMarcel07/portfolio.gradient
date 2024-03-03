import React from "react";
import { CompAncor01 } from "./ComponentesBoton/CompAncor01";
import { FaGithub , FaLinkedin, FaWhatsapp   } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const IcoGithub = <FaGithub  style={{ fontSize: "20px" }} />;
const IcoGmail =  <BiLogoGmail style={{ fontSize: "20px" }} />;
const IcoLinkedin = <FaLinkedin style={{ fontSize: "20px" }} />;
const IcoWhatsapp = <FaWhatsapp style={{ fontSize: "20px" }} />;

import { useTypewriter, Cursor } from "react-simple-typewriter";

export function SobreMi() {

  const [typeEffect] = useTypewriter({
    words: ["Freelancer Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  });

  return (
    <>
      <div className="ComponenteSobreMi">
        <h1>Marcel Zúniga</h1>
        <h2>
        {" "}
          <span>{typeEffect}</span>
          <span>
            <Cursor  cursorColor="white" />
          </span></h2>
        <CompAncor01
          ulrlink={
            "https://chat.openai.com/c/6046321d-0440-4f27-944b-c4145825c82a"
          }
          icoAncor={IcoGithub}
          fondo={"rgba(147, 105, 219, 0.062)"}
        />

        <CompAncor01
          ulrlink={
            "https://chat.openai.com/c/6046321d-0440-4f27-944b-c4145825c82a"
          }
          icoAncor={IcoGmail}
          fondo={"rgba(147, 105, 219, 0.062)"}
        />

        <CompAncor01
          ulrlink={
            "https://chat.openai.com/c/6046321d-0440-4f27-944b-c4145825c82a"
          }
          icoAncor={IcoLinkedin}
          fondo={"rgba(147, 105, 219, 0.062)"}
        />
        <CompAncor01
          ulrlink={
            "https://chat.openai.com/c/6046321d-0440-4f27-944b-c4145825c82a"
          }
          icoAncor={IcoWhatsapp}
          fondo={"rgba(147, 105, 219, 0.062)"}
        />
        <p><span style={{color: "white"}}> En búsqueda de oportunidades </span>para mejorar y crecer profesionalmente. Siempre estoy dispuesto a enfrentar nuevos desafíos.</p>
      </div>
    </>
  );
}
