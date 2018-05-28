// ==UserScript==
// @name spood.me - responsive
// @description A userscript which tries to make spood.me less of a hassle to use on a small screen.
// @copyright 2018, Dave Spengeler (davespengeler.ch)
// @icon https://raw.githubusercontent.com/theyve/spood-me-responsive/master/icon-32x32.png
// @version 0.1.2
// @license GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @match *://www.spood.me/*
// ==/UserScript==

function addCSS(fileName) {

  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;

  head.appendChild(link);
}

console.log("es funtzt, hoffentlich!");
addCSS('https://rawgit.com/theyve/spood-me-responsive/master/style.css');