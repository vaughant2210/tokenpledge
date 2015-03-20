import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //static route--when i go to the new URL activate new route and that is it. 
  this.route('new');
  /// dynamic routing(utilized here): when i go the show/id URL activate the show route
  this.route('show', { path: '/show/:token_id' });
  this.route('search');
});

export default Router;
