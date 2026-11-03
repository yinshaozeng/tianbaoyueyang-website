<template>
  <div class="product-detail-page">
    <!-- 产品Hero区域 -->
    <section class="product-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">{{ product.name }}</h1>
          <!-- <p class="hero-subtitle">{{ product.subtitle }}</p> -->
        </div>
      </div>
    </section>

    <!-- 产品主图 -->
    <section class="product-main-image">
      <div class="container">
        <img :src="product.mainImage" :alt="product.name" class="main-image" />
      </div>
    </section>

    <!-- 产品概述 -->
    <section class="product-overview">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-item">
            <h3 class="overview-title">{{ t('productDetail.description') }}</h3>
            <p class="overview-content">{{ product.description }}</p>
          </div>
          <div class="overview-item">
            <h3 class="overview-title">{{ t('productDetail.advantages') }}</h3>
            <ul class="features-list">
              <li
                v-for="feature in product.features"
                :key="feature"
                class="feature-item"
              >
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 生产过程视频（仅PLC产品显示） -->
    <section v-if="productType === 'plc'" class="product-video">
      <div class="container">
        <h2 class="section-title">{{ t('productDetail.productionProcess') }}</h2>
        <div class="video-wrapper">
          <video
            controls
            class="production-video"
            poster="/src/image/imagestwo.jpg"
          >
            <source src="/src/videos/vadios.mp4" type="video/mp4" />
            {{ t('productDetail.videoNotSupported') }}
          </video>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section class="product-showcase">
      <div class="container">
        <h2 class="section-title">{{ t('productDetail.materialShowcase') }}</h2>
        <div class="showcase-grid">
          <div
            v-for="(item, index) in product.showcase"
            :key="index"
            class="showcase-item"
          >
            <div class="showcase-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="showcase-info">
              <h3 class="showcase-title">{{ item.title }}</h3>
              <!-- <p class="showcase-desc">{{ item.description }}</p> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA 行动号召 -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content text-center">
          <h2 class="cta-title">{{ t('productDetail.interestedTitle') }}</h2>
          <p class="cta-subtitle">{{ t('productDetail.interestedSubtitle') }}</p>
          <router-link to="/contact" class="btn btn-primary btn-large">
            {{ t('productDetail.contactUs') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- 相关产品 -->
    <!-- <section class="related-products">
      <div class="container">
        <h2 class="section-title">相关产品</h2>
        <div class="related-grid">
          <div
            v-for="item in relatedProducts"
            :key="item.id"
            class="related-card card"
          >
            <div class="related-image">
              <img :src="item.mainImage" :alt="item.name" />
            </div>
            <div class="related-info">
              <h3 class="related-name">{{ item.name }}</h3>
              <router-link :to="`/products/${item.type}`" class="related-link">
                查看详情 →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

// 产品数据库
const productsDB = {
  plc: {
    name: "喷射沉积锭坯设备",
    // subtitle: "工业级高性能控制器，为智能制造保驾护航",
    description:
      "喷射沉积锭坯设备是通过加热熔融金属，经过雾化器与惰性气体混合喷射沉积到金属托盘上，从而形成的圆柱体金属坯料。再经过加工可以得到挤压或锻造的材料。本设备可以生产铜合金，钢合金，铝合金，等多种金属材料",
    mainImage: new URL("@/image/banner1.jpg", import.meta.url).href,
    features: [
      "没有宏观偏析",
      "晶粒细小均匀",
      "平均晶粒尺寸20-50微米",
      "优良的机械性能和加工性能",
      "适合批量化生产",
    ],
    showcase: [
      {
        title: "喷射沉积铝合金坯料",
        description:
          "采用高强度合金钢框架，确保设备长期稳定运行，整体结构紧凑，占地面积小。",
        image: new URL("@/image/pageone1.jpg", import.meta.url).href,
      },
      {
        title: "喷射沉积铝合金锻造件",
        description:
          "人性化的触摸屏控制界面，实时显示设备运行状态，操作简单直观。",
        image: new URL("@/image/pageone2.jpg", import.meta.url).href,
      },
      {
        title: "喷射沉积铝合金挤压型材",
        description:
          "高质量的锭坯成品，表面光滑均匀，尺寸精确，符合行业高标准要求。",
        image: new URL("@/image/pageone3.jpg", import.meta.url).href,
      },
      {
        title: "喷射沉积铝合金板材",
        description: "设备在客户工厂的实际应用场景，生产效率高，运行稳定可靠。",
        image: new URL("@/image/pageone4.jpg", import.meta.url).href,
      },
    ],
    specs: [
      { label: "处理速度", value: "100 μs/条指令" },
      { label: "输入点数", value: "最多256点" },
      { label: "输出点数", value: "最多256点" },
      { label: "工作温度", value: "-20℃ ~ +60℃" },
    ],
    applications: [
      "汽车制造生产线控制",
      "食品饮料加工设备",
      "纺织机械设备",
      "包装机械自动化",
    ],
  },
  sensors: {
    name: "气体保护制备粉末设备",
    // subtitle: "精准感知，实时反馈，驱动智能决策",
    description:
      "本产品在半导体设备领域大量应用CE合金、铝基复合材料、碳化硅铝材料，在电子封装领域与光学通讯领域也有广泛的应用。",
    // 高温合金及陶瓷等粉末在半导体设备领域大量应用，高纯度、高致密度的难熔金属、难熔合金及陶瓷等粉末
    //
    //
    // "本系列传感器采用先进的感测技术，具有高精度、快速响应、低噪声等特点
    // 。覆盖温度、压力、流量、位移等多种物理量的测量，满足各类工业应用需求。",
    mainImage: new URL("@/image/banner2.jpg", import.meta.url).href,
    features: [
      "没有宏观偏析",
      "晶粒细小均匀",
      "平均晶粒尺寸5-15微米",
      "可调节的CTE（线膨胀系数）",
      "优良的导热率",
    ],
    showcase: [
      {
        title: "光学反射镜",
        description:
          "精密设计的粉末制备设备，采用气体保护技术，确保粉末质量稳定可靠。",
        image: new URL("@/image/pagetwo1.jpg", import.meta.url).href,
      },
      {
        title: "半导体器件",
        description: "先进的气体保护系统，有效防止粉末氧化，保证产品质量。",
        image: new URL("@/image/pagetwo2.jpg", import.meta.url).href,
      },
      {
        title: "光通讯器件",
        description:
          "高品质的金属粉末产品，粒度均匀，纯度高，适用于多种工业应用。",
        image: new URL("@/image/pagetwo3.jpg", import.meta.url).href,
      },
      {
        title: "定制化半导体材料",
        description: "广泛应用于航空航天、汽车制造等高端领域的粉末制备。",
        image: new URL("@/image/pagetwo4.jpg", import.meta.url).href,
      },
    ],
    specs: [
      { label: "测量范围", value: "根据型号从-20~+80℃" },
      { label: "精度", value: "±0.3%~±0.5%" },
      { label: "响应时间", value: "<10ms" },
      { label: "输出信号", value: "4-20mA/0-5V/数字信号" },
    ],
    applications: [
      "温度监测系统",
      "压力容器安全监测",
      "流量计量计费",
      "位移测量定位",
    ],
  },
  vision: {
    name: "喷射沉积管坯设备",
    // subtitle: "用AI的眼睛看世界，让检测更精准",
    description:
      "喷射沉积管坯设备是通过加热熔融金属，经过雾化器与惰性气体混合喷射沉积到金属管轴上，从而形成的管状金属坯料。本设备可以生产铜合金，钢合金，铝合金，等多种金属材料",
    mainImage: new URL("@/image/banner3.jpg", import.meta.url).href,
    features: [
      "没有宏观偏析",
      "晶粒细小均匀",
      "平均晶粒尺寸20-50微米",
      "优良的机械性能和加工性能",
      "适合批量化生产",
    ],
    showcase: [
      {
        title: "喷射沉积圆管",
        description:
          "专业的喷射沉积管坯设备，精确控制温度和流速，生产高质量管坯。",
        image: new URL("@/image/pagethree1.jpg", import.meta.url).href,
      },
      {
        title: "半固态压铸管件",
        description: "先进的喷射沉积技术，确保管坯内外壁均匀致密，无缺陷。",
        image: new URL("@/image/pagethree2.jpg", import.meta.url).href,
      },
      {
        title: "气体保护制粉",
        description: "高精度的管坯产品，尺寸公差小，表面质量优异。",
        image: new URL("@/image/pagethree3.jpg", import.meta.url).href,
      },
      {
        title: "各种尺寸的挤压管坯，管件",
        description:
          "配备专业的质量检测系统，确保每根管坯都符合严格的质量标准。",
        image: new URL("@/image/pagethree4.jpg", import.meta.url).href,
      },
    ],
    specs: [
      { label: "摄像头分辨率", value: "1200万像素" },
      { label: "帧率", value: "最高120fps" },
      { label: "识别准确率", value: ">99%" },
      { label: "处理速度", value: "<100ms/帧" },
    ],
    applications: [
      "产品质量检测",
      "条形码二维码识别",
      "零部件缺陷检测",
      "尺寸精密测量",
    ],
  },
  servo: {
    name: "轻量化刹车盘",
    // subtitle: "精准控制，高效驱动，解锁运动可能",
    description:
      "高性能伺服驱动系统采用矢量控制技术，具有高扭矩、高精度、低噪声等优势。广泛应用于机器人、机床、包装机械等需要精密控制的场合。",
    mainImage: new URL("@/image/banner5.png", import.meta.url).href,
    features: [
      "矢量控制，精度高达±0.01°",
      "高扭矩输出，业界领先",
      "低噪声设计，<70dB",
      "集成智能制动器",
      "支持多种编码器类型",
      "完善的热保护机制",
    ],
    showcase: [
      {
        title: "刹车盘整体",
        description: "采用轻量化设计，减重30%以上，同时保持优异的制动性能。",
        image: new URL("@/image/banner5.png", import.meta.url).href,
      },
      {
        title: "材料特写",
        description: "使用高强度铝合金材料，耐高温，抗腐蚀，使用寿命长。",
        image: new URL("@/image/banner1.jpg", import.meta.url).href,
      },
      {
        title: "精密加工",
        description: "采用CNC精密加工，表面光洁度高，尺寸精度达到微米级。",
        image: new URL("@/image/banner2.jpg", import.meta.url).href,
      },
      {
        title: "实车应用",
        description: "已在多款高端车型上应用，性能稳定，深受客户好评。",
        image: new URL("@/image/banner3.jpg", import.meta.url).href,
      },
    ],
    specs: [
      { label: "功率范围", value: "100W~15kW" },
      { label: "精度", value: "±0.01°" },
      { label: "响应时间", value: "<5ms" },
      { label: "噪声", value: "<70dB" },
    ],
    applications: [
      "工业机器人关节驱动",
      "数控机床主轴驱动",
      "包装机械执行机构",
      "印刷设备张力控制",
    ],
  },
  hmi: {
    name: "允许挤压",
    // subtitle: "直观友好，功能强大，赋能智能交互",
    description:
      "专业级HMI触摸屏显示系统，具有高清晰显示、快速响应、丰富的交互功能。支持多语言、多主题切换，可轻松适应各种工业应用场景。",
    mainImage: new URL("@/image/banner4.jpg", import.meta.url).href,
    features: [
      "1080P高清显示，色彩准确",
      "电容触摸屏，响应迅速",
      "支持多点触控手势",
      "内置丰富的图形组件库",
      "支持实时数据同步",
      "一键截屏和录制功能",
    ],
    showcase: [
      {
        title: "产品外观",
        description: "允许挤压、锻造、轧制的高性能材料，适用于各种成型工艺。",
        image: new URL("@/image/banner4.jpg", import.meta.url).href,
      },
      {
        title: "挤压成型",
        description: "优异的挤压性能，可加工成复杂的型材结构。",
        image: new URL("@/image/banner1.jpg", import.meta.url).href,
      },
      {
        title: "锻造应用",
        description: "良好的锻造性能，可制作高强度零部件。",
        image: new URL("@/image/banner2.jpg", import.meta.url).href,
      },
      {
        title: "轧制产品",
        description: "通过轧制工艺可获得高质量的板材和带材产品。",
        image: new URL("@/image/banner3.jpg", import.meta.url).href,
      },
    ],
    specs: [
      { label: "屏幕尺寸", value: '4"~21.5"可选' },
      { label: "分辨率", value: "1024×768~3840×2160" },
      { label: "显示技术", value: "IPS LCD" },
      { label: "触摸方式", value: "电容触摸/投影电容" },
    ],
    applications: [
      "工业设备参数显示",
      "生产过程监控",
      "设备远程控制",
      "人机交互界面",
    ],
  },
  gateway: {
    name: "允许轧制",
    // subtitle: "连接万物，打通数据孤岛，赋能工业互联网",
    description:
      "工业级物联网网关集成多种通讯协议，支持边缘计算和数据聚合。可连接数百个物联网设备，实现数据的实时采集、处理和上传，是构建智能工厂的核心组件。",
    mainImage: new URL("@/image/banner6.jpg", import.meta.url).href,
    features: [
      "支持6+种通讯协议",
      "边缘计算，数据本地处理",
      "支持4G/5G/WiFi/有线网络",
      "集成实时数据库",
      "支持离线工作和数据缓存",
      "强大的数据分析能力",
    ],
    showcase: [
      {
        title: "设备全景",
        description:
          "实验室小型喷射沉积设备，适合科研单位进行材料研发和工艺试验。",
        image: new URL("@/image/imagestwo.jpg", import.meta.url).href,
      },
      {
        title: "控制系统",
        description: "精密的温度和流量控制系统，确保实验数据准确可靠。",
        image: new URL("@/image/banner1.jpg", import.meta.url).href,
      },
      {
        title: "实验样品",
        description: "可制备多种金属和合金样品，满足不同的科研需求。",
        image: new URL("@/image/banner2.jpg", import.meta.url).href,
      },
      {
        title: "操作界面",
        description: "友好的人机交互界面，方便研究人员进行参数设置和数据记录。",
        image: new URL("@/image/banner3.jpg", import.meta.url).href,
      },
    ],
    specs: [
      { label: "通讯协议", value: "Modbus/OPC/MQTT/Ethernet" },
      { label: "连接设备数", value: "最多500台" },
      { label: "存储容量", value: "8GB~64GB" },
      { label: "处理器", value: "四核2.0GHz" },
    ],
    applications: [
      "工厂设备联网",
      "能源管理系统",
      "设备预防性维护",
      "生产大数据收集",
    ],
  },
};

export default {
  name: "ProductDetail",
  setup() {
    const route = useRoute();
    const productType = route.params.type;

    const product = computed(() => {
      const data = productsDB[productType];
      return data || productsDB.plc;
    });

    const relatedProducts = computed(() => {
      const types = ["plc", "sensors", "vision", "servo", "hmi", "gateway"];
      return types
        .filter((type) => type !== productType)
        .slice(0, 3)
        .map((type) => ({
          type,
          ...productsDB[type],
        }));
    });

    return {
      product,
      relatedProducts,
      productType,
    };
  },
};
</script>

<style scoped>
.product-detail-page {
  width: 100%;
}

.product-hero {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: var(--color-text-white);
  text-align: center;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  opacity: 0.9;
}

.product-main-image {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg-secondary);
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.product-overview {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-primary);
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-3xl);
}

