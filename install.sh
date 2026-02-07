#!/bin/bash
# YouTube 字幕翻译扩展 - 安装脚本

echo "🚀 YouTube 实时字幕翻译扩展"
echo "================================"
echo ""

# 检查图标
if [ ! -f "icons/icon16.png" ]; then
  echo "⚠️  图标文件缺失"
  echo ""
  echo "请先生成图标文件："
  echo "1. 安装 ImageMagick: brew install imagemagick"
  echo "2. 运行: cd icons && convert icon.svg -resize 16x16 icon16.png"
  echo "3. 运行: convert icon.svg -resize 48x48 icon48.png"
  echo "4. 运行: convert icon.svg -resize 128x128 icon128.png"
  echo ""
  echo "或者使用在线工具: https://www.favicon-generator.org/"
  echo ""
fi

echo "📦 安装步骤："
echo ""
echo "Chrome / Edge:"
echo "1. 打开浏览器，访问 chrome://extensions/"
echo "2. 开启右上角的'开发者模式'"
echo "3. 点击'加载已解压的扩展程序'"
echo "4. 选择此文件夹: $(pwd)"
echo ""
echo "Firefox:"
echo "1. 打开浏览器，访问 about:debugging#/runtime/this-firefox"
echo "2. 点击'临时加载附加组件'"
echo "3. 选择文件: $(pwd)/manifest.json"
echo ""
echo "✅ 安装完成后："
echo "1. 打开 YouTube 视频"
echo "2. 开启字幕 (CC 按钮)"
echo "3. 翻译会自动显示在原字幕上方"
echo ""
echo "⚙️  设置："
echo "点击浏览器工具栏的扩展图标可以调整设置"
echo ""
echo "================================"
echo "享受无障碍的 YouTube 观看体验！🎉"
