import React from "react";
import rec from "../imagenes/rec.png"
import lin from "../imagenes/lin.png"
import cir from "../imagenes/cir.png"
import tri from "../imagenes/tri.png"

const Figuras = ({changeFig}) => {
    function crearFig(fig){
        changeFig(fig)
        console.log(fig)
    }

    return(
        <div>
            <h2>Figuras</h2>
            <button className="figura" onClick={()=>crearFig('rect')}><img src={rec}/></button>
            <button className="figura" onClick={()=>crearFig('line')}><img src={lin}/></button>
            <button className="figura" onClick={()=>crearFig('circle')}><img src={cir}/></button>
        </div>
    )

}

export default Figuras;