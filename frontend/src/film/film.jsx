/**
 * Arquivo: src/film.jsx
 * Data: 05/11/2017
 * Descrição: Arquivo responsável pelos Componentes relacionado a Film.
 * Author: Glaucia Lemos
 */

import React, { Component } from "react";
import PageHeader from '../template/pageHeader'
import FilmForm from './filmForm'
import FilmList from './filmList'

export default class Todo extends Component {
    render() {
        return(
            <div>
                <PageHeader name="Filmes" small="Cadastro"></PageHeader>
                <FilmForm />
                <FilmList />
            </div>
        )
    }
}