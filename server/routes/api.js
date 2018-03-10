//Install express server
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Projet = require('../models/projet');

const db = "mongodb://koloina:koloina123@ds163418.mlab.com:63418/trello";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
	if(err){
		console.error("Error!" + err);
	}
});

router.get('/projets', function(req, res){
	console.log('Get request for all projects');
	Projet.find({})
	.exec(function(err, projets){
		if(err){
			console.log("Error retrievimg projects");
		}else{
			res,json(projets);
		}
	});
});

module.exports = router;