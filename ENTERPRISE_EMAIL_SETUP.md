# 🏢 企业邮箱配置指南（中国大陆）

## 🎯 企业邮箱推荐方案

企业邮箱更专业、更可信，适合企业网站使用。

---

## 🏆 推荐的企业邮箱服务

### 方案 1: 腾讯企业邮箱（免费版）⭐⭐⭐⭐⭐ 强烈推荐

**官网**: https://exmail.qq.com/

#### 免费版特点

- ✅ **完全免费** - 永久免费
- ✅ **50 个邮箱账号** - 足够小企业使用
- ✅ **每个账号 2GB 容量**
- ✅ **企业域名** - 如 info@yourcompany.com
- ✅ **微信集成** - 可在微信接收邮件
- ✅ **移动端 APP** - 企业微信/腾讯企业邮
- ✅ **稳定可靠** - 腾讯服务器
- ✅ **中国大陆访问快**

#### 收费版对比

| 版本       | 价格        | 账号数 | 容量      | 适合          |
| ---------- | ----------- | ------ | --------- | ------------- |
| **免费版** | ¥0          | 50     | 2GB/账号  | 小企业 ⭐推荐 |
| 基础版     | ¥5/账号/月  | 不限   | 5GB/账号  | 中型企业      |
| 标准版     | ¥10/账号/月 | 不限   | 10GB/账号 | 大型企业      |
| 旗舰版     | ¥20/账号/月 | 不限   | 无限      | 大型企业      |

---

### 方案 2: 阿里云企业邮箱

**官网**: https://www.aliyun.com/product/alimail

#### 免费版特点

- ✅ **免费版** - 5个账号
- ✅ **每个账号 5GB 容量**
- ✅ **企业域名**
- ✅ **稳定可靠**
- ⚠️ 功能较少

#### 收费版

| 版本   | 价格        | 账号数 | 容量      |
| ------ | ----------- | ------ | --------- |
| 免费版 | ¥0          | 5      | 5GB/账号  |
| 标准版 | ¥50/账号/年 | 不限   | 5GB/账号  |
| 集团版 | ¥99/账号/年 | 不限   | 15GB/账号 |

---

### 方案 3: 网易企业邮箱

**官网**: https://ym.163.com/

#### 免费版特点

- ✅ **免费版** - 200个账号
- ✅ **每个账号 3GB 容量**
- ✅ **企业域名**
- ✅ **老牌服务**

#### 收费版

| 版本   | 价格        | 容量      |
| ------ | ----------- | --------- |
| 免费版 | ¥0          | 3GB/账号  |
| 商务版 | ¥90/账号/年 | 10GB/账号 |

---

## 🚀 推荐方案：腾讯企业邮箱（免费版）

最推荐，配置简单，功能完善，完全免费！

---

## 📝 腾讯企业邮箱完整配置教程

### 前提条件

你需要：

- ✅ 一个已备案的域名（如 yourcompany.com）
- ✅ 域名的 DNS 管理权限
- ⚠️ 如果没有域名，需要先购买域名

---

## 第一部分：注册腾讯企业邮箱（10分钟）

### 步骤 1: 访问腾讯企业邮箱

1. 打开官网：
   👉 https://exmail.qq.com/

2. 点击 **"立即开通"** 或 **"免费试用"**

3. 选择 **"基础版"**（免费）

### 步骤 2: 填写注册信息

```
企业名称: 你的公司名称
管理员姓名: 你的名字
手机号码: 你的手机号（接收验证码）
域名: yourcompany.com
```

### 步骤 3: 域名验证

腾讯会要求你验证域名所有权，有两种方式：

#### 方式 1: TXT 记录验证（推荐）

1. 腾讯会给你一个 TXT 记录：

   ```
   主机记录: @
   记录类型: TXT
   记录值: v=spf1 include:spf.mail.qq.com ~all
   ```

2. 登录你的域名服务商（阿里云/腾讯云/GoDaddy等）

3. 找到 DNS 设置/域名解析

4. 添加 TXT 记录

5. 等待 10-30 分钟生效

6. 回到腾讯企业邮箱页面，点击"验证"

#### 方式 2: 文件验证

1. 下载验证文件
2. 上传到网站根目录
3. 点击验证

### 步骤 4: 配置 MX 记录

验证通过后，需要配置 MX 记录：

```
主机记录: @
记录类型: MX
优先级: 5
记录值: mxbiz1.qq.com

主机记录: @
记录类型: MX
优先级: 10
记录值: mxbiz2.qq.com
```

**在域名服务商添加这两条 MX 记录**

### 步骤 5: 创建邮箱账号

1. 登录腾讯企业邮箱管理后台
   👉 https://exmail.qq.com/login

2. 点击 **"成员与群组"** → **"成员管理"**

3. 点击 **"新建成员"**

4. 填写信息：

   ```
   姓名: 客服
   邮箱账号: service
   完整邮箱: service@yourcompany.com
   密码: 设置密码
   ```

