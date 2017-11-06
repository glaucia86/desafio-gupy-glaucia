/**
 * Arquivo: filmForm.jsx
 * Data: 05/11/2017
 * Descrição: Arquivo responsável pelos Componentes relacionado ao Form dos Filmes.
 * Author: Glaucia Lemos
 */

import React from 'react'

export default props => (
  <div role="form" className="filmForm">
    <div className="form-group">
      <div className="col-md-6">
        <input
          id="title"
          className="form-control"
          placeholder="Título do Filme"
        />
      </div>
    </div>
    <br />
    <br />

    <div className="form-group">
      <div className="col-md-6">
        <input
          id="episode_id"
          className="form-control"
          placeholder="Episódio do Filme"
        />
      </div>
    </div>
    <br />
    <br />

    <div className="form-group">
      <div className="col-md-6">
        <textarea
          id="opening_crawl"
          className="form-control"
          placeholder="História do Filme"
        />
      </div>
    </div>
    <br />
    <br />
    <br />

    <div className="form-group">
      <div className="col-md-6">
        <input
          id="director"
          className="form-control"
          placeholder="Diretor do Filme"
        />
      </div>
    </div>
    <br />
    <br />

    <div className="form-group">
      <div className="col-md-6">
        <input
          id="producer"
          className="form-control"
          placeholder="Produtor do Filme"
        />
      </div>
    </div>
    <br />
    <br />

    <div className="form-group">
      <div className="col-md-6">
        <input
          id="release_date"
          className="form-control"
          placeholder="Data Lançamento do Filme"
        />
      </div>
    </div>
    <br />
    <br />

    <div className="col-xs-12 col-sm-3 col-md-2">
      <button className="btn btn-primary">
        <i className="fa fa-plus" /> Cadastrar
      </button>
    </div>
  </div>
)
