const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const projetSchema = new Schema({
	libelle: String
});

module.exports = mongoose.model('projet',projetSchema,'projets');