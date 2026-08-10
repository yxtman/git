/* 全站轻量交互:移动端导航折叠 */
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });

  // 点击导航链接后自动收起菜单(移动端)
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.textContent = '☰';
    }
  });
})();
