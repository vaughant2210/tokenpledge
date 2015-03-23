import Ember from 'ember';
import ajax from 'ic-ajax';


export default Ember.Object.extend({
  // type is 'nutritionix'
  // query is whatever you pass as the second argument to this.store.findQuery
  findQuery: function(type, query) {
    return ajax({
      url: "https://api.nutritionix.com/v1_1/search",
      type: "POST",
      data: JSON.stringify({
        "appId": "582289da",
        "appKey": "54fff1e7962d0280cb80bdc06964af53",
        "query": query
      }),
      contentType: "application/json",
      // url: "https://jsonp.afeld.me/?callback=?&url=https://apibeta.nutritionix.com/v2/search/brands?q=starbucks&limit=1&offset=0&type=1",
      // data: {
      //   "appId": "582289da",
      //   "appKey": "54fff1e7962d0280cb80bdc06964af53",
      // }
    }).then(function(response) {
      console.log(response);
      return response.hits;
    });










    // make an ajax call to return results that match 'query'
  },

  find: function(){

  }
});
