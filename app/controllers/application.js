import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['index'],
  fundSum: Ember.computed.alias('controllers.index.fundSum'),

  onIndex: function(){
    return this.get('currentRouteName') === 'index';
  }.property('currentRouteName')
});
