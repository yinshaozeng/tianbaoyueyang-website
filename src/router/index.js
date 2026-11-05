/**
 * Vue Router 路由配置
 * 定义所有页面的路由规则
 */

import { createRouter, createWebHistory } from 'vue-router'
import { updatePageMeta, updateCanonicalUrl } from '@/utils/seo'
import { useLanguage } from '@/composables/useLanguage'

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
      title: '首页 - 天津越洋机械有限公司'
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
      title: '产品详情 - 天津越洋机械有限公司'
    }
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import('@/views/Solutions.vue'),
    meta: {
      title: '解决方案 - 天津越洋机械有限公司'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于我们 - 天津越洋机械有限公司'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: '联系我们 - 天津越洋机械有限公司'
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FAQ.vue'),
    meta: {
      title: 'FAQ - Spray Deposition & Gas Atomization | Tianjin Yueyang'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '页面未找到 - 天津越洋机械有限公司'
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
  // 页面访问统计
  console.log(`导航到: ${to.path}`)

  // 获取当前语言（与 useLanguage 共享同一个状态，默认英文）
  const { currentLocale } = useLanguage()
  const lang = currentLocale.value

  // 根据路由路径确定SEO配置key
  let pageKey = 'default'

  if (to.path.includes('/products/')) {
    // 产品详情页
    const productType = to.params.type
    if (productType) {
      pageKey = `products-${productType}`
    }
  } else if (to.path === '/products') {
    pageKey = 'products'
  } else if (to.path.includes('/about')) {
    pageKey = 'about'
  } else if (to.path.includes('/contact')) {
    pageKey = 'contact'
  } else if (to.path.includes('/solutions')) {
    pageKey = 'solutions'
  } else if (to.path.includes('/faq')) {
    pageKey = 'faq'
  }

  // 更新页面Meta标签（用于SEO优化）
  updatePageMeta(pageKey, lang)

  // 更新Canonical URL
  updateCanonicalUrl(to.path)
})

export default router
