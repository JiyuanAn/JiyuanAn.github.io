# 安纪元 | Jiyuan An — 个人学术主页

[https://jiyuanan.github.io](https://jiyuanan.github.io)

中国人民大学信息学院博士研究生安纪元的个人学术主页，采用静态 HTML 构建，通过 GitHub Pages 部署。站点提供中文（`index.html`）与英文（`index-en.html`）两个版本，内容需分别维护以保持同步。

## 页面结构

| 板块 | 说明 |
|------|------|
| 关于我 | 简介、所属研究组与导师 |
| 教育经历 | 博士 / 硕士 / 学士 |
| 研究方向 | 大模型与智能体、代码生成与测试、AI4Science |
| 论文发表 | 按年份列出的出版物 |
| 荣誉奖项 | 竞赛、奖学金及毕业相关荣誉 |
| 学术服务 | 审稿等学术活动 |

## 目录结构

```
├── index.html              # 中文主页
├── index-en.html           # 英文主页
├── styles/
│   ├── main.css            # 主样式
│   └── dark-mode.css       # 深色模式
├── scripts/
│   └── main.js             # 交互脚本（导航高亮等）
├── assets/
│   └── images/             # 头像、校徽、奖项图片等
├── papers/                 # 本地 PDF 论文（如有）
└── LICENSE                 # MIT
```

## 内容更新

日常维护直接编辑 HTML 文件，无需构建步骤。修改中文内容后，请同步更新 `index-en.html` 中对应部分。

**常用修改位置：**

- **个人信息与联系方式** — 侧边栏（`sidebar`）
- **教育经历** — `edu-item` 区块；校徽图片位于 `assets/images/`
- **论文** — `pub-item` 区块，按 `pub-year` 分组
- **奖项** — `award-item` 区块，配图存放于 `assets/images/`
- **样式** — `styles/main.css` 中的 CSS 变量（配色、间距等）

**添加一篇论文示例：**

```html
<div class="pub-item">
  <div class="pub-title">
    <strong>Jiyuan An</strong>, Co-author. Paper Title.
  </div>
  <div class="pub-venue"><em>Venue Name</em>, Year.</div>
  <div class="pub-links">
    <a class="pub-link" href="URL" target="_blank" rel="noreferrer">PDF</a>
  </div>
</div>
```

## 本地预览

在项目根目录启动静态服务器后访问 `http://localhost:8000`：

```bash
python -m http.server 8000
```

## 部署

本仓库为 GitHub Pages 用户站点（`username.github.io`）。将变更推送到 `main` 分支后，GitHub Pages 会自动发布，通常数分钟内生效。

## 技术说明

- HTML5 + CSS3（CSS Variables、Flexbox / Grid）
- 原生 JavaScript，无前端框架依赖
- 响应式布局，支持系统深色模式

## 许可

本项目采用 [MIT License](LICENSE) 发布。如需复用页面结构，请注明出处。

## 联系

- 邮箱：[jiyuanan.blcu@gmail.com](mailto:jiyuanan.blcu@gmail.com)
- GitHub：[@JiyuanAn](https://github.com/JiyuanAn)

---

最后更新：2026 年 6 月
