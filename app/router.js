import Ember from 'ember';

var Router = Ember.Router.extend({
  location: WecudosAppENV.locationType
});

Router.map(function() {
	this.route("signup");
	this.resource("triage", function(){
		this.route('diet');
	});

});

export default Router;
