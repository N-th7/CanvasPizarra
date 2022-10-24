import React from "react";
import BotonesColor from "../botonColor/BotonesColor";
import BotonesGrosor from "../botonesGrosor/BotonesGrosor";

const Menu = () =>{
    return(
        <div className="opciones w3-center">
            <BotonesGrosor></BotonesGrosor>
            <BotonesColor></BotonesColor>
            <button className="limpiar" id="reset" onclick="limpiarCanvas()">Limpiar</button>
        </div>
    );
}
export default Menu;