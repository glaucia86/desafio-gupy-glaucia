/**
 * Data: 05/11/2017
 * Arquivo: config/routes.js
 * Descrição: Arquivo responsável pelas rotas da API REST.
 * Author: Glaucia Lemos
 */

const express = require('express');

module.exports = function(server) {

    //API Routes - rota default da api:
    const router = express.Router();
    server.use('/api', router);

    //Rotas: Film:
    const filmService = require('../api/film/filmService');

    //Todos as rotas do HTTP terão a mesma rota abaixo: api/films/<verbo-http>
    filmService.register(router, '/films'); 
}