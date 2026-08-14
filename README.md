# 无畏契约新手指南

面向零基础 FPS 玩家的中文《无畏契约》静态指南站点，覆盖新手基础、地图、枪械、英雄、战术、训练与背景故事。

**在线地址**：[https://yxtman.github.io/git/](https://yxtman.github.io/git/)

## 本地预览

可直接用浏览器打开 `index.html`，或在本目录启动任意静态文件服务器。

## 内容更新

- 英雄、地图池和技能信息以游戏内正式服版本为准。
- 每次版本更新后，请同步检查页脚版本日期、`agents.html` 与 `maps.html` 的动态内容。
- 地图图片来自公开游戏资料；新增地图时需在 `js/main.js` 的 `LABELS` 中补充包点标签坐标。

## 发布前检查

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File tests/check-site.ps1
node --check js/main.js
```
