/**
 * Created by Gineff on 21.05.2016.
 */

var mongoose = require('../lib/mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    author: String,
    text: String
});

module.exports = mongoose.model("Comment", CommentSchema);