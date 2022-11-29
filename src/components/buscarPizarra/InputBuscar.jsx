import React from "react";

const InputBuscar =() =>{
    return(
        <div>
                <div class="w3-card-4">

                    <div class="w3-container">
                        <h2>Pizarra grupal</h2>
                    <h3>Crear pizarra</h3>
                    </div>

                    <form class="w3-container">

                    <label>Nombre de pizarra</label>
                    <input class="w3-input w3-border w3-round-large" type="text" />
                    <button className="subir" >Crear</button>

                    </form>


                    <div class="w3-container">
                    <h3>Abrir pizarra</h3>
                    </div>

                    <form class="w3-container">

                    <label>Nombre de pizarra</label>
                    <input class="w3-input w3-border w3-round-large" type="text" />
                    <button className="subir" >Abrir</button>

                    </form>

                </div>
        </div>
    );
};

export default InputBuscar;