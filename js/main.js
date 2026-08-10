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

/* 地图页:在官方地图图上叠加 A/B/C/中路 标签
   坐标来自 Riot 游戏数据(valorant-api 的 callout 位置经包围盒归一化),
   与各图 displayicon 一一对应;label 百分比 = 图片宽高的百分比 */
(function () {
  var LABELS = {
    'Haven.png':    [['A', 95.9, 34.6], ['B', 52, 34.6], ['C', 9.7, 36.8], ['中路', 34.8, 64.1]],
    'Bind.png':     [['A', 73.1, 75.5], ['B', 75.6, 18.3]],
    'Split.png':    [['A', 92.8, 24.4], ['B', 9, 29.9], ['中路', 48.1, 67.2]],
    'Ascent.png':   [['A', 89.8, 31.8], ['B', 18.1, 22.4], ['中路', 47.3, 38.7]],
    'Icebox.png':   [['A', 8.5, 66.4], ['B', 94.4, 61], ['中路', 46.3, 47.1]],
    'Breeze.png':   [['A', 57, 94], ['B', 72.3, 6], ['中路', 51.7, 68.1]],
    'Fracture.png': [['A', 42.7, 94], ['B', 43.3, 6]],
    'Pearl.png':    [['A', 61.5, 94], ['B', 54.5, 19.8], ['中路', 45.1, 51.6]],
    'Lotus.png':    [['A', 76.5, 94], ['B', 59.9, 52.3], ['C', 63.7, 8.9]],
    'Sunset.png':   [['A', 71.5, 90], ['B', 55.2, 6], ['中路', 43, 62.2]],
    'Abyss.png':    [['A', 87.9, 49.6], ['B', 12.3, 40.1], ['中路', 35.9, 62.1]],
    'Corrode.png':  [['A', 78.5, 34.4], ['B', 24.9, 40], ['中路', 49.7, 51.9]],
    'Summit.png':   [['A', 59.9, 94], ['B', 67.9, 12.1], ['中路', 58.3, 48.5]]
  };
  var COLOR = { 'A': 'mm-a', 'B': 'mm-b', 'C': 'mm-c', '中路': 'mm-mid' };

  document.querySelectorAll('.minimap-img').forEach(function (wrap) {
    var img = wrap.querySelector('img');
    if (!img) return;
    var key = (img.getAttribute('src') || '').split('/').pop();
    var labels = LABELS[key];
    if (!labels) return;
    labels.forEach(function (lb) {
      var s = document.createElement('span');
      s.className = 'mm-label ' + (COLOR[lb[0]] || '');
      s.textContent = lb[0];
      s.style.left = lb[1] + '%';
      s.style.top = lb[2] + '%';
      wrap.appendChild(s);
    });
  });
})();
