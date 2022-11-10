import Lienzo from './components/lienzo/Lienzo';
import Menu from './components/menu/Menu';
import './App.css';
import React, { useRef, useState } from 'react';
import CanvasDraw from "react-canvas-draw";
import { db } from './firebase/database';
import { addDoc, collection } from 'firebase/firestore';

function App() {
  const [grosor, setGrosor] = useState(12)
  const [color, setColor] = useState("#000")
  const [img, setImg] = useState("")
  const [text, setText] = useState("")

  const micanvas = useRef(null)

    const agregarTexto = () => {
        let ctx = document.querySelector("#root > div > div > div.w3-col.l8.w3-center.board > main > div > canvas:nth-child(1)").getContext("2d");
        ctx.font = "bold 22px sans-serif";
        ctx.fillText(text,90,90);
    }

    const guardaDatos = () => {
        let datos = micanvas.current.getSaveData();
        // addDoc(collection(db, "dibujos"), {datos} );
        localStorage.setItem("dibujo", datos)
  }
    const recuperarDatos = () => {
        micanvas.current.loadSaveData(localStorage.getItem("dibujo"));
  }
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
                <CanvasDraw id="main-canvas" ref={micanvas} hideGrid={true} canvasWidth={950} canvasHeight={650} brushColor={color} brushRadius={grosor} imgSrc={img} />
            </main>        
        </div>
          <div className="w3-col l4 w3-center">
                <div className="opciones w3-center">
                <Menu setColor={setColor} setGrosor={setGrosor} ></Menu>
                            <button className="limpiar" id="reset" onClick={limpiar}>Limpiar</button><br/>
                            <input className="subir" type="file" multiple accept="image/*" onChange={onImageChange} /><br/>
                            <input type={"text"} value={text} onChange={(e) => setText(e.target.value)} placeholder="Insete Texto"/>
                    <button type='button' onClick={agregarTexto}>
                      Mostrar Texto
                    </button><br/>
                    <button type='button' onClick={guardaDatos}>
                      Guardar Dibujo
                    </button>
                    <button type='button' onClick={recuperarDatos}>
                      Recuperar Dibujo
                    </button>
                </div>
          </div>
        </div>
    </div>
  );
}



export default App;
