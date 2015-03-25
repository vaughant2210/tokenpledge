import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    register: function(){
      var credentials = this.getProperties('username', 'password');
      credentials.email = credentials.username;
      var user = this.store.createRecord('user', credentials);
      user.save().then(function(user){
        this.get('session').authenticate('authenticator:parse-email', user);
        this.setProperties({username: null, password: null});
        this.transitionToRoute('index');
      }.bind(this), function(error){
        alert(error);
      });
    }
  }
});
