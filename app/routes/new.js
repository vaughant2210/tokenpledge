import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

    model: function (){
      return{};
    },

  


    actions: {
      createToken: function(token){

        var data = {
          name: token.name,
          pledge: Number(token.pledge)
        };

         var self = this;
         ajax("https://api.parse.com/1/classes/Token",{
           type: "POST",
           data: JSON.stringify(data)
         }).then(function(response){
           console.log("Success", response);
           self.transitionTo('index');
         });
       }
     }
   });