.overview-item {
  padding: var(--spacing-2xl);
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
}

.overview-title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.overview-content {
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
}

.features-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--color-text-primary);
}

.feature-item::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

/* 生产过程视频 */
.product-video {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-secondary);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-3xl);
  text-align: center;
}

.video-wrapper {
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.production-video {
  width: 100%;
  height: 500px;
  display: block;
  background: #000;
  object-fit: contain;
}

.video-note {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-bg-primary);
  border-left: 4px solid var(--color-primary);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  border-radius: var(--radius-sm);
}

/* 产品展示 */
.product-showcase {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-primary);
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
}

.showcase-item {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.showcase-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.showcase-image {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.showcase-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.showcase-item:hover .showcase-image img {
  transform: scale(1.1);
}

.showcase-info {
  padding: var(--spacing-lg);
}

.showcase-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
}

.showcase-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.cta-section {
  padding: var(--spacing-4xl) 0;
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-primary-dark)
  );
  color: var(--color-text-white);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-md);
}

.cta-subtitle {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2xl);
  opacity: 0.9;
}

.related-products {
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-secondary);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-3xl);
  text-align: center;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.related-card {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.related-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.related-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.related-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.related-card:hover .related-image img {
  transform: scale(1.1);
}

.related-info {
  padding: var(--spacing-lg);
}

.related-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
}

.related-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-base);
}

.related-link:hover {
  color: var(--color-primary-dark);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .overview-grid {
    grid-template-columns: 1fr;
  }

  .showcase-grid {
    grid-template-columns: 1fr;
  }

  .video-wrapper {
    max-width: 100%;
  }

  .production-video {
    height: 300px;
  }
}
</style>
