import "../Styles/Gallery.css";
import Galeria from "../Components/Galeria1.jsx";
import Galeria2 from "../Components/Galeria2.jsx";

const datos = [
  {
    nombre: " Minas ilegales",
    pais: "EEstado de Pará, Brasil	",
    imagen: "cau5.jpg",
    fecha: "200 - 2019",
    descripcion:
      "LLa minería ilegal ha incrementado la deforestación, provocando la degradación de áreas forestales y aumentando el riesgo de incendios.",
  },
  {
    nombre: "Uso de fuego en la agricultura	",
    pais: "Estado de Pará, Brasil",
    imagen: "cau6.jpg",
    fecha: "Agosto - Septiembre 2019",
    descripcion:
      "Agricultores en Pará utilizan el fuego como método para limpiar las tierras después de la tala, lo que contribuyó a incendios descontrolados ",
  },
  {
    nombre: "Cambios en las políticas ambientales	",
    pais: "Estado de Pará, Brasil",
    imagen: "cau7.jpg",
    fecha: "Desde Enero 2019",
    descripcion:
      " Bajo el gobierno de Bolsonaro, las políticas de protección ambiental se debilitaron, lo que incentivó la deforestación y el uso no regulado de tierras.",
  },
  {
    nombre: "Cambio climático",
    pais: "Cuenca del Amazonas, Brasil",
    imagen: "causa 10.jpg",
    fecha: "2000-2019",
    descripcion:
      "El aumento de temperaturas y la alteración de los patrones de lluvia han hecho a la Amazonía más propensa a incendios, exacerbando los efectos de los mismos",
  },
  {
    nombre: "Retórica política antiambiental",
    pais: "Brasil",
    imagen: "causa 9.jpg",
    fecha: "Gobierno 2019",
    descripcion:
      "La retórica del gobierno de Bolsonaro en contra de las ONGs y la defensa de prácticas de deforestación creó un ambiente de permisividad para quienes queman el bosque.",
  },
  {
    nombre: "Escaso monitoreo de incendios",
    pais: "Amazonía brasileña",
    imagen: "causa 8.jpg",
    fecha: "2010-2019",
    descripcion:
      "El sistema de monitoreo de incendios en la Amazonía brasileña carecía de recursos suficientes, lo que permitió que muchos incendios se expandieran sin control.",
  },
  {
    nombre: "Conflictos territoriales",
    pais: "Reserva Yanomami, Roraima",
    imagen: "causa 7.jpg",
    fecha: "Septiembre 2019",
    descripcion:
      "Las disputas entre comunidades indígenas y colonos por tierras a menudo involucran el uso del fuego como una forma de controlar y marcar territorios.",
  },
  {
    nombre: "Invasión de tierras",
    pais: "Estados de Rondônia y Acre, Brasil",
    imagen: "causa 6.jpg",
    fecha: "2010 - 2019",
    descripcion:
      "La invasión ilegal de tierras por parte de colonos para la agricultura y ganadería llevó a la expansión de incendios en zonas protegidas y reservas indígenas.",
  },
];

const datos2 = [
  {
    nombre: "Emisión de gases de efecto invernadero",
    pais: "brazil",
    imagen: "cau1.jpg",
    fecha: " Julio-Agosto 2019",
    descripcion:
      "La destrucción de hábitats provocó la muerte de millones de especies de fauna y flora, muchas de las cuales son endémicas y están en peligro de extinció (El Universal) ",
  },
  {
    nombre: "Pérdida masiva de biodiversidad ",
    pais: "brazil",
    imagen: "cau2.jpg",
    fecha: " Julio - agosto de 2019",
    descripcion:
      "Los incendios liberaron grandes cantidades de dióxido de carbono, exacerbando el calentamiento global. Se estiman más de 228 megatoneladas de CO₂ emitidas ​(El Universal) ",
  },
  {
    nombre: "Parque Nacional de la Chapada dos Veadeiros, Brasil ",
    pais: "brazil",
    imagen: "cau3.jpg",
    fecha: "  agosto de 2019",
    descripcion:
      "El humo de los incendios viajó grandes distancias, causando un aumento en enfermedades respiratorias debido a la mala calidad del aire, afectando principalmente a niños y ancianos ",
  },
  {
    nombre: " ",
    pais: "brazil",
    imagen: "cau4.jpg",
    fecha: "  agosto de 2019",
    descripcion:
      "Áreas protegidas y reservas ecológicas fueron destruidas, afectando proyectos de conservación de biodiversidad y ecoturismo ",
  },
];

function Gallery() {
  let gale = [];
  for (let k = 0; k < datos.length; k++) {
    gale.push(
      <Galeria
        key={k}
        imagen={datos[k].imagen}
        nombre={datos[k].nombre}
        pais={datos[k].pais}
        localidad={datos[k].localidad}
        fecha={datos[k].fecha}
        descripcion={datos[k].descripcion}
      ></Galeria>
    );
  }

  let gale2 = [];
  for (let k = 0; k < datos2.length; k++) {
    gale2.push(
      <Galeria2
        key={k}
        imagen={datos2[k].imagen}
        nombre={datos2[k].nombre}
        pais={datos2[k].pais}
        fecha={datos2[k].fecha}
        descripcion={datos2[k].descripcion}
      ></Galeria2>
    );
  }
  return (
    <>
      <div className="img-galery"></div>
      <div className="scroll">
        <h4>Incencidos del amazonas 2019</h4>
        <div className=".contenedor-principal">
          <div className="gale1">
            <Galeria
              imagen="principal.jpeg"
              pais=" Brasil (y otros países amazónicos)"
              fecha="Julio - Agosto 2019"
              descripcion="Los incendios en la selva amazónica, que arden regularmente, se intensificaron en 2019 debido a la deforestación y las quemas agrícolas. Este evento causó gran preocupación global por el impacto en la biodiversidad y la captura de carbono.Datos relevantes: El Amazonas, considerado el pulmón del planeta juega un papel crucial en el ciclo del carbono y del agua. La pérdida de hectáreas de bosque afectó tanto el clima regional como global."
            />
          </div>
        </div>

        <h6>Causas </h6>
        <div className="contenedor-principal">
          <div className="gale">{gale}</div>
        </div>
        <h6>Consecuencias </h6>
        <div className="contenedor-principal">
          <div className="gale">{gale2}</div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
