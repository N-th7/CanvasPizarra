import Menu from "./components/menu/Menu";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Lienzos from "./components/listaLienzos/Lienzos";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase/database";
import { Pizarras } from "./components/listaLienzos/Pizarras";

function App() {
  const [width, setGrosor] = useState(12);
  const [color, setColor] = useState("#000");
  const [drawID, setDrawID] = useState("");
  const [pizarras, setPizarras] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "pizarras"));
      querySnapshot.forEach((doc) => {
        setPizarras((prev) => ({ ...prev, [doc.id]: doc.data().imagen }));
      });
      setCargando(false);
    };
    getData();
  }, []);

  let rect = false;
  let line = false;
  let circle = false;
  let ima = false;
  let txt = false;
  let borrar = false;

  let initialX;
  let initialY;
  let inix;
  let iniy;
  let finx;
  let finy;
  let figura = false;
  const [texto, setTexto] = useState("");
  let context;
  let mainCanvas;

  useEffect(() => {
    mainCanvas = document.getElementById("main-canvas");
    context = mainCanvas.getContext("2d");
    context.lineWidth = width;
    context.strokeStyle = color;

    const dibujar = (cursorX, cursorY, evt) => {
      if (!borrar) {
        console.log(borrar);
        if (figura) {
          context.strokeStyle = "#ffffff00"; // El mismo que antes, blanco con 50% de transparencia.
        }
        context.beginPath();
        context.moveTo(initialX, initialY);

        context.lineCap = "round";
        context.lineJoin = "round";
        context.lineTo(cursorX, cursorY);
        context.stroke();

        initialX = cursorX;
        initialY = cursorY;
      }
    };
    const borrarTrazo = (cursorX, cursorY, evt) => {
      context.clearRect(initialX, initialY, width, width);
      initialX = cursorX;
      initialY = cursorY;
      borrar = true;
    };

    const mouseDown = (evt) => {
      initialX = evt.offsetX;
      initialY = evt.offsetY;
      if (borrar) {
        borrarTrazo(initialX, initialY);
      } else {
        if (borrar == false) {
          dibujar(initialX, initialY);
        }
      }
      inix = initialX;
      iniy = initialY;

      mainCanvas.addEventListener("mousemove", mouseMoving);
    };

    const mouseMoving = (evt) => {
      if (borrar) {
        borrarTrazo(evt.offsetX, evt.offsetY);
      } else {
        dibujar(evt.offsetX, evt.offsetY);
      }
    };

    const mouseUp = (evt) => {
      finx = evt.offsetX;
      finy = evt.offsetY;
      if (rect) {
        context.strokeStyle = color;
        context.strokeRect(inix, iniy, finx - inix, finy - iniy);
        rect = false;
        console.log(rect);
        figura = false;
      }
      if (line) {
        context.strokeStyle = color;
        context.moveTo(inix, iniy);
        context.lineTo(finx, finy);
        context.stroke();
        line = false;
        figura = false;
      }
      if (circle) {
        context.strokeStyle = color;
        context.beginPath();
        context.arc(
          inix,
          iniy,
          Math.sqrt(
            (finx - inix) * (finx - inix) + (finy - iniy) * (finy - iniy)
          ),
          0,
          2 * Math.PI
        );
        context.stroke();
        circle = false;
        figura = false;
      }
      if (ima) {
        const archivo = document.getElementById("imagen");
        const img = URL.createObjectURL(archivo.files[0]);
        const foto = new Image();
        foto.src = img;
        foto.onload = function () {
          context.drawImage(foto, inix, iniy, finx - inix, finy - iniy);
        };
        ima = false;
        figura = false;
        context.strokeStyle = color;
      }
      if (txt) {
        context.font = "bold 22px sans-serif";
        context.fillText(texto, finx, finy);
        txt = false;
        figura = false;
        context.strokeStyle = color;
      }
      if (borrar) {
        borrar = false;
        figura = false;
      }

      mainCanvas.removeEventListener("mousemove", mouseMoving);
    };

    mainCanvas.addEventListener("mousedown", mouseDown);
    mainCanvas.addEventListener("mouseup", mouseUp);
  });

  const changeFig = (fig) => {
    figura = true;
    console.log(fig);
    if (fig == "rect") {
      rect = true;
    } else {
      if (fig == "line") {
        line = true;
        console.log(line);
      } else {
        circle = true;
      }
    }
  };

  const agregarTexto = () => {
    figura = true;
    txt = true;
  };

  const limpiar = () => {
    const mainCanvas = document.getElementById("main-canvas");
    const context = mainCanvas.getContext("2d");
    context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  };
  const onImageChange = (e) => {
    figura = true;
    ima = true;
  };
  const descargar = () => {
    let enlace = document.createElement("a");
    enlace.download = "Canvas como imagen.png";
    enlace.href = mainCanvas.toDataURL();
    enlace.click();
  };

  const guardarDibujo = () => {
    if (!drawID) {
      alert("La imagen no tiene nombre!!");
      return;
    }
    const canvas = document.querySelector("#main-canvas");
    const imagen = canvas.toDataURL();
    localStorage.setItem(drawID, imagen);
    alert("Imagen guardada");
    window.location.reload();
  };
  const guardarPizarra = async () => {
    if (!drawID) {
      alert("La imagen no tiene nombre!!");
      return;
    }
    const canvas = document.querySelector("#main-canvas");
    const imagen = canvas.toDataURL();
    const docRef = doc(db, "pizarras", drawID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, { imagen });
    } else {
      await setDoc(docRef, { imagen });
    }
    alert("Pizarra guardada");
    window.location.reload();
  };

  const enlistar = () => {
    let lista = [];
    for (let x = 0; x <= localStorage.length - 1; x++) {
      let clave = localStorage.key(x);
      lista.push(clave);
    }
    return lista;
  };

  const enlistarPizarra = () => {
    return Object.keys(pizarras);
  };

  const actualizar = (imgID) => {
    let canvas = document.getElementById("main-canvas");
    let ctx = canvas.getContext("2d");
    limpiar();
    let image = new Image();
    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };
    image.src = localStorage.getItem(imgID);
    setDrawID(imgID);
  };

  const actualizarPizarra = (imgID) => {
    let canvas = document.getElementById("main-canvas");
    let ctx = canvas.getContext("2d");
    limpiar();
    let image = new Image();
    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };
    image.src = pizarras[imgID];
    setDrawID(imgID);
  };

  const borrarDibujo = (imgID) => {
    localStorage.removeItem(imgID);
    alert("Dibujo eliminado");
    window.location.reload();
  };

  const borrarDibujoPizarra = async (imgID) => {
    await deleteDoc(doc(db, "pizarras", imgID));
    alert("Pizarra eliminada");
    window.location.reload();
  };
  const borrador = () => {
    figura = true;
    borrar = true;
  };

  return (
    <div className="App">
      <div className="w3-row">
        <div className="w3-col l2">
          <div className="opciones w3-center lienzos">
            <button id="btnDescargar" className="descargar" onClick={descargar}>
              Descargar
            </button>
            <Lienzos
              actualizar={actualizar}
              enlistar={enlistar}
              borrarDibujo={borrarDibujo}
            ></Lienzos>

            {!cargando ? (
              <Pizarras
                actualizar={actualizarPizarra}
                enlistar={enlistarPizarra}
                borrarDibujo={borrarDibujoPizarra}
              />
            ) : (
              <div>Cargando...</div>
            )}
          </div>
        </div>
        <div className="w3-col l7 w3-center board">
          <main className="main-container">
            <canvas id="main-canvas" width="850" height="650"></canvas>
          </main>
        </div>

        <div className="w3-col l3 w3-center">
          <div className="opciones w3-center">
            <Menu
              setColor={setColor}
              setGrosor={setGrosor}
              changeFig={changeFig}
              texto={texto}
              setTexto={setTexto}
              agregarTexto={agregarTexto}
            ></Menu>

            <input
              className="subirImg"
              id="imagen"
              type="file"
              accept="image/*"
              multiple
              onChange={onImageChange}
            />
            <br />
            <input
              type="text"
              placeholder="Nombre de lienzo"
              value={drawID}
              onChange={(e) => setDrawID(e.target.value)}
            />
            <br />
            <button type="button" className="limpiar" onClick={guardarDibujo}>
              Guardar lienzo
            </button>
            <br />
            <button
              type="button"
              className="limpiar"
              onClick={() => guardarPizarra()}
            >
              Guardar pizarra
            </button>
            <br />
            <button className="borrador limpiar" id="reset" onClick={borrador}>
              Borrador
            </button>
            <br />

            <button className="limpiar" id="reset" onClick={limpiar}>
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
