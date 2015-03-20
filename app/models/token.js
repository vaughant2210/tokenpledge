import Model from 'ember-magic-man/model';

export default Model.extend({
  toJSON: function(){
    var json = this._super();
    json.pledge = Number(json.pledge);
    return json;
  }
});
