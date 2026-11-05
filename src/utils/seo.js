/**
 * SEO优化工具 - 多语言Meta标签管理
 * 用于动态更新页面的meta标签，支持多语言
 */

export const seoConfig = {
  // 默认SEO配置
  default: {
    en: {
      title: 'Spray Deposition & Spray Forming Equipment | Gas Atomization | Powder Production',
      description: 'Professional spray deposition, spray forming, gas atomization and powder production equipment manufacturer. 20+ years experience. Custom metal powder solutions for aerospace, automotive, semiconductor industries.',
      keywords: 'spray deposition, spray forming, gas atomization, powder production equipment, metal powder manufacturing, powder metallurgy, atomization equipment'
    },
    zh: {
      title: '喷射沉积设备 | 快速凝固 | 气雾化制粉 | 天津越洋机械',
      description: '专业喷射沉积、快速凝固、气雾化制粉技术服务商。20余年粉末冶金行业经验，为航空航天、汽车、半导体行业提供先进材料解决方案。',
      keywords: '喷射沉积, 快速凝固, 气雾化制粉, 粉末冶金, 金属粉末制备, 喷射成形, 雾化设备'
    },
    ja: {
      title: 'スプレー堆積装置 | 急速凝固 | ガスアトマイゼーション粉末製造',
      description: 'プロフェッショナルなスプレー堆積、急速凝固、ガスアトマイゼーション粉末製造装置。20年以上の先進粉末冶金ソリューション経験。',
      keywords: 'スプレー堆積, 急速凝固, ガスアトマイゼーション, 粉末冶金, 金属粉末製造'
    },
    ko: {
      title: '분무 증착 장비 | 급속 응고 | 가스 분무 분말 제조',
      description: '전문 분무 증착, 급속 응고 및 가스 분무 분말 제조 장비. 20년 이상의 선진 분말 야금 솔루션 경험.',
      keywords: '분무 증착, 급속 응고, 가스 분무, 분말 야금, 금속 분말 제조'
    }
  },

  // 产品页面SEO配置
  products: {
    en: {
      title: 'Products - Spray Deposition & Powder Metallurgy Equipment',
      description: 'Complete range of spray deposition, rapid solidification and gas atomization equipment for producing high-performance metal materials.',
      keywords: 'spray deposition equipment, powder metallurgy machinery, atomization systems, rapid solidification equipment'
    },
    zh: {
      title: '产品中心 - 喷射沉积与粉末冶金设备',
      description: '完整的喷射沉积、快速凝固、气雾化制粉设备系列，用于生产高性能金属材料。',
      keywords: '喷射沉积设备, 粉末冶金设备, 雾化系统, 快速凝固设备'
    },
    ja: {
      title: '製品 - スプレー堆積および粉末冶金装置',
      description: '高性能金属材料を製造するための完全なスプレー堆積、急速凝固、ガスアトマイゼーション装置シリーズ。',
      keywords: 'スプレー堆積装置, 粉末冶金機械, アトマイゼーションシステム, 急速凝固装置'
    },
    ko: {
      title: '제품 - 분무 증착 및 분말 야금 장비',
      description: '고성능 금속 재료를 생산하기 위한 완전한 분무 증착, 급속 응고, 가스 분무 장비 시리즈.',
      keywords: '분무 증착 장비, 분말 야금 기계, 분무 시스템, 급속 응고 장비'
    }
  },

  // 喷射沉积锭坯设备 (PLC)
  'products-plc': {
    en: {
      title: 'Spray Deposition Ingot Equipment | Spray Forming Machine',
      description: 'Professional spray deposition ingot equipment for producing aluminum alloys, copper alloys, and steel alloys with fine grain structure (20-50 microns) and no macroscopic segregation.',
      keywords: 'spray deposition ingot, spray forming equipment, metal ingot production, aluminum alloy spray deposition, copper alloy ingot'
    },
    zh: {
      title: '喷射沉积锭坯设备 | 喷射成形机',
      description: '专业喷射沉积锭坯设备，生产晶粒细小均匀（20-50微米）、无宏观偏析的铝合金、铜合金、钢合金材料。',
      keywords: '喷射沉积锭坯, 喷射成形设备, 金属锭坯生产, 铝合金喷射沉积, 铜合金锭坯'
    },
    ja: {
      title: 'スプレー堆積インゴット装置 | スプレー成形機',
      description: '微細で均一な結晶粒（20〜50ミクロン）とマクロ偏析のないアルミニウム合金、銅合金、鋼合金を製造するプロフェッショナルなスプレー堆積インゴット装置。',
      keywords: 'スプレー堆積インゴット, スプレー成形装置, 金属インゴット生産, アルミニウム合金スプレー堆積'
    },
    ko: {
      title: '분무 증착 잉곳 장비 | 분무 성형기',
      description: '미세하고 균일한 입자(20-50 마이크론)와 거시적 편석이 없는 알루미늄 합금, 구리 합금, 강철 합금을 생산하는 전문 분무 증착 잉곳 장비.',
      keywords: '분무 증착 잉곳, 분무 성형 장비, 금속 잉곳 생산, 알루미늄 합금 분무 증착'
    }
  },

  // 气体保护制备粉末设备 (Sensors)
  'products-sensors': {
    en: {
      title: 'Gas Atomization Powder Equipment | Metal Powder Manufacturing',
      description: 'Advanced gas-protected powder preparation equipment for semiconductor, electronic packaging and optical communication applications. Producing fine metal powders with 5-15 micron grain size.',
      keywords: 'gas atomization, metal powder production, powder atomization equipment, semiconductor materials, aluminum matrix composites'
    },
    zh: {
      title: '气雾化制粉设备 | 金属粉末制造',
      description: '先进的气体保护粉末制备设备，应用于半导体、电子封装和光通讯领域。生产晶粒尺寸5-15微米的精细金属粉末。',
      keywords: '气雾化, 金属粉末生产, 粉末雾化设备, 半导体材料, 铝基复合材料'
    },
    ja: {
      title: 'ガスアトマイゼーション粉末装置 | 金属粉末製造',
      description: '半導体、電子パッケージング、光通信用途向けの先進的なガス保護粉末調製装置。5〜15ミクロンの粒径の微細金属粉末を製造。',
      keywords: 'ガスアトマイゼーション, 金属粉末生産, 粉末アトマイゼーション装置, 半導体材料'
    },
    ko: {
      title: '가스 분무 분말 장비 | 금속 분말 제조',
      description: '반도체, 전자 패키징 및 광통신 응용 분야를 위한 고급 가스 보호 분말 제조 장비. 5-15 마이크론 입자 크기의 미세 금속 분말 생산.',
      keywords: '가스 분무, 금속 분말 생산, 분말 분무 장비, 반도체 재료'
    }
  },

  // 喷射沉积管坯设备 (Vision)
  'products-vision': {
    en: {
      title: 'Spray Deposition Tube Billet Equipment | Tubular Blank Manufacturing',
      description: 'Spray deposition tube billet equipment for producing tubular metal blanks of copper alloys, steel alloys, and aluminum alloys with excellent mechanical properties.',
      keywords: 'spray deposition tube, tubular blank production, metal tube manufacturing, spray forming tube, semi-solid die casting'
    },
    zh: {
      title: '喷射沉积管坯设备 | 管状坯料制造',
      description: '喷射沉积管坯设备，生产铜合金、钢合金、铝合金管状坯料，具有优良的机械性能和加工性能。',
      keywords: '喷射沉积管坯, 管状坯料生产, 金属管材制造, 喷射成形管材, 半固态压铸'
    },
    ja: {
      title: 'スプレー堆積チューブビレット装置 | 管状ブランク製造',
      description: '優れた機械的特性を持つ銅合金、鋼合金、アルミニウム合金の管状金属ブランクを製造するスプレー堆積チューブビレット装置。',
      keywords: 'スプレー堆積チューブ, 管状ブランク生産, 金属チューブ製造, スプレー成形チューブ'
    },
    ko: {
      title: '분무 증착 튜브 빌렛 장비 | 관형 블랭크 제조',
      description: '우수한 기계적 특성을 가진 구리 합금, 강철 합금, 알루미늄 합금의 관형 금속 블랭크를 생산하는 분무 증착 튜브 빌렛 장비.',
      keywords: '분무 증착 튜브, 관형 블랭크 생산, 금속 튜브 제조, 분무 성형 튜브'
    }
  },

  // FAQ 页面
  faq: {
    en: {
      title: 'FAQ - Spray Deposition & Gas Atomization Equipment | Tianjin Yueyang',
      description: 'Answers to common questions about spray deposition, spray forming, gas atomization, metal powder production, and Tianjin Yueyang Machinery Manufacturing Co., Ltd.',
      keywords: 'spray deposition FAQ, gas atomization questions, powder metallurgy FAQ, spray forming equipment, metal powder production China'
    },
    zh: {
      title: '常见问题 - 喷射沉积与气雾化制粉设备 | 天津越洋',
      description: '关于喷射沉积、喷射成形、气雾化制粉、金属粉末生产及天津越洋机械的常见问题解答。',
      keywords: '喷射沉积常见问题, 气雾化制粉, 粉末冶金FAQ, 喷射成形设备, 金属粉末生产'
    },
    ja: {
      title: 'よくある質問 - スプレー堆積・ガスアトマイゼーション装置 | 天津越洋',
      description: 'スプレー堆積、スプレー成形、ガスアトマイゼーション、金属粉末製造、天津越洋機械に関するよくある質問への回答。',
      keywords: 'スプレー堆積FAQ, ガスアトマイゼーション, 粉末冶金FAQ, スプレー成形装置'
    },
    ko: {
      title: 'FAQ - 분무 증착 및 가스 분무 장비 | 텐진 위에양',
      description: '분무 증착, 분무 성형, 가스 분무, 금속 분말 생산 및 텐진 위에양 기계에 관한 자주 묻는 질문 답변.',
      keywords: '분무 증착 FAQ, 가스 분무, 분말 야금 FAQ, 분무 성형 장비'
    }
  },

  // 关于我们
  about: {
    en: {
      title: 'About Us - 20+ Years in Spray Deposition & Powder Metallurgy',
      description: 'Leading spray deposition and new material R&D company with 30+ R&D team members including 5 PhDs and 15 Masters. 20+ years of experience in advanced materials.',
      keywords: 'powder metallurgy company, spray deposition manufacturer, metal materials R&D, advanced materials company'
    },
    zh: {
      title: '关于我们 - 20余年专注喷射沉积与粉末冶金',
      description: '专业的喷射沉积和新材料研发企业，拥有30余人研发团队，包括博士5人、硕士15人。20余年先进材料研发经验。',
      keywords: '粉末冶金公司, 喷射沉积制造商, 金属材料研发, 先进材料企业'
    },
    ja: {
      title: '会社概要 - スプレー堆積および粉末冶金20年以上の経験',
      description: '5名の博士と15名の修士を含む30名以上のR&Dチームメンバーを擁する、スプレー堆積および新材料R&Dのリーディングカンパニー。',
      keywords: '粉末冶金会社, スプレー堆積メーカー, 金属材料R&D, 先進材料会社'
    },
    ko: {
      title: '회사 소개 - 분무 증착 및 분말 야금 20년 이상',
      description: '5명의 박사와 15명의 석사를 포함한 30명 이상의 R&D 팀원을 보유한 선도적인 분무 증착 및 신소재 R&D 회사.',
      keywords: '분말 야금 회사, 분무 증착 제조업체, 금속 재료 R&D, 선진 재료 회사'
    }
  },

  // 联系我们
  contact: {
    en: {
      title: 'Contact Us - Get a Quote for Spray Deposition Equipment',
      description: 'Contact Tianjin Yueyang for spray deposition, rapid solidification and powder metallurgy equipment inquiries. Email: admin@tianbaoyueyang.com, Tel: +86-22-22539988',
      keywords: 'contact spray deposition supplier, powder metallurgy equipment quote, metal powder equipment inquiry'
    },
    zh: {
      title: '联系我们 - 获取喷射沉积设备报价',
      description: '联系天津越洋机械咨询喷射沉积、快速凝固、粉末冶金设备。邮箱：admin@tianbaoyueyang.com，电话：0086-22-22539988',
      keywords: '联系喷射沉积供应商, 粉末冶金设备报价, 金属粉末设备咨询'
    },
    ja: {
      title: 'お問い合わせ - スプレー堆積装置の見積もり取得',
      description: 'スプレー堆積、急速凝固、粉末冶金装置のお問い合わせは天津越洋機械へ。メール：admin@tianbaoyueyang.com、電話：+86-22-22539988',
      keywords: 'スプレー堆積サプライヤー連絡, 粉末冶金装置見積もり, 金属粉末装置問い合わせ'
    },
    ko: {
      title: '문의하기 - 분무 증착 장비 견적 받기',
      description: '분무 증착, 급속 응고, 분말 야금 장비 문의는 텐진 위에양 기계로. 이메일: admin@tianbaoyueyang.com, 전화: +86-22-22539988',
      keywords: '분무 증착 공급업체 연락, 분말 야금 장비 견적, 금속 분말 장비 문의'
    }
  }
}

