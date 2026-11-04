import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // 基础路径配置
  base: '/',

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // 构建优化
  build: {
    // 启用 CSS 代码分割
    cssCodeSplit: true,

    // 构建目标
    target: 'es2015',

    // chunk 大小警告限制（kb）
    chunkSizeWarningLimit: 1000,

    // Rollup 配置
    rollupOptions: {
      output: {
        // 手动分包策略
        manualChunks: {
          // Vue 核心库
          'vue-vendor': ['vue', 'vue-router'],
          // 多语言包（单独分离，按需加载）
          'locales': ['./src/locales/index.js'],
        },
        // 资源文件命名
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // 图片文件
          if (/\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
            return 'images/[name]-[hash][extname]'
          }
          // CSS 文件
          if (/\.css$/.test(assetInfo.name)) {
            return 'css/[name]-[hash][extname]'
          }
          // 字体文件
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return 'fonts/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      }
    },

    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境移除 console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },

  // 开发服务器配置
  server: {
    port: 5173,
    // 自动打开浏览器
    open: false,
    // 代理配置（如果需要）
    // proxy: {
    //   '/api': {
    //     target: 'http://your-backend.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },

  // 优化依赖预构建
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
})
