<template>
  <!--
    联系我们页面
    包含联系表单和联系信息
  -->
  <div class="contact-page">
    <!-- 页面头部 -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">{{ t('contact.title') }}</h1>
        <p class="page-subtitle">{{ t('contact.subtitle') }}</p>
      </div>
    </section>

    <!-- 主要内容 -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-layout">
          <!-- 左侧：联系信息 -->
          <div class="contact-info-section">
            <h2 class="info-title">{{ t('contact.infoTitle') }}</h2>
            <p class="info-desc">
              {{ t('contact.infoDesc') }}
            </p>

            <div class="contact-methods">
              <!-- 电话 -->
              <div class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-content">
                  <h3 class="method-title">{{ t('contact.phone') }}</h3>
                  <p class="method-text">{{ t('contact.phoneNumber') }}</p>
                  <p class="method-hint">{{ t('contact.phoneHint') }}</p>
                </div>
              </div>

              <!-- 邮箱 -->
              <div class="contact-method">
                <div class="method-icon">✉️</div>
                <div class="method-content">
                  <h3 class="method-title">{{ t('contact.email') }}</h3>
                  <p class="method-text">{{ t('contact.emailAddress') }}</p>
                  <p class="method-hint">{{ t('contact.emailHint') }}</p>
                </div>
              </div>

              <!-- 地址 -->
              <div class="contact-method">
                <div class="method-icon">📍</div>
                <div class="method-content">
                  <h3 class="method-title">{{ t('contact.address') }}</h3>
                  <p class="method-text">{{ t('contact.addressLine1') }}</p>
                </div>
              </div>

              <!-- 工作时间 -->
              <div class="contact-method">
                <div class="method-icon">⏰</div>
                <div class="method-content">
                  <h3 class="method-title">{{ t('contact.workTime') }}</h3>
                  <p class="method-text">{{ t('contact.workTimeWeekday') }}</p>
                  <p class="method-text">{{ t('contact.workTimeWeekend') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：联系表单 -->
          <div class="contact-form-section">
            <h2 class="form-title">{{ t('contact.formTitle') }}</h2>
            <p class="form-desc">{{ t('contact.formDesc') }}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <!-- 地图区域（可选） -->
    <!-- <section class="map-section">
      <div class="map-placeholder">
        <p>🗺️ 地图位置展示区域</p>
        <p class="map-hint">（可集成百度地图或高德地图）</p>
      </div>
    </section> -->
  </div>
</template>

<script>
import ContactForm from "@/components/common/ContactForm.vue";
import { useLanguage } from "@/composables/useLanguage";

export default {
  name: "Contact",

  components: {
    ContactForm,
  },

  setup() {
    const { t } = useLanguage();
    return { t };
  },
};
</script>

<style scoped>
/**
 * 联系页面样式
 */

.contact-page {
  width: 100%;
}

/* 页面头部 */
.page-hero {
  padding: var(--spacing-4xl) 0 var(--spacing-3xl);
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
  opacity: 0.9;
}

/* 主要内容 */
.contact-content {
  padding: var(--spacing-4xl) 0;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: var(--spacing-4xl);
}

/* 联系信息区域 */
.info-title,
.form-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
}

.info-desc,
.form-desc {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-2xl);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.contact-method {
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.contact-method:hover {
  background: var(--color-bg-primary);
  box-shadow: var(--shadow-md);
}

.method-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.method-content {
  flex: 1;
}

.method-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.method-text {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.method-hint {
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}

/* 联系表单区域 */
.contact-form-section {
  background: var(--color-bg-primary);
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

/* 地图区域 */
.map-section {
  height: 400px;
  background: var(--color-bg-secondary);
}

.map-placeholder {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text-tertiary);
  font-size: var(--font-size-xl);
}

.map-hint {
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-sm);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: var(--spacing-3xl);
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: var(--spacing-3xl) 0 var(--spacing-2xl);
  }

  .page-title {
    font-size: var(--font-size-4xl);
  }

  .page-subtitle {
    font-size: var(--font-size-base);
  }

  .contact-content {
    padding: var(--spacing-3xl) 0;
  }

  .contact-form-section {
    padding: var(--spacing-lg);
  }

  .map-section {
    height: 300px;
  }
}
</style>
