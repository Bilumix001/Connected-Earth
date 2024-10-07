import React from "react";
import { useState } from "react";
import "../Styles/Galeria2.css";
function Galeria2(props) {
  return (
    <>
      <div className="contenedor-galeria2">
        <img
          className="imgen-galeria2"
          src={props.imagen}
          alt="foto rony"
        ></img>
        <div className="contenedot-texto-galeria2 ">
          <p className="nombre-galeria2 ">
            <strong>{props.nombre}</strong> {props.pais}
          </p>
          <p className="cargo-galeria2 ">
            <strong>{props.fecha}</strong>
          </p>
          <p className="texto-galeria2 ">{props.descripcion}</p>
        </div>
      </div>
    </>
  );
}

export default Galeria2;
