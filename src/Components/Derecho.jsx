import React from "react";
import { useState } from "react";
import "../Styles/Derecho.css";

export function Derecho(props) {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  // Función para alternar el contenido al hacer clic
  const alternarContenido = () => {
    setMostrarContenido(!mostrarContenido);
    props.fondo(props.imagen);
  };
  return (
    <>
      <div className={`consecuencia ${props.className}`}>
        <div className="divimg" onClick={alternarContenido}>
          <h3>{props.titulo}</h3>
          <img src={props.imagen} alt="" />
        </div>

        <div className="info1">
          <div
            className={`contenido1 ${
              mostrarContenido ? "mostrar1" : "ocultar"
            }`}
          >
            <p>{props.children}</p>
            <p>{props.fecha}</p>
          </div>
        </div>
      </div>
    </>
  );
}
