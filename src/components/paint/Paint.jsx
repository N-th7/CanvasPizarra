import React, {useState, useRef, useContext } from 'react';
import Menu from "../menu/Menu"
import {ExampleContext} from '../../context/ExampleContext.jsx';
import CanvasDraw from "react-canvas-draw";


const Paint = ()=>{
    const micanvas = useRef(null)

    const limpiar = () => {
        micanvas.current.eraseAll()
    }

    const example= useContext(ExampleContext);

    return(
        <div className="App">
        <div className="w3-row">
        <div className="w3-col l8 w3-center board">
            <main className="main-container">
                <h1>{example.color}</h1>
                <CanvasDraw ref={micanvas} hideGrid={true} canvasWidth={950} canvasHeight={650} brushColor={example.color}/>


            </main>        
        </div>
          <div className="w3-col l4 w3-center">
                <div className="opciones w3-center">
                <Menu></Menu>
                            <button className="limpiar" id="reset" onClick={limpiar}>Limpiar</button>
                </div>

          </div>
        </div>
    </div>
    );
}

export default Paint;