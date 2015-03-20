import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  isEditing: false,

   actions: {
     delete:function(){
      console.log(this.get('model'));

      var id = this.get('model.objectId');

      return ajax("https://api.parse.com/1/classes/Token/" + id, {
        type: "DELETE",
      });

     },


     edit: function(){
       this.set('isEditing', true);
     },

     useToken: function(){
       if (this.get('model.pledge') >0) {
         this.decrementProperty('model.pledge');
         this.send('save');
       } else {
        console.log("It's time to donate");
       }
},
     save: function(){
      this.set('isEditing', false);

      this.get('model').save();
      
    }
   }

});
