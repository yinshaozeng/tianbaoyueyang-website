<template>
  <div class="products-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ t("home.productTitle") }}</h1>
        <p class="page-subtitle">{{ t("home.productSubtitle") }}</p>
      </div>
    </section>

    <section class="products-content">
      <div class="container">
        <div class="products-grid">
          <div
            v-for="product in products"
            :key="product.id"
            class="product-card card"
          >
            <div class="product-image">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="product-info">
              <h3 class="product-name">{{ product.name }}</h3>
              <p class="product-desc">{{ product.description }}</p>
              <router-link :to="product.link" class="btn btn-primary">
                {{ t("home.learnMore") }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useLanguage } from "@/composables/useLanguage";

export default {
  name: "Products",
  setup() {
    const { t } = useLanguage();

    const products = [
      {
        id: 1,
        name: t("products.plc"),
        description: t("products.plcDesc"),
        image: new URL("@/image/banner1.jpg", import.meta.url).href,
        link: "/products/plc",
      },
      {
        id: 2,
        name: t("products.sensor"),
        description: t("products.sensorDesc"),
        image: new URL("@/image/banner2.jpg", import.meta.url).href,
        link: "/products/sensors",
      },
      {
        id: 3,
        name: t("products.vision"),
        description: t("products.visionDesc"),
        image: new URL("@/image/banner3.jpg", import.meta.url).href,
        link: "/products/vision",
      },
      {
        id: 4,
        name: t("products.hmi"),
        description: t("products.hmiDesc"),
        image: new URL("@/image/banner4.jpg", import.meta.url).href,
        link: "/products/hmi",
      },
      {
        id: 5,
        name: t("products.servo"),
        description: t("products.servoDesc"),
        image: new URL("@/image/banner5.png", import.meta.url).href,
        link: "/products/servo",
      },

      {
        id: 6,
        name: t("products.gateway"),
        description: t("products.gatewayDesc"),
        image: new URL("@/image/banner6.jpg", import.meta.url).href,
        link: "/products/gateway",
      },
    ];
    return { products, t };
  },
};
</script>

<style scoped>
.products-page {
  width: 100%;
}
.page-hero {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: var(--color-text-white);
  text-align: center;
}
.page-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}
.page-subtitle {
  font-size: var(--font-size-xl);
}
.products-content {
  padding: var(--spacing-4xl) 0;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}
.product-card {
  overflow: hidden;
}
.product-image {
  height: 200px;
}
.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-info {
  padding: var(--spacing-lg);
}
.product-name {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-sm);
}
.product-desc {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}
</style>
