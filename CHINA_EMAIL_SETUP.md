# 📧 中国大陆友好的邮件服务配置指南

## 🇨🇳 适合中国大陆的邮箱方案

由于 Gmail 在中国大陆被限制，以下是国内可用的替代方案：

---

## 🎯 推荐方案排序

### 方案 1: QQ邮箱 + EmailJS ⭐⭐⭐⭐⭐ (强烈推荐)
- ✅ **完全免费**
- ✅ **国内最稳定**
- ✅ **配置最简单**
- ✅ **用户量最大**
- ✅ **送达率高**

### 方案 2: 163网易邮箱 + EmailJS ⭐⭐⭐⭐
- ✅ 免费
- ✅ 老牌稳定
- ✅ 企业邮箱可选
- ⚠️ 配置稍复杂

### 方案 3: 阿里云邮箱 + EmailJS ⭐⭐⭐⭐
- ✅ 企业级
- ✅ 稳定可靠
- ⚠️ 需要域名验证

### 方案 4: 腾讯企业邮 (免费版) ⭐⭐⭐
- ✅ 专业企业邮箱
- ✅ 免费50个账号
- ⚠️ 需要域名

---

## 🚀 方案 1: QQ邮箱配置（推荐！）

### 为什么选择 QQ邮箱？
- ✅ 10亿用户，最稳定
- ✅ 完全免费
- ✅ 配置最简单（5分钟）
- ✅ 送达率高
- ✅ 支持 SMTP
- ✅ 移动端体验好

### 配置步骤（10分钟）

#### 第一步：开启 QQ邮箱 SMTP 服务（3分钟）

1. **登录 QQ邮箱**
   👉 https://mail.qq.com/

2. **进入设置**
   - 点击右上角"设置"
   - 选择"账户"标签

3. **开启 SMTP 服务**
   - 找到"POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务"
   - 点击"开启服务"
   - 或者点击"生成授权码"

4. **获取授权码**
   - 可能需要发送短信验证
   - 发送验证短信后
   - 会显示一个 **16位授权码**
   - 📋 **重要：复制保存这个授权码！**
   
   ```
   示例: abcdefghijklmnop
   ```

5. ✅ 完成！QQ邮箱配置完毕

#### 第二步：配置 EmailJS（7分钟）

1. **注册 EmailJS**
   👉 https://www.emailjs.com/
   - 用邮箱注册（不能用 Google 账号，中国访问不了）

2. **添加邮件服务**
   - Email Services → Add New Service
   - ⚠️ 选择 **"Other"** (不是 Gmail/Outlook)
   - 选择 SMTP Server

3. **填写 SMTP 配置**
   ```
   Service Name: QQ邮箱
   
   SMTP Server: smtp.qq.com
   Port: 465
   Security: SSL/TLS
   
   Username: 你的QQ邮箱地址
   例如: 123456789@qq.com
   
   Password: 刚才获取的16位授权码
   例如: abcdefghijklmnop
   
   From Email: 你的QQ邮箱地址
   From Name: 你的名字或公司名
   ```

4. **测试连接**
   - 点击 "Test Connection"
   - 如果成功会显示绿色 ✅
   - 📋 复制显示的 **Service ID**

5. **创建邮件模板**
   - Email Templates → Create New Template
   - 复制以下内容：

**主题 (Subject)**:
```
新咨询 - {{subject}}
```

**内容 (Content)**:
```
您收到来自企业网站的新咨询：

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 客户信息
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

公司名称: {{company}}
联系人: {{first_name}} {{last_name}}
邮箱: {{from_email}}
电话: {{phone}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 咨询内容
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

主题: {{subject}}

详细留言:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

请尽快回复客户！
```

   - 点击 Save
   - 📋 复制 **Template ID**

6. **获取 Public Key**
   - Account → API Keys
   - 📋 复制 **Public Key**

#### 第三步：配置项目（2分钟）

