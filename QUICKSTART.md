# 🚀 快速启动指南

## 第一步：安装Node.js

确保你的电脑已安装Node.js（版本18+）

检查版本：
```bash
node -v
npm -v
```

如未安装，访问 https://nodejs.org/ 下载安装。

## 第二步：进入项目目录

```bash
cd my-enterprise-website
```

## 第三步：安装依赖

```bash
npm install
```

等待安装完成（首次安装可能需要几分钟）

## 第四步：启动开发服务器

```bash
npm run dev
```

看到以下提示表示成功：
```
VITE v5.x.x ready in xxx ms

➜ Local:   http://localhost:5173/
➜ Network: use --host to expose
```

## 第五步：浏览网站

打开浏览器访问：http://localhost:5173/

你会看到完整的网站首页！

## 📝 现在你可以

### 1. 修改内容

编辑以下文件来修改网站内容：

- **首页Banner** → `src/components/home/HeroBanner.vue`
- **产品信息** → `src/components/home/ProductSection.vue`  
- **公司信息** → `src/components/layout/Footer.vue`
- **联系方式** → `src/views/Contact.vue`

保存文件后，网站会自动刷新！

### 2. 修改样式

编辑 `src/assets/styles/variables.css` 修改颜色：

```css
:root {
  --color-primary: #0066cc;  /* 改成你喜欢的主色 */
  --color-accent: #ff6600;   /* 改成你喜欢的强调色 */
}
```

### 3. 添加图片

将图片放到 `public/images/` 目录，然后在组件中使用：

```vue
<img src="/images/your-image.jpg" alt="描述">
```

## ✉️ 配置邮件功能（可选）

如果你想让联系表单真正发送邮件：

### 1. 注册EmailJS

访问 https://www.emailjs.com/ 注册免费账号

### 2. 获取密钥

- 连接你的邮箱（Gmail/Outlook等）
- 创建邮件模板
- 获取三个密钥：Public Key, Service ID, Template ID

### 3. 配置环境变量

复制 `.env.example` 为 `.env`：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的密钥：

```env
VITE_EMAILJS_PUBLIC_KEY=你的公钥
VITE_EMAILJS_SERVICE_ID=你的服务ID
VITE_EMAILJS_TEMPLATE_ID=你的模板ID
```

### 4. 重启开发服务器

按 `Ctrl+C` 停止服务器，然后重新运行：

```bash
npm run dev
```

现在联系表单就能发送邮件了！

## 🌐 部署上线

当你准备好发布网站时：

### 1. 构建生产版本

```bash
npm run build
```

会生成 `dist` 目录，包含所有网站文件。

### 2. 部署到Cloudflare Pages

**最简单的方法：**

1. 将代码推送到GitHub
2. 访问 https://dash.cloudflare.com/
3. 连接GitHub仓库
4. 自动部署完成！

详细步骤见 `README.md` 文件。

## 💡 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 代码检查
npm run lint
```

## 🆘 遇到问题？

### 端口被占用

修改端口：编辑 `vite.config.js`

```javascript
server: {
  port: 3000  // 改成其他端口
}
```

### 依赖安装失败

尝试清理缓存：

```bash
rm -rf node_modules package-lock.json
npm install
```

或使用淘宝镜像：

```bash
npm install --registry=https://registry.npmmirror.com
```

### 页面空白

1. 检查浏览器控制台是否有错误
2. 确认 `src/main.js` 正确导入了样式文件
3. 尝试清除浏览器缓存

## 📚 下一步

- 查看 `README.md` 了解完整功能
- 查看 `PROJECT_STRUCTURE.md` 了解项目结构
- 阅读组件内的注释学习代码

祝你使用愉快！🎉
