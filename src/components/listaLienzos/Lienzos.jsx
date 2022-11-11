import React from "react";
import { Basurero } from "../Basurero";
const Lienzos= ({actualizar, enlistar,borrarDibujo}) =>{
    return(
        <div>
            
        <h1>Lienzos</h1>
            <ul>
            {enlistar().map((item, index) => (

            <li key={index}>
              <button className="lienzoX" type="button" onClick={() => actualizar(item)} style={{marginRight:"10px"}}>{item}</button>
              <button type="button" onClick={() => borrarDibujo(item)}>
                <Basurero />
              </button>
            </li>
            ))}
            </ul>
          
        </div>
    );
};
export default Lienzos