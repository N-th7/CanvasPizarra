import { Basurero } from "../Basurero";
export const Pizarras = ({ actualizar, enlistar, borrarDibujo }) => {
  return (
    <div>
      <h1>Pizarras</h1>
      <ul>
        {enlistar().map((item, index) => (
          <li key={index}>
            <button
              className="lienzoX"
              type="button"
              onClick={() => actualizar(item)}
              style={{ marginRight: "10px" }}
            >
              {item}
            </button>
            <button type="button" onClick={() => borrarDibujo(item)}>
              <Basurero />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
