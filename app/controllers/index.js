import Ember from 'ember';


export default Ember.Controller.extend({
  pledgeSearchTerm: null,
  pledgeSearchResults: [],
  shouldShowModal: false,

//   adjustFund: function(){
//   var total = 0;
//   this.get('model').forEach(function(pledge){
//     total+=pledge.fund;
//   });
//   console.log(total);
// }.property('model.@each'),

  fundSum: function(){
    var sum = this.get('model').reduce(function(sum, i){
      return sum + (i.get('fund') || 0);
    }, 0);
    return parseInt(sum*100 + "") / 100;
  }.property('model.@each.fund'),


  actions: {
    test: function() {
      console.log(Ember.View.views);
    },

    openModal: function() {
      // Figured this out courtesy of ic-modal. Noice!
      // var modal = Ember.View.views['modal-about'];
      // modal.send('toggleModal');
      this.set('shouldShowModal', true);
    },

    searchPledge: function(){
      var term = this.get('pledgeSearchTerm');
      var self = this;
      this.store.findQuery('nutritionix', term).then(function(results){
        self.set('pledgeSearchResults', results);
      });
    },

    selectPledge: function(pledge) {
      this.set('selectedPledge', pledge);
      this.set('pledgeSearchResults');
    },

    createToken: function() {
      var pledge = this.get('selectedPledge');
      var pledgeAmount = this.get('pledgeAmount');
      var token = this.store.createRecord('token');
      token.set('name', pledge.name);
      token.set('image', pledge.imageUrl);
      token.set('pledge', pledgeAmount);
      token.save();
      this.set('shouldShowModal', false);
      this.set('pledgeSearchTerm', '');
      this.set('pledgeSearchResults', []);
      this.set('selectedPledge', null);
      this.set('pledgeAmount', 0);
    }
  }

});
