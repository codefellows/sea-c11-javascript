
$(function(){
	tabber('.tabs');
});


/**
 * Turns markup into a tabbed interface
 * @param  {str} containerSelector The selector of the object that wraps the tab markup
 */
var tabber = function( containerSelector ){

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
			var $tab = $(e.target).parent(),
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