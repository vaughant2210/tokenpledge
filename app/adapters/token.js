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

  find: function(){

  }
});
