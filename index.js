var actions = {};

actions.init = function init() {
	studio.log('MONACO editor extension is runnings for html files... ')
};

exports.handleMessage = function handleMessage(message) {
	"use strict";
	var actionName;

	actionName = message.action;

	if (!actions.hasOwnProperty(actionName)) {
		studio.alert("I don't know about this message: " + actionName);
		return false;
	}
	actions[actionName](message);
};
