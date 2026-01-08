# 📁 项目结构说明

本文档详细说明了个人学术主页项目的完整文件结构。

## 🗂️ 完整目录树

```
academic-homepage/
│
├── index.html              # 主页面（入口文件）⭐
│
├── styles/                 # 样式文件夹
│   ├── main.css           # 主样式文件（核心样式）⭐
│   └── dark-mode.css      # 深色模式样式
│
├── scripts/                # JavaScript 文件夹
│   └── main.js            # 主脚本文件（交互功能）⭐
│
├── assets/                 # 资源文件夹
│   └── images/            # 图片资源
│       ├── README.md      # 图片使用说明
│       ├── .gitkeep       # Git 占位符
│       ├── profile.jpg    # 个人头像（需要自行添加）
│       ├── bea-award.png  # 奖项图片（需要自行添加）
│       └── scholarship.png # 奖学金证书（需要自行添加）
│
├── config.js              # 网站配置文件（可选）
│
├── README.md              # 项目主文档（详细说明）📚
├── QUICK_START.md         # 快速开始指南（5分钟上手）🚀
├── CHANGELOG.md           # 更新日志
├── LICENSE                # MIT 开源许可证
├── .gitignore             # Git 忽略文件配置
│
└── PROJECT_STRUCTURE.md   # 本文件（项目结构说明）
```

## 📄 核心文件说明

### 1. index.html ⭐ 必须修改
**用途**: 网站主页面，包含所有内容  
**需要修改**:
- 个人信息（姓名、邮箱、GitHub 等）
- 关于我
- 教育经历
- 论文发表
- 科研项目
- 荣誉奖项

**位置**: 项目根目录  
**文件大小**: ~15KB

---

### 2. styles/main.css ⭐ 可选修改
**用途**: 定义网站的所有样式和布局  
**特点**:
- 使用 CSS 变量（方便自定义配色）
- 响应式设计
- 现代化布局（Grid + Flexbox）
- 平滑动画效果

**需要修改**（可选）:
- CSS 变量中的配色方案（第 2-23 行）
- 字体设置
- 间距和尺寸

**文件大小**: ~18KB

---

### 3. scripts/main.js ⭐ 一般不需要修改
**用途**: 提供交互功能  
**功能**:
- 平滑滚动
- 导航高亮
- 滚动动画
- 复制邮箱
- 键盘快捷键
- 事件追踪

**需要修改**: 通常不需要，除非想添加新功能

**文件大小**: ~5KB

---

### 4. config.js 📝 配置文件
**用途**: 集中管理网站配置  
**包含**:
- 个人信息
- 研究方向
- 社交媒体链接
- Google Analytics 配置
- 主题颜色

**优点**: 避免直接修改 HTML，便于维护

---

### 5. assets/images/ 🖼️ 图片文件夹
**需要添加的图片**:

| 文件名 | 用途 | 推荐尺寸 | 格式 |
|--------|------|----------|------|
| profile.jpg | 个人头像 | 400x400px | JPG/PNG |
| bea-award.png | BEA奖项 | 800-1200px宽 | PNG |
| scholarship.png | 奖学金证书 | 800-1200px宽 | PNG/JPG |

**说明**: 详见 `assets/images/README.md`

---

## 📚 文档文件

### README.md - 完整项目文档
- 项目介绍和特性
- 详细使用说明
- 自定义指南
- 部署教程
- 技术栈说明

**适合**: 想要深入了解项目的用户

---

### QUICK_START.md - 5分钟快速开始
- 简化的配置步骤
- 快速上手指南
- 基础问题解答

**适合**: 想要快速部署的用户

---

### CHANGELOG.md - 更新日志
- 版本历史
- 功能更新记录
- 未来计划

**适合**: 了解项目发展历程

---

## 🔧 配置文件

### .gitignore
**用途**: 告诉 Git 哪些文件不需要上传  
**忽略内容**:
- 系统文件（.DS_Store, Thumbs.db）
- IDE 配置文件
- 临时文件
- 日志文件

---

### LICENSE
**用途**: MIT 开源许可证  
**说明**: 允许自由使用、修改和分发

---

## 🎯 文件优先级

### ⭐ 立即需要处理的文件
1. **index.html** - 修改个人信息
2. **assets/images/** - 添加个人图片
3. **config.js** - 更新配置（可选）

### 📝 可选修改的文件
4. **styles/main.css** - 自定义样式
5. **README.md** - 更新项目说明

### ✅ 无需修改的文件
6. **scripts/main.js** - JavaScript 功能
7. **styles/dark-mode.css** - 深色模式
8. **.gitignore** - Git 配置
9. **LICENSE** - 许可证

---

## 📊 文件大小统计

| 类型 | 数量 | 总大小 |
|------|------|--------|
| HTML | 1 | ~15 KB |
| CSS | 2 | ~20 KB |
| JavaScript | 1 | ~5 KB |
| Markdown | 5 | ~25 KB |
| 配置文件 | 3 | ~3 KB |
| **总计** | **12** | **~68 KB** |

> 注意: 不包括图片文件大小

---

## 🚀 快速启动流程

1. **修改 `index.html`**
   - 更新个人信息
   - 添加论文列表
   - 修改项目介绍

2. **添加图片到 `assets/images/`**
   - profile.jpg
   - bea-award.png
   - scholarship.png

3. **本地预览**
   ```bash
   python -m http.server 8000
   ```

4. **部署到 GitHub Pages**
   - 创建仓库
   - 推送代码
   - 启用 Pages

详细步骤请参考 [QUICK_START.md](QUICK_START.md)

---

## 💡 自定义建议

### 轻度自定义（10分钟）
✅ 修改个人信息  
✅ 添加图片  
✅ 更新论文列表

### 中度自定义（30分钟）
✅ 修改配色方案  
✅ 调整布局间距  
✅ 添加新的内容板块

### 深度自定义（2小时+）
✅ 重构样式架构  
✅ 添加新功能  
✅ 集成第三方服务

---

## 🆘 问题排查

### 样式不生效？
检查 CSS 文件路径：`./styles/main.css`

### 图片不显示？
检查图片路径：`./assets/images/profile.jpg`

### JavaScript 报错？
打开浏览器控制台查看具体错误信息

### 更多问题？
查看 [QUICK_START.md](QUICK_START.md) 的"常见问题"部分

---

## 📞 技术支持

- **文档**: README.md
- **快速指南**: QUICK_START.md
- **问题反馈**: GitHub Issues
- **联系方式**: jiyuanan.blcu@gmail.com

---

**最后更新**: 2025-01-08  
**项目版本**: 1.0.0  
**维护者**: 安纪元 (Jiyuan An)


