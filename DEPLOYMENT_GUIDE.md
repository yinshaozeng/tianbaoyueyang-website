# 🚀 项目部署指南 - Vercel + 自定义域名

## 📋 前提条件

- ✅ 项目代码已推送到 GitHub
- ✅ 已有自己的域名
- ✅ 有 Vercel 账号（或准备注册）

---

## 第一步：准备部署

### 1. 检查项目配置

确保以下文件已正确配置：

**package.json：**
```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**vercel.json：** ✅ 已配置

**vite.config.js：** ✅ 已配置

### 2. 本地构建测试

```bash
# 安装依赖
npm install

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

访问 `http://localhost:4173` 测试构建版本是否正常。

### 3. 提交代码到 GitHub

```bash
# 检查状态
git status

# 添加所有更改
git add .

# 提交
git commit -m "准备部署：优化配置和清理未使用资源"

# 推送到 GitHub
git push origin main
```

---

## 第二步：部署到 Vercel

### 方法 A：通过 Vercel 网站（推荐，最简单）

#### 1. 注册/登录 Vercel
访问：https://vercel.com

- 点击 "Sign Up" 或 "Login"
- 选择 "Continue with GitHub"
- 授权 Vercel 访问你的 GitHub 账号

#### 2. 导入项目

1. 点击 "Add New..." → "Project"
2. 在列表中找到你的仓库 `my-enterprise-website`
3. 点击 "Import"

#### 3. 配置项目

**Project Name：** 保持默认或修改（如：`tianbaoyueyang`）

**Framework Preset：** Vite（自动检测）

**Build Command：** `npm run build`（自动填充）

**Output Directory：** `dist`（自动填充）

**环境变量：** 暂时跳过（EmailJS 已在代码中配置）

#### 4. 开始部署

- 点击 "Deploy"
- 等待 1-3 分钟，部署完成
- 获得免费域名：`your-project.vercel.app`

---

### 方法 B：通过 Vercel CLI

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录
vercel login

# 3. 初始化部署
vercel

# 按提示操作：
# - Set up and deploy? [Y/n] → Y
# - Which scope? → 选择你的账号
# - Link to existing project? [y/N] → N
# - What's your project's name? → tianbaoyueyang
# - In which directory is your code located? → ./
# - Override settings? [y/N] → N

# 4. 生产部署
vercel --prod
```

---

## 第三步：绑定自定义域名

### 1. 在 Vercel 中添加域名

1. 进入项目设置：Dashboard → 选择项目 → Settings
2. 点击左侧 "Domains"
3. 输入你的域名（例如：`www.yourdomain.com` 或 `yourdomain.com`）
4. 点击 "Add"

Vercel 会给你 DNS 配置说明。

### 2. 配置 DNS 记录

根据你的域名注册商（阿里云、腾讯云、GoDaddy等），添加以下记录：

#### 选项 A：使用 A 记录（推荐）

访问你的域名注册商的 DNS 管理页面，添加：

```
类型: A
主机记录: @
记录值: 76.76.21.21
TTL: 600

类型: A
主机记录: www
记录值: 76.76.21.21
TTL: 600
```

#### 选项 B：使用 CNAME 记录

```
类型: CNAME
主机记录: www
记录值: cname.vercel-dns.com
TTL: 600
```

**注意：** Vercel 会在界面上显示具体的配置值，以实际显示为准。

### 3. 等待 DNS 生效

- DNS 解析通常需要 **10分钟 - 48小时**
- 国内域名通常 **10-30分钟** 即可生效
- Vercel 会自动为你的域名配置 **免费 SSL 证书**

### 4. 验证部署

访问你的域名：`https://yourdomain.com`

检查：
- ✅ 网站能否正常访问
- ✅ HTTPS 是否生效（显示🔒图标）
- ✅ 所有功能是否正常
- ✅ 图片是否正常加载
- ✅ 语言切换是否正常

---

## 第四步：配置自动部署

### GitHub 自动部署（已自动配置）

✅ Vercel 已自动配置 GitHub 集成

**工作流程：**
1. 你在本地修改代码
2. `git push` 推送到 GitHub
3. Vercel 自动检测到更新
4. 自动构建和部署
5. 1-2分钟后更新生效

**查看部署状态：**
- Vercel Dashboard → 项目 → Deployments
- 或 GitHub 仓库 → Actions 标签

---

## 常见域名注册商配置指南

### 阿里云（万网）

