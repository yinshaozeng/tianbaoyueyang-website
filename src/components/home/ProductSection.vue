<template>
  <!--
    产品展示区块组件
    展示主要产品分类和特色产品
  -->
  <section class="product-section">
    <div class="container">
      <!-- 标题区域 -->
      <div class="section-header text-center">
        <h2 class="section-title">{{ t("home.productTitle") }}</h2>
        <p class="section-subtitle">
          {{ t("home.productSubtitle") }}
        </p>
      </div>

      <!-- 产品网格 -->
      <div class="product-grid">
        <div
          v-for="product in products"
          :key="product.id"
          class="product-card card"
        >
          <!-- 产品图片 -->
          <div class="product-image">
            <img :src="product.image" :alt="product.name" loading="lazy" />
            <div v-if="product.showLink" class="product-overlay">
              <router-link :to="product.link" class="btn btn-primary overlay-btn">
                {{ t("home.learnMore") }}
              </router-link>
            </div>
          </div>

          <!-- 产品信息 -->
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <!-- <p class="product-desc">{{ product.description }}</p> -->

            <!-- 前三个产品显示了解更多链接 -->
            <router-link v-if="product.showLink" :to="product.link" class="product-link">
              {{ t("home.learnMore") }} →
            </router-link>

            <!-- 产品特点标签 -->
            <!-- <div class="product-tags">
              <span v-for="tag in product.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useLanguage } from "@/composables/useLanguage";

export default {
  name: "ProductSection",

  setup() {
    const { t } = useLanguage();

    /**
     * 产品数据 - 使用计算属性确保响应式更新
     */
    const products = computed(() => [
      {
        id: 1,
        name: t("products.plc"),
        description: t("products.plcDesc"),
        image: new URL("@/image/banner1.jpg", import.meta.url).href,
        tags: ["高性能", "稳定可靠", "易编程"],
        link: "/products/plc",
        showLink: true,
      },
      {
        id: 2,
        name: t("products.sensor"),
        description: t("products.sensorDesc"),
        image: new URL("@/image/banner2.jpg", import.meta.url).href,
        tags: ["高精度", "快速响应", "多样化"],
        link: "/products/sensors",
        showLink: true,
      },
      {
        id: 3,
        name: t("products.vision"),
        description: t("products.visionDesc"),
        image: new URL("@/image/banner3.jpg", import.meta.url).href,
        tags: ["AI识别", "高清晰", "智能化"],
        link: "/products/vision",
        showLink: true,
      },
      {
        id: 4,
        name: t("products.hmi"),
        description: t("products.hmiDesc"),
        image: new URL("@/image/banner4.jpg", import.meta.url).href,
        tags: ["高清显示", "触控灵敏", "多功能"],
        link: "/products/hmi",
        showLink: false,
      },
      {
        id: 5,
        name: t("products.servo"),
        description: t("products.servoDesc"),
        image: new URL("@/image/banner5.png", import.meta.url).href,
        tags: ["高精度", "高速度", "低噪音"],
        link: "/products/servo",
        showLink: false,
      },
      {
        id: 6,
        name: t("products.gateway"),
        description: t("products.gatewayDesc"),
        image: new URL("@/image/banner6.jpg", import.meta.url).href,
        tags: ["物联网", "边缘计算", "多协议"],
        link: "/products/gateway",
        showLink: false,
      },
    ]);

    return {
      products,
      t,
    };
  },
};
</script>

<style scoped>
/**
 * 产品展示样式
 */

.product-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-secondary);
}

/* 区块头部 */
.section-header {
  margin-bottom: var(--spacing-3xl);
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.section-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
}

/* 产品网格 */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

/* 产品卡片 */
.product-card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-md);
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

/* 产品图片 */
.product-image {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background-color: var(--color-bg-secondary);
  isolation: isolate;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  display: block;
  position: relative;
  z-index: 1;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

/* 图片遮罩层 */
.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: 10;
}

.product-card:hover .product-overlay {
  opacity: 1;
}

.overlay-btn {
  white-space: nowrap;
  z-index: 11;
  text-decoration: none;
}

/* 产品信息 */
.product-info {
  padding: var(--spacing-lg);
}

.product-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.product-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.product-link {
  display: inline-block;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-base);
  margin-top: var(--spacing-md);
}

.product-link:hover {
  color: var(--color-primary-dark);
}

/* 产品标签 */
.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.tag {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-bg-secondary);
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-medium);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .product-image {
    height: 220px;
  }
}

@media (max-width: 768px) {
  .product-section {
    padding: var(--spacing-3xl) 0;
  }

  .section-title {
    font-size: var(--font-size-3xl);
  }

  .section-subtitle {
    font-size: var(--font-size-base);
  }

  .product-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  /* 移动端：图片高度调整 */
  .product-image {
    height: 250px;
    min-height: 250px;
  }

  /* 移动端：确保图片正确显示 */
  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* 移动端：隐藏图片上的遮罩层和按钮 */
  .product-overlay {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
  }

  /* 移动端：图片不缩放 */
  .product-card:hover .product-image img {
    transform: scale(1);
  }

  /* 移动端：移除hover时的遮罩层变化 */
  .product-card:hover .product-overlay {
    display: none !important;
  }

  /* 移动端：卡片悬浮效果减弱 */
  .product-card:hover {
    transform: translateY(0);
    box-shadow: var(--shadow-md);
  }

  /* 移动端：产品信息区域的链接更明显 */
  .product-link {
    display: block;
    text-align: center;
    padding: var(--spacing-md) var(--spacing-lg);
    background: var(--color-primary);
    color: white !important;
    border-radius: var(--radius-md);
    margin-top: var(--spacing-md);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-semibold);
    text-decoration: none;
  }

  .product-link:hover {
    color: white !important;
    background: var(--color-primary-dark);
  }

  /* 移动端：产品名称字体调整 */
  .product-name {
    font-size: var(--font-size-lg);
    text-align: center;
  }

  /* 移动端：产品信息区域 */
  .product-info {
    padding: var(--spacing-lg) var(--spacing-md);
  }
}
</style>
