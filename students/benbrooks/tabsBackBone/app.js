$(function(){

	var TabModel = Backbone.Model.extend({
		defaults: {
			name: 'Unnamed Tab',
			content: 'Tab content not specified.'
		}
	});

	var TabsCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: TabModel,
		url: 'http://rs.hankyates.com:3000/v2/content'
	});

	var TabView = Backbone.View.extend({

		template: _.template($('#tab-template').html()),

		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.html(this.template(this.model.attributes));
	   		return this;
		}
	});

	var AppView = Backbone.View.extend({

		el: '#tabs-app',

		events: {
			'click .tab-link': 'tabClickHandler'
		},

		initialize: function(){
			var self = this;
			this.$tabsList = this.$('.tabs');
			this.$activeTabContent = this.$('.active-tab-content');
			this.tabs = new TabsCollection;
			this.listenTo(this.tabs, 'add', this.addTab);
			this.tabs.fetch({ success: function(){
				self.render();
			}});
		},

		render: function(){
			var $firstTab = $('.tab').first();
			this.activateTab($firstTab);
			this.$el.addClass('loaded');
		},
		
		addTab: function(tab){
			var tabView = new TabView({ model: tab });
			this.$tabsList.append(tabView.el);
		},

		tabClickHandler: function(e){
			e.preventDefault();
			this.activateTab($(e.target).closest('.tab'));
		},

		activateTab: function($tab){
			var tabContent = $tab.find('.tab-content').html(),
				$allTabs = this.$el.find('.tab');

			// Replace content
			this.$activeTabContent.html(tabContent);
			
			// Deactivate all tabs
			$allTabs.removeClass('active');

			// Activate the one clicked
			$tab.addClass('active');
		}


	});

	new AppView();


});
