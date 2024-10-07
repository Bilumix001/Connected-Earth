import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Principal from "./Pages/Principal";
import Portada from "./Pages/Portada";
import Gallery from "./Pages/Gallery";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/galeria" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