1. **创建 .env 文件**
   ```bash
   copy .env.example .env
   ```

2. **填入配置**
   ```bash
   VITE_EMAILJS_PUBLIC_KEY=你的Public_Key
   VITE_EMAILJS_SERVICE_ID=service_xxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxx
   ```

3. **重启服务器**
   ```bash
   npm run dev
   ```

4. **测试**
   - 访问: http://localhost:5173/contact
   - 填写表单提交
   - 检查你的 QQ邮箱！

---

## 🚀 方案 2: 163网易邮箱配置

### 配置步骤

1. **登录 163邮箱**
   👉 https://mail.163.com/

2. **开启 SMTP 服务**
   - 设置 → POP3/SMTP/IMAP
   - 开启"IMAP/SMTP服务"
   - 获取授权码

3. **EmailJS SMTP 配置**
   ```
   SMTP Server: smtp.163.com
   Port: 465
   Security: SSL/TLS
   
   Username: 你的163邮箱
   Password: 授权码
   ```

---

## 🚀 方案 3: 阿里云邮箱（需要域名）

### 适用场景
- 已有域名的企业
- 需要专业企业邮箱

### 配置步骤

1. **购买/使用阿里云邮箱**
   👉 https://www.aliyun.com/product/directmail
   - 个人版免费（200封/天）

2. **SMTP 配置**
   ```
   SMTP Server: smtpdm.aliyun.com
   Port: 465
   ```

---

## 🚀 方案 4: 使用国内邮件发送服务（推荐企业用户）

### 阿里云邮件推送（DirectMail）
- 👉 https://www.aliyun.com/product/directmail
- **免费额度**: 200封/天
- **需要**: 域名 + 后端 API
- **价格**: 超出后 ¥0.5/千封

### 腾讯云邮件推送（SES）
- 👉 https://cloud.tencent.com/product/ses
- **免费额度**: 1000封/月
- **需要**: 域名 + 后端 API
- **价格**: 超出后 ¥1/千封

---

## 📊 方案对比

| 方案 | 配置难度 | 免费额度 | 需要域名 | 推荐度 |
|-----|---------|---------|---------|--------|
| **QQ邮箱** | ⭐ 最简单 | EmailJS 200/月 | ❌ 不需要 | ⭐⭐⭐⭐⭐ |
| 163邮箱 | ⭐⭐ 简单 | EmailJS 200/月 | ❌ 不需要 | ⭐⭐⭐⭐ |
| 阿里云DM | ⭐⭐⭐ 中等 | 200封/天 | ✅ 需要 | ⭐⭐⭐⭐ |
| 腾讯云SES | ⭐⭐⭐ 中等 | 1000封/月 | ✅ 需要 | ⭐⭐⭐⭐ |

---

## ⚠️ QQ邮箱常见问题

### 问题 1: 找不到"生成授权码"

**原因**: 未开启 SMTP 服务

**解决**:
1. 登录 QQ邮箱
2. 设置 → 账户
3. 找到 "POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务"
4. 点击"开启"或"管理服务"

### 问题 2: 授权码获取失败

**原因**: 需要手机验证

**解决**:
1. 确保 QQ 号已绑定手机
2. 按提示发送验证短信
3. 短信内容: 配置邮件客户端
4. 发送到指定号码（通常是 1069070069）

### 问题 3: EmailJS 连接失败

**原因**: SMTP 配置错误

**解决**:
```
正确配置:
SMTP Server: smtp.qq.com
Port: 465 (SSL) 或 587 (TLS)
Security: SSL/TLS
Username: 完整的 QQ 邮箱地址
Password: 16位授权码（不是 QQ 密码）
```

### 问题 4: 邮件进垃圾箱

**原因**: 使用 QQ 邮箱发送可能被识别为营销邮件

**解决**:
1. 在 QQ 邮箱设置中将自己的邮箱加入白名单
2. 或者升级使用腾讯企业邮（更专业）
3. 邮件内容避免营销词汇

