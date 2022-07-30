
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import IndexProyects from "./components/proyectos/IndexProyects";
import ExtraccionDatos from "./components/test/ExtraccionDatos";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/Dashboard" element={<Dashboard/>} />
          <Route exact path="/Extraccion/Datos" element={<ExtraccionDatos/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/proyects" element={<IndexProyects/>} />
          <Route exact path="/logout" element={<Login/>} />
        </Routes>
    </Router>
  );
}

export default App;
