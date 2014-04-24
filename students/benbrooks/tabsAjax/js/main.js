var tabSrc =  'http://rs.hankyates.com:3000/content';

$(function(){
	tabbify(tabSrc,'.tabs');
});


var tabbify = function( url, containerSelector ){

	var navSelector = '.tab-nav';
	var uiDisplayDelay = 1500;
	var $tabContainer = $(containerSelector);

	var remoteTabRequest = $.getJSON(url);

	remoteTabRequest.done(function(tabs){

		// Get the template for our tabs
		var tabTemplate = jQuery('#tab-template').html();
		Mustache.parse(tabTemplate);
	
		// Define where we're going to inject our response
		var $tabNavContainer = $tabContainer.find(navSelector);

		
		// Produce a new tab from each key/value pair
		$.each(tabs, function(tabTitle, tabContent){

			var tabData = {
				tabTitle: tabTitle,
				tabContent: tabContent
			};

			var tabMarkup = Mustache.render(tabTemplate, tabData);
			
			$tabNavContainer.append(tabMarkup);

		});

		// Rig up the behavior
		enableTabBehavior(containerSelector);

		// Signal UI ready, delay a bit for smoother UX
		$tabContainer.addClass('success');

	});

	remoteTabRequest.fail(function(){
		$tabContainer.addClass('error');
	});

	remoteTabRequest.always(function(){
		setTimeout(function(){
			$tabContainer.addClass('ready');
		}, uiDisplayDelay);
	});

};


/**
 * Turns markup into a tabbed interface
 * @param  {str} containerSelector The selector of the object that wraps the tab markup
 */
function enableTabBehavior( containerSelector ){

	// Lets find all the stuff we'll need later on
	var $tabContainer = $(containerSelector),
		tabSelector = '.tab',
		tabLinkSelector = '.tab-link',
		tabContentSelector = '.tab-content',
		contentAreaSelector = '.tab-content-area',
		activeTabClass = 'active',
		$tabs = $tabContainer.find(tabSelector),
		$tabLinks = $tabs.find(tabLinkSelector),
		$contentArea = $tabContainer.find( contentAreaSelector );

		// Now let's rig up the behavior
		$tabLinks.on('click.tabs', function(e){
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

}; // tabber()