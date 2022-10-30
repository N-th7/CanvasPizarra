import React from "react";
import grosor1 from "../imagenes/grosor.png";
import grosor2 from "../imagenes/grosor2.png"
import grosor3 from "../imagenes/grosor3.png"
import grosor4 from "../imagenes/grosor4.png"
const BotonesGrosor = ({grosor, setGrosor}) => {

    function cambiarWidth(width){
        setGrosor(width);

        
    }
    return(
        <div className="grosor">
                    <button className="boton" onClick={() => cambiarWidth(30)}><img src={grosor1}/></button>
                    <button className="boton" onClick={() => cambiarWidth(20)}><img src={grosor2}/></button>
                    <button className="boton" onClick={() => cambiarWidth(6)}><img src={grosor3}/></button>
                    <button className="boton" onClick={() => cambiarWidth(5)}><img src={grosor4}/></button>
        </div>
    );
}


export default BotonesGrosor;