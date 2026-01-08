# 个人学术主页 | Academic Homepage

一个现代化、响应式的个人学术主页模板，专为博士研究生和学术研究者设计。

## ✨ 特性

- 🎨 **现代化设计** - 简洁优雅的界面，支持深色/浅色模式自动切换
- 🌐 **中英双语** - 采用双文件方案，简单易维护
- 📱 **完全响应式** - 完美适配桌面、平板和移动设备
- 🚀 **性能优化** - 轻量级设计，快速加载
- ♿ **可访问性** - 遵循 WCAG 标准
- 🎯 **SEO 友好** - 优化的元标签和语义化 HTML
- 📄 **打印友好** - 支持打印为 PDF 简历
- 🔧 **易于定制** - 模块化代码，方便修改

## 📋 内容板块

- **关于我** - 个人简介和研究兴趣
- **教育经历** - 时间线展示教育背景
- **研究方向** - 卡片式展示研究领域
- **论文发表** - 规范的学术论文列表
- **科研项目** - 项目展示和技术栈
- **荣誉奖项** - 获奖经历展示
- **学术服务** - 审稿和组织经历

## 🚀 快速开始

### 1. 克隆或下载项目

```bash
git clone <your-repository-url>
cd academic-homepage
```

### 2. 目录结构

```
academic-homepage/
├── index.html              # 中文主页面 ⭐
├── index-en.html           # 英文主页面 ⭐
├── styles/
│   ├── main.css           # 主样式文件
│   └── dark-mode.css      # 深色模式样式
├── scripts/
│   └── main.js            # 交互脚本
├── assets/
│   └── images/            # 图片资源
│       ├── profile.jpg    # 个人头像
│       ├── bea-award.png  # 奖项图片
│       └── scholarship.png
├── README.md              # 项目说明
├── BILINGUAL_GUIDE.md     # 双语版本使用指南 📚
└── QUICK_START.md         # 快速开始指南
```

### 3. 个性化配置

#### 📝 双语版本说明

本项目采用**双文件方案**实现中英双语：
- `index.html` - 中文版本
- `index-en.html` - 英文版本

**为什么选择双文件方案？**
- ✅ 维护简单直观，无需复杂的 i18n 系统
- ✅ SEO 友好，搜索引擎可以分别索引
- ✅ 灵活性高，可针对不同语言做细微调整
- ✅ 无 JavaScript 依赖，性能更好

详细使用说明请查看 [BILINGUAL_GUIDE.md](BILINGUAL_GUIDE.md)

#### 修改个人信息

分别编辑 `index.html` (中文版) 和 `index-en.html` (英文版)，更新以下内容：

1. **基本信息** (第 82-88 行)
   - 姓名、邮箱、GitHub 链接等

2. **关于我** (第 106-128 行)
   - 个人简介、研究兴趣、学术背景

3. **教育经历** (第 118-132 行)
   - 添加/修改教育背景

4. **论文发表** (第 134-152 行)
   - 添加已发表的论文

5. **科研项目** (第 154-186 行)
   - 展示研究项目

6. **荣誉奖项** (第 154-172 行)
   - 添加获奖经历

#### 添加个人头像和图片

将您的照片放入 `assets/images/` 目录：

- `profile.jpg` - 个人头像 (推荐尺寸: 400x400px)
- `bea-award.png` - 奖项证书或徽章
- `scholarship.png` - 奖学金证书

#### 修改配色方案

编辑 `styles/main.css` 中的 CSS 变量（第 2-23 行）：

```css
:root {
  --brand-primary: #38bdf8;    /* 主品牌色 */
  --brand-secondary: #22d3ee;  /* 次品牌色 */
  --accent: #818cf8;           /* 强调色 */
  /* ... 更多颜色变量 */
}
```

### 4. 本地预览

直接在浏览器中打开 `index.html` 文件即可预览。

或者使用本地服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js (需要安装 http-server)
npx http-server

# 使用 VS Code Live Server 插件
右键点击 index.html -> Open with Live Server
```

访问 `http://localhost:8000` 查看效果。

## 🌐 部署

### GitHub Pages

1. 将项目推送到 GitHub 仓库
2. 进入仓库设置 Settings → Pages
3. 选择 Source: `main` 分支
4. 保存后访问 `https://yourusername.github.io/repository-name`

### Netlify

1. 将项目推送到 Git 仓库
2. 在 Netlify 中导入仓库
3. 构建设置保持默认即可
4. 部署后获得自定义域名

### Vercel

1. 将项目推送到 Git 仓库
2. 在 Vercel 中导入仓库
3. 一键部署

## 🎨 自定义样式

### 修改字体

在 `styles/main.css` 中修改字体设置：

```css
body {
  font-family: 'Your Font', ui-sans-serif, system-ui, sans-serif;
}
```

### 添加 Google Fonts

在 `index.html` 的 `<head>` 中添加：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 调整间距和布局

修改 `styles/main.css` 中的间距变量：

```css
:root {
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  /* ... */
}
```

## 📝 添加新内容

### 添加新的论文

在 `index.html` 的论文发表部分添加：

```html
<div class="publication-item">
  <div class="pub-title">
    <strong>您的名字</strong>, 合著者. (2025). 论文标题.
  </div>
  <div class="pub-venue"><em>会议/期刊名称</em></div>
  <div class="pub-links">
    <a href="链接" class="pub-link" target="_blank">PDF</a>
  </div>
</div>
```

### 添加新的项目

```html
<div class="project-card">
  <div class="project-header">
    <h3>项目名称</h3>
    <span class="project-status active">进行中</span>
  </div>
  <p class="project-desc">项目描述</p>
  <div class="project-tech">
    <span class="tech-tag">技术1</span>
    <span class="tech-tag">技术2</span>
  </div>
</div>
```

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 现代样式特性（CSS Variables, Grid, Flexbox）
- **Vanilla JavaScript** - 无依赖的原生 JS
- **SVG Icons** - 轻量级图标

## 📱 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 📄 许可证

本项目采用 MIT 许可证。您可以自由使用、修改和分发。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

如有问题或建议，请通过以下方式联系：

- 邮箱: jiyuanan.blcu@gmail.com
- GitHub: [@JiyuanAn](https://github.com/JiyuanAn)

## 🙏 致谢

感谢所有为开源社区做出贡献的开发者！

---

**最后更新**: 2025年1月

如果这个项目对您有帮助，请给一个 ⭐️ Star！

