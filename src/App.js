import Lienzo from './components/lienzo/Lienzo';
import Menu from './components/menu/Menu';
import './App.css';
import React, { useRef, useState } from 'react';
import CanvasDraw from "react-canvas-draw";

function App() {
  const [grosor, setGrosor] = useState(12)
  const [color, setColor] = useState("#000")
  const [img, setImg] = useState("")

  const micanvas = useRef(null)

    const limpiar = () => {
        micanvas.current.eraseAll()
        console.log(color);
    }
    const onImageChange = (e) => {
      const urlImg = URL.createObjectURL(e.target.files[0]);
      setImg(urlImg);
      console.log(urlImg);
  }
  return (
    <div className="App">
        <div className="w3-row">
        <div className="w3-col l8 w3-center board">
            <main className="main-container">
                {/* <canvas id="main-canvas" width="950" height="650"></canvas> */}
                <CanvasDraw ref={micanvas} hideGrid={true} canvasWidth={950} canvasHeight={650} brushColor={color} brushRadius={grosor} imgSrc={img} />
            </main>        
        </div>
          <div className="w3-col l4 w3-center">
                <div className="opciones w3-center">
                <Menu setColor={setColor} setGrosor={setGrosor} ></Menu>
                            <button className="limpiar" id="reset" onClick={limpiar}>Limpiar</button><br/>
                            <input className="subir" type="file" multiple accept="image/*" onChange={onImageChange} />
                </div>

          </div>
        </div>
    </div>
  );
}



export default App;
