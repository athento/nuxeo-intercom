# Nuxeo Intercom.io

## Synopsis

This Nuxeo plugin integrates [Intercom.io](https://www.intercom.io/) with Nuxeo, sending events to the Intercom.io API on certain user interactions.

## Code Example

``` javascript
// NX Drive installation
jQuery('.nuxeoDrivePackages a').click(function(){
	Intercom('trackEvent', 'nuxeo drive install');
});
```

## Motivation

With [Intercom.io](https://www.intercom.io/), a customer relationship management software (CRM), we can provide a better user experience. It helps us analyze user interaction with our product and provide the best customer service.

## Installation

In order to use this plugin, you must deploy it along with [nuxeo-js-addon-enabler](https://github.com/athento/nuxeo-js-addons-enabler) and add **intercom.js** to the **custom-includes.xhtml** file.

``` javascript
...
var source = "#{baseURL}js/?scripts=";
// Include your own js file here from other plug-ins
var scripts = [ "intercom.js", "other.js", "plugins.js" ];
var scriptsLength = scripts.length;
...
```

Finally, you should just moddify your [intercom.js](src/main/resources/web/nuxeo.war/scripts/intercom.js) snippet with your own configuration provided by Intercom:
``` javascript
//------Intercom Snippet------
window.intercomSettings = {
    name: jQuery(".widgetLabel.boldLabel").html(),
    email: jQuery(".widgetLabel.boldLabel").html(),
    app_id: "sfpqql0z"
  };
```

## Internet Explorer 11 Notice

For those users using IE11 and experiencing troubles with events, your browser must be up to date using Windows Update. It may not work otherwise.

