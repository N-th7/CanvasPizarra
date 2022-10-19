import React from "react";

const BotonesGrosor = () => {
    return(
        <div class="grosor">
                    <h1>Grosor</h1>
                    <button class="boton" onclick="cambiarWidth('20')"><img src="../imagenes/grosor.png"/></button><br/>
                    <button class="boton" onclick="cambiarWidth('10')"><img src="../imagenes/grosor2.png"/></button><br/>
                    <button class="boton" onclick="cambiarWidth('8')"><img src="../imagenes/grosor3.png"/></button><br/>
                    <button class="boton" onclick="cambiarWidth('3')"><img src="../imagenes/grosor4.png"/></button>
        </div>
    );
}


export default BotonesGrosor;