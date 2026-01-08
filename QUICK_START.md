# 🚀 快速开始指南

5 分钟快速配置您的个人学术主页（中英双语版本）！

> 💡 **重要提示**: 本项目采用双文件方案实现中英双语。您需要分别编辑 `index.html`（中文）和 `index-en.html`（英文）两个文件。详细说明请查看 [BILINGUAL_GUIDE.md](BILINGUAL_GUIDE.md)

## 第 1 步：准备图片 (2分钟)

将以下图片放入 `assets/images/` 文件夹：

1. **profile.jpg** - 您的个人头像
   - 尺寸：400x400 像素
   - 格式：JPG/PNG
   - 建议：专业照片，简洁背景

2. **bea-award.png** - 奖项图片
   - 尺寸：800-1200 像素宽
   - 格式：PNG/JPG

3. **scholarship.png** - 奖学金证书
   - 尺寸：800-1200 像素宽
   - 格式：PNG/JPG

💡 **临时占位符**：如果暂时没有图片，可以先使用以下链接：
```html
<img src="https://via.placeholder.com/400x400/38bdf8/ffffff?text=Your+Name" alt="临时头像" />
```

## 第 2 步：修改个人信息 (2分钟)

**需要修改两个文件**:
- `index.html` - 中文版
- `index-en.html` - 英文版

建议使用编辑器的分屏功能同时打开两个文件，对照修改。

### 中文版 (index.html)

打开 `index.html`，搜索并替换以下内容：

### 基本信息（第 82-88 行）
```html
<h1>您的姓名 <span class="muted">/ Your Name</span></h1>
<p class="subtitle">您的职位 | 研究方向</p>
```

替换：
- `安纪元` → 您的中文名
- `Jiyuan An` → 您的英文名
- `jiyuanan.blcu@gmail.com` → 您的邮箱
- GitHub 链接 → 您的 GitHub 主页

### 关于我（第 106-116 行）
修改个人简介、研究兴趣、所属机构等信息。

### 教育经历（第 118-132 行）
更新您的教育背景：
- 学校名称
- 专业
- 导师
- 时间

## 第 3 步：添加论文（1分钟）

在论文发表部分（第 134-152 行）添加您的论文：

```html
<div class="publication-item">
  <div class="pub-title">
    <strong>您的名字</strong>, 合作者. (2025). 论文标题.
  </div>
  <div class="pub-venue"><em>会议/期刊名称</em></div>
  <div class="pub-links">
    <a href="论文链接.pdf" class="pub-link" target="_blank">PDF</a>
  </div>
</div>
```

## 第 4 步：本地预览

### 方法一：直接打开
双击 `index.html` 文件，在浏览器中打开。

### 方法二：使用本地服务器（推荐）

**Python 3.x**
```bash
python -m http.server 8000
```

**Node.js**
```bash
npx http-server
```

**VS Code**
安装 "Live Server" 插件，右键点击 index.html → "Open with Live Server"

然后在浏览器访问：`http://localhost:8000`

## 第 5 步：部署到 GitHub Pages

### 5.1 创建 GitHub 仓库
1. 登录 GitHub
2. 点击 "New repository"
3. 仓库名：`yourusername.github.io`（替换 yourusername）
4. 设为 Public
5. 创建仓库

### 5.2 上传代码
```bash
# 在项目文件夹中
git init
git add .
git commit -m "Initial commit: Academic homepage"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### 5.3 启用 GitHub Pages
1. 进入仓库设置 (Settings)
2. 左侧菜单选择 "Pages"
3. Source 选择 "main" 分支
4. 点击 "Save"
5. 等待 1-2 分钟

访问：`https://yourusername.github.io`

## ✅ 检查清单

在发布前，请检查：

- [ ] 个人头像已上传并显示正常
- [ ] 所有个人信息已更新（姓名、邮箱、GitHub等）
- [ ] 教育经历信息准确
- [ ] 论文列表已添加
- [ ] 所有链接可以正常访问
- [ ] 图片加载正常
- [ ] 移动端显示正常
- [ ] 在多个浏览器中测试

## 🎨 进阶自定义

### 修改配色
编辑 `styles/main.css` 第 2-23 行的 CSS 变量：
```css
:root {
  --brand-primary: #38bdf8;  /* 改为您喜欢的颜色 */
}
```

### 添加 Google Analytics
1. 在 `config.js` 中启用并填入您的 GA ID
2. 在 `index.html` 的 `</head>` 前添加 GA 代码

### 添加社交媒体链接
在 `index.html` 的 badges 部分添加更多链接。

## 🆘 常见问题

### Q: 图片不显示？
**A**: 检查文件路径和文件名是否正确，注意大小写。

### Q: 样式错乱？
**A**: 确保 CSS 文件路径正确，检查浏览器控制台是否有错误。

### Q: GitHub Pages 显示 404？
**A**: 等待几分钟让 GitHub 构建页面，确保仓库名正确。

### Q: 如何添加更多内容板块？
**A**: 复制现有 section 的结构，修改 ID 和内容，并在导航栏添加链接。

## 📚 更多资源

- [完整文档](README.md)
- [更新日志](CHANGELOG.md)
- [图片说明](assets/images/README.md)

## 💬 需要帮助？

如有问题，请：
1. 查看 [README.md](README.md) 详细文档
2. 提交 GitHub Issue
3. 发送邮件至：jiyuanan.blcu@gmail.com

---

**祝您使用愉快！** 🎉

如果这个项目对您有帮助，请给一个 ⭐️ Star！

