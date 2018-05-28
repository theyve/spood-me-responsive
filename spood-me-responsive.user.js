// ==UserScript==
// @name spood.me - responsive
// @description A userscript which tries to make spood.me less of a hassle to use on a small screen.
// @copyright 2018, Dave Spengeler (davespengeler.ch)
// @icon https://raw.githubusercontent.com/theyve/spood-me-responsive/master/icon-32x32.png
// @version 0.1.9
// @license GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @match *://*.spood.me/*
// @run-at document-idle
// ==/UserScript==

function addCSS(fileName) {
  var head = document.head;
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;
  head.appendChild(link);
}
function addViewportMetatag() {
  var meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1";
  document.getElementsByTagName('head')[0].appendChild(meta);
}

console.log("es funtzt, hoffentlich!");

addViewportMetatag();
addCSS('https://rawgit.com/theyve/spood-me-responsive/master/style.css');