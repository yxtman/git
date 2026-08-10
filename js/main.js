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
    'Haven.png':    [['A', 92.9, 37.3], ['B', 52, 37.3], ['C', 12.5, 39.1], ['中路', 35.9, 62]],
    'Bind.png':     [['A', 74.4, 72.5], ['B', 76.7, 18.5]],
    'Split.png':    [['A', 86.1, 27.1], ['B', 13, 32.2], ['中路', 47.1, 66.8]],
    'Ascent.png':   [['A', 87.2, 32.2], ['B', 20.8, 24], ['中路', 47.8, 38.2]],
    'Icebox.png':   [['A', 14.1, 62.5], ['B', 94.6, 58.1], ['中路', 49.5, 46.6]],
    'Breeze.png':   [['A', 56.5, 95], ['B', 70.8, 4], ['中路', 51.5, 65.7]],
    'Fracture.png': [['A', 40.7, 92], ['B', 41.2, 6.7]],
    'Pearl.png':    [['A', 61.3, 93.8], ['B', 54.3, 21.9], ['中路', 45, 51.3]],
    'Lotus.png':    [['A', 74.8, 93.9], ['B', 59.2, 52], ['C', 62.8, 9.8]],
    'Sunset.png':   [['A', 70.7, 88.9], ['B', 55.6, 4], ['中路', 44.3, 61.7]],
    'Abyss.png':    [['A', 87.5, 49.8], ['B', 12.6, 45.5], ['中路', 36, 55.4]],
    'Corrode.png':  [['A', 77.9, 36.8], ['B', 26.9, 41.5], ['中路', 50.5, 51.5]],
    'Summit.png':   [['A', 61.1, 93.9], ['B', 68.8, 13.3], ['中路', 59.6, 48.4]]
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
