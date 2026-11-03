<template>
  <div class="about-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ t('about.title') }}</h1>
        <p class="page-subtitle">{{ t('about.subtitle') }}</p>
      </div>
    </section>

    <section class="about-intro">
      <div class="container">
        <div class="intro-content">
          <h2 class="section-title">{{ t('about.introTitle') }}</h2>
          <p class="intro-text">
            {{ t('about.intro1') }}
          </p>
          <p class="intro-text">
            {{ t('about.intro2') }}
          </p>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <h2 class="section-title text-center">{{ t('about.valuesTitle') }}</h2>
        <div class="values-grid">
          <div v-for="value in values" :key="value.title" class="value-card">
            <div class="value-icon">{{ value.icon }}</div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-desc">{{ value.description }}</p>
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
  name: "About",
  setup() {
    const { t } = useLanguage();

    const values = computed(() => [
      {
        icon: "🎯",
        title: t("about.innovation"),
        description: t("about.innovationDesc"),
      },
      {
        icon: "🤝",
        title: t("about.customer"),
        description: t("about.customerDesc"),
      },
      {
        icon: "💡",
        title: t("about.excellence"),
        description: t("about.excellenceDesc"),
      },
      {
        icon: "🌍",
        title: t("about.responsibility"),
        description: t("about.responsibilityDesc"),
      },
    ]);
    return { values, t };
  },
};
</script>

<style scoped>
.about-page {
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
.about-intro {
  padding: var(--spacing-4xl) 0;
}
.intro-content {
  max-width: 800px;
  margin: 0 auto;
}
.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-xl);
}
.intro-text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
}
.values-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-secondary);
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-2xl);
}
.value-card {
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
}
.value-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-md);
}
.value-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-sm);
}
.value-desc {
  color: var(--color-text-secondary);
}
</style>
