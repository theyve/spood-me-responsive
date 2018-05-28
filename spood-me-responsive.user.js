// ==UserScript==
// @name spood.me - responsive
// @description A userscript which tries to make spood.me less of a hassle to use on a small screen.
// @copyright 2018, Dave Spengeler (davespengeler.ch)
// @version 0.1.0
// @license GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
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