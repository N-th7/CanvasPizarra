import React from "react";
import BotonesColor from "../botonColor/BotonesColor";
import BotonesGrosor from "../botonesGrosor/BotonesGrosor";

const Menu = () =>{
    return(
        <div class="opciones w3-center">
            <BotonesGrosor></BotonesGrosor>
            <BotonesColor></BotonesColor>
        </div>
    );
}
export default Menu;