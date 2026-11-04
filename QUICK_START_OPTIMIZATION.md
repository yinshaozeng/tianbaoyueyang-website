# 🚀 快速性能优化指南

## 立即执行（15分钟内完成）

### 1. 安装图片压缩工具 Sharp

```bash
npm install sharp --save-dev
```

### 2. 运行图片优化脚本

```bash
npm run optimize-images
```

这会在 `src/image/optimized` 目录生成优化后的图片。

### 3. 检查优化效果

优化前后对比：
- 查看 `src/image/optimized` 文件夹
- 对比图片质量
- 查看控制台输出的压缩统计

### 4. 替换图片

如果优化效果满意：

```bash
# Windows PowerShell
# 1. 备份原图
mkdir src/image/backup
copy src/image/*.jpg src/image/backup/
copy src/image/*.png src/image/backup/

# 2. 替换为优化图片
copy src/image/optimized/*.jpg src/image/
copy src/image/optimized/*.webp src/image/

# Linux/Mac
# 1. 备份
mkdir -p src/image/backup
cp src/image/*.jpg src/image/backup/
cp src/image/*.png src/image/backup/

# 2. 替换
cp src/image/optimized/*.jpg src/image/
cp src/image/optimized/*.webp src/image/
```

---

## 中期优化（1-2小时）

### 5. 使用懒加载图片组件

已创建 `LazyImage.vue` 组件，使用方法：

**替换前：**
```vue
<img :src="product.image" :alt="product.name" />
```

**替换后：**
```vue
<LazyImage :src="product.image" :alt="product.name" loading="lazy" />
```

需要导入组件：
```vue
<script>
import LazyImage from '@/components/common/LazyImage.vue'

export default {
  components: {
    LazyImage
  }
}
</script>
```

### 6. 启用构建优化

已更新 `vite.config.js`，包含：
- ✅ 代码分割
- ✅ Tree Shaking
- ✅ 移除 console.log
- ✅ 资源文件分类输出

运行构建测试：
```bash
npm run build
```

---

## 在线图片压缩（最简单方法）

如果不想用命令行，使用在线工具：

### 推荐工具：

#### 1. TinyPNG (https://tinypng.com/)
- 拖拽上传
- 最多 20 张/次
- 压缩率 60-80%
- **推荐用于快速处理**

**操作步骤：**
1. 访问 https://tinypng.com/
2. 拖拽所有 `src/image/*.jpg` 文件
3. 等待压缩完成
4. 下载压缩后的文件
5. 替换原文件

#### 2. Squoosh (https://squoosh.app/)
- Google 出品
- 实时预览
- 支持 WebP 转换
- **推荐用于精细调整**

**操作步骤：**
1. 访问 https://squoosh.app/
2. 选择一张图片
3. 右侧选择 WebP 或 MozJPEG
4. 调整质量（80-85 最佳）
5. 下载

---

## 重点优化文件清单

按优先级排序，优先处理这些大文件：

### 🔴 特大文件（必须压缩）
```
✅ pageone2.jpg      (3.8MB → 目标 <300KB)
✅ pageone1.jpg      (3.2MB → 目标 <300KB)
✅ banner4.jpg       (1.7MB → 目标 <200KB)
✅ gongren.jpg       (1.4MB → 目标 <200KB)
```

### 🟡 大文件（建议压缩）
```
✅ banner3.jpg       (984KB → 目标 <150KB)
✅ banner2.jpg       (780KB → 目标 <150KB)
✅ pagetwo1.jpg      (900KB → 目标 <200KB)
✅ pagethree2.jpg    (888KB → 目标 <200KB)
```

### 压缩目标：
- Banner 图片：< 200KB
- 产品卡片：< 150KB
- 详情页图片：< 300KB
- **总大小：从 30MB 降至 < 5MB**

---

## 验证优化效果

### 1. 本地测试

```bash
# 启动开发服务器
npm run dev

# 打开 Chrome DevTools
# Network 标签 → 清除缓存 → 刷新页面
# 查看：
# - Size 列（资源大小）
# - Time 列（加载时间）
# - Waterfall（加载瀑布图）
```

### 2. Lighthouse 评分

```
F12 → Lighthouse → 生成报告

关注指标：
- Performance（性能）：> 90
- First Contentful Paint：< 1.8s
- Largest Contentful Paint：< 2.5s
- Total Blocking Time：< 200ms
```

### 3. 对比数据

**优化前预估：**
- 首页加载：10-15秒
- 图片总大小：30MB
- Performance 分数：< 50

**优化后目标：**
- 首页加载：2-3秒 ⚡
- 图片总大小：< 5MB ⬇️
- Performance 分数：> 90 📈

---

## 常见问题

### Q: 压缩后图片质量变差怎么办？
A: 调整 quality 参数（在 optimize-images.js 中），推荐值：
- 80：平衡质量和大小
- 85：更高质量
- 75：更小体积

### Q: WebP 格式浏览器兼容性？
A: 现代浏览器支持率 > 95%。可以用 `<picture>` 标签降级：
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="描述">
</picture>
```

### Q: 要不要删除原始大图？
A: 建议保留备份：
1. 原图放 `src/image/backup/`
2. 优化图放 `src/image/`
3. 提交代码前确认效果

### Q: 构建后还是很慢？
A: 考虑：
1. 使用 CDN
2. 开启服务器 Gzip
3. 分割多语言文件
4. 检查网络环境

---

## 下一步

完成图片优化后：

1. ✅ 配置 CDN（可选）
2. ✅ 添加 Gzip 压缩
3. ✅ 优化字体加载
4. ✅ 实施缓存策略

参考完整文档：`PERFORMANCE_OPTIMIZATION.md`

---

## 预期效果

完成所有优化后：

```
┌─────────────────────┬──────────┬──────────┬─────────┐
│ 指标                │ 优化前   │ 优化后   │ 提升    │
├─────────────────────┼──────────┼──────────┼─────────┤
│ 首次加载时间        │ 12秒     │ 2.5秒    │ 80% ⬇️  │
│ 图片总大小          │ 30MB     │ 4MB      │ 87% ⬇️  │
│ Lighthouse 性能分   │ 45       │ 92       │ +47     │
│ 移动端流量消耗      │ 30MB     │ 4MB      │ 87% ⬇️  │
└─────────────────────┴──────────┴──────────┴─────────┘
```

🎉 用户体验显著提升！
