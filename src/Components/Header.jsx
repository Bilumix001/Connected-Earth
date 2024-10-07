import "../Styles/Header.css";
import Persona from "../Components/Persona";

function Header() {
  const Datos = [
    {
      name: "Patrick Michael Pumaccahua Huallpa",
      career: "Ingeniería Informática",
      img: "/Patrick.jpeg",
    },
    {
      name: "Max Erixon Toledo Bernal",
      career: "Ingeniería Informática",
      img: "Max.jpeg",
    },
    {
      name: "Ronil Nilo Torres Bautista",
      career: "Ingeniería Informática",
      img: "Rony.jpg",
    },
    {
      name: "Yeferson Supa Cusipaucar",
      career: "Ingeniería Informática",
      img: "Totto.jpeg",
    },
    {
      name: "María Jesus Villcas Quispe",
      career: "Ingeniería Quimica",
      img: "Maria.jpeg",
    },
    {
      name: "Michael Sarmiento Huillca",
      career: "Ingeniería Electrónica",
      img: "Michael.jpeg",
    },
  ];

  let Perfiles = [];

  for (let k = 0; k < Datos.length; k++) {
    Perfiles.push(
      <Persona
        key={k}
        name={Datos[k].name}
        career={Datos[k].career}
        img={Datos[k].img}
      ></Persona>
    );
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src="/logo.jpeg" alt="" />
          <div>
            <p className="p1">Connected</p>
            <p className="p2">Earth</p>
          </div>
        </div>
        <div className="algo">NASA Space Apps 2024</div>
        <div className="container">
          <div className="nameTeam">SIX GALAX</div>
          {Perfiles}
        </div>
      </div>
    </>
  );
}

export default Header;
