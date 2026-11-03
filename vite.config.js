import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Vite 配置文件
 * 用于配置开发服务器、构建选项等
 */
export default defineConfig({
  // Vue插件配置
  plugins: [
    vue(),
  ],

  // 路径别名配置
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  // 开发服务器配置
  server: {
    port: 5173,        // 开发服务器端口
    open: true,        // 自动打开浏览器
    cors: true         // 允许跨域
  },

  // 构建配置
  build: {
    outDir: 'dist',              // 输出目录
    assetsDir: 'assets',         // 静态资源目录
    sourcemap: false,            // 不生成sourcemap（生产环境）
    minify: 'terser',            // 使用terser压缩
    chunkSizeWarningLimit: 1000  // chunk大小警告限制
  }
})
