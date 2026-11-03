# EmailJS 配置指南

## 📧 关于 EmailJS

EmailJS 是一个纯前端邮件发送服务，非常适合静态网站和 SPA 应用。

### 免费套餐
- ✅ **200 封邮件/月**
- ✅ 无需后端
- ✅ 支持多种邮箱服务
- ✅ 国际访问友好
- ✅ 实时邮件追踪

## 🚀 快速配置步骤

### 第 1 步：注册 EmailJS 账号

1. 访问 [EmailJS 官网](https://www.emailjs.com/)
2. 点击 **"Sign Up"** 注册账号
3. 使用 Google 账号或邮箱注册
4. 验证邮箱

### 第 2 步：添加邮件服务

1. 登录后，进入 [Email Services](https://dashboard.emailjs.com/admin)
2. 点击 **"Add New Service"**
3. 选择你的邮箱服务商：
   - **Gmail** (推荐，最简单)
   - Outlook / Office 365
   - Yahoo
   - 自定义 SMTP
4. 连接你的邮箱账号
5. 记下 **Service ID** (类似: `service_xxx`)

#### Gmail 配置注意事项
如果使用 Gmail，需要：
- 开启"两步验证"
- 生成"应用专用密码"
- 详细步骤：[Google 帮助文档](https://support.google.com/accounts/answer/185833)

### 第 3 步：创建邮件模板

1. 进入 [Email Templates](https://dashboard.emailjs.com/admin/templates)
2. 点击 **"Create New Template"**
3. 配置模板：

```
Subject: 新的网站咨询 - {{subject}}

From: {{from_name}} <{{from_email}}>

公司: {{company}}
姓名: {{first_name}} {{last_name}}
邮箱: {{from_email}}
电话: {{phone}}

主题: {{subject}}

留言内容:
{{message}}

---
此邮件来自企业网站联系表单
```

4. 点击 **"Save"**
5. 记下 **Template ID** (类似: `template_xxx`)

### 第 4 步：获取 Public Key

1. 进入 [Account](https://dashboard.emailjs.com/admin/account)
2. 找到 **"API Keys"** 部分
3. 复制 **Public Key** (类似: `xxx_xxxxx`)

### 第 5 步：配置环境变量

在项目根目录创建 `.env` 文件（如果不存在）：

```bash
# EmailJS 配置
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
```

**示例**:
```bash
VITE_EMAILJS_PUBLIC_KEY=abc123def456
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
```

⚠️ **重要**: 
- 不要将 `.env` 文件提交到 Git
- `.gitignore` 中已包含 `.env`
- 部署时在服务器上配置这些环境变量

### 第 6 步：测试配置

1. 重启开发服务器：
```bash
npm run dev
```

2. 访问联系我们页面：
```
http://localhost:5173/contact
```

3. 填写表单并提交
4. 检查你的邮箱是否收到邮件
5. 查看浏览器控制台的日志

## 🧪 测试检查清单

- [ ] 环境变量正确配置
- [ ] 开发服务器重启
- [ ] 表单可以正常填写
- [ ] 提交后显示成功消息
- [ ] 收到测试邮件
- [ ] 邮件内容格式正确
- [ ] 所有字段都显示

## 🌍 多语言支持

当前邮件模板使用英文/中文混合。如果需要纯英文模板：

```
Subject: New Contact Inquiry - {{subject}}

From: {{from_name}} <{{from_email}}>

Company: {{company}}
Name: {{first_name}} {{last_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}

---
This email is from the company website contact form
```

## 🔧 故障排查

### 问题 1: "EmailJS 配置不完整"
**原因**: 环境变量未配置或配置错误

**解决方案**:
1. 检查 `.env` 文件是否存在
2. 确认变量名拼写正确（以 `VITE_` 开头）
3. 重启开发服务器

### 问题 2: 邮件发送失败
**原因**: Service ID 或 Template ID 错误

**解决方案**:
1. 登录 EmailJS Dashboard 确认 ID
2. 确保 Service 已连接邮箱
3. 检查 Template 是否已保存

### 问题 3: Gmail 授权失败
**原因**: Gmail 安全设置

**解决方案**:
1. 开启 Google 账号"两步验证"
2. 生成"应用专用密码"
3. 在 EmailJS 中使用应用专用密码

### 问题 4: 收不到邮件
**原因**: 邮件被拦截或进入垃圾箱

**解决方案**:
1. 检查垃圾邮件文件夹
2. 将发件人添加到白名单
3. 在 EmailJS Dashboard 查看发送日志

## 📊 监控邮件使用

1. 登录 [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. 查看 **"Usage"** 页面
3. 监控：
   - 本月已发送邮件数
   - 剩余配额
   - 发送成功率
   - 失败原因

## 💰 升级计划

如果免费额度不够，EmailJS 提供付费计划：

| 计划 | 价格/月 | 邮件数 |
|------|---------|--------|
| Free | $0 | 200 封 |
| Personal | $6 | 1,000 封 |
| Professional | $15 | 2,500 封 |
| Team | $29 | 10,000 封 |

## 🔐 安全建议

1. **不要暴露敏感信息**
   - Public Key 可以公开（已在前端）
   - Service ID 和 Template ID 也可以公开
   - 不要在代码中存储密码

2. **限制发送频率**
   - EmailJS 自带反垃圾机制
   - 考虑添加验证码（如 reCAPTCHA）

3. **监控异常**
   - 定期检查发送日志
   - 设置邮件配额告警

## 🆚 其他服务对比

| 服务 | 免费额度 | 需要后端 | 国际友好 | 推荐度 |
|------|---------|----------|----------|--------|
| **EmailJS** | 200/月 | ❌ | ✅ | ⭐⭐⭐⭐⭐ |
| SendGrid | 100/天 | ✅ | ✅ | ⭐⭐⭐⭐ |
| Mailgun | 5000/月* | ✅ | ✅ | ⭐⭐⭐⭐ |
| Resend | 100/天 | ✅ | ✅ | ⭐⭐⭐⭐ |

*前3个月

## 📚 相关资源

- [EmailJS 官方文档](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [API 参考](https://www.emailjs.com/docs/api/send/)
- [问题论坛](https://www.emailjs.com/docs/faq/)

## ✅ 配置完成检查

完成配置后，确认以下项目：

- [x] EmailJS 账号已注册
- [x] 邮件服务已连接
- [x] 邮件模板已创建
- [x] Public Key 已获取
- [x] 环境变量已配置
- [x] 开发服务器已重启
- [x] 测试邮件发送成功

---

**配置完成后**，你的网站就可以接收来自全球用户的咨询邮件了！🎉

如果遇到问题，查看上方的故障排查部分，或访问 EmailJS 官方文档。
