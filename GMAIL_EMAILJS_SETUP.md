# 📧 使用 Gmail 配置 EmailJS（详细图文教程）

## ✅ 为什么选择 Gmail？

- ✅ **免费**: 完全免费使用
- ✅ **简单**: 最容易配置的邮箱
- ✅ **稳定**: 谷歌服务，送达率高
- ✅ **国际友好**: 全球都能访问
- ✅ **安全**: 谷歌的安全保护

---

## 🚀 完整配置步骤（10分钟）

### 📝 前提条件

你需要：
- ✅ 一个 Gmail 邮箱（如：yourname@gmail.com）
- ✅ 邮箱已开启"两步验证"（必须！）

---

## 第一部分：Gmail 设置（5分钟）

### 步骤 1: 开启 Gmail 两步验证

1. 访问 Google 账号安全设置：
   👉 https://myaccount.google.com/security

2. 找到 **"两步验证"** (2-Step Verification)

3. 如果未开启，点击 **"开始使用"**

4. 按提示设置：
   - 输入手机号
   - 接收验证码
   - 完成验证

5. ✅ 开启成功后会显示 "已开启"

### 步骤 2: 生成应用专用密码

> ⚠️ **重要**: 不要使用你的 Gmail 登录密码！必须生成"应用专用密码"

1. 在安全设置页面，找到 **"应用专用密码"** (App Passwords)
   👉 直接访问: https://myaccount.google.com/apppasswords

2. 可能需要再次输入你的 Gmail 密码

3. 在下拉菜单中：
   - **选择应用**: 选择 "邮件" (Mail)
   - **选择设备**: 选择 "其他（自定义名称）"
   - 输入: `EmailJS` 或 `企业网站`

4. 点击 **"生成"**

5. 📋 **复制生成的16位密码**（类似: `abcd efgh ijkl mnop`）
   ```
   ⚠️ 这个密码只会显示一次，务必保存！
   ```

6. ✅ 完成！Gmail 设置完毕

---

## 第二部分：EmailJS 配置（5分钟）

### 步骤 1: 注册 EmailJS

1. 访问 EmailJS 官网:
   👉 https://www.emailjs.com/

2. 点击右上角 **"Sign Up"** (注册)

3. 选择注册方式：
   - **推荐**: 用 Google 账号快速注册
   - 或用邮箱注册

4. 完成注册并登录

### 步骤 2: 添加 Gmail 服务

1. 在左侧菜单点击 **"Email Services"**

2. 点击 **"Add New Service"**

3. 选择 **"Gmail"**

4. 填写信息：
   ```
   Service Name: Gmail (或任意名称)
   Service ID: 自动生成（保持默认）
   
   Email Address: 你的Gmail地址
   例如: yourname@gmail.com
   
   App Password: 粘贴刚才生成的16位密码
   例如: abcd efgh ijkl mnop
   ```

5. 点击 **"Create Service"**

6. ✅ 成功后会显示你的 **Service ID**
   ```
   📋 复制保存: service_xxxxxxx
   ```

### 步骤 3: 创建邮件模板

1. 点击左侧 **"Email Templates"**

2. 点击 **"Create New Template"**

3. 填写模板内容：

**Template Name**:
```
企业网站联系表单
```

**Subject (主题)**:
```
新咨询 - {{subject}}
```

**Content (内容)** - 复制粘贴以下内容:
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
⏰ 收到时间: {{current_time}}

请尽快回复客户！
```

4. 点击右侧 **"Test It"** 测试模板（可选）

5. 点击 **"Save"** 保存

6. ✅ 成功后会显示你的 **Template ID**
   ```
   📋 复制保存: template_xxxxxxx
   ```

### 步骤 4: 获取 Public Key

1. 点击左侧 **"Account"**

2. 找到 **"General"** 标签页

3. 在 **"API Keys"** 部分找到 **"Public Key"**

4. ✅ 复制保存你的 Public Key
   ```
   📋 复制保存: 类似 abcDefGHijk123456
   ```

---

## 第三部分：项目配置（2分钟）

### 步骤 1: 创建 .env 文件

在项目根目录（和 package.json 同级）创建 `.env` 文件：

```bash
# Windows 用户
copy .env.example .env

# Mac/Linux 用户
cp .env.example .env
```

### 步骤 2: 填入配置信息

编辑 `.env` 文件，填入刚才复制的三个值：

```bash
# EmailJS 配置
VITE_EMAILJS_PUBLIC_KEY=你的Public_Key
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

**真实示例**:
```bash
VITE_EMAILJS_PUBLIC_KEY=abcDefGHijk123456
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
```

### 步骤 3: 保存并重启

1. 保存 `.env` 文件

2. 重启开发服务器：
   ```bash
   # 按 Ctrl+C 停止当前服务器
   # 然后重新启动
   npm run dev
   ```

3. ✅ 配置完成！

---

## 🧪 测试邮件发送

### 测试步骤

1. 打开浏览器访问:
   ```
   http://localhost:5173/contact
   ```

2. 填写联系表单：
   - 名字: Test
   - 姓氏: User
   - 公司: Test Company
   - 邮箱: test@example.com
   - 电话: 13800138000
   - 主题: 测试邮件
   - 留言: 这是一封测试邮件

3. 点击 **"发送消息"**

4. 等待 2-3 秒

### 预期结果 ✅

