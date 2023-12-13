'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let CyclismSchema = Schema({
    name: "string",
    birth_date: "string",
    photo: "string",
});

module.exports = mongoose.model('Cyclist', CyclismSchema, 'Cyclist')