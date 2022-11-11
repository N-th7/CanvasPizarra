import React from "react";
import grosor1 from "../imagenes/grosor.png";
import grosor2 from "../imagenes/grosor2.png"
import grosor3 from "../imagenes/grosor3.png"
import grosor4 from "../imagenes/grosor4.png"
const BotonesGrosor = ({grosor, setGrosor}) => {

    function cambiarWidth(width){
        setGrosor(width);
        console.log(width);
    }
    return(
        <div className="grosor">
            <h2>Grosor</h2>
                    <button className="boton" onClick={() => cambiarWidth(20)}><img src={grosor1} heigh={"5"} /></button><br/>
                    <button className="boton" onClick={() => cambiarWidth(10)}><img src={grosor2}/></button><br/>
                    <button className="boton" onClick={() => cambiarWidth(6)}><img src={grosor3}/></button><br/>
                    <button className="boton" onClick={() => cambiarWidth(3)}><img src={grosor4}/></button><br/>
        </div>
    );
}


export default BotonesGrosor;