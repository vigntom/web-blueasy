/* globals Modernizr */

(function app () {
  const $root = document.querySelector('html')

  $root.classList.remove('no-js')

  Modernizr.on('webp', result => {
    if (result) { $root.classList.add('webp') }
    if (result.lossless) { $root.classList.add('webp-lossless') }
  })
}())
