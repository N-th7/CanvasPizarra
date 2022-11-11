const Texto =({texto,setTexto, agregarTexto}) => {
    return(
        <div>
            <h2>Texto</h2>
            <input className="inputTexto" type="text" value={texto} onChange={(e) => setTexto (e.target.value)}/>
            <button className="subir" onClick={agregarTexto}>Agregar</button>
        </div>
    ); 
}
export default Texto;