# 企业自动化网站 - Vue3项目

一个专业的企业级自动化解决方案网站，采用Vue3构建，包含完整的产品展示、解决方案介绍和联系表单功能。

## ✨ 项目特点

- 🎨 **现代化设计** - 参考国际知名企业网站风格
- 📱 **响应式布局** - 完美适配手机、平板、电脑
- ⚡ **高性能** - 使用Vite构建，开发和生产环境都极快
- 💬 **邮件功能** - 集成EmailJS实现表单邮件发送
- 📝 **详细注释** - 代码规范，注释完整，易于理解和修改
- 🌍 **国际化就绪** - 部署到Cloudflare Pages，全球访问快速

## 🛠️ 技术栈

- **框架**: Vue 3.4+
- **构建工具**: Vite 5.x
- **路由**: Vue Router 4.x
- **邮件服务**: EmailJS
- **样式**: 原生CSS（CSS Variables + Flexbox + Grid）
- **部署**: Cloudflare Pages

## 📁 项目结构

```
my-enterprise-website/
├── public/                  # 静态资源
├── src/
│   ├── assets/             # 资源文件
│   │   └── styles/         # 全局样式
│   ├── components/         # 组件
│   │   ├── layout/         # 布局组件（Header, Footer）
│   │   ├── home/           # 首页组件
│   │   └── common/         # 通用组件
│   ├── views/              # 页面视图
│   ├── router/             # 路由配置
│   ├── utils/              # 工具函数
│   ├── App.vue             # 根组件
│   └── main.js             # 入口文件
├── .env.example            # 环境变量示例
├── package.json            # 项目配置
├── vite.config.js          # Vite配置
└── README.md               # 项目说明
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env` 并填入你的EmailJS配置：

```bash
cp .env.example .env
```

然后编辑 `.env` 文件：

```env
VITE_EMAILJS_PUBLIC_KEY=你的公钥
VITE_EMAILJS_SERVICE_ID=你的服务ID
VITE_EMAILJS_TEMPLATE_ID=你的模板ID
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173`

### 4. 构建生产版本

```bash
npm run build
```

### 5. 预览生产版本

```bash
npm run preview
```

## 📧 EmailJS 配置步骤

### 1. 注册EmailJS账号

访问 https://www.emailjs.com/ 并注册免费账号

### 2. 添加邮件服务

- 进入Dashboard
- 点击 "Email Services"
- 选择你的邮箱服务商（Gmail/Outlook等）
- 按提示连接你的邮箱
- 记下 **Service ID**

### 3. 创建邮件模板

- 点击 "Email Templates"
- 点击 "Create New Template"
- 使用以下模板变量：

```
主题: 新的联系表单 - {{subject}}

内容:
姓名: {{from_name}}
邮箱: {{from_email}}
主题: {{subject}}

留言:
{{message}}
```

- 保存并记下 **Template ID**

### 4. 获取Public Key

- 点击 "Account" → "General"
- 复制 **Public Key**

### 5. 填入环境变量

将获取的三个值填入 `.env` 文件

## 🌐 部署到Cloudflare Pages

### 方法一：通过GitHub（推荐）

1. 将代码推送到GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/你的仓库.git
git push -u origin main
```

2. 访问 https://dash.cloudflare.com/
3. 登录并进入 "Workers & Pages"
4. 点击 "Create application" → "Pages" → "Connect to Git"
5. 选择你的GitHub仓库
6. 配置构建设置：
   - **构建命令**: `npm run build`
   - **输出目录**: `dist`
7. 添加环境变量（三个EmailJS密钥）
8. 点击 "Save and Deploy"

### 方法二：命令行部署

```bash
# 安装Wrangler CLI
npm install -g wrangler

# 登录Cloudflare
wrangler login

# 构建项目
npm run build

# 部署
wrangler pages deploy dist --project-name=my-website
```

## 🎨 自定义修改

### 修改颜色主题

编辑 `src/assets/styles/variables.css`：

```css
:root {
  --color-primary: #你的主色;
  --color-accent: #你的强调色;
}
```

### 修改网站内容

- **Logo**: `src/components/layout/Header.vue`
- **导航菜单**: `src/components/layout/Header.vue`
- **首页Banner**: `src/components/home/HeroBanner.vue`
- **产品信息**: `src/components/home/ProductSection.vue`
- **联系方式**: `src/components/layout/Footer.vue`

### 添加新页面

1. 在 `src/views/` 创建新组件
2. 在 `src/router/index.js` 添加路由
3. 在Header组件添加导航链接

## 📝 代码规范

- 所有组件使用Vue 3 Composition API
- 每个组件都有详细的中文注释
- 使用CSS Variables统一管理样式
- 响应式设计适配移动端
- 语义化的HTML结构

## 🐛 常见问题

### 邮件发送失败？

- 检查EmailJS配置是否正确
- 确认环境变量已正确设置
- 检查浏览器控制台的错误信息
- 确认EmailJS账号未超过免费额度（每月200封）

### 部署后样式错乱？

- 检查 `vite.config.js` 中的 `base` 配置
- 确认静态资源路径正确
- 清除浏览器缓存后重试

### 图片加载慢？

- 项目使用了Unsplash示例图片
- 建议替换为自己的图片并优化尺寸
- 可以使用CDN加速图片加载

## 📄 License

MIT

## 👨‍💻 作者

你的名字

## 🙏 致谢

- Vue.js Team
- EmailJS
- Cloudflare Pages
- Unsplash（示例图片）

---

**需要帮助？** 查看项目的 `PROJECT_STRUCTURE.md` 了解详细的项目结构说明。
