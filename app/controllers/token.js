import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Controller.extend({
  isEditing: false,

   actions: {
     delete:function(){
       console.log(this.get('model'));
     },


     edit: function(){
       this.set('isEditing', true);
     },

     save: function(){
      this.set('isEditing', false);

      var id = this.get('model.objectId');
      var data = Ember.copy(this.get('model'));
      data.pledge = Number(data.pledge);

      return ajax("https://api.parse.com/1/classes/Token/" + id, {
        type: "PUT",
        data: JSON.stringify(data)
      });
    }
   }

});