/**
 * 更新页面Meta标签
 * @param {string} page - 页面标识符 (如: 'products', 'about', 'products-plc')
 * @param {string} lang - 语言代码 (en, zh, ja, ko)
 */
export function updatePageMeta(page, lang = 'en') {
  const config = seoConfig[page] || seoConfig.default
  const meta = config[lang] || config.en

  // 更新标题
  document.title = meta.title

  // 更新description
  updateMetaTag('name', 'description', meta.description)
  updateMetaTag('property', 'og:description', meta.description)
  updateMetaTag('name', 'twitter:description', meta.description)

  // 更新keywords
  updateMetaTag('name', 'keywords', meta.keywords)

  // 更新OG标题
  updateMetaTag('property', 'og:title', meta.title)
  updateMetaTag('name', 'twitter:title', meta.title)

  // 更新语言
  document.documentElement.lang = lang
}

/**
 * 更新或创建Meta标签
 */
function updateMetaTag(attr, key, content) {
  let element = document.querySelector(`meta[${attr}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

/**
 * 更新Canonical URL
 */
export function updateCanonicalUrl(path) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', `https://www.tianbaoyueyang.com${path}`)
}

/**
 * 添加结构化数据 (Schema.org)
 */
export function addStructuredData(data) {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(data)
  document.head.appendChild(script)
}

/**
 * 产品结构化数据生成器
 */
export function generateProductSchema(product, lang = 'en') {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Tianjin Yueyang Machinery"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  }
}
