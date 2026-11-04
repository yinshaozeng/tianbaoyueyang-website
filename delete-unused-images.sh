#!/bin/bash

# 未使用的图片列表
unused_images=(
"imageseven.jpg"
"imagesfive.jpg"
"imagesone.jpg"
"imagessix.jpg"
"imagesthree3.jpg"
"pagethree3two.jpg"
)

echo "🗑️  准备删除未使用的图片"
echo "================================"
echo ""

# 创建备份目录
backup_dir="src/image/unused_backup"
if [ ! -d "$backup_dir" ]; then
    mkdir -p "$backup_dir"
    echo "✅ 创建备份目录: $backup_dir"
fi

total_size=0

# 移动文件到备份目录
for img in "${unused_images[@]}"; do
    file="src/image/$img"
    if [ -f "$file" ]; then
        size=$(du -k "$file" | cut -f1)
        total_size=$((total_size + size))

        # 移动到备份目录而不是直接删除
        mv "$file" "$backup_dir/"
        echo "📦 已移动: $img ($(du -h "$backup_dir/$img" | cut -f1))"
    else
        echo "⚠️  文件不存在: $img"
    fi
done

echo ""
echo "================================"
echo "✅ 完成！"
echo "   移动文件数: ${#unused_images[@]}"
echo "   释放空间: $((total_size / 1024)) MB"
echo ""
echo "备份位置: $backup_dir"
echo ""
echo "如果确认不需要这些图片，可以手动删除备份目录："
echo "rm -rf $backup_dir"
