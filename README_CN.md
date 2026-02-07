# YouTube 实时字幕翻译扩展

[English Documentation](README.md)

一个轻量级的浏览器扩展，可以实时翻译 YouTube 视频字幕为中文或其他语言。

## ✨ 功能特性

- 🌐 **实时翻译** - 自动检测并翻译 YouTube 字幕
- 🎯 **双语显示** - 原文和译文同时显示，互不干扰
- 🚀 **零延迟** - 使用高效的翻译 API，几乎无延迟
- 💾 **智能缓存** - 缓存翻译结果，避免重复翻译
- 🎨 **原生样式** - 完美融入 YouTube 界面
- 🌍 **多语言支持** - 支持翻译为中文、英文、日文等多种语言

## 📦 安装方法

### Chrome / Edge

1. 下载或克隆本仓库
2. 打开浏览器，访问 `chrome://extensions/`
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择 `youtube-translator-extension` 文件夹
6. 完成！扩展图标会出现在工具栏

### Firefox

1. 下载或克隆本仓库
2. 打开浏览器，访问 `about:debugging#/runtime/this-firefox`
3. 点击"临时加载附加组件"
4. 选择扩展文件夹中的 `manifest.json` 文件
5. 完成！

## 🎮 使用方法

1. **打开 YouTube 视频**
   - 确保视频有字幕（自动生成或手动添加的都可以）
   - 开启字幕显示（点击视频下方的 CC 按钮）

2. **查看翻译**
   - 翻译后的字幕会自动显示在原字幕上方
   - 原字幕和译文同时显示，方便对照学习

3. **调整设置**
   - 点击浏览器工具栏的扩展图标
   - 可以开启/关闭翻译功能
   - 可以选择目标语言（默认简体中文）

## ⚙️ 支持的语言

- 🇨🇳 简体中文
- 🇹🇼 繁体中文
- 🇺🇸 English
- 🇯🇵 日本語
- 🇰🇷 한국어
- 🇪🇸 Español
- 🇫🇷 Français
- 🇩🇪 Deutsch

## 🔧 技术实现

- **翻译引擎**: Google Translate API (免费)
- **字幕检测**: MutationObserver 实时监控 DOM 变化
- **缓存机制**: Map 缓存翻译结果，提升性能
- **样式适配**: 完美适配 YouTube 原生字幕样式

## 📝 文件结构

```
youtube-translator-extension/
├── manifest.json       # 扩展配置文件
├── content.js          # 核心翻译逻辑
├── styles.css          # 字幕样式
├── popup.html          # 设置界面
├── popup.js            # 设置逻辑
├── background.js       # 后台服务
├── icons/              # 扩展图标
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── README.md           # 说明文档
```

## 🚀 高级功能

### 更换翻译引擎

可以在 `content.js` 中替换翻译引擎：

**DeepL API**（翻译质量更高）：
```javascript
const url = 'https://api-free.deepl.com/v2/translate';
// 参考 DeepL 文档实现
```

**OpenAI API**（支持上下文理解）：
```javascript
const url = 'https://api.openai.com/v1/chat/completions';
// 参考 OpenAI 文档实现
```

### 本地翻译模型（完全离线）

使用 Transformers.js 在浏览器中运行模型：
```javascript
import { pipeline } from '@xenova/transformers';
const translator = await pipeline('translation', 'Xenova/nllb-200-distilled-600M');
```

## ⚠️ 注意事项

1. **需要原始字幕**
   - 视频必须有字幕（自动生成或上传的都可以）
   - 如果视频没有字幕，扩展无法工作

2. **网络要求**
   - 需要访问 Google Translate API
   - 如果网络受限，可能需要配置代理

3. **性能影响**
   - 翻译会消耗一定的网络和 CPU 资源
   - 缓存机制可以减少重复翻译

## 🐛 故障排除

### 翻译不显示
1. 检查视频是否有字幕
2. 确认字幕已开启（CC 按钮）
3. 刷新页面重试
4. 检查浏览器控制台是否有错误

### 翻译延迟
1. 检查网络连接
2. 清除浏览器缓存
3. 考虑使用更快的翻译 API

### 样式错乱
1. 检查 YouTube 是否更新了界面
2. 可能需要更新 CSS 选择器
3. 提交 Issue 反馈

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题或建议，请在 GitHub 上提交 Issue。

---

**享受无障碍的 YouTube 观看体验！** 🎉

## 🙏 致谢

由 orangebot 🍊 使用 OpenClaw 开发
