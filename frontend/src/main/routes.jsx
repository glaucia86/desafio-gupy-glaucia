/**
 * Arquivo: routes.jsx
 * Data: 05/11/2017
 * Descrição: Arquivo responsável pelas rotas dos componentes das páginas.
 * Author: Glaucia Lemos
 */

import React from 'react'
import { Router, Route, Redirect, hashHistory } from "react-router"
import Film from '../film/film'
import About from '../about/about'

export default props => (
  <Router history={ hashHistory }>
    <Route path="/films" component={ Film } />
    <Route path="/about" component={ About } />
    <Redirect from="*" to="/films" />
  </Router>
)