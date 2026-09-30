// Publication type filter. Without JavaScript every publication stays visible.
(function () {
  var bar = document.querySelector('.filters');
  if (!bar) return;
  bar.hidden = false;
  var buttons = bar.querySelectorAll('button');
  var pubs = document.querySelectorAll('.year-group .pub');
  var groups = document.querySelectorAll('.year-group');
  bar.addEventListener('click', function (e) {
    var btn = e.target.closest('button');
    if (!btn) return;
    var f = btn.getAttribute('data-filter');
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
    pubs.forEach(function (p) { p.hidden = f !== 'all' && p.getAttribute('data-type') !== f; });
    groups.forEach(function (g) { g.hidden = !g.querySelector('.pub:not([hidden])'); });
  });
})();
