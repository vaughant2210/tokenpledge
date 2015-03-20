import Ember from 'ember';


export default Ember.Controller.extend({
  isEditing: false,

   actions: {
     delete:function(){
      this.get('model').destroy();
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
