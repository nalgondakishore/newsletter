var mongoose = require('mongoose');

var highlightsSchema = new mongoose.Schema({
    Level : String,
    Title: String,
    Description: String,
    LevelID : String
    
});

var Highlights = mongoose.model('highlights', highlightsSchema);

exports.Highlights = Highlights;

