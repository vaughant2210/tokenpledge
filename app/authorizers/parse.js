import Base from 'simple-auth/authorizers/base';
import ENV from 'tokenpledge/config/environment';

export default Base.extend({
  authorize: function(jqXHR) {
    jqXHR.setRequestHeader("X-Parse-Application-Id", ENV.parseKeys.applicationId);
    jqXHR.setRequestHeader("X-Parse-REST-API-Key", ENV.parseKeys.restApi);
  }
});
