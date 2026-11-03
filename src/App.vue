<template>
  <!--
    根组件模板
    包含全局布局结构：头部 + 内容区域 + 底部
  -->
  <div id="app">
    <!-- 头部导航 -->
    <Header />

    <!-- 主内容区域 - 使用 router-view 显示当前路由对应的页面 -->
    <main class="main-content">
      <!--
        Transition组件实现页面切换动画
        name="fade" 对应下方定义的CSS过渡类名
      -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- 底部信息 -->
    <Footer />
  </div>
</template>

<script>
/**
 * 根组件脚本
 * 导入并注册全局布局组件
 */
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

export default {
  name: 'App',

  // 注册组件
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
/**
 * 根组件样式
 */

/* 应用容器 */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 主内容区域 */
.main-content {
  flex: 1; /* 占据剩余空间，使底部始终在底部 */
  padding-top: var(--header-height); /* 为固定头部留出空间 */
}

/* 移动端适配 */
@media (max-width: 768px) {
  .main-content {
    padding-top: var(--header-height-mobile);
  }
}

/**
 * 页面切换动画
 */

/* 淡入淡出过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
