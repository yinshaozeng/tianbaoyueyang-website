<template>
  <!--
    底部组件
    包含公司信息、快速链接、联系方式、版权声明等
  -->
  <footer class="footer">
    <!-- 主要内容区域 -->
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- 产品与服务 -->
          <div class="footer-section">
            <h4 class="footer-heading disabled-heading">
              {{ t("footer.productsTitle") }}
            </h4>
            <ul class="footer-links">
              <li v-for="item in productLinks">
                <span class="footer-link-disabled">
                  {{ item.name }}
                </span>
              </li>
            </ul>
          </div>

          <!-- 支持与帮助 -->
          <div class="footer-section">
            <h4 class="footer-heading disabled-heading">
              {{ t("footer.supportTitle") }}
            </h4>
            <ul class="footer-links">
              <li v-for="item in supportLinks" :key="item.path">
                <span class="footer-link-disabled">
                  {{ item.name }}
                </span>
              </li>
            </ul>
          </div>

          <!-- 联系我们 -->
          <div class="footer-section">
            <h4 class="footer-heading">{{ t("footer.contactTitle") }}</h4>
            <ul class="contact-info">
              <li class="contact-item">
                <span class="contact-icon">📍</span>
                <span class="contact-text">{{ t("footer.address") }}</span>
              </li>
              <li class="contact-item">
                <span class="contact-icon">📞</span>
                <span class="contact-text">{{ t("footer.phone") }}</span>
              </li>
              <li class="contact-item">
                <span class="contact-icon">✉️</span>
                <span class="contact-text">{{ t("footer.email") }}</span>
              </li>
              <li class="contact-item">
                <span class="contact-icon">⏰</span>
                <span class="contact-text">{{ t("footer.workHours") }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 版权区域 -->
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <!-- 版权信息 -->
          <div class="copyright">
            <p>&copy; {{ currentYear }} {{ t("footer.copyright") }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { useLanguage } from "@/composables/useLanguage";

export default {
  name: "Footer",

  setup() {
    const { t } = useLanguage();
    /**
     * 产品链接配置 - 使用 computed 使其响应式
     */
    const productLinks = computed(() => [
      { name: t('footer.product1') },
      { name: t('footer.product2') }
    ]);

    /**
     * 支持链接配置 - 使用 computed 使其响应式
     */
    const supportLinks = computed(() => [
      { name: t('footer.support1') }
    ]);

    /**
     * 当前年份（自动更新）
     */
    const currentYear = computed(() => new Date().getFullYear());

    return {
      productLinks,
      supportLinks,
      currentYear,
      t,
    };
  },
};
</script>

<style scoped>
/**
 * 底部样式
 */

/* 底部容器 */
.footer {
  background: var(--color-bg-dark);
  color: var(--color-text-white);
}

/* 主要内容区域 */
.footer-main {
  padding: var(--spacing-4xl) 0 var(--spacing-3xl);
}

/* 网格布局 */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-4xl);
  max-width: 1200px;
}

/* 底部区块 */
.footer-section {
  display: flex;
  flex-direction: column;
  padding: 0 var(--spacing-lg);
}

.footer-section:first-child {
  padding-left: 0;
}

.footer-section:last-child {
  padding-right: 0;
}

/* 公司标题 */
.footer-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-white);
  margin-bottom: var(--spacing-md);
  background: linear-gradient(135deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 公司描述 */
.footer-desc {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-lg);
}

/* 区块标题 */
.footer-heading {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-white);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

/* 链接列表 */
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  padding: 0;
  margin: 0;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color var(--transition-base);
}

.footer-link:hover {
  color: var(--color-text-white);
  padding-left: var(--spacing-xs);
}

/* 禁用的链接样式 */
.footer-link-disabled {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--font-size-sm);
  display: inline-block;
  transition: color var(--transition-base);
}

.footer-link-disabled:hover {
  color: rgba(255, 255, 255, 0.7);
}

.disabled-heading {
  opacity: 0.8;
}

/* 社交媒体链接 */
.social-links {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: var(--color-text-white);
  text-decoration: none;
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--color-primary);
  transform: translateY(-3px);
}

.social-link .icon {
  font-size: var(--font-size-xl);
}

/* 联系信息 */
.contact-info {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
}

.contact-icon {
  font-size: var(--font-size-lg);
  flex-shrink: 0;
}

.contact-text {
  flex: 1;
}

/* 版权区域 */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--spacing-lg) 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--font-size-sm);
  text-align: center;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.footer-bottom-link {
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--font-size-sm);
  text-decoration: none;
  transition: color var(--transition-base);
}

.footer-bottom-link:hover {
  color: var(--color-text-white);
}

.separator {
  color: rgba(255, 255, 255, 0.3);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-3xl);
  }

  .footer-section {
    padding: 0 var(--spacing-md);
  }

  .footer-section:first-child {
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .footer-main {
    padding: var(--spacing-3xl) 0 var(--spacing-2xl);
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .footer-section {
    padding: 0;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }

  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
