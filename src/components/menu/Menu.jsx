import React from "react";
import BotonesColor from "../botonColor/BotonesColor";
import BotonesGrosor from "../botonesGrosor/BotonesGrosor";
import Figuras from "../figuras/Figuras";
import Texto from "../insertarTexto/Texto";

const Menu = ({
  setColor,
  setGrosor,
  changeFig,
  texto,
  setTexto,
  agregarTexto,
}) => {
  return (
    <div>
      <div className="w3-row w3-center">
        <h1>Herramientas</h1>
        <div className="w3-col l6">
          <BotonesColor setColor={setColor}></BotonesColor>
        </div>
        <div className="w3-col l6">
          <BotonesGrosor setGrosor={setGrosor}></BotonesGrosor>
        </div>
      </div>
      <div className="w3-row w3-center">
        <div className="w3-col l6">
          <Figuras changeFig={changeFig}></Figuras>
        </div>
        <div className="w3-col l6">
          <Texto
            texto={texto}
            setTexto={setTexto}
            agregarTexto={agregarTexto}
          ></Texto>
        </div>
      </div>
    </div>
  );
};
export default Menu;
