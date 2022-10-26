import React from "react";
import BotonesColor from "../botonColor/BotonesColor";
import BotonesGrosor from "../botonesGrosor/BotonesGrosor";

const Menu = ({setColor, setGrosor}) =>{
    return(
        <div>
            <BotonesGrosor setGrosor={setGrosor}></BotonesGrosor>
            <BotonesColor setColor={setColor}></BotonesColor>
            
        </div>
    );
}
export default Menu;