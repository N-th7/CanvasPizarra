import Lienzo from './components/lienzo/Lienzo';
import Menu from './components/menu/Menu';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import CanvasDraw from "react-canvas-draw";
import Figuras from './components/figuras/Figuras.jsx';

function App() {
  const [width, setGrosor] = useState(12)
  const [color, setColor] = useState("#000")
  const [img, setImg] = useState("")
  let rect =false;
  let line= false;
  let circle= false;
  let triangle=false;
  let initialX;
    let initialY;
   console.log(width);
   let inix;
   let iniy;
   let finx;
   let finy;
   let figura=false;
   
  useEffect(()=>{
    const mainCanvas = document.getElementById("main-canvas");
    const context = mainCanvas.getContext("2d");
    context.lineWidth = width;
    context.strokeStyle = color;
      
      
      const dibujar = (cursorX, cursorY, evt) => {
      context.beginPath();
      context.moveTo(initialX, initialY);
      if(figura){
        context.strokeStyle= '#ffffff00'; // El mismo que antes, blanco con 50% de transparencia.
        console.log("hollllllllaa")
      }
      context.lineCap = "round";
      context.lineJoin = "round";
      context.lineTo(cursorX, cursorY);
      context.stroke();
    
      initialX = cursorX;
      initialY = cursorY;
    };
    
    const mouseDown = (evt) => { 
      initialX = evt.offsetX;
      initialY = evt.offsetY;
      dibujar(initialX, initialY);
        console.log(initialX+ " primero " + initialY);
        inix=initialX;
        iniy=initialY;
    
      mainCanvas.addEventListener("mousemove", mouseMoving);
    };
    
    const mouseMoving = (evt) => {
      dibujar(evt.offsetX, evt.offsetY);
    };
    
    const mouseUp = (evt) => {
      finx=evt.offsetX;
      finy= evt.offsetY;
      console.log(finx +"     " + finy);
      if(rect){
        context.strokeStyle=color
        context.strokeRect(inix, iniy, finx-inix,finy-iniy);
        rect=false
          console.log(rect);
          figura=false
      }
      if(line){
        context.strokeStyle=color
        context.moveTo(inix,iniy)
        context.lineTo(finx,finy)
        context.stroke()
        line=false
        figura=false
      }
      if(circle){
        context.strokeStyle=color
        context.beginPath()
        context.arc(inix,iniy,Math.sqrt((finx-inix)*(finx-inix)+(finy-iniy)*(finy-iniy)), 0, 2*Math.PI)
        context.stroke();
        circle=false
        figura=false

      }

      mainCanvas.removeEventListener("mousemove", mouseMoving);
    };


    
    mainCanvas.addEventListener("mousedown", mouseDown);
    mainCanvas.addEventListener("mouseup", mouseUp);
    
  });
  const changeFig = (fig) => {
    figura=true
    console.log(fig)
    if(fig=='rect'){
      rect=true;
    }else{
      if(fig=='line'){
        line=true;
        console.log(line)
      }else{
        if(fig == 'circle'){
          circle=true;
        }else{
          triangle=true;
        }
      }
    }

  }

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
                <canvas id="main-canvas" width="950" height="650"></canvas>
{/*                <CanvasDraw ref={micanvas} hideGrid={true} canvasWidth={950} canvasHeight={650} brushColor={color} brushRadius={grosor} imgSrc={img} />
*/}            </main>        
        </div>
          <div className="w3-col l4 w3-center">
                <div className="opciones w3-center">
                <Menu setColor={setColor} setGrosor={setGrosor} ></Menu>
                <Figuras changeFig={changeFig}></Figuras>
                            <button className="limpiar" id="reset" onClick={limpiar}>Limpiar</button><br/>
                            <input className="subir" type="file" multiple accept="image/*"  onChange={onImageChange} />
                </div>

          </div>
        </div>
    </div>
  );<div>
  <canvas></canvas>
  </div>
}

export default App;
