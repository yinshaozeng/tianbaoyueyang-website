/**
 * 语言切换 Composable
 * 提供全局语言状态管理
 */

import { ref, computed } from 'vue'
import { t as translate } from '@/locales'

// 全局语言状态（在模块顶层定义，所有组件共享）
const currentLocale = ref(localStorage.getItem('locale') || 'zh')

/**
 * 语言切换 Hook
 */
export function useLanguage() {
  /**
   * 切换语言
   * @param {string} locale - 语言代码 (zh/en/ja/ko)
   */
  const setLocale = (locale) => {
    currentLocale.value = locale
    // 保存到localStorage，下次访问时记住用户选择
    localStorage.setItem('locale', locale)
    // 更新HTML lang属性
    document.documentElement.lang = locale
  }

  /**
   * 翻译函数
   * @param {string} key - 翻译键
   * @returns {string} 翻译文本
   */
  const t = (key) => {
    return translate(currentLocale.value, key)
  }

  /**
   * 当前语言信息
   */
  const currentLanguage = computed(() => {
    const languages = {
      en: { code: 'en', name: 'English', flag: '🇺🇸' },
      ja: { code: 'ja', name: '日本語', flag: '🇯🇵' },
      ko: { code: 'ko', name: '한국어', flag: '🇰🇷' },
      hi: { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
      es: { code: 'es', name: 'Español', flag: '🇪🇸' },
      ar: { code: 'ar', name: 'العربية', flag: '🇸🇦' },
      zh: { code: 'zh', name: '中文', flag: '🇨🇳' }
    }
    return languages[currentLocale.value] || languages.en
  })

  return {
    currentLocale,
    currentLanguage,
    setLocale,
    t
  }
}
