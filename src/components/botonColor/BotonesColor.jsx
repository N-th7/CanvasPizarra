import React from "react";

const BotonesColor = () => {
    return(
        <div>   
                    <h1>Colores</h1>
                    <button class="botonColor color" onclick="cambiarColor('#000000')"></button>
                    <button class="botonColor1 color" onclick="cambiarColor('#611111')"></button>
                    <button class="botonColor2 color" onclick="cambiarColor('#FE2712')"></button>
                    <button class="botonColor3 color" onclick="cambiarColor('#FB9902')"></button><br/>
                    <button class="botonColor4 color" onclick="cambiarColor('#FABC02')"></button>
                    <button class="botonColor5 color" onclick="cambiarColor('#FEFE33')"></button>
                    <button class="botonColor6 color" onclick="cambiarColor('#D0EA2B')"></button>
                    <button class="botonColor7 color" onclick="cambiarColor('#66B032')"></button><br/>
                    <button class="botonColor8 color" onclick="cambiarColor('#0391CE')"></button>
                    <button class="botonColor9 color" onclick="cambiarColor('#0247FE')"></button>
                    <button class="botonColor10 color" onclick="cambiarColor('#3D01A4')"></button>
                    <button class="botonColor11 color" onclick="cambiarColor('#8601AF')"></button>
        </div>
    );
}
export default BotonesColor;