<template>
  <div class="solutions-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ t("home.solutionTitle") }}</h1>
        <p class="page-subtitle">{{ t("home.solutionSubtitle") }}</p>
      </div>
    </section>

    <section class="solutions-content">
      <div class="container">
        <div
          v-for="solution in solutions"
          :key="solution.id"
          class="solution-block"
        >
          <div class="solution-content">
            <div class="solution-text">
              <span class="solution-icon">{{ solution.icon }}</span>
              <h2 class="solution-title">{{ solution.title }}</h2>
              <p class="solution-desc">{{ solution.description }}</p>
              <ul class="solution-features">
                <li v-for="feature in solution.features" :key="feature">
                  ✓ {{ feature }}
                </li>
              </ul>
              <router-link to="/contact" class="btn btn-primary">{{
                t("solutions.consultSolution")
              }}</router-link>
            </div>
            <div class="solution-image">
              <img :src="solution.image" :alt="solution.title" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useLanguage } from "@/composables/useLanguage";
import { computed } from "vue";

export default {
  name: "Solutions",
  setup() {
    const { t } = useLanguage();

    const solutions = computed(() => [
      {
        id: 1,
        icon: "🏭",
        title: t("solutions.manufacturing"),
        description: t("solutions.manufacturingDesc"),
        features: [
          t("solutions.feature1"),
          t("solutions.feature2"),
          t("solutions.feature3"),
          t("solutions.feature4"),
        ],
        image: new URL("@/image/gongren.jpg", import.meta.url).href,
      },
      {
        id: 2,
        icon: "🚗",
        title: t("solutions.automotive"),
        description: t("solutions.automotiveDesc"),
        features: [
          t("solutions.automotiveFeature1"),
          t("solutions.automotiveFeature2"),
          t("solutions.automotiveFeature3"),
          t("solutions.automotiveFeature4"),
        ],
        image: new URL("@/image/1-250Z4094330C5.jpg", import.meta.url).href,
      },
    ]);
    return { solutions, t };
  },
};
</script>

<style scoped>
.solutions-page {
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
.solutions-content {
  padding: var(--spacing-4xl) 0;
}
.solution-block {
  margin-bottom: var(--spacing-4xl);
}
.solution-block:nth-child(even) .solution-content {
  flex-direction: row-reverse;
}
.solution-content {
  display: flex;
  gap: var(--spacing-3xl);
  align-items: center;
}
.solution-text {
  flex: 1;
}
.solution-icon {
  font-size: 48px;
  display: block;
  margin-bottom: var(--spacing-md);
}
.solution-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}
.solution-desc {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: var(--line-height-relaxed);
}
.solution-features {
  list-style: none;
  margin-bottom: var(--spacing-xl);
}
.solution-features li {
  padding: var(--spacing-sm) 0;
  color: var(--color-text-secondary);
}
.solution-image {
  flex: 1;
}
.solution-image img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}
@media (max-width: 768px) {
  .solution-content {
    flex-direction: column !important;
  }
}
</style>
