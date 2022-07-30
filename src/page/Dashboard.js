import React from "react";
import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"

import Sidebar from './Sidebar'

export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row ">
      
      
        <div className="col-3">

        <Sidebar/>
   
      </div>
        
        <div className="col-9">
          <div className="App-header  conteiner-fluid">
          <h2 className="text-start">Dashboard</h2>
            <img src={logo} className="App-logo" alt="logo" />
          
          </div>
        </div>
      </div>
    </div>
  );
}
