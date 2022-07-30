import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"
import { useNavigate  } from "react-router-dom";


export default function Sidebar() {
    const navigate = useNavigate();

    function RedirectComponent(proyec){
        navigate(proyec);
    }

  return (
    <div>
      <h1 className="text-center title">Asociados</h1>

      <div
        className="btn-group-vertical container-fluid "
        role="group"
        aria-label="Vertical button group"
      >
        <button type="button" className="btn btn-primary" onClick={() =>RedirectComponent('/proyects')}>
          Proyectos
        </button>
        <button type="button" className="btn btn-primary">
          socioIsai
        </button>
        <button type="button" className="btn btn-primary">
          socioMemo
        </button>
        <button type="button" className="btn btn-primary">
          Staus y Monitoreo
        </button>
        <button type="button" className="btn btn-primary">
          testing
        </button>
        <button type="button" className="btn btn-primary">
          Constructora
        </button>
        <button type="button" className="btn btn-primary" onClick={() =>RedirectComponent('/Extraccion/Datos')}>
          tools
        </button>
        <button type="button" className="btn btn-primary">
          BasicProgram
        </button>
        <button type="button" className="btn btn-primary">
          Invitados
        </button>
        <button type="button" className="btn btn-primary buttonNav text-center" onClick={() =>RedirectComponent('/login')}>
          Log out
        </button>
      </div>
    </div>
  );
}
