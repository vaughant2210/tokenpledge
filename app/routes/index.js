import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

    model: function(){
      return ajax('https://api.parse.com/1/classes/Token').then(function(response){
          return response.results;
        });

    }


});
