// ==UserScript==
// @name         Remove Y! Mail Side Ad Div
// @namespace    https://in.yahoo.com/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        https://*.mail.yahoo.com/*
// @grant none
// ==/UserScript==
// Simple Greasemonkey/Tampermonkey Script to remove the Right Side 
// Ads Pane in Yahoo Mail. Works for Firefox and Google Chrome.

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
        style = document.createElement('style');
	style.type = 'text/css';
        style.innerHTML = css;
	head.appendChild(style);
}

addGlobalStyle('#shellcontent { right: 0px !important; }');

