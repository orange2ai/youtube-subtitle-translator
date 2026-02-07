#!/usr/bin/env python3
"""生成 YouTube 翻译扩展图标"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size):
    """创建指定尺寸的图标"""
    # 创建红色背景
    img = Image.new('RGB', (size, size), color='#FF0000')
    draw = ImageDraw.Draw(img)
    
    # 绘制白色播放按钮（三角形）
    triangle_size = size * 0.4
    triangle_y = size * 0.3
    triangle_x = size * 0.35
    
    points = [
        (triangle_x, triangle_y),
        (triangle_x, triangle_y + triangle_size),
        (triangle_x + triangle_size * 0.8, triangle_y + triangle_size / 2)
    ]
    draw.polygon(points, fill='white')
    
    # 添加文字 "A→中"
    text = "A→中"
    font_size = int(size * 0.18)
    try:
        # 尝试使用系统字体
        font = ImageFont.truetype("/System/Library/Fonts/PingFang.ttc", font_size)
    except:
        # 如果找不到字体，使用默认字体
        font = ImageFont.load_default()
    
    # 计算文字位置（底部居中）
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    text_x = (size - text_width) / 2
    text_y = size - text_height - size * 0.1
    
    draw.text((text_x, text_y), text, fill='white', font=font)
    
    return img

# 生成三个尺寸的图标
sizes = [16, 48, 128]
script_dir = os.path.dirname(os.path.abspath(__file__))

for size in sizes:
    icon = create_icon(size)
    output_path = os.path.join(script_dir, f'icon{size}.png')
    icon.save(output_path, 'PNG')
    print(f'✅ 生成 icon{size}.png')

print('\n🎉 所有图标生成完成！')
