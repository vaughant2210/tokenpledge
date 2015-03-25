import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    test: function() {
    console.log(Ember.View.views);
    },
    openModal: function() {
      // Figured this out courtesy of ic-modal. Noice!
      var modal = Ember.View.views['modal-about'];
      modal.send('toggleModal');
    },



  }

});
