import React from "react";
import { useState } from "react";
import "../Styles/Galeria1.css";
function Galeria(props) {
  return (
    <>
      <div className="contenedor-galeria">
        <img className="imgen-galeria" src={props.imagen} alt="foto rony"></img>
        <div className="contenedot-texto-galeria ">
          <p className="nombre-galeria ">
            <strong>{props.nombre}</strong>
          </p>
          <p>{props.pais}</p>
          <p className="cargo-galeria ">
            <strong>{props.fecha}</strong>
          </p>
          <p className="texto-galeria ">{props.descripcion}</p>
        </div>
      </div>
    </>
  );
}

export default Galeria;