**成功的标志**:
- ✅ 页面显示绿色成功消息
- ✅ 你的 Gmail 收到测试邮件
- ✅ 浏览器控制台显示 "邮件发送成功"

**邮件内容**:
- 发件人: test@example.com
- 收件人: 你的Gmail地址
- 主题: 新咨询 - 测试邮件
- 内容: 包含完整的客户信息

---

## ❌ 常见问题解决

### 问题 1: "EmailJS 配置不完整"

**原因**: 环境变量未正确配置

**解决**:
1. 检查 `.env` 文件是否在项目根目录
2. 确认文件名是 `.env`（不是 `.env.txt`）
3. 确认变量名以 `VITE_` 开头
4. 重启开发服务器

### 问题 2: "Invalid credentials"（无效凭据）

**原因**: Gmail 密码错误

**解决**:
1. 确认使用的是"应用专用密码"，不是Gmail登录密码
2. 检查密码是否完整复制（16位，包含空格）
3. 重新生成应用专用密码

### 问题 3: 收不到邮件

**原因**: 邮件可能在垃圾箱

**解决**:
1. 检查 Gmail 的"垃圾邮件"文件夹
2. 检查 Gmail 的"所有邮件"
3. 将发件人添加到通讯录

### 问题 4: "两步验证未开启"

**原因**: Gmail 必须开启两步验证才能生成应用专用密码

**解决**:
1. 访问 https://myaccount.google.com/security
2. 开启"两步验证"
3. 设置手机验证
4. 再生成应用专用密码

### 问题 5: 找不到"应用专用密码"选项

**原因**: 
- 两步验证未开启
- 或使用的是企业 Google Workspace 账号（管理员可能禁用了此功能）

**解决**:
1. 确保两步验证已开启
2. 如果是企业账号，联系管理员
3. 或使用个人 Gmail 账号

---

## 📊 监控邮件使用

### 查看发送记录

1. 登录 EmailJS Dashboard:
   👉 https://dashboard.emailjs.com/

2. 点击左侧 **"History"**

3. 可以看到：
   - ✅ 每封邮件的发送时间
   - ✅ 发送状态（成功/失败）
   - ✅ 收件人邮箱
   - ✅ 邮件内容

### 查看配额使用

1. 在 Dashboard 首页可以看到：
   ```
   本月已发送: X 封
   剩余配额: 200 - X 封
   ```

2. 如果接近 200 封，考虑：
   - 升级到付费计划（$6/月 = 1000封）
   - 或切换到其他服务（如 Resend 的 3000封/月免费）

---

## 🔐 安全最佳实践

### ✅ 安全建议

1. **不要分享应用专用密码**
   - 这个密码只用于 EmailJS
   - 不要告诉任何人

2. **定期检查应用专用密码**
   - 如果怀疑泄露，立即撤销并重新生成
   - 访问: https://myaccount.google.com/apppasswords

3. **不要将 .env 提交到 Git**
   - `.gitignore` 已包含 `.env`
   - 确保不会被上传

4. **部署时使用环境变量**
   - Vercel/Netlify: 在后台配置环境变量
   - 不要硬编码在代码中

### 🔒 撤销应用专用密码

如果需要撤销（例如密码泄露）：

1. 访问: https://myaccount.google.com/apppasswords
2. 找到 "EmailJS" 应用
3. 点击"删除"或"撤销"
4. 重新生成新密码
5. 更新 EmailJS 配置

---

## 💰 费用说明

### 使用 Gmail + EmailJS 的费用

- **Gmail**: 完全免费 ✅
- **EmailJS 免费版**: 200封/月 ✅
- **EmailJS 付费版**（如果需要）:
  - Personal: $6/月 → 1,000封
  - Professional: $15/月 → 2,500封

### 总结

**小型企业网站**: 完全免费！
- Gmail: $0
- EmailJS: $0（200封/月够用）
- **总计: $0/月** 🎉

---

## 📱 移动端测试

### 在手机上测试

1. 确保手机和电脑在同一网络
2. 查看电脑IP地址：
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```
3. 手机浏览器访问：
   ```
   http://你的IP地址:5173/contact
   ```
4. 填写表单测试

---

## 🎓 Gmail 配置要点总结

### ✅ 必须做的事情

- [x] 开启两步验证
- [x] 生成应用专用密码
- [x] 使用应用专用密码（不是登录密码）
- [x] 正确填写 .env 文件
- [x] 重启开发服务器

### ❌ 不要做的事情

- [ ] 不要使用 Gmail 登录密码
- [ ] 不要分享应用专用密码
- [ ] 不要将 .env 文件提交到 Git
- [ ] 不要在未开启两步验证时尝试配置

---

## 🚀 下一步

配置完成后：

1. **测试**: 多发几封测试邮件
2. **监控**: 定期查看 EmailJS Dashboard
3. **优化**: 根据需要调整邮件模板
4. **部署**: 准备部署到生产环境

---

## 📞 需要帮助？

- 📖 EmailJS 官方文档: https://www.emailjs.com/docs/
- 📖 Gmail 帮助: https://support.google.com/mail/
- 📖 两步验证设置: https://support.google.com/accounts/answer/185839
- 📖 应用专用密码: https://support.google.com/accounts/answer/185833

---

**祝配置成功！🎉**

如果遇到问题，按照上面的"常见问题解决"部分逐一排查。
