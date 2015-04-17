# Nuxeo Intercom.io

## Synopsis

This Nuxeo plugin integrates Intercom.io with Nuxeo, sending events to the Intercom.io API on certain user interactions.

## Code Example

``` javascript
// NX Drive installation
jQuery('.nuxeoDrivePackages a').click(function(){
	Intercom('trackEvent', 'nuxeo drive install');
});
```

## Motivation

With Intercom.io, a customer relationship management software (CRM), we can provide a better user experience. It helps us analyze user interaction with our product and provide the best customer service.

## Installation

In order to use this plugin, you must deploy it along with [nuxeo-js-addon-enabler](https://github.com/athento/nuxeo-js-addons-enabler) and add **intercom.js** to the **custom-includes.xhtml** file.

``` xml
...
<!-- Include your own js files here from other plug-ins -->
<script type="text/javascript"
  src="#{baseURL}js/?scripts=intercom.js%7Cother-plugin.js">
</script>
...
```
