// ==UserScript==
// @name spood.me - responsive
// @description A userscript which tries to make spood.me less of a hassle to use on a small screen.
// @copyright 2018, Dave Spengeler (davespengeler.ch)
// @icon https://spood.me/img/site/logo.png
// @version 0.1.0
// @include *.spood.me/*
// ==/UserScript==

function addCSS(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

addCSS('https://rawgit.com/theyve/spood-me-responsive/master/style.css');