import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
  findAll: function(){
    return ajax('https://api.parse.com/1/classes/Token').then(function(response){
      return response.results.map(function(token){
        token.id = token.objectId;
        delete token.objectId;
        return token;
      });
    });
  },

  find: function(type, id){
    return ajax('https://api.parse.com/1/classes/Token/' + id).then(function(token){

      token.id = token.objectId;
      delete token.objectId;
      return token;
    });
  },

  save: function (type, record){  //record in this is case means the actual object
    if (record.id)  {  //if record is existing



    } else { //record is new
      return ajax("https://api.parse.com/1/classes/Token",{  //returning the result of the AJAX call
        type: "POST",
        data: JSON.stringify(record.toJSON()) // toJSON is function on the model, hence (); returns attribute of model
      }).then(function(response){ // response only contains objectId and createdAt
        record.id = response.objectId;
        record.createdAt = response.createdAt;
        return record;
      });

    }

  }

});
