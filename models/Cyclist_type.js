'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let Cyclist_typeSchema = Schema({
    name: "string",
});

module.exports = mongoose.model('Cyclist_type', Cyclist_typeSchema, 'Cyclist_type')