5. 点击保存

6. ✅ 企业邮箱创建完成！

---

## 第二部分：配置 EmailJS（7分钟）

### 步骤 1: 获取 SMTP 信息

腾讯企业邮箱 SMTP 配置：

```
SMTP 服务器: smtp.exmail.qq.com
端口: 465（SSL）或 587（TLS）
安全类型: SSL/TLS
```

### 步骤 2: 注册/登录 EmailJS

1. 访问：https://www.emailjs.com/

2. 注册或登录账号

### 步骤 3: 添加邮件服务

1. 点击左侧 **"Email Services"**

2. 点击 **"Add New Service"**

3. 选择 **"Other"** → **"SMTP Server"**

4. 填写配置：

   ```
   Service Name: 腾讯企业邮

   SMTP Server: smtp.exmail.qq.com
   Port: 465
   Security: SSL/TLS

   Username: service@yourcompany.com
   （你创建的企业邮箱地址）

   Password: 企业邮箱的密码
   （不是授权码，直接用登录密码）

   From Email: service@yourcompany.com
   From Name: 你的公司名称
   ```

5. 点击 **"Test Connection"** 测试

6. ✅ 成功后，复制 **Service ID**

### 步骤 4: 创建邮件模板

1. 点击 **"Email Templates"** → **"Create New Template"**

2. 填写模板：

**Template Name**:

```
企业网站咨询表单
```

**Subject（主题）**:

```
【新客户咨询】{{subject}}
```

