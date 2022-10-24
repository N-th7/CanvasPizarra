import React, { useRef } from 'react';
import CanvasDraw from "react-canvas-draw";


const Lienzo = () => {
    const micanvas = useRef(null)

    const limpiar = () => {
        micanvas.current.eraseAll()
    }

    return(
        <div className="w3-col l8 w3-center board">
            <main className="main-container">
                <button onClick={limpiar}>Limpiar2</button>
                {/* <canvas id="main-canvas" width="950" height="650"></canvas> */}
                <CanvasDraw ref={micanvas} hideGrid={true} canvasWidth={1200} canvasHeight={850} />
            </main>        
        </div>
    );

}

export default Lienzo;