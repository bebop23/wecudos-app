eval("//# sourceURL=assets/ember-cli/loader.js");

;eval("define(\"wecudos-app/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: \'wecudos-app\', // TODO: loaded via config\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, \'wecudos-app\');\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=wecudos-app/app.js");

;eval("define(\"wecudos-app/components/goal-selector\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Component.extend({\n    	classNames: [\'goal-container\'],\n    	hasFields: false,\n    	classNameBindings: [\'hasFields\'],\n    	click: function(){\n    		this.set(\'hasFields\',true);\n    		console.log(\'clicked me\');\n    	}\n    });\n  });//# sourceURL=wecudos-app/components/goal-selector.js");

;eval("define(\"wecudos-app/router\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: WecudosAppENV.locationType\n    });\n\n    Router.map(function() {\n    	this.route(\"signup\");\n    	this.resource(\"triage\", function(){\n    		this.route(\'diet\');\n    	});\n\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=wecudos-app/router.js");

;eval("define(\"wecudos-app/routes/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var IndexRoute = Ember.Route.extend({\n      model: function() {\n        return [\'red\', \'yellow\', \'blue\'];\n      }\n    });\n\n    __exports__[\"default\"] = IndexRoute;\n  });//# sourceURL=wecudos-app/routes/index.js");

;eval("define(\"wecudos-app/routes/triage\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    var TriageRoute = Ember.Route.extend({\n       actions: {\n        willTransition: function(transition) {\n          	  if (\n       		// this.controller.get(\'userHasEnteredData\') &&\n    	          !confirm(\"Are you sure you want to abandon progress?\")) {\n    	        transition.abort();\n    	      } else {\n    	        // Bubble the `willTransition` action so that\n    	        // parent routes can decide whether or not to abort.\n    	        return true;\n    	      }\n        	}\n    	}\n    });\n\n    __exports__[\"default\"] = TriageRoute;\n  });//# sourceURL=wecudos-app/routes/triage.js");

;eval("define(\"wecudos-app/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"\\n			     <img src=\\\"images/login-logo.jpg\\\" alt=\\\"Wecudos\\\" class=\\\"login-logo\\\" border=\\\"0\\\" height=\\\"50\\\">LOGIN\\n			    \");\n      }\n\n      data.buffer.push(\"<div id=\\\"wrapper\\\">\\n\\n	<div id=\\\"header\\\">\\n		<nav class=\\\"wecudos-navbar navbar navbar-default navbar-fixed-top\\\" role=\\\"navigation\\\">\\n		  <div class=\\\"container-fluid\\\">\\n		  	<a href=\\\"#\\\"><img src=\\\"images/wecudos_logo_fade.png\\\" alt=\\\"Wecudos\\\" class=\\\"img-rounded wecudos-logo\\\" border=\\\"0\\\" height=\\\"50\\\"></a>\\n\\n		  	<div class=\\\"wecudos-navbar-right\\\">\\n			  	\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"signup\", options) : helperMissing.call(depth0, \"link-to\", \"signup\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n		    </div>\\n\\n		  </div>\\n		</nav>\\n	</div>\\n\\n	<div id=\\\"app-shell-content\\\">\\n		\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n	</div>\\n\\n	<div id=\\\"footer\\\">\\n		<footer class=\\\"container-fluid wecudos-footer\\\">\\n			<div class=\\\"row\\\">\\n				<div class=\\\"col-sm-8 col-sm-push-4\\\">\\n					<div class=\\\"container-fluid\\\">\\n						<div class=\\\"row links\\\">\\n							<div class=\\\"col-sm-3 col-sm-push-3\\\">\\n								PRIVACY\\n							</div>\\n							<div class=\\\"col-sm-3 col-sm-push-3\\\">\\n								TERMS & CONDITIONS\\n							</div>\\n							<div class=\\\"col-sm-3 col-sm-push-3\\\">\\n								CONTACT\\n							</div>\\n						</div>\\n					</div>\\n				</div>\\n\\n				<div class=\\\"col-sm-4 col-sm-pull-8\\\">\\n					<div class=\\\"logo\\\">\\n						<img class=\\\"wecudos-img\\\" src=\\\"images/last-page-wecudos.jpg\\\">\\n						<div class=\\\"copyright\\\"> \\n							©2014 WECUDOS ALL RIGHTS RESERVED \\n						</div>\\n					</div>\\n				</div>\\n			</div>\\n		</footer>\\n	</div>\\n\\n</div>\");\n      return buffer;\n      \n    });\n  });//# sourceURL=wecudos-app/templates/application.js");