**Content（内容）**:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: #0066cc;
        color: white;
        padding: 20px;
        text-align: center;
      }
      .content {
        background: #f9f9f9;
        padding: 20px;
        margin: 20px 0;
      }
      .info-row {
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
      }
      .label {
        font-weight: bold;
        color: #0066cc;
      }
      .footer {
        text-align: center;
        color: #666;
        font-size: 12px;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>🔔 新客户咨询通知</h2>
      </div>

      <div class="content">
        <h3>📋 客户信息</h3>
        <div class="info-row">
          <span class="label">公司名称：</span>{{company}}
        </div>
        <div class="info-row">
          <span class="label">联系人：</span>{{first_name}} {{last_name}}
        </div>
        <div class="info-row">
          <span class="label">邮箱：</span>{{from_email}}
        </div>
        <div class="info-row"><span class="label">电话：</span>{{phone}}</div>
      </div>

      <div class="content">
        <h3>📝 咨询内容</h3>
        <div class="info-row"><span class="label">主题：</span>{{subject}}</div>
        <div
          style="margin-top: 15px; padding: 15px; background: white; border-left: 3px solid #0066cc;"
        >
          <p><strong>详细留言：</strong></p>
          <p>{{message}}</p>
        </div>
      </div>

      <div class="footer">
        <p>此邮件来自企业网站联系表单</p>
        <p>请尽快回复客户咨询</p>
      </div>
    </div>
  </body>
</html>
```

3. 点击 **"Save"**

4. 📋 复制 **Template ID**

### 步骤 5: 获取 Public Key

1. 点击 **"Account"** → **"General"**

2. 找到 **"Public Key"**

3. 📋 复制保存

---

## 第三部分：项目配置（2分钟）

### 步骤 1: 创建 .env 文件

```bash
copy .env.example .env
```

### 步骤 2: 填入配置

编辑 `.env` 文件：

```bash
# EmailJS 配置
VITE_EMAILJS_PUBLIC_KEY=你的_Public_Key
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
```

### 步骤 3: 重启服务器

```bash
npm run dev
```

### 步骤 4: 测试

1. 访问：http://localhost:5173/contact

2. 填写表单提交

3. 检查你的企业邮箱！

---

## 🎨 企业邮箱的优势

### vs 个人邮箱（QQ/163）

| 对比项       | 企业邮箱                               | 个人邮箱              |
| ------------ | -------------------------------------- | --------------------- |
| **专业性**   | ⭐⭐⭐⭐⭐ 如 admin@tianbaoyueyang.com | ⭐⭐ 如 123456@qq.com |
| **可信度**   | ⭐⭐⭐⭐⭐ 客户更信任                  | ⭐⭐⭐ 较低           |
| **品牌形象** | ⭐⭐⭐⭐⭐ 提升品牌                    | ⭐⭐ 无品牌展示       |
| **管理**     | ⭐⭐⭐⭐⭐ 统一管理                    | ⭐⭐⭐ 分散管理       |
| **扩展性**   | ⭐⭐⭐⭐⭐ 可添加员工                  | ⭐ 单账号             |

### 企业邮箱地址示例

```
通用邮箱:
info@yourcompany.com        - 信息咨询
contact@yourcompany.com     - 联系我们
service@yourcompany.com     - 客户服务
support@yourcompany.com     - 技术支持

部门邮箱:
sales@yourcompany.com       - 销售部
hr@yourcompany.com          - 人力资源
admin@yourcompany.com       - 行政部

个人邮箱:
zhangsan@yourcompany.com    - 张三
lisi@yourcompany.com        - 李四
```

---

## 💰 费用对比

### 腾讯企业邮箱

**免费方案（推荐）**:

```
域名费用: ¥55-100/年（.com 域名）
企业邮箱: ¥0（免费50账号）
EmailJS: ¥0（200封/月）
──────────────────────────
总计: 约 ¥100/年 ✅
```

**付费升级**（如果需要）:

```
基础版: ¥5/账号/月 × 50账号 = ¥3,000/年
或只购买需要的账号数
```

---

## 🌐 域名购买推荐（如果没有）

### 国内域名服务商

1. **阿里云（万网）** ⭐⭐⭐⭐⭐
   - 官网: https://wanwang.aliyun.com/
   - .com 域名: ¥55/年（首年优惠）
   - 续费: ¥78/年
   - 推荐理由: 国内最大，稳定

2. **腾讯云** ⭐⭐⭐⭐⭐
   - 官网: https://dnspod.cloud.tencent.com/
   - .com 域名: ¥55/年（首年）
   - 推荐理由: 和腾讯企业邮一家

3. **华为云** ⭐⭐⭐⭐
   - 官网: https://www.huaweicloud.com/product/domain.html
   - .com 域名: 约 ¥60/年

### 域名选择建议

```
✅ 推荐:
yourcompany.com         - 英文，国际通用
yourcompany.cn          - 中国域名
yourcompany.com.cn      - 中国企业域名

⚠️ 注意:
- 域名要简短、好记
- 与公司名称相关
- 避免数字和特殊符号
- .com 最权威，最推荐
```

---

## 📱 移动端管理

### 企业微信（推荐）

1. **下载企业微信**
   - iOS: App Store
   - Android: 应用商店

2. **绑定企业邮箱**
   - 企业微信 → 工作台 → 邮箱
   - 输入企业邮箱账号密码
   - 可在微信接收邮件通知

3. **优势**
   - 微信内直接查看邮件
   - 即时推送通知
   - 可直接回复

### 腾讯企业邮 APP

1. **下载 APP**
   - iOS/Android 搜索"腾讯企业邮"

2. **登录**
   - 输入完整邮箱地址
   - 输入密码

---

## ❓ 常见问题

### Q1: 必须要有域名吗？

**A**: 是的，企业邮箱必须要域名。

- 如果没有，需要先购买域名（约¥100/年）
- 或使用个人邮箱方案（QQ邮箱）

### Q2: 域名需要备案吗？

**A**: 不一定

- 只使用企业邮箱：**不需要备案**
- 网站要在国内服务器：**需要备案**
- 网站在海外服务器：**不需要备案**

### Q3: 配置 DNS 需要多久生效？

**A**:

- DNS 记录添加后：10分钟 - 24小时
- 通常 30分钟内生效
- 可以用 `nslookup` 命令检查

### Q4: 可以用多个域名吗？

**A**: 可以

- 腾讯企业邮支持多域名
- 需要分别验证每个域名

### Q5: 忘记企业邮箱密码怎么办？

**A**:

- 管理员登录后台重置
- 或联系腾讯企业邮客服

### Q6: 能收国际邮件吗？

**A**: 可以

- 企业邮箱支持国际邮件收发
- 可以和 Gmail、Outlook 等互通

---

## 🔧 故障排查

### 问题 1: EmailJS 连接失败

**检查**:

- SMTP 地址是否正确: smtp.exmail.qq.com
- 端口是否正确: 465
- 用户名是否是完整邮箱地址
- 密码是否正确（是登录密码，不是授权码）

### 问题 2: 无法收到邮件

**检查**:

- MX 记录是否正确配置
- DNS 是否生效（用 nslookup 检查）
- 企业邮箱是否欠费

### 问题 3: 邮件进垃圾箱

**解决**:

- 添加 SPF 记录
- 添加 DKIM 记录
- 将发件人加入通讯录

---

## 📚 相关文档

- 腾讯企业邮箱帮助: https://service.exmail.qq.com/
- EmailJS 文档: https://www.emailjs.com/docs/
- DNS 配置教程: 查看域名服务商文档

---

## 🎯 推荐配置总结

### 最佳方案

```
域名: 阿里云/腾讯云购买 .com 域名
企业邮箱: 腾讯企业邮箱免费版（50账号）
邮件服务: EmailJS（200封/月免费）
总费用: 约 ¥100/年（只是域名费用）
```

### 推荐创建的邮箱账号

```
1. service@yourcompany.com   - 用于网站表单接收
2. info@yourcompany.com      - 备用
3. admin@yourcompany.com     - 管理员
```

---

**开始配置你的企业邮箱吧！🚀**

配置完成后，你的网站将拥有：

- ✅ 专业的企业邮箱
- ✅ 可信的品牌形象
- ✅ 统一的邮件管理
- ✅ 可扩展的团队协作
