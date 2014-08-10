import Ember from "ember";

export default Ember.Component.extend({
	classNames: ['goal-container'],
	hasFields: false,
	classNameBindings: ['hasFields'],
	click: function(){
		this.set('hasFields',true);
		console.log('clicked me');
	}
});