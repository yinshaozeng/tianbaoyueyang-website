<template>
  <!--
    首页视图
    组合各个区块组件形成完整的首页
  -->
  <div class="home-page">
    <!-- Hero Banner 轮播 -->
    <HeroBanner />

    <!-- 产品展示区块 -->
    <ProductSection />

    <!-- 解决方案区块 -->
    <section class="solutions-preview">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">{{ t("home.solutionTitle") }}</h2>
          <p class="section-subtitle">
            {{ t("home.solutionSubtitle") }}
          </p>
        </div>

        <div class="solutions-grid">
          <div
            v-for="solution in solutions"
            :key="solution.id"
            class="solution-card"
          >
            <div class="solution-icon">{{ solution.icon }}</div>
            <h3 class="solution-title">{{ solution.title }}</h3>
            <p class="solution-desc">{{ solution.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据统计区块 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 新闻资讯区块 -->
    <!-- <section class="news-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('home.newsTitle') }}</h2>
        </div>

        <div class="news-grid">
          <article
            v-for="news in newsItems"
            :key="news.id"
            class="news-card card"
          >
            <div class="news-image">
              <img :src="news.image" :alt="news.title">
              <span class="news-category">{{ news.category }}</span>
            </div>
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">{{ news.date }}</span>
              </div>
              <h3 class="news-title">{{ news.title }}</h3>
              <p class="news-excerpt">{{ news.excerpt }}</p>
            </div>
          </article>
        </div>
      </div>
    </section> -->

    <!-- CTA 行动号召区块 -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content text-center">
          <h2 class="cta-title">{{ t("home.ctaTitle") }}</h2>
          <p class="cta-subtitle">
            {{ t("home.ctaSubtitle") }}
          </p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn btn-primary btn-large">
              {{ t("home.ctaConsult") }}
            </router-link>
            <router-link to="/solutions" class="btn btn-secondary btn-large">
              {{ t("home.browseSolutions") }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeroBanner from "@/components/home/HeroBanner.vue";
import ProductSection from "@/components/home/ProductSection.vue";
import { useLanguage } from "@/composables/useLanguage";
import { computed } from "vue";

export default {
  name: "Home",

  components: {
    HeroBanner,
    ProductSection,
  },

  setup() {
    const { t } = useLanguage();
    /**
     * 解决方案数据 - 使用 computed 使其响应式
     */
    const solutions = computed(() => [
      {
        id: 1,
        icon: "🏭",
        title: t("solutions.manufacturing"),
        description: t("solutions.manufacturingDesc"),
        link: "/solutions/manufacturing",
      },
      {
        id: 2,
        icon: "🚗",
        title: t("solutions.automotive"),
        description: t("solutions.automotiveDesc"),
        link: "/solutions/automotive",
      },
    ]);

    /**
     * 统计数据 - 使用 computed 使其响应式
     */
    const stats = computed(() => [
      { number: "20+", label: t("home.statsYears") },
      { number: "60+", label: t("home.statsClients") },
      { number: "98%", label: t("home.statsSatisfaction") },
      { number: "50+", label: t("home.statsSupport") },
    ]);

    /**
     * 新闻资讯
     */
    const newsItems = [
      {
        id: 1,
        title: "公司成功获得智能控制系统发明专利授权",
        excerpt:
          '我公司自主研发的"基于AI的智能工业控制系统"获得国家知识产权局发明专利授权，该专利可显著提升生产效率和安全性...',
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
        category: "专利成果",
        date: "2024-01-20",
        link: "/news/1",
      },
      {
        id: 2,
        title: "多项传感器技术专利获得突破性进展",
        excerpt:
          '公司申报的"高精度温湿度传感器"、"智能压力传感器"等5项实用新型专利全部通过审核，进一步巩固了行业技术领先地位...',
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
        category: "专利成果",
        date: "2024-01-18",
        link: "/news/2",
      },
      {
        id: 3,
        title: "工业物联网通信协议专利成功获批",
        excerpt:
          '历经两年研发的"低功耗工业物联网通信协议"获得发明专利授权，该技术可降低设备能耗50%以上，推动绿色智能制造...',
        image:
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
        category: "专利成果",
        date: "2024-01-15",
        link: "/news/3",
      },
      {
        id: 4,
        title: "自动化生产线控制系统专利喜获授权",
        excerpt:
          '公司"智能自动化生产线控制系统及控制方法"获得发明专利证书，该系统已成功应用于多家大型制造企业，市场反响良好...',
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
        category: "专利成果",
        date: "2024-01-10",
        link: "/news/4",
      },
      {
        id: 5,
        title: "机器视觉检测技术专利布局完成",
        excerpt:
          '公司在机器视觉领域再添新专利，"基于深度学习的工业缺陷检测方法"等3项专利获批，检测精度达到99.8%以上...',
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        category: "专利成果",
        date: "2024-01-05",
        link: "/news/5",
      },
      {
        id: 6,
        title: "节能控制算法专利获得国际认可",
        excerpt:
          '我公司"自适应节能控制算法及系统"不仅获得国内发明专利，还通过PCT国际专利合作条约申请，将在多个国家获得专利保护...',
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        category: "专利成果",
        date: "2023-12-28",
        link: "/news/6",
      },
    ];

    return {
      solutions,
      stats,
      newsItems,
      t,
    };
  },
};
</script>

<style scoped>
/**
 * 首页样式
 */

.home-page {
  width: 100%;
}

/* 解决方案预览区块 */
.solutions-preview {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-primary);
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-3xl);
}

.solution-card {
  padding: var(--spacing-2xl);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  text-align: center;
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.solution-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
}

.solution-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-md);
}

.solution-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
}

.solution-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: 0;
}

/* 统计数据区块 */
.stats-section {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: var(--color-text-white);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-2xl);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-sm);
}

.stat-label {
  font-size: var(--font-size-lg);
  opacity: 0.9;
}

/* 新闻资讯区块 */
.news-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-secondary);
}

.section-header {
  margin-bottom: var(--spacing-3xl);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.news-card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.news-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.news-card:hover .news-image img {
  transform: scale(1.1);
}

.news-category {
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-primary);
  color: var(--color-text-white);
  font-size: var(--font-size-xs);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-medium);
}

.news-content {
  padding: var(--spacing-lg);
}

.news-meta {
  margin-bottom: var(--spacing-sm);
}

.news-date {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.news-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
  line-height: var(--line-height-tight);
}

.news-excerpt {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: 0;
}

/* CTA 行动号召区块 */
.cta-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-primary);
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.cta-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2xl);
}

.cta-actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
}

/* 通用区块样式 */
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

/* 响应式设计 */
@media (max-width: 768px) {
  .solutions-grid,
  .news-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }

  .cta-title {
    font-size: var(--font-size-3xl);
  }

  .cta-subtitle {
    font-size: var(--font-size-base);
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-actions .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
