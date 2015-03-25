import Ember from 'ember';


export default Ember.Controller.extend({
  pledgeSearchTerm: null,
  pledgeSearchResults: [],

  actions: {
    test: function() {
      console.log(Ember.View.views);
    },

    openModal: function() {
      // Figured this out courtesy of ic-modal. Noice!
      var modal = Ember.View.views['modal-about'];
      modal.send('toggleModal');
    },

    searchPledge: function(){
      var term = this.get('pledgeSearchTerm');
      var self = this;
      this.store.findQuery('nutritionix', term).then(function(results){
        self.set('pledgeSearchResults', results);
      });
    },

    selectPledge: function(pledge) {
      var token = this.store.createRecord('token');
      token.set('name', pledge.name);
      token.set('image', pledge.imageUrl);
      token.save();
      // transition to route or close modal
    }
  }

});
