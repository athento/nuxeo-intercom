jQuery( window ).ready(function() {
//------Intercom Snippet------
window.intercomSettings = {
    name: jQuery(".widgetLabel.boldLabel").html(),
    email: jQuery(".widgetLabel.boldLabel").html(),
    app_id: "sfpqql0z"
  };
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/sfpqql0z';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
//----------------------------

//Check if browser is IE
function isbrowserie() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
            return true;
        else                 // If another browser, return 0
            return false;
}

var isIE = isbrowserie();

//Check localStorage for instructions
var transition = localStorage.getItem('athento-intercom-transition');
if(transition !== null){
	Intercom('trackEvent', transition);
	localStorage.removeItem('athento-intercom-transition');
	console.log('send '+transition);
}

//jQuery(".ambiance.ambiance-error.errorFeedback")
/*jQuery( document ).bind('DOMSubtreeModified', function(){
	var trans = localStorage.getItem('athento-intercom-transition'); 
	if(trans !== null){
		if(jQuery(".ambiance.ambiance-error.errorFeedback").length){
			localStorage.removeItem('athento-intercom-transition');
		}
	}
});*/

// Create Document
jQuery('#document_create\\:nxw_documentCreateButtons_CREATE_DOCUMENT').click(function(){
	var pathname = window.location.pathname;
	if(pathname.indexOf("UserWorkspaces") > -1){
		localStorage.setItem('athento-intercom-transition', 'new document on UserWorkspace');	
	}else {
		var type = jQuery(".mainNoTabs h3").html().replace("Create a new document ","").replace("\n","").trim();
		localStorage.setItem('athento-intercom-transition', 'new document: '+type);	
	}
});

// Create new Navigation Tree
jQuery('#document_create\\:nxw_documentCreateButtons_CREATE_WORKSPACE').click(function(){
	localStorage.setItem('athento-intercom-transition', 'new workspace');
});

// Create new User
var fn_user = function(){
	localStorage.setItem('athento-intercom-transition', 'new user');
}

// Event binding on dynamically created elements
jQuery('body').on('click', '#createUserView\\:createUser\\:button_save_and_invite', fn_user);
jQuery('body').on('click', '#createUserView\\:createUser\\:button_invite', fn_user);
jQuery('body').on('click', '#createUserView\\:createUser\\:button_save_and_create', fn_user);
jQuery('body').on('click', '#createUserView\\:createUser\\:button_save', fn_user);

// NX Drive installation
jQuery('.nuxeoDrivePackages a').click(function(){
	Intercom('trackEvent', 'nuxeo drive install');
});

// Workflow start
jQuery('#nxl_grid_summary_layout\\:nxw_summary_document_route_form\\:nxw_start_route_widget_start_route').click(function(){
	localStorage.setItem('athento-intercom-transition', 'workflow start');
});

// Drag 'n' Drop
jQuery('body').on("drop",function(event) { 
	localStorage.setItem('athento-intercom-transition', 'drag and drop');
});


}); //**window.ready**
