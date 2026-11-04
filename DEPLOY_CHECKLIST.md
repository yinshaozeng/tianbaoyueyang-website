# ✅ 部署检查清单

## 部署前准备（5分钟）

### 1. 代码检查
- [ ] 所有更改已保存
- [ ] 删除了调试代码和 console.log
- [ ] 测试所有功能正常

### 2. 本地测试
```bash
# 构建测试
npm run build

# 预览测试
npm run preview
# 访问 http://localhost:4173 测试
```

- [ ] 构建成功无错误
- [ ] 预览版本功能正常
- [ ] 图片正常加载
- [ ] 路由切换正常

### 3. 提交代码
```bash
git add .
git commit -m "准备部署：最终优化和清理"
git push origin main
```

- [ ] 代码已推送到 GitHub
- [ ] GitHub 上代码是最新的

---

## Vercel 部署（10分钟）

### 方法 1：网页操作（推荐）

**步骤 1：登录 Vercel**
- [ ] 访问 https://vercel.com
- [ ] 使用 GitHub 账号登录

**步骤 2：导入项目**
- [ ] 点击 "Add New..." → "Project"
- [ ] 找到仓库 `my-enterprise-website`
- [ ] 点击 "Import"

**步骤 3：配置项目**
```
Project Name: tianbaoyueyang（或自定义）
Framework: Vite（自动检测）
Build Command: npm run build
Output Directory: dist
```
- [ ] 配置已确认
- [ ] 点击 "Deploy"

**步骤 4：等待部署**
- [ ] 等待 1-3 分钟
- [ ] 部署状态变为 "Ready"
- [ ] 获得临时域名：`xxx.vercel.app`

**步骤 5：测试临时域名**
- [ ] 访问 `https://xxx.vercel.app`
- [ ] 网站正常显示
- [ ] 测试所有功能

---

## 绑定自定义域名（15-30分钟）

### 步骤 1：在 Vercel 添加域名

- [ ] Vercel Dashboard → 项目 → Settings → Domains
- [ ] 输入域名（如：`www.yourdomain.com`）
- [ ] 点击 "Add"
- [ ] 记录 Vercel 给出的 DNS 配置信息

### 步骤 2：配置 DNS

访问你的域名注册商（阿里云/腾讯云等）：

**添加 A 记录：**
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

- [ ] DNS 记录已添加
- [ ] 保存配置

### 步骤 3：等待 DNS 生效

- [ ] 等待 10-30 分钟（国内域名）
- [ ] 或等待 24-48 小时（国际域名）

**检查 DNS：**
```bash
# Windows
nslookup yourdomain.com

# 或访问
https://www.whatsmydns.net/
```

- [ ] DNS 解析到正确的 IP
- [ ] 全球多地解析一致

### 步骤 4：验证 SSL 证书

- [ ] 访问 `https://yourdomain.com`
- [ ] 浏览器显示🔒安全锁
- [ ] 证书有效（点击🔒查看）
- [ ] 自动重定向到 HTTPS

---

## 功能测试（10分钟）

### 桌面端测试

**首页：**
- [ ] Banner 轮播正常
- [ ] 产品卡片显示正常
- [ ] "了解更多"按钮可点击
- [ ] 语言切换正常
- [ ] 导航菜单正常

**产品详情页：**
- [ ] 从首页点击进入正常
- [ ] 图片正常加载
- [ ] 产品描述显示
- [ ] 特性列表显示
- [ ] 视频播放正常（PLC 页面）
- [ ] 语言切换正常

**解决方案页：**
- [ ] 页面正常显示
- [ ] 图片加载正常

**关于我们页：**
- [ ] 页面正常显示
- [ ] 内容完整

**联系我们页：**
- [ ] 表单显示正常
- [ ] 能否提交（测试 EmailJS）
- [ ] 提交后有反馈

### 移动端测试（H5）

打开浏览器开发者工具（F12），切换到移动设备视图：

