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
       if (this.get('model.pledge') > 0) {
         this.decrementProperty('model.pledge');
         this.send('save');
       } else {
         this.set('model.pledge', 0);
         this.incrementProperty('model.fund',.1);
         this.set('model.fund', Number(this.get('model.fund').toFixed(2)));
         this.send('save');
       }
     },

     save: function(){
      this.set('isEditing', false);
      this.get('model').save();

    },

      saveedit: function(){
       this.set('isEditing', false);
       this.set('model.fund', null);
       this.get('model').save();

       }
    }

});
