import "../Styles/Portada.css";
import { Link } from "react-router-dom";

function Portada() {
  return (
    <>
      <div className="fondo">
        <div className="color"></div>
        <div className="imagen-fondo"></div>
      </div>
      <div className="conteiner-text">
        <div className="contest">NASA Space Apps Challenge</div>

        <div className="challenge">
          <Link className="linksito" to="/principal">
            <p>IMAGINE OUR</p>
            <p className="p2">CONNECTED EARTH</p>
          </Link>
        </div>
        <div className="team">
          <p className="p1">Team</p>
          <p className="p2">Six Galax</p>
        </div>
      </div>
    </>
  );
}
export default Portada;
