# 📧 邮件服务快速配置（5分钟）

## 🎯 快速开始 - EmailJS

### 为什么选择 EmailJS？
- ✅ **免费**: 200封邮件/月
- ✅ **无需后端**: 纯前端实现
- ✅ **国际友好**: 全球都能访问
- ✅ **配置简单**: 5分钟搞定

---

## 📝 5 个简单步骤

### 步骤 1: 注册账号 (1分钟)

1. 打开 👉 https://www.emailjs.com/
2. 点击右上角 **"Sign Up"**
3. 使用 Google 账号快速注册（或用邮箱）
4. 完成！

### 步骤 2: 添加邮件服务 (2分钟)

1. 登录后，点击左侧 **"Email Services"**
2. 点击 **"Add New Service"**
3. 选择 **Gmail** (最简单)
4. 点击 **"Connect Account"**，授权你的 Gmail
5. 完成后会显示 **Service ID**，复制它！
   ```
   例如: service_abc1234
   ```

💡 **提示**: 如果 Gmail 授权失败，需要：
- 开启 Google 账号的"两步验证"
- 生成"应用专用密码"

### 步骤 3: 创建邮件模板 (1分钟)

1. 点击左侧 **"Email Templates"**
2. 点击 **"Create New Template"**
3. 复制下面的模板内容：

**Subject（主题）**:
```
新咨询 - {{subject}}
```

**Content（内容）**:
```
公司: {{company}}
姓名: {{first_name}} {{last_name}}
邮箱: {{from_email}}
电话: {{phone}}
主题: {{subject}}

留言:
{{message}}

---
来自企业网站
```

4. 点击 **"Save"**
5. 复制显示的 **Template ID**
   ```
   例如: template_xyz5678
   ```

### 步骤 4: 获取 Public Key (30秒)

1. 点击左侧 **"Account"**
2. 在 **API Keys** 部分找到 **Public Key**
3. 复制它！
   ```
   例如: AbCdEfGhIj1234567890
   ```

### 步骤 5: 配置项目 (30秒)

1. 在项目根目录创建 `.env` 文件：
   ```bash
   # 复制 .env.example 文件
   cp .env.example .env
   ```

2. 编辑 `.env` 文件，填入你的信息：
   ```bash
   VITE_EMAILJS_PUBLIC_KEY=你的Public_Key
   VITE_EMAILJS_SERVICE_ID=你的Service_ID
   VITE_EMAILJS_TEMPLATE_ID=你的Template_ID
   ```

3. 保存文件

4. 重启开发服务器：
   ```bash
   npm run dev
   ```

---

## 🧪 测试邮件

1. 打开网站: http://localhost:5173/contact
2. 填写联系表单
3. 点击"发送消息"
4. 检查你的邮箱！

### 如果成功 ✅
- 页面显示绿色成功消息
- 你的邮箱收到测试邮件
- 浏览器控制台显示 "邮件发送成功"

### 如果失败 ❌
检查以下几点：
- [ ] `.env` 文件是否在项目根目录
- [ ] 环境变量名是否正确（以 `VITE_` 开头）
- [ ] Service ID 和 Template ID 是否正确
- [ ] 是否重启了开发服务器

---

## 📊 监控使用量

访问 EmailJS Dashboard: https://dashboard.emailjs.com/

可以看到：
- 本月已发送邮件数
- 剩余配额
- 发送历史记录

---

## 🚀 其他国际友好的邮件服务

如果 EmailJS 的 200封/月 不够用，可以考虑：

### 1. SendGrid
- **免费额度**: 100封/天 (3000封/月)
- **网站**: https://sendgrid.com/
- **需要**: Node.js 后端
- **推荐**: ⭐⭐⭐⭐

### 2. Resend
- **免费额度**: 100封/天 (3000封/月)
- **网站**: https://resend.com/
- **需要**: Node.js 后端
- **推荐**: ⭐⭐⭐⭐⭐ (最新最好用)
- **特点**: 现代化 API，文档优秀

### 3. Mailgun
- **免费额度**: 5000封/月 (前3个月)
- **网站**: https://www.mailgun.com/
- **需要**: Node.js 后端
- **推荐**: ⭐⭐⭐⭐

### 4. Amazon SES
- **免费额度**: 62000封/月 (需 AWS 账号)
- **网站**: https://aws.amazon.com/ses/
- **需要**: AWS 配置 + 后端
- **推荐**: ⭐⭐⭐ (配置复杂但免费额度最大)

---

## 💡 推荐方案

### 对于你的项目（纯前端）
👉 **使用 EmailJS** - 最简单，无需后端

### 如果需要更多免费额度
👉 **使用 Resend + Vercel Serverless Function**
- Resend: 3000封/月
- 配置简单
- 性能优秀

---

## 📚 详细文档

想了解更多？查看：
- `EMAILJS_SETUP_GUIDE.md` - EmailJS 完整配置指南
- `package.json` - 查看已安装的 @emailjs/browser 包

---

## ❓ 常见问题

**Q: EmailJS 的 200封/月 够用吗？**
A: 对于中小型企业网站够用。如果不够，可以升级到 $6/月 的 1000封计划。

**Q: 邮件会进垃圾箱吗？**
A: EmailJS 使用你自己的邮箱发送，送达率很好。建议将发件人加入白名单。

**Q: 可以自定义发件人邮箱吗？**
A: 可以！在 EmailJS 的 Service 设置中配置。

**Q: 支持附件吗？**
A: 免费版不支持附件。付费版支持。

**Q: 中国大陆访问 EmailJS 会被墙吗？**
A: 不会，EmailJS 在中国大陆可以正常访问。

---

## 🎉 完成！

配置完成后，你的网站就可以：
- ✅ 接收来自全球的咨询
- ✅ 自动发送邮件到你的邮箱
- ✅ 每月免费处理 200 个咨询

祝你的网站运营顺利！🚀
