/**
 * Created by Gineff on 21.05.2016.
 */
var app = window.app = window.app || {};
app.collections = {};

class Comment{
  constructor(attrs) {
    this.attributes = {
      get() {
        return this
      },
      set(attr){
        for(var key in attr){
          if(attr.hasOwnProperty(key)){
            this[key] = attr[key]
          }
        }
      }
    };
    this.set(attrs);
  }
  get(attr) {
    return this.attributes.get()[attr]
  }
  set(attr){
    this.attributes.set(attr)
  }
  id(){ return this.get('_id')}
  save(atr, xb) {

    if(!this.get('_id')) {
      $.post(this.collection.url, this.toJson(), (response)=> {
        this.set(response);
        cb(this)
      })
    }else {
      $.ajax({
        url: this.collection.url+'/'+this.id(),
        method: "PUT",
        success: (response) => {
          this.set(response);
          cb(this)
        }
      })
    }
  }

  toJson() {
    return this.attributes;
  }
}
class Comments{
  constructor(props) {
    this.models = [];
    if(!props) return this;
    props = Array.isArray(props)? props : [props];
    this.models = props.map(prop =>{var model = new Comment(prop); model.collection = this; return model;});
  }
  parse(ar) {
    
  }
  each(f) {
    console.log(this.models)
    this.models.forEach((model) => {console.log(model); f(model)})
  }
  fetch(query) {
    $.get(this.url, query, (response) => {this.models = response.map(el=>{new Comment(el)})})
  }
  get url() {
    return this._url || '/db/comments'
  }
  set url(str) {
    this._url = str;
  }
}

app.collections.Comments = Comments;