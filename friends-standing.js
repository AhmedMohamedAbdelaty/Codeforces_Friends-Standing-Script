// ==UserScript==
// @name Friend standings
// @namespace http://tampermonkey.net/
// @version 0.1
// @description Edit standings button to go to friends standings
// @author Ahmed Mohamed Abdelaty
// @icon https://www.google.com/s2/favicons?sz=64&domain=codeforces.com
// @match https://codeforces.com/*/problem/*
// @match https://codeforces.com/contest/*
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

    // Select the standings button element
    let standingsBtn = document.querySelector(".second-level-menu-list > li:nth-child(6) > a");

    // Change its href attribute to point to the friends standings URL
    standingsBtn.setAttribute("href", `https://codeforces.com/contest/${contestId}/standings/friends/true`);
})();
