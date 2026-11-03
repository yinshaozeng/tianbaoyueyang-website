<template>
  <!--
    Hero Banner 轮播组件
    首页顶部的大图轮播展示区域
    支持自动轮播、手动切换、指示器点击
  -->
  <section class="hero-banner">
    <!-- 轮播容器 -->
    <div class="banner-container">
      <!-- 轮播项 -->
      <transition-group name="slide-fade">
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          v-show="currentSlide === index"
          class="banner-slide"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <!-- 渐变遮罩 -->
          <div class="banner-overlay"></div>

          <!-- 内容区域 -->
          <div class="container">
            <div class="banner-content">
              <!-- 标题 -->
              <h1 class="banner-title slide-up">
                {{ slide.title }}
              </h1>
            </div>
          </div>
        </div>
      </transition-group>

      <!-- 左右切换按钮 -->
      <button
        class="banner-control banner-control-prev"
        @click="prevSlide"
        aria-label="上一张"
      >
        <span class="arrow-icon">‹</span>
      </button>

      <button
        class="banner-control banner-control-next"
        @click="nextSlide"
        aria-label="下一张"
      >
        <span class="arrow-icon">›</span>
      </button>

      <!-- 指示器 -->
      <div class="banner-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          class="indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
          :aria-label="`跳转到第${index + 1}张`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useLanguage } from "@/composables/useLanguage";

export default {
  name: "HeroBanner",

  setup() {
    const { t } = useLanguage();

    // 当前显示的轮播项索引
    const currentSlide = ref(0);

    // 自动轮播定时器
    let autoPlayTimer = null;

    /**
     * 轮播数据配置 - 使用计算属性确保语言切换时更新
     */
    const slides = computed(() => [
      {
        id: 1,
        title: t("hero.slide1.title"),
        subtitle: t("hero.slide1.subtitle"),
        image: new URL("@/image/banner1.jpg", import.meta.url).href,
      },
      {
        id: 2,
        title: t("hero.slide2.title"),
        subtitle: t("hero.slide2.subtitle"),
        image: new URL("@/image/banner2.jpg", import.meta.url).href,
      },
      {
        id: 3,
        title: t("hero.slide3.title"),
        subtitle: t("hero.slide3.subtitle"),
        image: new URL("@/image/banner3.jpg", import.meta.url).href,
      },
      {
        id: 4,
        title: t("hero.slide4.title"),
        subtitle: t("hero.slide4.subtitle"),
        image: new URL("@/image/banner4.jpg", import.meta.url).href,
      },
      {
        id: 5,
        title: t("hero.slide5.title"),
        subtitle: t("hero.slide5.subtitle"),
        image: new URL("@/image/asdasd.jpg", import.meta.url).href,
      },
    ]);

    /**
     * 切换到下一张
     */
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length;
      resetAutoPlay();
    };

    /**
     * 切换到上一张
     */
    const prevSlide = () => {
      currentSlide.value =
        currentSlide.value === 0
          ? slides.value.length - 1
          : currentSlide.value - 1;
      resetAutoPlay();
    };

    /**
     * 跳转到指定索引
     */
    const goToSlide = (index) => {
      currentSlide.value = index;
      resetAutoPlay();
    };

    /**
     * 开始自动轮播
     */
    const startAutoPlay = () => {
      autoPlayTimer = setInterval(() => {
        nextSlide();
      }, 5000); // 每5秒切换一次
    };

    /**
     * 停止自动轮播
     */
    const stopAutoPlay = () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    };

    /**
     * 重置自动轮播
     */
    const resetAutoPlay = () => {
      stopAutoPlay();
      startAutoPlay();
    };

    // 组件挂载时开始自动轮播
    onMounted(() => {
      startAutoPlay();
    });

    // 组件卸载时清理定时器
    onUnmounted(() => {
      stopAutoPlay();
    });

    return {
      currentSlide,
      slides,
      nextSlide,
      prevSlide,
      goToSlide,
    };
  },
};
</script>

<style scoped>
/**
 * Hero Banner 样式
 */

/* 容器 */
.hero-banner {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.banner-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.banner-slide:nth-child(5) {
  height: 825px;
}

/* 轮播项 */
.banner-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

/* 渐变遮罩层 */
.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 内容区域 */
.banner-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #ffffff;
  max-width: 700px;
  z-index: 2;
  text-align: left;
}

/* 标题 */
.banner-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  margin-bottom: var(--spacing-lg);
  color: #ffffff;
  animation: slideUp 0.8s ease-out;
}

/* 副标题 */
.banner-subtitle {
  font-size: var(--font-size-xl);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-2xl);
  color: rgba(255, 255, 255, 0.9);
  animation: slideUp 0.8s ease-out 0.2s both;
  max-width: 600px;
}

/* 控制按钮 */
.banner-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
  z-index: 3;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-control:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.banner-control-prev {
  left: var(--spacing-xl);
}

.banner-control-next {
  right: var(--spacing-xl);
}

.arrow-icon {
  font-size: 40px;
  color: #ffffff;
  line-height: 1;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
}

/* 指示器 */
.banner-indicators {
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: var(--spacing-sm);
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.6);
}

.indicator.active {
  width: 32px;
  background: var(--color-text-white);
}

/* 过渡动画 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.8s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* 滑入动画 */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-banner {
    height: 500px;
  }

  .banner-title {
    font-size: var(--font-size-3xl);
  }

  .banner-subtitle {
    font-size: var(--font-size-base);
  }

  .banner-actions {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .banner-actions .btn {
    width: 100%;
    max-width: 250px;
  }

  .banner-control {
    width: 40px;
    height: 40px;
  }

  .banner-control-prev {
    left: var(--spacing-md);
  }

  .banner-control-next {
    right: var(--spacing-md);
  }

  .arrow {
    font-size: 24px;
  }
}
</style>
