import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WecudosAppENV.locationType
});

Router.map(function() {
	this.route("signup", {path: "/signup"});
});

export default Router;
