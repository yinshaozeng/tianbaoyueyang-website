<template>
  <div class="product-detail-page">
    <!-- 产品Hero区域 -->
    <section class="product-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">{{ product.name }}</h1>
          <!-- <p class="hero-subtitle">{{ product.subtitle }}</p> -->
        </div>
      </div>
    </section>

    <!-- 产品主图 -->
    <section class="product-main-image">
      <div class="container">
        <img :src="product.mainImage" :alt="product.name" class="main-image" loading="lazy" />
      </div>
    </section>

    <!-- 产品概述 -->
    <section class="product-overview">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-item">
            <h3 class="overview-title">{{ t('productDetail.description') }}</h3>
            <p class="overview-content">{{ product.description }}</p>
          </div>
          <div class="overview-item">
            <h3 class="overview-title">{{ t('productDetail.advantages') }}</h3>
            <ul class="features-list">
              <li
                v-for="feature in product.features"
                :key="feature"
                class="feature-item"
              >
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 生产过程视频（仅PLC产品显示） -->
    <section v-if="productType === 'plc'" class="product-video">
      <div class="container">
        <h2 class="section-title">{{ t('productDetail.productionProcess') }}</h2>
        <div class="video-wrapper">
          <video
            controls
            class="production-video"
            poster="/src/image/imagestwo.jpg"
          >
            <source src="/src/videos/vadios.mp4" type="video/mp4" />
            {{ t('productDetail.videoNotSupported') }}
          </video>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="product-showcase">
      <div class="container">
        <h2 class="section-title">{{ t('productDetail.materialShowcase') }}</h2>
        <div class="showcase-grid">
          <div
            v-for="(item, index) in product.showcase"
            :key="index"
            class="showcase-item"
          >
            <div class="showcase-image">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <div class="showcase-info">
              <h3 class="showcase-title">{{ item.title }}</h3>
              <!-- <p class="showcase-desc">{{ item.description }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 行动号召 -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content text-center">
          <h2 class="cta-title">{{ t('productDetail.interestedTitle') }}</h2>
          <p class="cta-subtitle">{{ t('productDetail.interestedSubtitle') }}</p>
          <router-link to="/contact" class="btn btn-primary btn-large">
            {{ t('productDetail.contactUs') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- 相关产品 -->
    <!-- <section class="related-products">
      <div class="container">
        <h2 class="section-title">相关产品</h2>
        <div class="related-grid">
          <div
            v-for="item in relatedProducts"
            :key="item.id"
            class="related-card card"
          >
            <div class="related-image">
              <img :src="item.mainImage" :alt="item.name" />
            </div>
            <div class="related-info">
              <h3 class="related-name">{{ item.name }}</h3>
              <router-link :to="`/products/${item.type}`" class="related-link">
                查看详情 →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLanguage } from "@/composables/useLanguage";

export default {
  name: "ProductDetail",
  setup() {
    const route = useRoute();
    const { t } = useLanguage();
    const productType = route.params.type;

    /**
     * 产品数据库 - 使用 computed 使其响应式，支持多语言切换
     */
    const productsDB = computed(() => ({
      plc: {
        name: t("productDetail.plc.name"),
        description: t("productDetail.plc.description"),
        mainImage: new URL("@/image/banner1.jpg", import.meta.url).href,
        features: [
          t("productDetail.plc.feature1"),
          t("productDetail.plc.feature2"),
          t("productDetail.plc.feature3"),
          t("productDetail.plc.feature4"),
          t("productDetail.plc.feature5"),
        ],
        showcase: [
          {
            title: t("productDetail.plc.showcase1"),
            image: new URL("@/image/pageone1.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.plc.showcase2"),
            image: new URL("@/image/pageone2.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.plc.showcase3"),
            image: new URL("@/image/pageone3.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.plc.showcase4"),
            image: new URL("@/image/pageone4.jpg", import.meta.url).href,
          },
        ],
      },
      sensors: {
        name: t("productDetail.sensors.name"),
        description: t("productDetail.sensors.description"),
        mainImage: new URL("@/image/banner2.jpg", import.meta.url).href,
        features: [
          t("productDetail.sensors.feature1"),
          t("productDetail.sensors.feature2"),
          t("productDetail.sensors.feature3"),
          t("productDetail.sensors.feature4"),
          t("productDetail.sensors.feature5"),
        ],
        showcase: [
          {
            title: t("productDetail.sensors.showcase1"),
            image: new URL("@/image/pagetwo1.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.sensors.showcase2"),
            image: new URL("@/image/pagetwo2.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.sensors.showcase3"),
            image: new URL("@/image/pagetwo3.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.sensors.showcase4"),
            image: new URL("@/image/pagetwo4.jpg", import.meta.url).href,
          },
        ],
      },
      vision: {
        name: t("productDetail.vision.name"),
        description: t("productDetail.vision.description"),
        mainImage: new URL("@/image/banner3.jpg", import.meta.url).href,
        features: [
          t("productDetail.vision.feature1"),
          t("productDetail.vision.feature2"),
          t("productDetail.vision.feature3"),
          t("productDetail.vision.feature4"),
          t("productDetail.vision.feature5"),
        ],
        showcase: [
          {
            title: t("productDetail.vision.showcase1"),
            image: new URL("@/image/pagethree1.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.vision.showcase2"),
            image: new URL("@/image/pagethree2.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.vision.showcase3"),
            image: new URL("@/image/pagethree3.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.vision.showcase4"),
            image: new URL("@/image/pagethree4.jpg", import.meta.url).href,
          },
        ],
      },
      servo: {
        name: t("productDetail.servo.name"),
        description: t("productDetail.servo.description"),
        mainImage: new URL("@/image/banner5.png", import.meta.url).href,
        features: [
          t("productDetail.servo.feature1"),
          t("productDetail.servo.feature2"),
          t("productDetail.servo.feature3"),
          t("productDetail.servo.feature4"),
          t("productDetail.servo.feature5"),
        ],
        showcase: [
          {
            title: t("productDetail.servo.showcase1"),
            image: new URL("@/image/banner5.png", import.meta.url).href,
          },
          {
            title: t("productDetail.servo.showcase2"),
            image: new URL("@/image/banner1.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.servo.showcase3"),
            image: new URL("@/image/banner2.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.servo.showcase4"),
            image: new URL("@/image/banner3.jpg", import.meta.url).href,
          },
        ],
      },
      hmi: {
        name: t("productDetail.hmi.name"),
        description: t("productDetail.hmi.description"),
        mainImage: new URL("@/image/banner4.jpg", import.meta.url).href,
        features: [
          t("productDetail.hmi.feature1"),
          t("productDetail.hmi.feature2"),
          t("productDetail.hmi.feature3"),
          t("productDetail.hmi.feature4"),
          t("productDetail.hmi.feature5"),
        ],
        showcase: [
          {
            title: t("productDetail.hmi.showcase1"),
            image: new URL("@/image/banner4.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.hmi.showcase2"),
            image: new URL("@/image/banner1.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.hmi.showcase3"),
            image: new URL("@/image/banner2.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.hmi.showcase4"),
            image: new URL("@/image/banner3.jpg", import.meta.url).href,
          },
        ],
      },
      gateway: {
        name: t("productDetail.gateway.name"),
        description: t("productDetail.gateway.description"),
        mainImage: new URL("@/image/banner6.jpg", import.meta.url).href,
        features: [
          t("productDetail.gateway.feature1"),
          t("productDetail.gateway.feature2"),
          t("productDetail.gateway.feature3"),
          t("productDetail.gateway.feature4"),
          t("productDetail.gateway.feature5"),
        ],
        showcase: [
          {
            title: t("productDetail.gateway.showcase1"),
            image: new URL("@/image/imagestwo.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.gateway.showcase2"),
            image: new URL("@/image/banner1.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.gateway.showcase3"),
            image: new URL("@/image/banner2.jpg", import.meta.url).href,
          },
          {
            title: t("productDetail.gateway.showcase4"),
            image: new URL("@/image/banner3.jpg", import.meta.url).href,
          },
        ],
      },
    }));

    const product = computed(() => {
      const data = productsDB.value[productType];
      return data || productsDB.value.plc;
    });

    const relatedProducts = computed(() => {
      const types = ["plc", "sensors", "vision", "servo", "hmi", "gateway"];
      return types
        .filter((type) => type !== productType)
        .slice(0, 3)
        .map((type) => ({
          type,
          ...productsDB.value[type],
        }));
    });

    return {
      product,
      relatedProducts,
      productType,
      t,
    };
  },
};

</script>

<style scoped>
.product-detail-page {
  width: 100%;
}

.product-hero {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: var(--color-text-white);
  text-align: center;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  opacity: 0.9;
}

.product-main-image {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg-secondary);
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.product-overview {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-primary);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-3xl);
}