**导航：**
- [ ] 汉堡菜单正常打开
- [ ] 语言切换区域显示
- [ ] 语言切换正常工作
- [ ] 菜单链接可点击

**首页：**
- [ ] Banner 轮播正常
- [ ] 产品卡片单列显示
- [ ] 图片上的"了解更多"按钮已隐藏
- [ ] 底部"了解更多"按钮显示且可点击

**产品详情页：**
- [ ] 布局适配移动端
- [ ] 图片正常显示
- [ ] 文字大小合适
- [ ] 可以滚动查看

**联系表单：**
- [ ] 表单字段正常显示
- [ ] 输入框可用
- [ ] 提交按钮可点击

### 性能测试

**Lighthouse 测试：**
```
F12 → Lighthouse → Generate Report
```

目标分数：
- [ ] Performance: > 80
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90

**加载速度：**
- [ ] 首页加载 < 5秒
- [ ] 详情页加载 < 5秒

**图片优化：**
- [ ] Network 标签查看图片大小
- [ ] 单张图片 < 500KB
- [ ] 总大小 < 20MB

---

## 监控配置（5分钟）

### Vercel Analytics（可选）

```bash
npm install @vercel/analytics
```

在 `src/main.js` 添加：
```javascript
import { inject } from '@vercel/analytics'
inject()
```

- [ ] 已安装并配置
- [ ] 重新部署
- [ ] Dashboard 可查看统计

---

## 最终验证

### 基本功能
- [ ] ✅ 网站可访问
- [ ] ✅ HTTPS 正常
- [ ] ✅ 自定义域名工作
- [ ] ✅ 所有页面正常
- [ ] ✅ 图片加载正常
- [ ] ✅ 语言切换正常
- [ ] ✅ 表单提交正常

### 多设备测试
- [ ] ✅ PC 端正常（Chrome）
- [ ] ✅ PC 端正常（Firefox/Edge）
- [ ] ✅ 移动端正常（iPhone）
- [ ] ✅ 移动端正常（Android）
- [ ] ✅ 平板端正常

### SEO 检查
- [ ] ✅ 页面标题正确
- [ ] ✅ Meta 描述存在
- [ ] ✅ 图片有 alt 属性
- [ ] ✅ 链接可访问

---

## 后续维护

### 更新流程
```bash
# 1. 修改代码
# 2. 本地测试
npm run dev

# 3. 构建测试
npm run build
npm run preview

# 4. 提交推送
git add .
git commit -m "更新说明"
git push origin main

# 5. Vercel 自动部署（1-2分钟）
```

### 定期检查
- [ ] 每周：检查网站是否正常
- [ ] 每月：查看 Analytics 数据
- [ ] 每季度：更新依赖包

```bash
# 更新依赖
npm update

# 检查过期包
npm outdated
```

---

## 常见问题处理

### 部署失败
```bash
# 查看日志
vercel logs

# 本地重新测试
npm run build
```

### 域名不可访问
```bash
# 检查 DNS
nslookup yourdomain.com

# 等待更长时间
# DNS 最多可能需要 48 小时
```

### 页面 404
- 检查 vercel.json 配置
- 确认路由配置正确
- 重新部署

---

## 🎉 部署完成！

恭喜！你的网站已成功部署到：

🌐 **临时域名：** https://xxx.vercel.app
🌐 **正式域名：** https://yourdomain.com

### 分享你的网站
- 发送链接给客户
- 添加到社交媒体
- 提交到搜索引擎

### 下一步
- [ ] 设置 Google Analytics
- [ ] 提交 sitemap 到 Google
- [ ] 配置 CDN（如需要）
- [ ] 备份重要数据

---

## 技术支持

遇到问题？

1. 查看 `DEPLOYMENT_GUIDE.md` 详细文档
2. 访问 Vercel 文档：https://vercel.com/docs
3. 检查 Vercel 部署日志
4. 查看浏览器控制台错误

**祝部署顺利！** 🚀
