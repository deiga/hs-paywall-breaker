// ==UserScript==
// @name         HS.fi paywall remover
// @version      0.1
// @description  Remove hs.fi paywall
// @author       deiga
// @match        http://www.hs.fi
// @match        http://www.hs.fi/*
// @grant        none
// ==/UserScript==
localStorage.removeItem('_hs_paywall_hits');
