import React from "react";
import grosor1 from "../imagenes/grosor.png";
import grosor2 from "../imagenes/grosor2.png"
import grosor3 from "../imagenes/grosor3.png"
import grosor4 from "../imagenes/grosor4.png"
const BotonesGrosor = ({grosor}) => {

    function cambiarWidth(width){
        grosor=width;
    }
    return(
        <div className="grosor">
                    <h1>Grosor</h1>
                    <button className="boton" onClick={cambiarWidth('20')}><img src={grosor1}/></button><br/>
                   {/* <button className="boton" onClick="cambiarWidth('10')"><img src={grosor2}/></button><br/>
                    <button className="boton" onClick="cambiarWidth('8')"><img src={grosor3}/></button><br/>
    <button className="boton" onClick="cambiarWidth('3')"><img src={grosor4}/></button>*/}
        </div>
    );
}


export default BotonesGrosor;