@media (max-width: 768px) {
  .overview-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

.overview-item {
  padding: var(--spacing-2xl);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
}

.overview-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.overview-content {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
}

.features-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--color-text-primary);
}

.feature-item::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

/* 生产过程视频 */
.product-video {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-secondary);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-3xl);
  text-align: center;
}

.video-wrapper {
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.production-video {
  width: 100%;
  height: 500px;
  display: block;
  background: #000;
  object-fit: contain;
}

.video-note {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-bg-primary);
  border-left: 4px solid var(--color-primary);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  border-radius: var(--radius-sm);
}

/* 产品展示 */
.product-showcase {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-primary);
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

.showcase-item {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.showcase-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.showcase-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.showcase-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.showcase-item:hover .showcase-image img {
  transform: scale(1.1);
}

.showcase-info {
  padding: var(--spacing-lg);
}

.showcase-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.showcase-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.cta-section {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: var(--color-text-white);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.cta-subtitle {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2xl);
  opacity: 0.9;
}

.related-products {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-secondary);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-3xl);
  text-align: center;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.related-card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.related-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.related-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.related-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.related-card:hover .related-image img {
  transform: scale(1.1);
}

.related-info {
  padding: var(--spacing-lg);
}

.related-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
}

.related-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-base);
}

.related-link:hover {
  color: var(--color-primary-dark);
}

