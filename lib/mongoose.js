/**
 * Created by Gineff on 21.05.2016.
 */
var mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/react');

module.exports = mongoose;