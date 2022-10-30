import React from "react";
import rec from "../imagenes/rec.png"
import lin from "../imagenes/lin.png"
import cir from "../imagenes/cir.png"
import tri from "../imagenes/tri.png"

const Figuras = () => {

    return(
        <div>
            <h2>Figuras</h2>
            <button className="figura" ><img src={rec}/></button>
            <button className="figura" ><img src={lin}/></button>
            <button className="figura" ><img src={cir}/></button>
            <button className="figura" ><img src={tri}/></button>
        </div>
    )

}

export default Figuras;