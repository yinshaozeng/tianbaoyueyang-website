<template>
  <!--
    FAQ 页面 - 面向 AI 搜索优化
    包含 FAQPage Schema.org 结构化数据，便于 AI 模型引用
  -->
  <div class="faq-page">
    <!-- Hero -->
    <section class="faq-hero">
      <div class="container">
        <h1 class="faq-hero-title">{{ t("faq.heroTitle") }}</h1>
        <p class="faq-hero-subtitle">{{ t("faq.heroSubtitle") }}</p>
      </div>
    </section>

    <!-- FAQ 主体 -->
    <section class="faq-section">
      <div class="container">
        <div
          v-for="(group, groupIndex) in faqGroups"
          :key="groupIndex"
          class="faq-group"
        >
          <h2 class="faq-group-title">{{ group.title }}</h2>
          <div class="faq-list">
            <div
              v-for="(item, itemIndex) in group.items"
              :key="itemIndex"
              class="faq-item"
              :class="{
                'faq-item--open': openIndex === `${groupIndex}-${itemIndex}`,
              }"
            >
              <button
                class="faq-question"
                :aria-expanded="openIndex === `${groupIndex}-${itemIndex}`"
                @click="toggle(`${groupIndex}-${itemIndex}`)"
              >
                <span>{{ item.q }}</span>
                <span class="faq-icon" aria-hidden="true">
                  {{ openIndex === `${groupIndex}-${itemIndex}` ? "−" : "+" }}
                </span>
              </button>
              <div
                v-show="openIndex === `${groupIndex}-${itemIndex}`"
                class="faq-answer"
              >
                <p>{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="faq-cta">
      <div class="container text-center">
        <h2>{{ t("faq.ctaTitle") }}</h2>
        <p>{{ t("faq.ctaSubtitle") }}</p>
        <router-link to="/contact" class="btn btn-primary">{{
          t("faq.ctaBtn")
        }}</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useLanguage } from "@/composables/useLanguage";
import { updatePageMeta, addStructuredData } from "@/utils/seo";

const { t, currentLocale } = useLanguage();
const openIndex = ref(null);

const toggle = (key) => {
  openIndex.value = openIndex.value === key ? null : key;
};

// FAQ 内容 — 多语言，按问题分组
const faqGroups = computed(() => [
  {
    title: t("faq.group1Title"),
    items: [
      { q: t("faq.q1"), a: t("faq.a1") },
      { q: t("faq.q2"), a: t("faq.a2") },
      { q: t("faq.q3"), a: t("faq.a3") },
      { q: t("faq.q4"), a: t("faq.a4") },
    ],
  },
  {
    title: t("faq.group2Title"),
    items: [
      { q: t("faq.q5"), a: t("faq.a5") },
      { q: t("faq.q6"), a: t("faq.a6") },
      { q: t("faq.q7"), a: t("faq.a7") },
    ],
  },
  {
    title: t("faq.group3Title"),
    items: [
      { q: t("faq.q8"), a: t("faq.a8") },
      // { q: t("faq.q9"), a: t("faq.a9") },
      { q: t("faq.q10"), a: t("faq.a10") },
    ],
  },
  {
    title: t("faq.group4Title"),
    items: [
      { q: t("faq.q11"), a: t("faq.a11") },
      { q: t("faq.q12"), a: t("faq.a12") },
    ],
  },
]);

