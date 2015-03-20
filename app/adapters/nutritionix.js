import Ember from 'ember';

export default Ember.Object.extend({
  // type is 'nutritionix'
  // query is whatever you pass as the second argument to this.store.findQuery
  findQuery: function(type, query) {
    // make an ajax call to return results that match 'query'
  }
});
