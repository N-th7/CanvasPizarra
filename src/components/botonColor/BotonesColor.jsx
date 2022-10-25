import React from "react";

const BotonesColor = () => {
    return(
        <div>   
                    <h1>Colores</h1>
                    <button className="botonColor color" onclick="cambiarColor('#000000')"></button>
                    <button className="botonColor1 color" onclick="cambiarColor('#611111')"></button>
                    <button className="botonColor2 color" onclick="cambiarColor('#FE2712')"></button>
                    <button className="botonColor3 color" onclick="cambiarColor('#FB9902')"></button><br/>
                    <button className="botonColor4 color" onclick="cambiarColor('#FABC02')"></button>
                    <button className="botonColor5 color" onclick="cambiarColor('#FEFE33')"></button>
                    <button className="botonColor6 color" onclick="cambiarColor('#D0EA2B')"></button>
                    <button className="botonColor7 color" onclick="cambiarColor('#66B032')"></button><br/>
                    <button className="botonColor8 color" onclick="cambiarColor('#0391CE')"></button>
                    <button className="botonColor9 color" onclick="cambiarColor('#0247FE')"></button>
                    <button className="botonColor10 color" onclick="cambiarColor('#3D01A4')"></button>
                    <button className="botonColor11 color" onclick="cambiarColor('#8601AF')"></button>
        </div>
    );
}
export default BotonesColor;