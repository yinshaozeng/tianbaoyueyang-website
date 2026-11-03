/**
 * Vue 应用主入口文件
 * 负责创建和配置Vue应用实例
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initEmailJS } from './utils/email'

// 导入全局样式
import '@/assets/styles/variables.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/common.css'

/**
 * 创建Vue应用实例
 */
const app = createApp(App)

/**
 * 使用Vue Router插件
 */
app.use(router)

/**
 * 初始化EmailJS服务
 */
initEmailJS()

/**
 * 全局错误处理
 */
app.config.errorHandler = (err, instance, info) => {
  console.error('全局错误:', err)
  console.error('错误信息:', info)
}

/**
 * 挂载应用到DOM
 */
app.mount('#app')

/**
 * 开发环境提示
 */
if (import.meta.env.DEV) {
  console.log('🚀 应用运行在开发模式')
  console.log('📍 当前环境变量:', import.meta.env)
}
