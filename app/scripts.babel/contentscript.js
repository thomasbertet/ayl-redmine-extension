'use strict';

var sitePattern = /redmine\.ayl\.io.*/;
var styleFiles = [
  'styles/application.css'
];

var appendStyle = function(url) {
  let link = document.createElement('link');
  link.href = chrome.extension.getURL(url);
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.media = 'screen,print';

  document.getElementsByTagName('head')[0].appendChild(link);

  console.debug(`Site appended: ${url}`);
};

console.debug('Extension enabled.');

if (window.location.host.match(sitePattern).length > 0) {
  styleFiles.forEach(function(url) {
    appendStyle(url);
  });
}
