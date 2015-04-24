jQuery( window ).ready(function() {
//------Intercom Snippet------
window.intercomSettings = {
    name: jQuery(".widgetLabel.boldLabel").html(),
    email: jQuery(".widgetLabel.boldLabel").html(),
    app_id: "sfpqql0z"
  };
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/sfpqql0z';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()
//----------------------------

// Create Document
jQuery('#document_create\\:nxw_documentCreateButtons_CREATE_DOCUMENT').click(function(){
	var pathname = window.location.pathname;
	if(pathname.indexOf("UserWorkspaces") > -1){
		Intercom('trackEvent', 'new document on UserWorkspace');
	}else {
		var type = jQuery(".mainNoTabs h3").html().replace("Create a new document ","").replace("\n","").trim();
		Intercom('trackEvent', 'new document: '+type);
	}
});

// Create new Navigation Tree
jQuery('#document_create\\:nxw_documentCreateButtons_CREATE_WORKSPACE').click(function(){
	Intercom('trackEvent', 'new workspace');
});

// Create new User
var fn_user = function(){
	Intercom('trackEvent', 'new user');
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
	Intercom('trackEvent', 'workflow start');
});

// Drag 'n' Drop
jQuery('body').on("drop",function(event) { 
	alert("Dropped!"); 
});


}); //**window.ready**