;eval("define(\"wecudos-app/templates/components/goal-selector\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, self=this;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"\\n	<!-- Check mark -->\\n		&#10003; \\n	\");\n      }\n\n    function program3(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n		\");\n      stack1 = helpers._triageMustache.call(depth0, \"index\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n	\");\n      return buffer;\n      }\n\n    function program5(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n		\");\n      stack1 = helpers._triageMustache.call(depth0, \"goalType\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\" Entered\\n	\");\n      return buffer;\n      }\n\n    function program7(depth0,data) {\n      \n      var buffer = \'\', stack1;\n      data.buffer.push(\"\\n		Enter \");\n      stack1 = helpers._triageMustache.call(depth0, \"goalType\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n	\");\n      return buffer;\n      }\n\n      data.buffer.push(\"<div class=\\\"bar\\\"></div>\\n<div class=\'goal-content\'>\\n<div class=\'goal-index\'>\\n	\");\n      stack1 = helpers[\'if\'].call(depth0, \"hasFields\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</div>\\n<div class=\'goal-category\'>\\n	\");\n      stack1 = helpers[\'if\'].call(depth0, \"hasFields\", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n</div>\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=wecudos-app/templates/components/goal-selector.js");

;eval("define(\"wecudos-app/templates/footer\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<footer class=\\\"container-fluid wecudos-footer\\\">\\n	<div class=\\\"row\\\">\\n		<div class=\\\"col-md-9 col-md-push-3\\\">\\n			<div class=\\\"container-fluid\\\">\\n				<div class=\\\"row links\\\">\\n					<div class=\\\"col-md-3 col-md-push-3\\\">\\n						PRIVACY\\n					</div>\\n					<div class=\\\"col-md-3 col-md-push-3\\\">\\n						TERMS & CONDITIONS\\n					</div>\\n					<div class=\\\"col-md-3 col-md-push-3\\\">\\n						CONTACT\\n					</div>\\n				</div>\\n			</div>\\n		</div>\\n\\n		<div class=\\\"col-md-3 col-md-pull-9\\\">\\n			<div class=\\\"logo\\\">\\n				<img class=\\\"wecudos-img\\\" src=\\\"images/last-page-wecudos.jpg\\\">\\n				<div class=\\\"copyright\\\"> \\n					©2014 WECUDOS ALL RIGHTS RESERVED \\n				</div>\\n			</div>\\n		</div>\\n	</div>\\n</footer>\");\n      \n    });\n  });//# sourceURL=wecudos-app/templates/footer.js");

;eval("define(\"wecudos-app/templates/index\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<div class=\\\"first-page container-fluid\\\">\\n	<div class=\\\"row\\\">\\n		<img src=\\\"images/front-background.jpg\\\" class=\\\"img-responsive full-width\\\"/>\\n	</div>	\\n	<div class=\\\"row text\\\">\\n		<div class=\\\"col-md-10 col-md-offset-2\\\">\\n			<h1>YOUR HEALTH.</h1>\\n			<h1>YOUR POTENTIAL.</h1>\\n		</div>\\n	</div>\\n\\n	<div id=\\\"first-pg-bottom-text\\\" class=\\\"row bottom-text\\\">\\n		<div class=\\\"col-md-10 col-md-offset-2\\\">\\n			<div class=\\\"resp-text-header\\\">\\n				<div>YOUR WAY.</div> \\n				<!-- <div class=\\\"edged-stroke\\\"></div> -->\\n				<div id=\\\"rightbar\\\" class=\\\"right bar\\\"></div>\\n			</div>\\n			<div class=\\\"caption\\\">\\n				<div>\\n					Welcome to \\n					<span class=\\\"highlight\\\">WECUDOS</span>\\n					<span class=\\\"separator\\\">--</span>\\n					YOUR PERSONAL WELLNESS MANAGER.\\n				</div>\\n				<div class=\\\"subcaption\\\">\\n					Discover the new you with your very own personal dream team of training, diet and health experts.\\n				</div>\\n			</div>\\n		</div>\\n	</div>\\n\\n	<div class=\\\"start-section\\\">\\n		<div class=\\\"left-bar\\\"></div>\\n		<div class=\\\"right-bar\\\"></div>\\n		<div class=\\\"start-button-ctn\\\">\\n			<div class=\\\"start-button-ctn\\\">\\n				<button class=\\\"wecudos-start-button\\\">START</button>\\n			</div>\\n		</div>\\n			\\n	</div>\\n\\n</div>\\n<div class=\\\"second-page  container-fluid\\\">\\n	<div class=\\\"row\\\">\\n		<img src=\\\"images/man-finishline.jpg\\\" class=\\\"img-responsive full-width\\\" style=\\\"background:white\\\"/>\\n	</div>\\n\\n	<div class=\\\"container-fluid\\\">\\n		<div class=\\\"row text\\\">\\n			<div class=\\\"col-sm-8 col-sm-offset-2 resp-text-header\\\">\\n				<div>START DOING</div>\\n				<div>WHAT\'S BEST FOR</div>\\n				<div style=\\\"font-weight:bold\\\">YOU</div>\\n			</div>\\n		</div>\\n\\n		<div class=\\\"row text2\\\">\\n			<div class=\\\"col-sm-8 col-sm-offset-2 resp-text-header\\\">\\n				<div>Wellness. Well done.</div>\\n				<div class=\\\"subtext\\\">\\n					Welcome to a new age in health and fitness. A unique personalized\\nexperience placing you in the driving seat as you discover how to live,\\neat and train the right way for you, and you alone.\\n				</div>\\n			</div>\\n		</div>\\n\\n\\n	</div>\\n\\n</div>\\n\\n<div class=\\\"info-page container-fluid\\\">\\n	<!-- <div class=\\\"row\\\">\\n		<img src=\\\"images/man-finishline.jpg\\\" class=\\\"img-responsive full-width\\\" style=\\\"background:white\\\"/>\\n	</div> -->\\n	<div class=\\\"top resp-text-header\\\">\\n		<div class=\\\"headline\\\">WHAT\'S OUR MAGIC WORD?</div>\\n	</div>\\n	<div class=\\\"bottom resp-text-header\\\">\\n		<div class=\\\"footer\\\">\\n			<div class=\\\"main-text\\\">Teamwork.</div>\\n			<div class=\\\"sub-text\\\">Imagine you had your own training staff who told you exactly what to eat and how to workout. Getting healthy would be pretty easy, right? We thought so too.</div>\\n		</div>\\n	</div>\\n\\n	<div class=\\\"center\\\">\\n		<!-- <img src=\\\"images/page3-img.jpg\\\" class=\\\"img-responsive\\\"/> -->\\n		<div class=\\\"container\\\">\\n		    <div class=\\\"dummy\\\"></div>\\n		    <div class=\\\"element img-teamwork\\\"></div>\\n		</div>\\n	</div>\\n\\n</div>\\n\\n<div class=\\\"info-page container-fluid\\\">\\n	<!-- <div class=\\\"row\\\">\\n		<img src=\\\"images/man-finishline.jpg\\\" class=\\\"img-responsive full-width\\\" style=\\\"background:white\\\"/>\\n	</div> -->\\n	<div class=\\\"top resp-text-header\\\">\\n		<div class=\\\"headline\\\">WHY LISTEN TO US?</div>\\n	</div>\\n	<div class=\\\"bottom resp-text-header\\\">\\n		<div class=\\\"footer\\\">\\n			<div class=\\\"main-text\\\">Legit question.</div>\\n			<div class=\\\"sub-text\\\">We\'re the new kids on the block. We\'re founded by doctors, supported by pioneering industry experts and our service has been developed with real elite athletes.</div>\\n		</div>\\n	</div>\\n\\n	<div class=\\\"center\\\">\\n		<!-- <img src=\\\"images/page3-img.jpg\\\" class=\\\"img-responsive\\\"/> -->\\n		<div class=\\\"container\\\">\\n		    <div class=\\\"dummy\\\"></div>\\n		    <div class=\\\"element img-phelps\\\"></div>\\n		</div>\\n	</div>\\n</div>\\n\\n<div class=\\\"info-page container-fluid\\\">\\n	<!-- <div class=\\\"row\\\">\\n		<img src=\\\"images/man-finishline.jpg\\\" class=\\\"img-responsive full-width\\\" style=\\\"background:white\\\"/>\\n	</div> -->\\n	<div class=\\\"top resp-text-header\\\">\\n		<div class=\\\"headline\\\">SOUNDS LIKE A LOT OF LEGWORK...</div>\\n	</div>\\n	<div class=\\\"bottom resp-text-header\\\">\\n		<div class=\\\"footer\\\">\\n			<div class=\\\"main-text\\\">For us.</div>\\n			<div class=\\\"sub-text\\\">Our dedicated team of industry experts not only source the right pros for you but also make sure your consultations fit perfectly around your schedule. See your team at home, during your lunch break, on the go. It\'s literally your call.</div>\\n		</div>\\n	</div>\\n\\n	<div class=\\\"center\\\">\\n		<!-- <img src=\\\"images/page3-img.jpg\\\" class=\\\"img-responsive\\\"/> -->\\n		<div class=\\\"container\\\">\\n		    <div class=\\\"dummy\\\"></div>\\n		    <div class=\\\"element img-legwork\\\"></div>\\n		</div>\\n	</div>\\n</div>\\n\\n\\n<div class=\\\"dream-team-offerings container-fluid\\\"> \\n\\n	<img class=\\\"backdrop-img\\\" src=\\\"images/lastpage-img.jpg\\\">\\n\\n	<div class=\\\"backdrop-text\\\">\\n		<div class=\\\"top\\\">\\n			<div>DISCOVER YOUR</div>\\n			<div class=\\\"level1\\\">DREAM</div>\\n			<div class=\\\"level2\\\">TEAM</div>\\n		</div>\\n	</div>\\n\\n	<div class=\\\"container\\\">\\n		<div class=\\\"gap\\\"></div>\\n		<div class=\\\"row\\\">\\n			<div class=\\\"col-sm-3\\\">\\n				<div style=\\\"\\\">\\n					<div class=\\\"column\\\">\\n						<div class=\\\"column-word\\\"> Dietitian</div>\\n						<img class=\\\"column-pic\\\" src=\\\"images/dietitian.jpg\\\">\\n						<div class=\\\"column-word-2\\\"> Personal Diet Plan. </div>\\n						<div class=\\\"column-word-3\\\"> Gluten free? Fat free? Let\'s get you eating exactly what\'s right for you. </div>\\n					</div>\\n				</div>\\n			</div>\\n			<div class=\\\"col-sm-3\\\">\\n				<div style=\\\"\\\">\\n					<div class=\\\"column\\\">\\n						<div class=\\\"column-word\\\">Mindful Experts</div>\\n						<img class=\\\"column-pic\\\" src=\\\"images/mindful.jpg\\\">\\n						<div class=\\\"column-word-2\\\">  1-to-1 Coaching  </div>\\n						<div class=\\\"column-word-3\\\"> Capture and sustain the mindset of champions. </div>\\n					</div>\\n				</div>\\n			</div>\\n			<div class=\\\"col-sm-3\\\">\\n				<div style=\\\"\\\">\\n					<div class=\\\"column\\\">\\n						<div class=\\\"column-word\\\"> Personal Trainer</div>\\n						<img class=\\\"column-pic\\\" src=\\\"images/training.jpg\\\" \\n						 style=\\\"margin-top: 20px;padding-top: 24px;padding-bottom: 24px;padding-left: 8px;padding-right: 8px\\\">\\n						<div class=\\\"column-word-2\\\"> 1-to-1 Sessions  </div>\\n						<div class=\\\"column-word-3\\\"> Let\'s get you training the way you should be.  </div>\\n					</div>\\n				</div>\\n			</div>\\n			<div class=\\\"col-sm-3\\\">\\n				<div style=\\\"\\\">\\n					<div class=\\\"column\\\">\\n						<div class=\\\"column-word\\\"> Wecudos Hotline</div>\\n						<img style=\\\"margin-top:20px\\\" src=\\\"images/hotline.jpg\\\">\\n						<div class=\\\"column-word-2\\\"> Free, Live Hotline  </div>\\n						<div class=\\\"column-word-3\\\"> For any health and wellness questions. Answered by an industry expert in less than 30 minutes.</div>\\n					</div>\\n				</div>\\n			</div>\\n		</div>\\n\\n		<div class=\\\"column2\\\">\\n			<div>\\n				To ensure we make the perfect match, every Wecudos experience starts with\\n			</div>\\n			<div>\\n				 a <b>FREE CONSULTATION</b> with one of our medical experts.\\n			</div>\\n		</div>	\\n\\n	</div>\\n\\n\\n	<div class=\\\"start-section\\\">\\n		<div class=\\\"left-bar\\\"></div>\\n		<div class=\\\"right-bar\\\"></div>\\n		<div class=\\\"start-button-ctn\\\">\\n			<div class=\\\"start-button-ctn\\\">\\n				<button class=\\\"wecudos-start-button\\\">START</button>\\n			</div>\\n		</div>\\n			\\n	</div>\\n\\n</div>\\n\\n<div class=\\\"container-fluid wecudos-bottom-logo\\\" style=\\\"background-color:black;\\\">\\n	<div class=\\\"container\\\">\\n		<div class=\\\"row\\\" style=\\\"margin: 60px 0 60px 0;\\\">\\n			<div class=\\\"col-xs-4 col-xs-offset-4\\\">\\n				<img style=\\\"height:50px\\\" src=\\\"images/last-page-logo.gif\\\">\\n				<div class=\\\"discover\\\"> DISCOVER YOUR DREAM TEAM </div>\\n			</div>\\n		</div>\\n	</div>\\n</div>\");\n      \n    });\n  });//# sourceURL=wecudos-app/templates/index.js");

;eval("define(\"wecudos-app/templates/signup\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;\n\n    function program1(depth0,data) {\n      \n      \n      data.buffer.push(\"Sign Up\");\n      }\n\n      data.buffer.push(\"<div class=\\\"top-offset sign-up\\\">\\n	<div class=\\\"img-cover\\\"></div>\\n	<div class=\\\"container-fluid\\\">\\n		<div class=\\\"row\\\">\\n			<div class=\\\"col-sm-6 col-sm-offset-3\\\">\\n				<div>\\n					<h1>Create a free account</h1>\\n				</div>\\n				<div class=\\\"sign-up-form\\\">\\n					<div class=\\\"input-group input-group-lg\\\">\\n						  <span class=\\\"input-group-addon\\\">\\n						  	<img class=\\\"user\\\" src=\\\"images/rich-input-icon.png\\\"/>\\n						  </span>\\n						  <input type=\\\"text\\\" class=\\\"form-control\\\" placeholder=\\\"First Name\\\">\\n					</div>\\n					<div class=\\\"validate-message\\\">\\n\\n					</div>\\n					<div class=\\\"input-group input-group-lg\\\">\\n						  <span class=\\\"input-group-addon\\\">\\n						  	<img class=\\\"email\\\" src=\\\"images/rich-input-icon.png\\\"/>\\n						  </span>\\n						  <input type=\\\"text\\\" class=\\\"form-control\\\" placeholder=\\\"Email\\\">\\n					</div>\\n					<div class=\\\"validate-message\\\">\\n\\n					</div>\\n					<div class=\\\"input-group input-group-lg\\\">\\n						  <span class=\\\"input-group-addon\\\">\\n						  	<img class=\\\"password\\\" src=\\\"images/rich-input-icon.png\\\"/>\\n						  </span>\\n						  <input type=\\\"text\\\" class=\\\"form-control\\\" placeholder=\\\"Password\\\">\\n					</div>\\n\\n					<div class=\\\"validate-message\\\">\\n\\n					</div>\\n					\");\n      stack1 = (helper = helpers[\'link-to\'] || (depth0 && depth0[\'link-to\']),options={hash:{\n        \'classNames\': (\"btn btn-default\")\n      },hashTypes:{\'classNames\': \"STRING\"},hashContexts:{\'classNames\': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:[\"STRING\"],data:data},helper ? helper.call(depth0, \"triage\", options) : helperMissing.call(depth0, \"link-to\", \"triage\", options));\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n					<!-- <button type=\\\"button\\\" class=\\\"btn btn-default\\\">Sign Up</button> -->\\n				</div>\\n				\\n				<div class=\\\"divider\\\">OR</div>	\\n\\n				<div>\\n					<button type=\\\"button\\\" class=\\\"fb-btn btn btn-default\\\">\\n						<i class=\\\"icon-facebook\\\"></i>\\n						Sign Up</button>\\n				</div>	\\n\\n			</div>\\n		</div>\\n	</div>\\n</div>\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=wecudos-app/templates/signup.js");

;eval("define(\"wecudos-app/templates/triage\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"<div class=\\\"triage\\\">\\n	<div class=\\\"container-fluid\\\">\\n		<div class=\\\"row\\\">\\n			<div class=\\\"col-sm-6 col-sm-offset-3\\\">\\n				\\n				<div style=\\\"padding:10px 0 10px 0;\\\">\\n					<h2>How can we help you today?</h2>\\n				</div>\\n				<div class=\\\"input-group\\\" style=\\\"width:100%;\\\">\\n					\");\n      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{\n        \'placeholder\': (\"Please enter a statement of your goals.\"),\n        \'class\': (\"form-control\"),\n        \'type\': (\"text\")\n      },hashTypes:{\'placeholder\': \"STRING\",\'class\': \"STRING\",\'type\': \"STRING\"},hashContexts:{\'placeholder\': depth0,\'class\': depth0,\'type\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"input\", options))));\n      data.buffer.push(\"\\n				</div>\\n\\n				<div class=\\\"divider\\\"></div>\\n\\n				\");\n      data.buffer.push(escapeExpression((helper = helpers[\'goal-selector\'] || (depth0 && depth0[\'goal-selector\']),options={hash:{\n        \'index\': (1),\n        \'goalType\': (\"Diet Goals\")\n      },hashTypes:{\'index\': \"INTEGER\",\'goalType\': \"STRING\"},hashContexts:{\'index\': depth0,\'goalType\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"goal-selector\", options))));\n      data.buffer.push(\"\\n\\n		        <div class=\\\"divider\\\"></div>\\n				\\n				\");\n      data.buffer.push(escapeExpression((helper = helpers[\'goal-selector\'] || (depth0 && depth0[\'goal-selector\']),options={hash:{\n        \'index\': (2),\n        \'goalType\': (\"Training Goals\")\n      },hashTypes:{\'index\': \"INTEGER\",\'goalType\': \"STRING\"},hashContexts:{\'index\': depth0,\'goalType\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"goal-selector\", options))));\n      data.buffer.push(\"\\n\\n				<div class=\\\"divider\\\"></div>\\n				\");\n      data.buffer.push(escapeExpression((helper = helpers[\'goal-selector\'] || (depth0 && depth0[\'goal-selector\']),options={hash:{\n        \'index\': (3),\n        \'goalType\': (\"Injury Recovery Goals\")\n      },hashTypes:{\'index\': \"INTEGER\",\'goalType\': \"STRING\"},hashContexts:{\'index\': depth0,\'goalType\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"goal-selector\", options))));\n      data.buffer.push(\"\\n\\n				<div class=\\\"divider\\\"></div>\\n				\");\n      data.buffer.push(escapeExpression((helper = helpers[\'goal-selector\'] || (depth0 && depth0[\'goal-selector\']),options={hash:{\n        \'index\': (4),\n        \'goalType\': (\"Mindfulness Goals\")\n      },hashTypes:{\'index\': \"INTEGER\",\'goalType\': \"STRING\"},hashContexts:{\'index\': depth0,\'goalType\': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, \"goal-selector\", options))));\n      data.buffer.push(\"\\n				\\n				<div>\\n					<h3>(Goal entry is optional)</h3>\\n				</div>\\n				\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n			</div>\\n		</div>\\n	</div>\\n</div>\");\n      return buffer;\n      \n    });\n  });//# sourceURL=wecudos-app/templates/triage.js");

;eval("define(\"wecudos-app/templates/triage/diet\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      \n\n\n      data.buffer.push(\"<div>diet here</div>\");\n      \n    });\n  });//# sourceURL=wecudos-app/templates/triage/diet.js");

;eval("define(\"wecudos-app/tests/helpers/resolver\", \n  [\"ember/resolver\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: \'wecudos-app\'\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=wecudos-app/tests/helpers/resolver.js");

;eval("define(\"wecudos-app/tests/helpers/start-app\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    /* global require */\n\n    var Application = require(\'wecudos-app/app\')[\'default\'];\n    var Router = require(\'wecudos-app/router\')[\'default\'];\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({\n        // useful Test defaults\n        rootElement: \'#ember-testing\',\n        LOG_ACTIVE_GENERATION:false,\n        LOG_VIEW_LOOKUPS: false\n      }, attrs); // but you can override;\n\n      Router.reopen({\n        location: \'none\'\n      });\n\n      Ember.run(function(){\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      App.reset(); // this shouldn\'t be needed, i want to be able to \"start an app at a specific URL\"\n\n      return App;\n    }\n  });//# sourceURL=wecudos-app/tests/helpers/start-app.js");

;eval("define(\"wecudos-app/tests/test-helper\", \n  [\"wecudos-app/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n  });//# sourceURL=wecudos-app/tests/test-helper.js");

;eval("define(\"wecudos-app/tests/wecudos-app/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - wecudos-app\');\n    test(\'wecudos-app/app.js should pass jshint\', function() { \n      ok(true, \'wecudos-app/app.js should pass jshint.\'); \n    });\n  });//# sourceURL=wecudos-app/tests/wecudos-app/app.jshint.js");

;eval("define(\"wecudos-app/tests/wecudos-app/components/goal-selector.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - wecudos-app/components\');\n    test(\'wecudos-app/components/goal-selector.js should pass jshint\', function() { \n      ok(true, \'wecudos-app/components/goal-selector.js should pass jshint.\'); \n    });\n  });//# sourceURL=wecudos-app/tests/wecudos-app/components/goal-selector.jshint.js");

;eval("define(\"wecudos-app/tests/wecudos-app/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - wecudos-app\');\n    test(\'wecudos-app/router.js should pass jshint\', function() { \n      ok(true, \'wecudos-app/router.js should pass jshint.\'); \n    });\n  });//# sourceURL=wecudos-app/tests/wecudos-app/router.jshint.js");

;eval("define(\"wecudos-app/tests/wecudos-app/routes/index.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - wecudos-app/routes\');\n    test(\'wecudos-app/routes/index.js should pass jshint\', function() { \n      ok(true, \'wecudos-app/routes/index.js should pass jshint.\'); \n    });\n  });//# sourceURL=wecudos-app/tests/wecudos-app/routes/index.jshint.js");

;eval("define(\"wecudos-app/tests/wecudos-app/routes/triage.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - wecudos-app/routes\');\n    test(\'wecudos-app/routes/triage.js should pass jshint\', function() { \n      ok(true, \'wecudos-app/routes/triage.js should pass jshint.\'); \n    });\n  });//# sourceURL=wecudos-app/tests/wecudos-app/routes/triage.jshint.js");

;eval("define(\"wecudos-app/tests/wecudos-app/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - wecudos-app/tests/helpers\');\n    test(\'wecudos-app/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'wecudos-app/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=wecudos-app/tests/wecudos-app/tests/helpers/resolver.jshint.js");

;eval("define(\"wecudos-app/tests/wecudos-app/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - wecudos-app/tests/helpers\');\n    test(\'wecudos-app/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'wecudos-app/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=wecudos-app/tests/wecudos-app/tests/helpers/start-app.jshint.js");

;eval("define(\"wecudos-app/tests/wecudos-app/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - wecudos-app/tests\');\n    test(\'wecudos-app/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'wecudos-app/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=wecudos-app/tests/wecudos-app/tests/test-helper.jshint.js");
