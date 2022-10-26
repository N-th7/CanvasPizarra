import Lienzo from './components/lienzo/Lienzo';
import Menu from './components/menu/Menu';
import './App.css';
import React, { useRef } from 'react';
import CanvasDraw from "react-canvas-draw";

function App() {
  const color="#000";
  const micanvas = useRef(null)

    const limpiar = () => {
        micanvas.current.eraseAll()
        console.log(color);
    }
  return (
    <div className="App">
        <div className="w3-row">
        <div className="w3-col l8 w3-center board">
            <main className="main-container">
                {/* <canvas id="main-canvas" width="950" height="650"></canvas> */}
                <CanvasDraw ref={micanvas} hideGrid={true} canvasWidth={950} canvasHeight={650} brushColor={color} />
            </main>        
        </div>
          <div className="w3-col l4 w3-center">
                <div className="opciones w3-center">
                <Menu color={color}></Menu>
                            <button className="limpiar" id="reset" onClick={limpiar}>Limpiar</button>
                </div>

          </div>
        </div>
    </div>
  );
}



export default App;
