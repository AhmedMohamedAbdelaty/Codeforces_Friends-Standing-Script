// ==UserScript==
// @name Friend standings
// @namespace http://tampermonkey.net/
// @version 0.1
// @description Edit standings button to go to friends standings
// @author Ahmed Mohamed Abdelaty
// @icon https://www.google.com/s2/favicons?sz=64&domain=codeforces.com
// @match https://codeforces.com/*/problem/*
// @match https://codeforces.com/contest/*
// @match https://codeforces.com/gym/*
// @grant none
// ==/UserScript==

(function() {
    'use strict';
// Get the contest ID from the URL
let url = window.location;
let contestId = url.toString().split("/").filter( (x)=> {
    if(typeof x !== 'string') {return;}
    const num = Number(x);
    if(Number.isInteger(num)) {return num;}
}) [0];

// Check if the current URL is a gym or a regular contest
let isGym = /gym/.test(url);

// Select the list of buttons
let buttonsList = document.querySelector(".second-level-menu-list");

// Initialize a variable to store the standings button element
let standingsBtn = null;

// Loop over the list items and compare their text content with "Standings"
for (let i = 0; i < buttonsList.children.length; i++) {
  let button = buttonsList.children[i].querySelector("a");
  if (button.textContent.includes("Standings")) {
    // Found the standings button, assign it to the variable and break the loop
    standingsBtn = button;
    break;
  }
}

// Check if the standings button was found
if (standingsBtn) {
  // Change its href attribute to point to the friends standings URL
  // Use a ternary operator to assign the appropriate URL based on isGym
  standingsBtn.setAttribute("href", isGym ? `https://codeforces.com/gym/${contestId}/standings/friends/true` : `https://codeforces.com/contest/${contestId}/standings/friends/true`);
} else {
  // The standings button was not found, handle the error
  console.error("Could not find the standings button");
}
})();