1. 登录 [阿里云控制台](https://dns.console.aliyun.com/)
2. 点击域名 → 解析设置
3. 添加记录：

```
记录类型: A
主机记录: @
记录值: 76.76.21.21
TTL: 10分钟

记录类型: A
主机记录: www
记录值: 76.76.21.21
TTL: 10分钟
```

### 腾讯云 DNSPod

1. 登录 [DNSPod 控制台](https://console.dnspod.cn/)
2. 选择域名 → 添加记录
3. 配置同上

### GoDaddy

1. 登录 GoDaddy
2. My Products → Domains → DNS
3. 添加 A 记录或 CNAME 记录

### Cloudflare

1. 登录 Cloudflare
2. 选择域名 → DNS
3. 添加记录（注意：橙色云朵代表启用 CDN）

---

## 性能优化建议

### 1. 启用 Vercel Analytics（可选）

```bash
# 安装
npm install @vercel/analytics

# 在 src/main.js 中添加
import { inject } from '@vercel/analytics'
inject()
```

### 2. 配置缓存策略

已在 `vercel.json` 中配置：
- 静态资源：缓存 1 年
- HTML：不缓存（确保更新即时生效）

### 3. 图片优化

建议使用 Vercel Image Optimization：

```vue
<template>
  <img 
    :src="`/_vercel/image?url=${image}&w=800&q=80`" 
    alt="产品图片"
  />
</template>
```

---

## 故障排查

### 问题 1：部署失败

**可能原因：**
- 依赖安装失败
- 构建命令错误
- 环境变量缺失

**解决方法：**
```bash
# 本地测试构建
npm run build

# 查看 Vercel 部署日志
vercel logs
```

### 问题 2：域名无法访问

**检查清单：**
1. DNS 配置是否正确？
2. DNS 是否已生效？（使用 https://www.whatsmydns.net/ 检查）
3. Vercel 中域名是否添加成功？
4. SSL 证书是否已颁发？

**测试命令：**
```bash
# 检查 DNS 解析
nslookup yourdomain.com

# 检查 SSL 证书
curl -I https://yourdomain.com
```

### 问题 3：页面刷新后 404

**原因：** SPA 路由配置问题

**解决：** 已在 `vercel.json` 中配置 fallback 到 `index.html`

### 问题 4：图片加载慢

**解决方案：**
1. 压缩图片（参考 `QUICK_START_OPTIMIZATION.md`）
2. 使用 Vercel Image Optimization
3. 启用 CDN

---

## 监控和维护

### 1. 查看访问统计

Vercel Dashboard → 项目 → Analytics

**可查看：**
- 页面访问量
- 访问来源
- 设备类型
- 地理位置

### 2. 监控部署状态

Vercel Dashboard → 项目 → Deployments

**状态说明：**
- ✅ Ready：部署成功
- 🔄 Building：构建中
- ❌ Error：部署失败

### 3. 回滚版本

如果新版本有问题：

1. Deployments → 找到之前的成功版本
2. 点击 "..." → "Promote to Production"
3. 立即回滚到稳定版本

---

## 环境变量配置（如需要）

如果将来需要配置环境变量（如 API 密钥）：

### 在 Vercel 中配置

1. Settings → Environment Variables
2. 添加变量：
   - Key: `VITE_API_KEY`
   - Value: `your-secret-key`
   - 选择环境：Production / Preview / Development

### 在代码中使用

```javascript
// 访问环境变量
const apiKey = import.meta.env.VITE_API_KEY
```

---

## 部署检查清单

部署前确认：

- [ ] 代码已推送到 GitHub
- [ ] 本地构建成功（`npm run build`）
- [ ] 测试预览版本（`npm run preview`）
- [ ] 图片已优化压缩
- [ ] 未使用的文件已清理
- [ ] `.gitignore` 已配置正确

部署后验证：

- [ ] 首页正常显示
- [ ] 所有路由可访问
- [ ] 图片正常加载
- [ ] 语言切换正常
- [ ] 联系表单可用
- [ ] 移动端显示正常
- [ ] HTTPS 证书有效

---

## 快速命令参考

```bash
# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# Vercel 部署
vercel
vercel --prod

# 查看部署日志
vercel logs

# 查看域名列表
vercel domains ls

# 添加域名
vercel domains add yourdomain.com
```

---

## 成本估算

### Vercel 免费计划

✅ **包含：**
- 无限部署
- 自动 HTTPS
- 100GB 带宽/月
- 无限 Serverless Functions 调用
- 自定义域名

⚠️ **限制：**
- 单个部署大小：< 100MB（我们的项目约 20MB，完全够用）
- 构建时间：< 45分钟
- 无商业支持

**结论：** 免费计划完全够用！

---

## 下一步优化

部署成功后，可以考虑：

1. **配置 CDN**：使用 Cloudflare 加速国内访问
2. **SEO 优化**：添加 sitemap 和 robots.txt
3. **性能监控**：接入 Google Analytics
4. **图片优化**：使用 WebP 格式
5. **备案**：如果需要使用国内服务器

---

## 技术支持

- Vercel 文档：https://vercel.com/docs
- Vercel 社区：https://github.com/vercel/vercel/discussions
- Vue 部署指南：https://vitejs.dev/guide/static-deploy.html

---

## 总结

**完整流程：**

1. ✅ 准备代码和配置
2. 🚀 Vercel 一键部署
3. 🌐 绑定自定义域名
4. 📊 监控运行状态
5. 🔄 自动更新部署

**预计时间：**
- Vercel 部署：5-10 分钟
- DNS 生效：10-30 分钟
- 总计：**20-40 分钟**

**立即开始部署！** 🎉
