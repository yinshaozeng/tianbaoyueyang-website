/**
 * 性能监控工具
 * 用于监测页面加载性能
 */

/**
 * 获取页面性能指标
 */
export function getPerformanceMetrics() {
  if (!window.performance || !window.performance.timing) {
    console.warn('浏览器不支持 Performance API')
    return null
  }

  const timing = window.performance.timing
  const navigation = window.performance.navigation

  // 计算各项指标
  const metrics = {
    // DNS 查询时间
    dns: timing.domainLookupEnd - timing.domainLookupStart,

    // TCP 连接时间
    tcp: timing.connectEnd - timing.connectStart,

    // 请求响应时间
    request: timing.responseEnd - timing.requestStart,

    // DOM 解析时间
    domParse: timing.domInteractive - timing.domLoading,

    // 资源加载时间
    resourceLoad: timing.loadEventStart - timing.domContentLoadedEventEnd,

    // 首字节时间 (TTFB)
    ttfb: timing.responseStart - timing.navigationStart,

    // DOM Ready 时间
    domReady: timing.domContentLoadedEventEnd - timing.navigationStart,

    // 页面完全加载时间
    loadComplete: timing.loadEventEnd - timing.navigationStart,

    // 页面类型
    navigationType: navigation.type,

    // 重定向次数
    redirectCount: navigation.redirectCount
  }

  return metrics
}

/**
 * 打印性能报告
 */
export function logPerformanceReport() {
  // 等待页面完全加载
  window.addEventListener('load', () => {
    setTimeout(() => {
      const metrics = getPerformanceMetrics()

      if (!metrics) return

      console.group('📊 页面性能报告')
      console.log(`⏱️  DNS 查询: ${metrics.dns}ms`)
      console.log(`🔌 TCP 连接: ${metrics.tcp}ms`)
      console.log(`📡 请求响应: ${metrics.request}ms`)
      console.log(`🔍 DOM 解析: ${metrics.domParse}ms`)
      console.log(`📦 资源加载: ${metrics.resourceLoad}ms`)
      console.log(`⚡ 首字节时间 (TTFB): ${metrics.ttfb}ms`)
      console.log(`✅ DOM Ready: ${metrics.domReady}ms`)
      console.log(`🏁 完全加载: ${metrics.loadComplete}ms`)

      // 性能评估
      if (metrics.loadComplete < 3000) {
        console.log('🎉 性能优秀！')
      } else if (metrics.loadComplete < 5000) {
        console.log('👍 性能良好')
      } else {
        console.log('⚠️  性能需要优化')
      }

      console.groupEnd()

      // 获取资源加载信息
      if (window.performance.getEntriesByType) {
        logResourceTiming()
      }
    }, 1000)
  })
}

/**
 * 记录资源加载时间
 */
function logResourceTiming() {
  const resources = window.performance.getEntriesByType('resource')

  // 按类型分组
  const grouped = {
    image: [],
    script: [],
    stylesheet: [],
    other: []
  }

  resources.forEach(resource => {
    const type = getResourceType(resource.name)
    const info = {
      name: resource.name.split('/').pop(),
      size: resource.transferSize || 0,
      duration: Math.round(resource.duration),
    }
    grouped[type].push(info)
  })

  // 计算总大小
  const totalSize = resources.reduce((sum, r) => sum + (r.transferSize || 0), 0)

  console.group('📦 资源加载详情')
  console.log(`总大小: ${formatBytes(totalSize)}`)
  console.log(`资源数: ${resources.length}`)

  // 图片资源
  if (grouped.image.length > 0) {
    const imageSize = grouped.image.reduce((sum, r) => sum + r.size, 0)
    console.log(`\n🖼️  图片 (${grouped.image.length} 个): ${formatBytes(imageSize)}`)

    // 找出最大的图片
    const largestImage = grouped.image.reduce((max, r) =>
      r.size > max.size ? r : max
    )
    if (largestImage.size > 500000) { // 500KB
      console.warn(`   ⚠️  发现大图片: ${largestImage.name} (${formatBytes(largestImage.size)})`)
    }
  }

  // JS 资源
  if (grouped.script.length > 0) {
    const scriptSize = grouped.script.reduce((sum, r) => sum + r.size, 0)
    console.log(`\n📜 脚本 (${grouped.script.length} 个): ${formatBytes(scriptSize)}`)
  }

  // CSS 资源
  if (grouped.stylesheet.length > 0) {
    const cssSize = grouped.stylesheet.reduce((sum, r) => sum + r.size, 0)
    console.log(`\n🎨 样式 (${grouped.stylesheet.length} 个): ${formatBytes(cssSize)}`)
  }

  console.groupEnd()
}

/**
 * 判断资源类型
 */
function getResourceType(url) {
  if (/\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url)) return 'image'
  if (/\.(js|mjs)$/i.test(url)) return 'script'
  if (/\.css$/i.test(url)) return 'stylesheet'
  return 'other'
}

/**
 * 格式化字节大小
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

/**
 * 监控核心 Web Vitals (Chrome only)
 */
export function trackWebVitals() {
  if (!window.PerformanceObserver) {
    return
  }

  // Largest Contentful Paint (LCP)
  try {
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log(`📊 LCP: ${Math.round(lastEntry.startTime)}ms`,
        lastEntry.startTime < 2500 ? '✅' : '⚠️')
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
  } catch (e) {
    // LCP not supported
  }

  // First Input Delay (FID)
  try {
    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const fid = entry.processingStart - entry.startTime
        console.log(`📊 FID: ${Math.round(fid)}ms`,
          fid < 100 ? '✅' : '⚠️')
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })
  } catch (e) {
    // FID not supported
  }

  // Cumulative Layout Shift (CLS)
  try {
    let clsScore = 0
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsScore += entry.value
        }
      })
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // 页面卸载时输出
    window.addEventListener('beforeunload', () => {
      console.log(`📊 CLS: ${clsScore.toFixed(3)}`,
        clsScore < 0.1 ? '✅' : '⚠️')
    })
  } catch (e) {
    // CLS not supported
  }
}
