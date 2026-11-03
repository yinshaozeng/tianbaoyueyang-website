# 项目结构说明

## 📁 目录结构

```
my-enterprise-website/
├── public/                          # 静态资源目录
│   ├── images/                      # 图片资源
│   └── favicon.ico                  # 网站图标
│
├── src/                             # 源代码目录
│   ├── assets/                      # 资源文件
│   │   ├── styles/                  # 全局样式
│   │   │   ├── variables.css        # CSS变量（颜色、字体等）
│   │   │   ├── reset.css            # 样式重置
│   │   │   └── common.css           # 通用样式
│   │   └── images/                  # 组件用图片
│   │
│   ├── components/                  # 公共组件
│   │   ├── layout/                  # 布局组件
│   │   │   ├── Header.vue           # 头部导航
│   │   │   ├── Footer.vue           # 底部信息
│   │   │   └── Navigation.vue       # 导航菜单
│   │   │
│   │   ├── home/                    # 首页组件
│   │   │   ├── HeroBanner.vue       # 轮播Banner
│   │   │   ├── ProductSection.vue   # 产品展示
│   │   │   ├── SolutionSection.vue  # 解决方案
│   │   │   └── NewsSection.vue      # 新闻资讯
│   │   │
│   │   └── common/                  # 通用组件
│   │       ├── Button.vue           # 按钮组件
│   │       ├── Card.vue             # 卡片组件
│   │       └── ContactForm.vue      # 联系表单
│   │
│   ├── views/                       # 页面视图
│   │   ├── Home.vue                 # 首页
│   │   ├── Products.vue             # 产品页
│   │   ├── Solutions.vue            # 解决方案页
│   │   ├── About.vue                # 关于我们页
│   │   └── Contact.vue              # 联系我们页
│   │
│   ├── router/                      # 路由配置
│   │   └── index.js                 # 路由定义
│   │
│   ├── utils/                       # 工具函数
│   │   └── email.js                 # 邮件发送工具
│   │
│   ├── App.vue                      # 根组件
│   └── main.js                      # 入口文件
│
├── .env.example                     # 环境变量示例
├── .gitignore                       # Git忽略文件
├── index.html                       # HTML模板
├── package.json                     # 项目配置
├── vite.config.js                   # Vite配置
└── README.md                        # 项目说明

```

## 🎨 设计规范

### 颜色方案
- 主色调：蓝色系（科技感）
- 辅助色：灰色系（专业感）
- 强调色：橙色（行动按钮）

### 组件规范
- 每个组件都有详细的中文注释
- 使用Vue 3 Composition API
- 响应式设计（适配手机/平板/电脑）

## 🔧 技术栈

- Vue 3.x
- Vue Router 4.x
- Vite 5.x
- EmailJS（邮件服务）
- 原生CSS（无UI框架依赖）

## 📝 命名规范

### 组件命名
- 大驼峰命名：`HeroBanner.vue`
- 组件名使用2个以上单词

### 文件命名
- 小驼峰：`index.js`
- 中划线：`reset.css`

### 变量命名
- 小驼峰：`userName`
- 常量大写：`API_URL`

## 🚀 开发流程

1. 安装依赖：`npm install`
2. 启动开发：`npm run dev`
3. 构建生产：`npm run build`
4. 预览构建：`npm run preview`
