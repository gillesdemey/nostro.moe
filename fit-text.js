fitty('.fit');

(function() {
  // called when additional fonts loaded
  function redrawFitty() {
    document.documentElement.classList.add('fonts-loaded');
    fitty.fitAll();
  }

  // CSS Font Loading API
  function native() {
    // this URL will only load the "NOSTRM" characters – really fast!
    var fontKenia = new FontFace('Kenia', 'url(https://fonts.gstatic.com/l/font?kit=jizURE5PuHQH9qCLNUeswNuLZXtXqWFn&skey=4963fd4437f2b5f&v=v24)', {
      style: 'normal',
      weight: '400',
      display: 'swap'
    });
    document.fonts.add(fontKenia);
    fontKenia.load();

    // if all fonts loaded redraw fitty
    document.fonts.ready.then(redrawFitty);
  }

  // Does the current browser support the CSS Font Loading API?
  if ('fonts' in document) {
    native();
  }
})();
