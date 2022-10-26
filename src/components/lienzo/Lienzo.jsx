import React, { useRef } from 'react';
import CanvasDraw from "react-canvas-draw";
import { createPortal } from 'react-dom';


const Lienzo = () => {
    const micanvas = useRef(null)

    const limpiar = () => {
        micanvas.current.eraseAll()
    }

    return(
        <div className="w3-col l8 w3-center board">
            <main className="main-container">
                {/* <canvas id="main-canvas" width="950" height="650"></canvas> */}
                <CanvasDraw ref={micanvas} hideGrid={false} canvasWidth={950} canvasHeight={650} brushColor={"#000"}/>
            </main>        
        </div>
    );

}

export default Lienzo;