import Model from 'ember-magic-man/model';

export default Model.extend({

  endDate: function(){
    var endDate = new Date(this.get('createdAt'));
    //TODO: add duration to endDate
    return endDate;
  }.property('createdAt'),

  toJSON: function(){
    var json = this._super();
    json.pledge = Number(json.pledge);
    return json;
  }
});
