# 图标说明

扩展需要三个尺寸的图标：
- icon16.png (16x16)
- icon48.png (48x48)
- icon128.png (128x128)

## 快速生成图标

### 方法 1: 使用在线工具
1. 访问 https://www.favicon-generator.org/
2. 上传 icon.svg 文件
3. 下载生成的 PNG 文件
4. 重命名为对应尺寸

### 方法 2: 使用 ImageMagick (命令行)
```bash
# 安装 ImageMagick
brew install imagemagick

# 转换 SVG 为 PNG
convert icon.svg -resize 16x16 icon16.png
convert icon.svg -resize 48x48 icon48.png
convert icon.svg -resize 128x128 icon128.png
```

### 方法 3: 使用 Figma/Sketch/Photoshop
1. 打开设计工具
2. 创建对应尺寸的画布
3. 设计图标（建议使用 YouTube 红色 #FF0000）
4. 导出为 PNG

## 图标设计建议

- 使用 YouTube 品牌色（红色 #FF0000）
- 包含翻译元素（如 A→中、🌐 等）
- 保持简洁，在小尺寸下也清晰可见
- 背景建议使用圆角矩形

## 临时方案

如果暂时没有图标，可以使用纯色占位符：
- 创建纯红色的 PNG 文件
- 扩展仍然可以正常工作
- 只是工具栏图标不够美观
