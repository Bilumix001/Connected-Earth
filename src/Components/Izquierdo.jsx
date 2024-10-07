import React from "react";
import { useState } from "react";
import "../Styles/Izquierdo.css";

export function Izquierdo(props) {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  // Función para alternar el contenido al hacer clic
  function alternarContenido() {
    setMostrarContenido(!mostrarContenido);
    props.fondo(props.imagen);
  }

  return (
    <>
      <div className={`causa ${props.className}`}>
        <div className="info">
          <div
            className={`contenido2 ${
              mostrarContenido ? "mostrar2" : "ocultar"
            }`}
          >
            <p>{props.children}</p>
            <p>{props.fecha}</p>
          </div>
        </div>

        <div className="divimg" onClick={alternarContenido}>
          <h3>{props.titulo}</h3>
          <img src={props.imagen} alt="" />
        </div>
      </div>
    </>
  );
}
