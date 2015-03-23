import Ember from 'ember';


export default Ember.Route.extend({

    model: function (){
      return this.store.createRecord('token'); //create an empty token model that the template will fill in
    },




    actions: {
      createToken: function(token){
        var self = this;
        token.save().then(function(response){
           console.log("Success", response);
           self.transitionTo('index');
         });
       }
     }
   });
