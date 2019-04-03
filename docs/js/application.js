"use strict";

/* globals Modernizr */
(function app() {
  var $root = document.querySelector('html');
  $root.classList.remove('no-js');
  Modernizr.on('webp', function (result) {
    if (result) {
      $root.classList.add('webp');
    }

    if (result.lossless) {
      $root.classList.add('webp-lossless');
    }
  });
})();