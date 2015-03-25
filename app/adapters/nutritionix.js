import Ember from 'ember';
import ajax from 'ic-ajax';


export default Ember.Object.extend({
  // type is 'nutritionix'
  // query is whatever you pass as the second argument to this.store.findQuery
  findQuery: function(type, query) {
    return ajax({
      url: "https://tokenpledge.herokuapp.com/search/" + query,
      contentType: "application/json",

    });









    // make an ajax call to return results that match 'query'
  },

  find: function(){

  }
});
