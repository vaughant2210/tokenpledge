import Ember from 'ember';


export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "BQW8foQkUMvIsjGAh4SgIEDHPRpfzi0lqz5zeinE",
      "X-Parse-REST-API-Key": "IyUjri8KwWtTT4FtqkYYfo11r41TBb0t21XdmhEe"
    }
  });
}

export default {
  name: 'parse-tokens',
  initialize: initialize
};
