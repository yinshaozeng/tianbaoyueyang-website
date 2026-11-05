<template>
  <!--
    头部导航组件
    包含Logo、导航菜单、语言切换等功能
    在桌面端和移动端有不同的展示方式
  -->
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <!-- Logo区域 -->
        <router-link to="/" class="logo">
          <img
            src="@/image/imagesthree.jpg"
            alt="企业自动化"
            class="logo-image"
          />
        </router-link>

        <!-- 桌面端导航菜单 -->
        <nav class="nav-desktop hide-mobile">
          <ul class="nav-list">
            <li v-for="item in navItems" :key="item.path" class="nav-item">
              <router-link
                :to="item.path"
                class="nav-link"
                :class="{ active: isActiveRoute(item.path) }"
              >
                {{ item.name }}
              </router-link>

              <!-- 下拉菜单（如果有子菜单） -->
              <ul v-if="item.children" class="dropdown-menu">
                <li
                  v-for="child in item.children"
                  :key="child.path"
                  class="dropdown-item"
                >
                  <router-link :to="child.path" class="dropdown-link">
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <!-- 右侧操作区域 -->
        <div class="header-actions hide-mobile">
          <!-- 语言切换下拉菜单 -->
          <div class="language-selector">
            <button class="language-btn" @click="toggleLanguageMenu">
              <span class="language-icon">🌐</span>
              <span class="language-text">{{ currentLanguage.name }}</span>
              <span class="arrow">▼</span>
            </button>

            <!-- 语言下拉菜单 -->
            <transition name="fade">
              <div v-if="isLanguageMenuOpen" class="language-menu">
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  class="language-option"
                  :class="{ active: currentLanguage.code === lang.code }"
                  @click="changeLanguage(lang)"
                >
                  <span class="flag">{{ lang.flag }}</span>
                  <span>{{ lang.name }}</span>
                </button>
              </div>
            </transition>
          </div>

          <!-- 联系我们按钮 -->
          <router-link to="/contact" class="btn btn-primary">
            {{ t("header.contactBtn") }}
          </router-link>
        </div>

        <!-- 移动端菜单按钮 -->
        <button
          class="mobile-menu-btn hide-desktop"
          @click="toggleMobileMenu"
          aria-label="菜单"
        >
          <span class="hamburger" :class="{ open: isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </div>

    <!-- 移动端菜单 -->
    <transition name="slide-down">
      <div v-if="isMobileMenuOpen" class="mobile-menu hide-desktop">
        <nav class="mobile-nav">
          <ul class="mobile-nav-list">
            <li
              v-for="item in navItems"
              :key="item.path"
              class="mobile-nav-item"
            >
              <router-link
                :to="item.path"
                class="mobile-nav-link"
                @click="closeMobileMenu"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>

          <!-- 移动端语言切换 -->
          <div class="mobile-language-section">
            <div class="mobile-section-title">
              {{ t("header.language") || "语言 / Language" }}
            </div>
            <div class="mobile-language-grid">
              <button
                v-for="lang in languages"
                :key="lang.code"
                class="mobile-language-btn"
                :class="{ active: currentLanguage.code === lang.code }"
                @click="changeLanguage(lang)"
              >
                <span class="flag">{{ lang.flag }}</span>
                <span class="lang-name">{{ lang.name }}</span>
              </button>
            </div>
          </div>

          <!-- 移动端联系按钮 -->
          <div class="mobile-contact-section">
            <router-link
              to="/contact"
              class="btn btn-primary btn-large mobile-contact-btn"
              @click="closeMobileMenu"
            >
              {{ t("header.contactBtn") }}
            </router-link>
          </div>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useLanguage } from "@/composables/useLanguage";

export default {
  name: "Header",

  setup() {
    const route = useRoute();
    const { currentLanguage, setLocale, t } = useLanguage();

    // 响应式数据
    const isScrolled = ref(false); // 是否滚动
    const isMobileMenuOpen = ref(false); // 移动端菜单是否打开
    const isLanguageMenuOpen = ref(false); // 语言菜单是否打开

    /**
     * 多语言配置
     */
    const languages = [
      { code: "en", name: "English", flag: "🇺🇸" },
      { code: "zh", name: "中文", flag: "🇨🇳" },
      { code: "ja", name: "日本語", flag: "🇯🇵" },
      { code: "ko", name: "한국어", flag: "🇰🇷" },
      { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
      { code: "es", name: "Español", flag: "🇪🇸" },
      { code: "ar", name: "العربية", flag: "🇸🇦" },
    ];

    /**
     * 导航菜单配置 - 使用计算属性确保语言切换时更新
     */
    const navItems = computed(() => [
      {
        name: t("nav.home"),
        path: "/",
      },
      {
        name: t("nav.solutions"),
        path: "/solutions",
      },
      {
        name: t("nav.about"),
        path: "/about",
      },
      {
        name: t("nav.faq"),
        path: "/faq",
      },
      {
        name: t("nav.contact"),
        path: "/contact",
      },
    ]);

    /**
     * 监听滚动事件
     * 滚动超过50px时改变头部样式
     */
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    /**
     * 切换移动端菜单
     */
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;

      // 防止背景滚动
      if (isMobileMenuOpen.value) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    /**
     * 关闭移动端菜单
     */
    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
      document.body.style.overflow = "";
    };

    /**
     * 切换语言菜单
     */
    const toggleLanguageMenu = () => {
      isLanguageMenuOpen.value = !isLanguageMenuOpen.value;
    };

    /**
     * 切换语言
     */
    const changeLanguage = (lang) => {
      setLocale(lang.code);
      isLanguageMenuOpen.value = false;

      // 移动端切换语言后关闭菜单
      if (isMobileMenuOpen.value) {
        closeMobileMenu();
      }

      // 页面会自动重新渲染，因为所有文本都是响应式的
      console.log("语言已切换到:", lang.name);
    };

    /**
     * 判断当前路由是否激活
     */
    const isActiveRoute = (path) => {
      if (path === "/") {
        return route.path === "/";
      }
      return route.path.startsWith(path);
    };

    // 生命周期钩子
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
      // 点击外部关闭语言菜单
      document.addEventListener("click", (e) => {
        if (!e.target.closest(".language-selector")) {
          isLanguageMenuOpen.value = false;
        }
      });
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = ""; // 清理
    });

    return {
      isScrolled,
      isMobileMenuOpen,
      isLanguageMenuOpen,
      languages,
      currentLanguage,
      navItems,
      toggleMobileMenu,
      closeMobileMenu,
      toggleLanguageMenu,
      changeLanguage,
      isActiveRoute,
      t,
    };
  },
};
</script>

