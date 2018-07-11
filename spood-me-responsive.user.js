// ==UserScript==
// @name spood.me - responsive
// @description A userscript which tries to make spood.me less of a hassle to use on a small screen.
// @copyright 2018, Dave Spengeler (davespengeler.ch)
// @icon https://raw.githubusercontent.com/theyve/spood-me-responsive/master/icon-32x32.png
// @version 1.3
// @license GPL-3.0+; http://www.gnu.org/licenses/gpl-3.0.txt
// @match *://*.spood.me/*
// @exclude *://blog.spood.me/*
// @run-at document-idle
// ==/UserScript==

function addCSS(fileName) {
  var body = document.body;
  var link = document.createElement("link");
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = fileName;
  body.insertBefore(link, null);
}
function addViewportMetatag() {
  var meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1";
  document.getElementsByTagName('head')[0].appendChild(meta);
}
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookieExpirationDate() {
  var expirationDate = new Date();
  var time = expirationDate.getTime();
  var expireTime = Math.floor(time) + (1209600 * 1000); //1209600 seconds = two weeks
  expirationDate.setTime(expireTime);
  document.cookie = 'JSESSIONID='+getCookie("JSESSIONID")+';expires='+expirationDate.toUTCString()+';path=/';
}

addViewportMetatag();
addCSS('https://rawgit.com/theyve/spood-me-responsive/master/style.css');
setCookieExpirationDate();
