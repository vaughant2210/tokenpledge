import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  findAll: function(subreddit) {
   return ajax("https://api.nutritionix.com/v1_1/search" + "/.json?jsonp=?").then(
     function(response) {
       return response.data.children.map(function (child) {
         return App.RedditLink.create(child.data);
       });
     }
   );
 }
});
