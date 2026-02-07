# 🎉 YouTube 实时字幕翻译扩展 - 安装完成！

## ✅ 扩展已准备就绪

所有文件已生成，包括：
- ✅ 核心代码（content.js, background.js）
- ✅ 用户界面（popup.html, popup.js）
- ✅ 样式文件（styles.css）
- ✅ 图标文件（icon16.png, icon48.png, icon128.png）
- ✅ 配置文件（manifest.json）

## 📦 立即安装

### Chrome / Edge 安装步骤

1. **打开扩展管理页面**
   ```
   chrome://extensions/
   ```
   或者：菜单 → 更多工具 → 扩展程序

2. **开启开发者模式**
   - 点击右上角的"开发者模式"开关

3. **加载扩展**
   - 点击"加载已解压的扩展程序"
   - 选择文件夹：
     ```
     /Users/marsoran/.openclaw/workspace/youtube-translator-extension
     ```

4. **完成！**
   - 扩展图标会出现在浏览器工具栏
   - 红色背景，带有播放按钮和"A→中"标识

### Firefox 安装步骤

1. **打开调试页面**
   ```
   about:debugging#/runtime/this-firefox
   ```

2. **临时加载**
   - 点击"临时加载附加组件"
   - 选择文件：
     ```
     /Users/marsoran/.openclaw/workspace/youtube-translator-extension/manifest.json
     ```

3. **完成！**
   - 注意：Firefox 的临时加载在浏览器重启后会失效

## 🎮 使用方法

### 第一次使用

1. **打开 YouTube 视频**
   - 访问任意 YouTube 视频
   - 例如：https://www.youtube.com/watch?v=dQw4w9WgXcQ

2. **开启字幕**
   - 点击视频播放器下方的 **CC** 按钮
   - 确保字幕显示出来

3. **查看翻译**
   - 翻译后的中文字幕会自动显示在原字幕上方
   - 原字幕和译文同时显示，方便对照

### 调整设置

点击浏览器工具栏的扩展图标，可以：
- ✅ 开启/关闭翻译功能
- ✅ 选择目标语言（默认简体中文）
- ✅ 支持 8 种语言

## 🌟 功能特性

- **实时翻译** - 字幕出现即翻译，几乎无延迟
- **双语显示** - 原文和译文同时显示
- **智能缓存** - 相同内容不重复翻译
- **原生样式** - 完美融入 YouTube 界面
- **全屏支持** - 全屏模式下也能正常显示

## 🔧 故障排除

### 翻译不显示？

1. **检查字幕**
   - 确认视频有字幕（CC 按钮可点击）
   - 确认字幕已开启（CC 按钮高亮）

2. **刷新页面**
   - 按 F5 或 Cmd+R 刷新
   - 重新开启字幕

3. **检查控制台**
   - 按 F12 打开开发者工具
   - 查看 Console 是否有错误信息
   - 应该能看到 `[YT Translator] 初始化...` 等日志

### 翻译延迟？

- 检查网络连接
- Google Translate API 可能在某些地区受限
- 可以考虑修改代码使用其他翻译 API

### 样式错乱？

- YouTube 可能更新了界面
- 提交 Issue 反馈
- 或者自行调整 styles.css

## 📂 文件位置

```
/Users/marsoran/.openclaw/workspace/youtube-translator-extension/
├── manifest.json       # 扩展配置
├── content.js          # 核心翻译逻辑
├── styles.css          # 字幕样式
├── popup.html          # 设置界面
├── popup.js            # 设置逻辑
├── background.js       # 后台服务
├── icons/              # 图标文件
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md           # 完整文档
└── INSTALL.md          # 本文件
```

## 🚀 高级功能

### 更换翻译引擎

编辑 `content.js` 的 `translateSubtitle` 方法，可以替换为：
- DeepL API（翻译质量更高）
- OpenAI API（支持上下文理解）
- 本地翻译模型（完全离线）

### 自定义样式

编辑 `styles.css` 可以调整：
- 字幕位置（bottom 属性）
- 字体大小（font-size）
- 背景颜色（background-color）
- 透明度（rgba 的 alpha 值）

### 添加快捷键

在 `manifest.json` 中添加 commands 配置

## 💡 提示

- 第一次翻译可能稍慢，之后会使用缓存
- 支持自动生成字幕和手动上传字幕
- 全屏模式下字幕位置会自动调整
- 可以同时观看多个视频，每个都会独立翻译

## 🎉 开始使用

现在就去 YouTube 试试吧！

推荐测试视频：
- TED 演讲（英文字幕）
- 日本动漫（日文字幕）
- 韩国综艺（韩文字幕）

享受无障碍的 YouTube 观看体验！🍊
