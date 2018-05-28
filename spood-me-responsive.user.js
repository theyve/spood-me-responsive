// ==UserScript==
// @name spood.me - responsive
// @description A userscript which tries to make spood.me less of a hassle to use on a small screen.
// @copyright 2018, Dave Spengeler (davespengeler.ch)
// @icon https://spood.me/img/site/logo.png
// @version 0.1.0
// ==/UserScript==

// ==OpenUserJS==
// @author theyve
// ==/OpenUserJS==



function loadcssfile(filename) {
  var fileref = document.createElement("link")

  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
}

loadcssfile("style.css")