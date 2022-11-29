import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import Main from "./pages/Main";
import UsuarioPropietario from "./pages/UsuarioPropetario";
import UsuarioInvitado from "./pages/UsuarioInvitado";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/propietario" element={<UsuarioPropietario />}> </Route>
      <Route exact path="/invitado" element={<UsuarioInvitado />}> </Route>
      <Route exact path="/main" element={<Main />}> </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
