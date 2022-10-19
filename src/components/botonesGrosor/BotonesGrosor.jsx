import React from "react";
import grosor from "../imagenes/grosor.png";
import grosor2 from "../imagenes/grosor2.png"
import grosor3 from "../imagenes/grosor3.png"
import grosor4 from "../imagenes/grosor4.png"
const BotonesGrosor = () => {
    return(
        <div class="grosor">
                    <h1>Grosor</h1>
                    <button class="boton" onclick="cambiarWidth('20')"><img src={grosor}/></button><br/>
                    <button class="boton" onclick="cambiarWidth('10')"><img src={grosor2}/></button><br/>
                    <button class="boton" onclick="cambiarWidth('8')"><img src={grosor3}/></button><br/>
                    <button class="boton" onclick="cambiarWidth('3')"><img src={grosor4}/></button>
        </div>
    );
}


export default BotonesGrosor;