<style scoped>
/**
 * 头部样式
 */

/* 头部容器 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: var(--color-bg-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: var(--z-fixed);
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
}

/* 滚动后的头部样式 */
.header-scrolled {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
}

.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo样式 */
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-image {
  height: 50px;
  width: auto;
  object-fit: contain;
  transition: opacity var(--transition-base);
}

.logo-image:hover {
  opacity: 0.8;
}

/* 桌面端导航 */
.nav-desktop {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  gap: var(--spacing-xl);
  list-style: none;
  align-items: center;
  flex-wrap: nowrap;
}

.nav-item {
  white-space: nowrap;
  flex-shrink: 0;
  position: relative;
}

.nav-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  text-decoration: none;
  transition: color var(--transition-base);
  position: relative;
  white-space: nowrap;
}

/* 导航链接悬停效果 */
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-base);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
}

/* 下拉菜单 */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: var(--color-bg-primary);
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-md);
  padding: var(--spacing-sm) 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all var(--transition-base);
}

.nav-item:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  list-style: none;
}

.dropdown-link {
  display: block;
  padding: var(--spacing-sm) var(--spacing-lg);
  color: var(--color-text-primary);
  text-decoration: none;
  transition: all var(--transition-base);
}

.dropdown-link:hover {
  background: var(--color-bg-secondary);
  color: var(--color-primary);
}

/* 右侧操作区域 */
.header-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

/* 语言选择器 */
.language-selector {
  position: relative;
}

.language-btn {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-md);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  font-size: var(--font-size-sm);
  white-space: nowrap;
  min-width: fit-content;
}

.language-btn:hover {
  border-color: var(--color-primary);
  background: var(--color-bg-secondary);
}

.language-icon {
  font-size: var(--font-size-base);
  flex-shrink: 0;
}

.language-text {
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
  flex-shrink: 0;
}

.arrow {
  font-size: 10px;
  transition: transform var(--transition-base);
}

.language-btn:hover .arrow {
  transform: translateY(2px);
}

/* 语言下拉菜单 */
.language-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 180px;
  background: var(--color-bg-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-xs) 0;
  z-index: var(--z-dropdown);
}

.language-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background var(--transition-base);
  font-size: var(--font-size-sm);
  white-space: nowrap;
}

.language-option:hover {
  background: var(--color-bg-secondary);
}

.language-option.active {
  background: var(--color-primary);
  color: var(--color-text-white);
}

.flag {
  font-size: var(--font-size-lg);
}

.icon-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background: transparent;
  cursor: pointer;
  transition: background var(--transition-base);
}

.icon-btn:hover {
  background: var(--color-bg-secondary);
}

.icon {
  font-size: var(--font-size-xl);
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

/* 汉堡菜单图标 */
.hamburger {
  width: 24px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.hamburger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* 移动端菜单 */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-bg-primary);
  box-shadow: var(--shadow-lg);
  max-height: calc(100vh - var(--header-height-mobile));
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.mobile-nav-list {
  padding: var(--spacing-md) 0;
}

.mobile-nav-item {
  border-bottom: 1px solid var(--color-border-light);
}

.mobile-nav-link {
  display: block;
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--color-text-primary);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
}

.mobile-nav-link:active {
  background: var(--color-bg-secondary);
}

/* 移动端语言切换区域 */
.mobile-language-section {
  padding: var(--spacing-lg);
  background: var(--color-bg-secondary);
  border-top: 2px solid var(--color-border);
  border-bottom: 2px solid var(--color-border);
  margin-top: var(--spacing-sm);
}

.mobile-section-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
}

.mobile-language-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
  max-width: 400px;
  margin: 0 auto;
}

.mobile-language-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-sm);
  background: var(--color-bg-primary);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  font-size: var(--font-size-sm);
  min-height: 70px;
}

.mobile-language-btn .flag {
  font-size: var(--font-size-2xl);
  line-height: 1;
}

.mobile-language-btn .lang-name {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  font-size: var(--font-size-xs);
  text-align: center;
}

.mobile-language-btn:active,
.mobile-language-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: scale(0.98);
}

.mobile-language-btn.active .lang-name {
  color: var(--color-text-white);
}

/* 移动端联系按钮区域 */
.mobile-contact-section {
  padding: var(--spacing-lg);
  background: var(--color-bg-primary);
}

.mobile-contact-btn {
  width: 100%;
  text-align: center;
  justify-content: center;
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-base);
}

/* 移动端菜单动画 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all var(--transition-base);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .header {
    height: var(--header-height-mobile);
  }

  .logo-image {
    height: 40px;
  }

  .nav-list {
    gap: var(--spacing-md);
  }

  .nav-link {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-sm);
  }

  .language-btn {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: var(--font-size-xs);
  }
}
</style>
