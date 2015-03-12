// ==UserScript==
// @name         ymail_fullview.js
// @namespace    https://in.yahoo.com/
// @version      0.1
// @description  Removes the Y! Mail Right Rail Ad for a cleaner 
// 		 viewing experience
// @author       Alok Singh
// @match        https://*.mail.yahoo.com/*
// @grant none
// ==/UserScript==
// Simple Greasemonkey/Tampermonkey Script to remove the Right Rail 
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

