// Accent color picker in the hero code window
document.querySelectorAll('.swatches button').forEach(function (b) {
  b.addEventListener('click', function () {
    var root = document.documentElement;
    var dark =
      root.dataset.theme === 'dark' ||
      (root.dataset.theme !== 'light' &&
        matchMedia('(prefers-color-scheme: dark)').matches);
    root.style.setProperty('--accent', dark ? b.dataset.d : b.dataset.c);
  });
});
