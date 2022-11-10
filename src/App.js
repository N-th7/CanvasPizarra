import Lienzo from './components/lienzo/Lienzo';
import Menu from './components/menu/Menu';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [width, setGrosor] = useState(12)
  const [color, setColor] = useState("#000")
  const [drawID, setDrawID] = useState("")

  let rect =false;
  let line= false;
  let circle= false;
  let initialX;
    let initialY;
   console.log(width);
   let inix;
   let iniy;
   let finx;
   let finy;
   let figura=false;
   const [texto, setTexto] = useState("")
   
  useEffect(()=>{
    const mainCanvas = document.getElementById("main-canvas");
    const context = mainCanvas.getContext("2d");
    context.lineWidth = width;
    context.strokeStyle = color;

    const $canvas = document.querySelector("#main-canvas"),
$btnDescargar = document.querySelector("#btnDescargar");

$btnDescargar.addEventListener("click", () => {
  // Crear un elemento <a>
  let enlace = document.createElement('a');
  // El título
  enlace.download = "Canvas como imagen.png";
  // Convertir la imagen a Base64 y ponerlo en el enlace
  enlace.href = $canvas.toDataURL();
  // Hacer click en él
  enlace.click();
});     
      const dibujar = (cursorX, cursorY, evt) => {
        if(figura){
          context.strokeStyle= '#ffffff00'; // El mismo que antes, blanco con 50% de transparencia.
          console.log("hollllllllaa")
        }
      context.beginPath();
      context.moveTo(initialX, initialY);
      
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
          circle=true;
        }
      }
    }

  

  const agregarTexto = () => {
    var canvas = document.getElementById("main-canvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "bold 22px sans-serif";
    ctx.fillText(texto,90,90);
  }

  const limpiar = () => {
    const mainCanvas = document.getElementById("main-canvas");
    const context = mainCanvas.getContext("2d");
    context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
}
const onImageChange = (e) => {
  var canvas = document.getElementById("main-canvas");
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src="https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0034_chihuahua_smooth.jpg";

  ctx.drawImage(img, finx, finy);
  console.log(img)



}



  const micanvas = useRef(null)


  const guardarDibujo = () => {
    const canvas = document.querySelector("#main-canvas")
    const imagen = canvas.toDataURL()
    localStorage.setItem(drawID, imagen)
    alert("Imagen guardada")
  } 
  const enlistar = () => {
    let lista = []
    for (let x = 0; x <= localStorage.length-1; x++)  {  
      let clave = localStorage.key(x);  
      lista.push(clave)
    }
    return lista;
  }

  const actualizar = (imgID) => {
    let canvas = document.getElementById("main-canvas");
    let ctx = canvas.getContext("2d");
    let image = new Image();
    image.onload = function() {
    ctx.drawImage(image, 0, 0);
    };
    image.src = imgID
  }

  return (
    <div className="App">
        <div className="w3-row">
          <ul>
          {enlistar().map( (item, index) => <li key={index}><button onClick={() => actualizar(item)}>{item}</button></li>)}
          </ul>
        <div className="w3-col l8 w3-center board">
            <main className="main-container">
                <canvas id="main-canvas" width="950" height="650"></canvas>
            </main>        
        </div>
          <div className="w3-col l4 w3-center">
                <div className="opciones w3-center">
                <Menu setColor={setColor} setGrosor={setGrosor} changeFig={changeFig} texto={texto} setTexto={setTexto} agregarTexto={agregarTexto}></Menu>
                            <button className="limpiar" id="reset" onClick={limpiar}>Limpiar</button><br/>
                            <input className="subir" id="imagen" type="file" accept="image/*" multiple  onChange={onImageChange} /><br/>
                            <input type="text" value={drawID} onChange={(e) => setDrawID(e.target.value)}/>
                            <button type='button' onClick={guardarDibujo}>Guardar Dibujo</button><br/>
                            <button id="btnDescargar">Descargar</button>
                </div>

          </div>
        </div>
    </div>
  );
}



export default App;