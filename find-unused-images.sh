#!/bin/bash

# 已使用的图片列表
used_images=(
"1-250Z4094330C5.jpg"
"asdasd.jpg"
"banner1.jpg"
"banner2.jpg"
"banner3.jpg"
"banner4.jpg"
"banner5.png"
"banner6.jpg"
"gongren.jpg"
"imagesthree.jpg"
"imagestwo.jpg"
"pageone1.jpg"
"pageone2.jpg"
"pageone3.jpg"
"pageone4.jpg"
"pagethree1.jpg"
"pagethree2.jpg"
"pagethree3.jpg"
"pagethree4.jpg"
"pagetwo1.jpg"
"pagetwo2.jpg"
"pagetwo3.jpg"
"pagetwo4.jpg"
)

echo "未使用的图片文件："
echo "===================="

# 检查所有图片文件
for file in src/image/*.{jpg,png,jpeg}; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")

        # 检查是否在已使用列表中
        used=0
        for used_img in "${used_images[@]}"; do
            if [ "$filename" = "$used_img" ]; then
                used=1
                break
            fi
        done

        if [ $used -eq 0 ]; then
            size=$(du -h "$file" | cut -f1)
            echo "❌ $filename ($size)"
        fi
    fi
done

echo ""
echo "已使用的图片："
echo "===================="
for img in "${used_images[@]}"; do
    if [ -f "src/image/$img" ]; then
        size=$(du -h "src/image/$img" | cut -f1)
        echo "✅ $img ($size)"
    fi
done
