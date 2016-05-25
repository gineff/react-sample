/**
 * Created by Gineff on 21.05.2016.
 */
var app = window.app = window.app || {};
app.collections = {};

var Comment = Backbone.Model.extend({idAttribute: '_id'})
var Comments = Backbone.Collection.extend({
  model: Comment,
  url: '/db/comment'
});

app.collections.Comment = Comments;