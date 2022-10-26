import React from "react";
import BotonesColor from "../botonColor/BotonesColor";
import BotonesGrosor from "../botonesGrosor/BotonesGrosor";

const Menu = ({color}) =>{
    return(
        <div>
            <BotonesGrosor></BotonesGrosor>
            <BotonesColor color={color}></BotonesColor>
            
        </div>
    );
}
export default Menu;