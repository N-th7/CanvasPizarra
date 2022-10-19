import React from 'react';


const Lienzo = () => {
    return(
        <div class="w3-col l8 w3-center board">
            <main class="main-container">
                <canvas id="main-canvas" width="950" height="650"></canvas>
            </main>        
        </div>
    );

}

export default Lienzo;