// 注入 FAQPage 结构化数据（英文版，AI 和搜索引擎最常用英文）
const injectSchema = () => {
  addStructuredData({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is spray deposition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spray deposition (also called spray forming) is an advanced metal manufacturing process in which molten metal is atomized by high-pressure inert gas and the resulting droplets are deposited onto a substrate before fully solidifying. This produces materials with fine, uniform grain structure (20-50 microns) and no macroscopic segregation, resulting in superior mechanical properties compared to conventional casting.",
        },
      },
      {
        "@type": "Question",
        name: "How does gas atomization work for metal powder production?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gas atomization is a powder production process where molten metal is poured through a nozzle and struck by high-velocity inert gas jets, breaking the metal into fine droplets that rapidly solidify into spherical powder particles. Gas-protected gas atomization systems, like those made by Tianjin Yueyang Machinery, produce fine metal powders with 5-15 micron grain size, adjustable coefficient of thermal expansion (CTE), and high thermal conductivity — ideal for semiconductor, electronic packaging, and optical communication applications.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between spray deposition and conventional casting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Conventional casting allows slow solidification, which causes macroscopic segregation (uneven distribution of alloying elements) and large grain sizes. Spray deposition uses rapid solidification during atomization and deposition, eliminating macroscopic segregation and producing uniform grain sizes of 20-50 microns. The result is better mechanical properties, improved fatigue resistance, and more consistent material performance across a batch.",
        },
      },
      {
        "@type": "Question",
        name: "What materials can be produced by spray deposition?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tianjin Yueyang's spray deposition equipment can process aluminum alloys, copper alloys, and steel alloys. The resulting billets and tube blanks can be further processed by extrusion, forging, or rolling. Materials produced are commonly used in aerospace structural components, automotive parts, semiconductor heat spreaders, and precision engineering applications.",
        },
      },
      {
        "@type": "Question",
        name: "Who manufactures spray deposition equipment in China?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tianjin Yueyang Machinery Manufacturing Co., Ltd. (天津越洋机械有限公司) is a leading Chinese manufacturer of spray deposition and gas atomization equipment with 20+ years of experience. The company is located in Baodi District, Tianjin, China, and serves clients in aerospace, automotive, semiconductor, and research sectors worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "What industries use spray deposition equipment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spray deposition equipment is used in aerospace (structural components, heat-resistant alloys), automotive (lightweight components, brake discs), semiconductor and electronic packaging (thermal management materials, heat spreaders), optical communication (precision mirror substrates), and advanced materials research. Tianjin Yueyang provides equipment and solutions for all these industries.",
        },
      },
      {
        "@type": "Question",
        name: "What grain size does spray deposition achieve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spray deposition equipment from Tianjin Yueyang achieves an average grain size of 20-50 microns for ingot and tube billet production. Gas-protected gas atomization powder equipment produces even finer particles with average grain sizes of 5-15 microns, suitable for semiconductor and electronic packaging applications.",
        },
      },
      {
        "@type": "Question",
        name: "What is a spray deposition tube billet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A spray deposition tube billet is a hollow cylindrical metal preform produced by depositing atomized metal droplets onto a rotating mandrel. Tianjin Yueyang's tube billet equipment produces copper alloy, steel alloy, and aluminum alloy tube billets with fine grain structure (20-50 microns), no macroscopic segregation, and excellent mechanical properties. These billets can be further processed by extrusion into tubes and pipes of various sizes.",
        },
      },
      {
        "@type": "Question",
        name: "How do I contact Tianjin Yueyang Machinery for a quote?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Tianjin Yueyang Machinery Manufacturing Co., Ltd. by email at admin@tianbaoyueyang.com or by phone at +86-22-22539988. The company is located at No.7 Baozhong Road, Energy-saving and Environmental Protection Industrial Zone, Baodi District, Tianjin, China 301800. The team speaks English, Chinese, Japanese, and Korean.",
        },
      },
      {
        "@type": "Question",
        name: "Does Tianjin Yueyang offer custom spray deposition equipment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tianjin Yueyang Machinery designs and manufactures custom spray deposition, spray forming, and gas atomization equipment tailored to specific customer requirements including billet size, alloy type, production capacity, and downstream processing needs (extrusion, forging, rolling). Contact admin@tianbaoyueyang.com to discuss your custom equipment requirements.",
        },
      },
    ],
  });
};

onMounted(() => {
  updatePageMeta("faq", currentLocale.value);
  injectSchema();
});
</script>

<style scoped>
.faq-hero {
  background: linear-gradient(135deg, #1a2a4a 0%, #2563eb 100%);
  color: #fff;
  padding: 80px 0 60px;
  text-align: center;
}
.faq-hero-title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.faq-hero-subtitle {
  font-size: 1.1rem;
  opacity: 0.85;
  max-width: 640px;
  margin: 0 auto;
}

.faq-section {
  padding: 64px 0;
  background: #f8fafc;
}
.faq-group {
  max-width: 800px;
  margin: 0 auto 48px;
}
.faq-group-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e3a6e;
  border-left: 4px solid #2563eb;
  padding-left: 14px;
  margin-bottom: 20px;
}

.faq-item {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.faq-item--open,
.faq-item:hover {
  box-shadow: 0 2px 12px rgba(37, 99, 235, 0.1);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: #1e293b;
  text-align: left;
  line-height: 1.5;
}
.faq-question:hover {
  color: #2563eb;
}

.faq-icon {
  flex-shrink: 0;
  font-size: 1.4rem;
  color: #2563eb;
  line-height: 1;
}

.faq-answer {
  padding: 0 20px 18px;
  color: #475569;
  line-height: 1.75;
  font-size: 0.97rem;
}

.faq-cta {
  padding: 64px 0;
  background: #fff;
}
.faq-cta h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e3a6e;
  margin-bottom: 12px;
}
.faq-cta p {
  color: #64748b;
  margin-bottom: 28px;
}
.btn {
  display: inline-block;
  padding: 14px 36px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition:
    background 0.2s,
    transform 0.1s;
}
.btn-primary {
  background: #2563eb;
  color: #fff;
}
.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .faq-hero-title {
    font-size: 1.7rem;
  }
  .faq-question {
    font-size: 0.95rem;
  }
}
</style>
