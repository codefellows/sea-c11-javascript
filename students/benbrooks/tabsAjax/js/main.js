$(function(){
	TabsAjax.init();
});

var TabsAjax = {

	init: function(){
		
		this.tabSrc = 'http://rs.hankyates.com:3000/content';
		this.tabContainerSelector = '.tabs';
		this.navContainerSelector = '.tab-nav';
		this.uiDisplayDelay = 500;
		this.requestResultClass = '';
		this.tabTemplate = jQuery('#tab-template').html();
		this.$tabContainer = $(this.tabContainerSelector);
		this.$tabNavContainer = this.$tabContainer.find(this.navContainerSelector);

		// Nowhere to put our tabs? Bail.
		if( this.$tabContainer.length < 1 )
			return;

		// Parse our template to speed up repeated use
		Mustache.parse(this.tabTemplate);

		// Go get our data
		var tabRequest = this.getRemoteTabJSON();
		
		var self = this;

		// React to response

		tabRequest.fail(function(){
			self.requestResultClass = 'error';
		});

		tabRequest.done(function(data){
			self.addRemoteTabs(data)
			self.enableTabBehavior();
			self.requestResultClass = 'success';
		});

		tabRequest.always(function(){
			// Once we're all done with the request
			// mark the container as ready to be shown
			//  after a short delay for smoothness sake.
			setTimeout(function(){

				self.$tabContainer
					.addClass(self.requestResultClass)
					.addClass('ready');

			}, self.uiDisplayDelay);
		});

	},


	getRemoteTabJSON: function(){
		return $.getJSON(this.tabSrc);
	},

	addRemoteTabs: function( tabs ){

		var self = this;

		// Produce a new tab from each key/value pair
		$.each(tabs, function(tabTitle, tabContent){

			var tabData = {
				tabTitle: tabTitle,
				tabContent: tabContent
			};

			self.addTab(tabData);

		});
	},

	addTab: function( tab ){
		var tabMarkup = Mustache.render(this.tabTemplate, tab);
		this.$tabNavContainer.append(tabMarkup);
	},

	enableTabBehavior: function(){

		// Lets find all the stuff we'll need later on
			tabSelector = '.tab',
			tabLinkSelector = '.tab-link',
			tabContentSelector = '.tab-content',
			contentAreaSelector = '.tab-content-area',
			activeTabClass = 'active',
			$tabs = this.$tabContainer.find(tabSelector),
			$tabLinks = this.$tabContainer.find(tabLinkSelector),
			$contentArea = this.$tabContainer.find( contentAreaSelector );

		// Now let's rig up the behavior
		this.$tabContainer.on('click.tabs', tabLinkSelector, function(e){
			
			e.preventDefault();
			var $tab = $(e.target).closest(tabSelector),
				$tabContentContainer = $tab.find(tabContentSelector);

			// Replace content
			$contentArea.html($tabContentContainer.html());
			
			// Deactivate all tabs
			$tabs.removeClass(activeTabClass);

			// Activate the one clicked
			$tab.addClass(activeTabClass);
			
		});

		// Activate first tab
		$tabLinks.first().click();

	},

};