@media (max-width: 768px) {
  .product-hero {
    padding: var(--spacing-3xl) 0 var(--spacing-2xl);
  }

  .hero-title {
    font-size: var(--font-size-3xl);
    padding: 0 var(--spacing-md);
  }

  .hero-subtitle {
    font-size: var(--font-size-base);
    padding: 0 var(--spacing-md);
  }

  .product-main-image {
    padding: var(--spacing-2xl) 0;
  }

  .main-image {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
  }

  .product-overview {
    padding: var(--spacing-3xl) 0;
  }

  .overview-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .overview-item {
    padding: var(--spacing-lg);
  }

  .overview-title {
    font-size: var(--font-size-xl);
  }

  .overview-content {
    font-size: var(--font-size-sm);
  }

  .feature-item {
    font-size: var(--font-size-sm);
  }

  .product-video {
    padding: var(--spacing-3xl) 0;
  }

  .section-title {
    font-size: var(--font-size-2xl);
    padding: 0 var(--spacing-md);
  }

  .video-wrapper {
    max-width: 100%;
    margin: 0 var(--spacing-md);
  }

  .production-video {
    height: 250px;
  }

  .product-showcase {
    padding: var(--spacing-3xl) 0;
  }

  .showcase-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .showcase-item {
    margin: 0 auto;
    max-width: 100%;
  }

  .showcase-image {
    height: 200px;
  }

  .showcase-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .showcase-info {
    padding: var(--spacing-md);
  }

  .showcase-title {
    font-size: var(--font-size-base);
    text-align: center;
  }

  .showcase-desc {
    font-size: var(--font-size-xs);
    text-align: center;
  }

  .cta-section {
    padding: var(--spacing-3xl) 0;
  }

  .cta-title {
    font-size: var(--font-size-2xl);
    padding: 0 var(--spacing-md);
  }

  .cta-subtitle {
    font-size: var(--font-size-base);
    padding: 0 var(--spacing-md);
  }

  .btn-large {
    width: 90%;
    max-width: 300px;
    margin: 0 auto;
    display: block;
  }

  .related-products {
    padding: var(--spacing-3xl) 0;
  }

  .related-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .related-image {
    height: 180px;
  }

  /* 移动端禁用hover效果 */
  .showcase-item:hover {
    transform: translateY(0);
    border-color: transparent;
  }

  .showcase-item:hover .showcase-image img {
    transform: scale(1);
  }

  .related-card:hover {
    transform: translateY(0);
  }

  .related-card:hover .related-image img {
    transform: scale(1);
  }
}
</style>
