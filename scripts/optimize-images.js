/**
 * 图片优化脚本
 * 使用方法：
 * 1. npm install sharp --save-dev
 * 2. node scripts/optimize-images.js
 */

import sharp from 'sharp'
import { readdir, stat, mkdir } from 'fs/promises'
import { join, extname, basename } from 'path'
import { existsSync } from 'fs'

const INPUT_DIR = './src/image'
const OUTPUT_DIR = './src/image/optimized'
const QUALITY = 80 // JPEG/WebP 质量（0-100）

// 不同类型图片的最大尺寸
const MAX_SIZES = {
  banner: { width: 1920, height: 1080 },  // Banner 图片
  product: { width: 800, height: 600 },    // 产品卡片
  detail: { width: 1200, height: 900 },    // 详情页图片
  default: { width: 1200, height: 900 },   // 默认
}

// 判断图片类型
function getImageType(filename) {
  const lower = filename.toLowerCase()
  if (lower.includes('banner')) return 'banner'
  if (lower.includes('page')) return 'detail'
  return 'product'
}

// 格式化文件大小
function formatSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// 优化单张图片
async function optimizeImage(inputPath, outputPath, filename) {
  try {
    const imageType = getImageType(filename)
    const maxSize = MAX_SIZES[imageType]

    // 获取原始文件大小
    const originalStats = await stat(inputPath)
    const originalSize = originalStats.size

    // 读取图片元数据
    const metadata = await sharp(inputPath).metadata()

    // 计算新尺寸（保持宽高比）
    let width = metadata.width
    let height = metadata.height

    if (width > maxSize.width || height > maxSize.height) {
      const widthRatio = maxSize.width / width
      const heightRatio = maxSize.height / height
      const ratio = Math.min(widthRatio, heightRatio)

      width = Math.round(width * ratio)
      height = Math.round(height * ratio)
    }

    // 优化并保存 JPEG
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(outputPath)

    // 生成 WebP 版本
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY })
      .toFile(webpPath)

    // 获取优化后的文件大小
    const optimizedStats = await stat(outputPath)
    const optimizedSize = optimizedStats.size
    const webpStats = await stat(webpPath)
    const webpSize = webpStats.size

    // 计算压缩率
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1)
    const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1)

    console.log(`✅ ${filename}`)
    console.log(`   原始: ${formatSize(originalSize)} | ${metadata.width}x${metadata.height}`)
    console.log(`   JPEG: ${formatSize(optimizedSize)} | ${width}x${height} (减少 ${savings}%)`)
    console.log(`   WebP: ${formatSize(webpSize)} | ${width}x${height} (减少 ${webpSavings}%)`)
    console.log('')

    return {
      filename,
      originalSize,
      optimizedSize,
      webpSize,
      savings: parseFloat(savings),
      webpSavings: parseFloat(webpSavings)
    }
  } catch (error) {
    console.error(`❌ 处理失败: ${filename}`)
    console.error(error.message)
    return null
  }
}

// 主函数
async function main() {
  console.log('🖼️  开始优化图片...\n')

  // 创建输出目录
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true })
  }

  // 读取所有图片文件
  const files = await readdir(INPUT_DIR)
  const imageFiles = files.filter(file => {
    const ext = extname(file).toLowerCase()
    return ['.jpg', '.jpeg', '.png'].includes(ext)
  })

  console.log(`找到 ${imageFiles.length} 个图片文件\n`)

  // 优化每张图片
  const results = []
  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file)
    const outputPath = join(OUTPUT_DIR, file)

    const result = await optimizeImage(inputPath, outputPath, file)
    if (result) {
      results.push(result)
    }
  }

  // 统计信息
  console.log('=' .repeat(60))
  console.log('📊 优化统计\n')

  const totalOriginal = results.reduce((sum, r) => sum + r.originalSize, 0)
  const totalOptimized = results.reduce((sum, r) => sum + r.optimizedSize, 0)
  const totalWebp = results.reduce((sum, r) => sum + r.webpSize, 0)

  const avgSavings = (results.reduce((sum, r) => sum + r.savings, 0) / results.length).toFixed(1)
  const avgWebpSavings = (results.reduce((sum, r) => sum + r.webpSavings, 0) / results.length).toFixed(1)

  console.log(`处理文件: ${results.length}`)
  console.log(`原始总大小: ${formatSize(totalOriginal)}`)
  console.log(`JPEG 总大小: ${formatSize(totalOptimized)} (平均减少 ${avgSavings}%)`)
  console.log(`WebP 总大小: ${formatSize(totalWebp)} (平均减少 ${avgWebpSavings}%)`)
  console.log(`\n总节省: ${formatSize(totalOriginal - totalOptimized)} (JPEG)`)
  console.log(`总节省: ${formatSize(totalOriginal - totalWebp)} (WebP)`)
  console.log('\n✨ 优化完成！')
  console.log(`\n优化后的图片保存在: ${OUTPUT_DIR}`)
  console.log('\n下一步：')
  console.log('1. 检查优化后的图片质量')
  console.log('2. 备份原始图片')
  console.log('3. 用优化后的图片替换原始图片')
  console.log('4. 考虑使用 WebP 格式以获得更好的性能')
}

main().catch(console.error)
