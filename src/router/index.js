/**
 * Vue Router 路由配置
 * 定义所有页面的路由规则
 */

import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import Home from '@/views/Home.vue'

/**
 * 路由配置数组
 * 每个路由对象包含：
 * - path: URL路径
 * - name: 路由名称
 * - component: 对应的组件
 * - meta: 路由元信息（如页面标题等）
 */
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页 - 企业自动化解决方案'
    }
  },
  // {
  //   path: '/products',
  //   name: 'products',
  //   // 路由懒加载 - 只在访问时才加载组件
  //   component: () => import('@/views/Products.vue'),
  //   meta: {
  //     title: '产品中心 - 企业自动化解决方案'
  //   }
  // },
  {
    path: '/products/:type',
    name: 'productDetail',
    component: () => import('@/views/ProductDetail.vue'),
    meta: {
      title: '产品详情 - 企业自动化解决方案'
    }
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import('@/views/Solutions.vue'),
    meta: {
      title: '解决方案 - 企业自动化解决方案'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于我们 - 企业自动化解决方案'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: '联系我们 - 企业自动化解决方案'
    }
  },
  {
    // 404页面 - 匹配所有未定义的路由
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '页面未找到 - 企业自动化解决方案'
    }
  }
]

/**
 * 创建路由实例
 */
const router = createRouter({
  // 使用HTML5 History模式（需要服务器配置）
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // 路由切换时滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

/**
 * 全局前置守卫
 * 在每次路由切换前执行
 */
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // 继续导航
  next()
})

/**
 * 全局后置守卫
 * 在每次路由切换后执行
 */
router.afterEach((to, from) => {
  // 可以在这里添加页面访问统计等逻辑
  console.log(`导航到: ${to.path}`)
})

export default router
