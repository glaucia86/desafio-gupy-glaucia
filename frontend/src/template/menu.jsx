/**
 * Arquivo: src/menu.jsx
 * Data: 05/11/2017
 * Descrição: Arquivo responsável pelos Componentes relacionado ao Menu.
 * Author: Glaucia Lemos
 */

import React from "react";

export default props => (
  <nav className="navbar navbar-inverse bg-inverse">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <i className="fa fa-film" /> Star Wars Movies
        </a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li>
            <a href="#/films">Filmes</a>
          </li>
          <li>
            <a href="#/about">Sobre</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)