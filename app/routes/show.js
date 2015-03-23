import Ember from 'ember';

export default Ember.Route.extend({

    renderTemplate: function(controller, model) {
      this.render('show', {
        controller: 'token',
        model: model
      });
    },

    model: function(params){  ///(params) contains all the objects for this route
      return this.store.find('token', params.token_id);  ///passing just one URL

    }


});
