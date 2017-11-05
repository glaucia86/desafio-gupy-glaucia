/**
 * Data: 05/11/2017
 * Arquivo: ../filmService.js
 * Descrição: Arquivo responsável por manipular os exports dos arquivos
 * Author: Glaucia Lemos
 */

const Film = require('./film');

//Todos os verbos HTTP através do node-restful:
Film.methods(['get', 'post', 'put', 'delete']);

//Aqui estou usando o 'updateOptions' com o objetivo de retornar os dados mais atualizados do banco:
Film.updateOptions({ new: true, runValidators: true });

module.exports = Film;

