import Ember from 'ember';

export default Ember.Route.extend({


    model: function(params){  ///(params) contains all the objects for this route
      return this.store.find('token', params.token_id);  ///passing just one URL 

    }


});
