/**
 * Data: 05/11/2017
 * Arquivo: ../api.js
 * Descrição: Arquivo responsável por realizar o mapeamento do objeto para o MongoDb.
 * Author: Glaucia Lemos
 */

const restful = require('node-restful');
const mongoose = restful.mongoose;

/**
 * Film:
 * 
 * -> Id: int (todas as vezes que criar um novo filme gerará um id)
 * -> Title: String
 * -> Episode_Id: Int
 * -> Opening_Crawl: string
 * -> Director: String
 * -> Producer: String
 * -> Realease_Date: Date
 * -> Created_At: Date (para fins de registro no banco)
 * 
 */

const FilmSchema = new Schema({
    title: { type: String },
    episode_id: { type: Number },
    opening_crawl: {type: String},
    director: { type: String },
    producer: { type: String },
    realease_date: { type: Date },
    done: { type: Boolean, required: true, default: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = restful.model("Film", FilmSchema);