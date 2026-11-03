<template>
  <div class="not-found-page">
    <div class="container">
      <div class="not-found-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">页面未找到</h2>
        <p class="error-desc">抱歉，您访问的页面不存在或已被删除</p>
        <div class="error-actions">
          <router-link to="/" class="btn btn-primary btn-large">返回首页</router-link>
          <router-link to="/contact" class="btn btn-secondary btn-large">联系我们</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found-page { min-height: 80vh; display: flex; align-items: center; justify-content: center; }
.not-found-content { text-align: center; }
.error-code { font-size: 120px; font-weight: var(--font-weight-bold); color: var(--color-primary); margin-bottom: var(--spacing-md); }
.error-title { font-size: var(--font-size-3xl); font-weight: var(--font-weight-semibold); margin-bottom: var(--spacing-md); }
.error-desc { font-size: var(--font-size-lg); color: var(--color-text-secondary); margin-bottom: var(--spacing-2xl); }
.error-actions { display: flex; gap: var(--spacing-lg); justify-content: center; }
@media (max-width: 768px) {
  .error-code { font-size: 80px; }
  .error-actions { flex-direction: column; align-items: center; }
  .error-actions .btn { width: 100%; max-width: 250px; }
}
</style>