---

## 💡 推荐配置（不同场景）

### 场景 1: 个人/小型企业网站
👉 **QQ邮箱 + EmailJS**
- 完全免费
- 配置简单
- 200封/月足够

### 场景 2: 中型企业（有域名）
👉 **腾讯企业邮（免费版）+ EmailJS**
- 专业企业邮箱
- 免费 50 个账号
- 更高的信任度

### 场景 3: 大型企业（高流量）
👉 **阿里云 DirectMail 或 腾讯云 SES**
- 需要后端 API
- 更大的免费额度
- 专业的监控和统计

---

## 🔐 QQ邮箱安全设置

### 授权码管理

1. **查看已生成的授权码**
   - QQ邮箱设置 → 账户
   - 找到"生成授权码"部分

2. **删除/重置授权码**
   - 如果怀疑泄露，可以删除旧授权码
   - 重新生成新的授权码
   - 更新 EmailJS 配置

3. **安全建议**
   - 不要将授权码告诉任何人
   - 定期更换授权码
   - 不要在公共场所配置

---

## 📱 QQ邮箱 APP 推荐

### 移动端接收邮件

1. **下载 QQ邮箱 APP**
   - iOS: App Store 搜索 "QQ邮箱"
   - Android: 应用商店搜索 "QQ邮箱"

2. **开启通知**
   - 可以第一时间收到客户咨询
   - 支持推送通知

3. **多账号管理**
   - 可以同时管理多个邮箱
   - QQ邮箱、163、Gmail 等

---

## 💰 费用对比（中国方案）

### 完全免费方案
```
QQ邮箱: 免费
EmailJS: 200封/月 免费
总计: ¥0/月
```

### 企业升级方案
```
腾讯企业邮: 免费版（50账号）
EmailJS: 200封/月
总计: ¥0/月

或

EmailJS: $6/月 = ¥43/月（1000封）
总计: ¥43/月
```

### 高流量方案
```
腾讯云 SES: 1000封/月免费
超出: ¥1/千封
总计: 基本免费
```

---

## 🔗 相关链接

### QQ邮箱
- 官网: https://mail.qq.com/
- 帮助中心: https://service.mail.qq.com/
- 客户端设置: https://service.mail.qq.com/cgi-bin/help?subtype=1&&id=28&&no=167

### 163邮箱
- 官网: https://mail.163.com/
- 帮助中心: https://mail.163.com/help/

### 阿里云邮件推送
- 官网: https://www.aliyun.com/product/directmail
- 文档: https://help.aliyun.com/product/29412.html

### 腾讯云邮件推送
- 官网: https://cloud.tencent.com/product/ses
- 文档: https://cloud.tencent.com/document/product/1288

### EmailJS
- 官网: https://www.emailjs.com/
- 文档: https://www.emailjs.com/docs/

---

## 📝 快速配置检查清单

使用 QQ邮箱时，确认：

- [ ] QQ邮箱已登录
- [ ] SMTP 服务已开启
- [ ] 已获取16位授权码
- [ ] EmailJS 选择了 "Other" SMTP
- [ ] SMTP 服务器填写: smtp.qq.com
- [ ] 端口填写: 465
- [ ] 用户名是完整邮箱地址
- [ ] 密码是授权码（不是QQ密码）
- [ ] .env 文件已配置
- [ ] 开发服务器已重启
- [ ] 测试邮件发送成功

---

## 🎉 完成！

使用 QQ邮箱配置完成后：
- ✅ 完全在中国大陆可用
- ✅ 不需要翻墙
- ✅ 配置简单
- ✅ 完全免费
- ✅ 稳定可靠

现在就可以开始接收来自客户的咨询了！🚀

---

**推荐**: 对于中国大陆用户，强烈推荐使用 **QQ邮箱 + EmailJS** 方案！
