import React from "react";


const BotonesColor = ({setColor}) => {
    function cambiarColor(col){
        setColor(col)

    }
    return(
        <div>   
                    <h1>Colores</h1>
                    <button className="botonColor color" onClick={ () => cambiarColor('#000000')}></button>
                    <button className="botonColor1 color" onClick={ () => cambiarColor('#611111')}></button>
                    <button className="botonColor2 color" onClick={ () => cambiarColor('#FE2712')}></button>
                    <button className="botonColor3 color" onClick={ () => cambiarColor('#FB9902')}></button><br/>
                    <button className="botonColor4 color" onClick={ () => cambiarColor('#FABC02')}></button>
                    <button className="botonColor5 color" onClick={ () => cambiarColor('#FEFE33')}></button>
                    <button className="botonColor6 color" onClick={ () => cambiarColor('#D0EA2B')}></button>
                    <button className="botonColor7 color" onClick={ () => cambiarColor('#66B032')}></button><br/>
                    <button className="botonColor8 color" onClick={ () => cambiarColor('#0391CE')}></button>
                    <button className="botonColor9 color" onClick={ () => cambiarColor('#0247FE')}></button>
                    <button className="botonColor10 color" onClick={ () => cambiarColor('#3D01A4')}></button>
                    <button className="botonColor11 color" onClick={ () => cambiarColor('#8601AF')}></button><br/>
                    <h1>Borrador</h1>
                    <button className="botonColor12 color" onClick={ () => cambiarColor('#FFF')}></button>
        </div>
    )
}
export default BotonesColor;