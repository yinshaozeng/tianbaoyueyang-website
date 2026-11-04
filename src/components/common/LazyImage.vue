<template>
  <!--
    懒加载图片组件
    自动添加占位符和加载状态
  -->
  <div class="lazy-image" :class="{ 'is-loaded': isLoaded }">
    <!-- 占位符 -->
    <div v-if="!isLoaded" class="lazy-image-placeholder">
      <div class="lazy-image-spinner"></div>
    </div>

    <!-- 实际图片 -->
    <img
      v-show="isLoaded"
      :src="src"
      :alt="alt"
      :loading="loading"
      @load="handleLoad"
      @error="handleError"
      class="lazy-image-img"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LazyImage',

  props: {
    // 图片源
    src: {
      type: String,
      required: true
    },
    // alt 文本
    alt: {
      type: String,
      default: ''
    },
    // 浏览器原生懒加载
    loading: {
      type: String,
      default: 'lazy',
      validator: (value) => ['lazy', 'eager'].includes(value)
    }
  },

  setup(props, { emit }) {
    const isLoaded = ref(false)

    const handleLoad = () => {
      isLoaded.value = true
      emit('load')
    }

    const handleError = (error) => {
      emit('error', error)
    }

    return {
      isLoaded,
      handleLoad,
      handleError
    }
  }
}
</script>

<style scoped>
.lazy-image {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-bg-secondary);
  overflow: hidden;
}

.lazy-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    var(--color-bg-secondary) 0%,
    var(--color-bg-tertiary) 50%,
    var(--color-bg-secondary) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.lazy-image-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.lazy-image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.is-loaded .lazy-image-img {
  opacity: 1;
}
</style>
