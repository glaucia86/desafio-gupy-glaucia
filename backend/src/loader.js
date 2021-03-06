/**
 * Data: 05/11/2017
 * Arquivo: src/loader.js
 * Descrição: Arquivo responsável por realizar o carregamentos dos arquivos da pasta 'config'.
 * Author: Glaucia Lemos
 */

const server = require('./config/server');
require('./config/database');
require('./config/routes')(server);