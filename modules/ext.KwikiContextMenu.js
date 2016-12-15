/**
 * ext.KwikiContextMenu
 *
 * @author Hagai Asaban
 * @license MIT
 */

( function ( mw, $ ) {
    
	function loadKwikiContextMenu(){
		
		$.contextMenu({
			selector: '.redlink',
			rtl: true,
			trigger: 'right',
			callback: function(key, options) {
				var m = "clicked: " + key;
				window.console && console.log(m) || alert(m); 
			},
			items: {
				"open": {name: "פתח", icon: "fa-link"},
				"sep1": "---------",
				"edit": {name: "ערוך", icon: "fa-pencil"},
				"sep2": "---------",
				"delete": {name: "מחק", icon: "delete"},
				"sep3": "---------",
				"quit": {name: "סגור", icon: "fa-window-close"}
			}
		});
	};
	
    $( function () {  
        loadKwikiContextMenu();
    });

}( mediaWiki, jQuery ) );