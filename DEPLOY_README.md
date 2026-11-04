# 🚀 快速部署指南

## 三种部署方式

### 方式 1：一键部署脚本（推荐，最简单）

#### Windows 用户
```bash
# 双击运行
deploy.bat

# 或在命令行运行
.\deploy.bat
```

#### Mac/Linux 用户
```bash
# 添加执行权限
chmod +x deploy.sh

# 运行脚本
./deploy.sh
```

脚本会自动：
1. ✅ 检查代码状态
2. ✅ 清理旧构建
3. ✅ 安装依赖
4. ✅ 构建项目
5. ✅ 提交代码到 GitHub
6. ✅ 触发 Vercel 部署

---

### 方式 2：手动部署（分步骤）

#### 步骤 1：构建项目
```bash
npm run build
```

#### 步骤 2：提交代码
```bash
git add .
git commit -m "准备部署"
git push origin main
```

#### 步骤 3：Vercel 自动部署
- 代码推送后，Vercel 会自动检测并开始部署
- 访问 https://vercel.com/dashboard 查看进度

---

### 方式 3：Vercel 网站部署（首次部署）

#### 1. 登录 Vercel
访问：https://vercel.com
- 使用 GitHub 账号登录

#### 2. 导入项目
- 点击 "Add New..." → "Project"
- 选择 `my-enterprise-website` 仓库
- 点击 "Import"

#### 3. 配置项目
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```
- 点击 "Deploy"

#### 4. 等待部署
- 1-3 分钟后部署完成
- 获得临时域名：`xxx.vercel.app`

---

## 绑定自定义域名

### 1. 在 Vercel 添加域名
- Dashboard → 项目 → Settings → Domains
- 输入你的域名
- 点击 "Add"

### 2. 配置 DNS（阿里云示例）

登录阿里云，添加记录：

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

### 3. 等待生效
- 通常 10-30 分钟
- 访问你的域名测试

---

## 部署检查清单

使用 `DEPLOY_CHECKLIST.md` 进行完整检查：

**部署前：**
- [ ] 本地测试通过
- [ ] 图片已优化
- [ ] 代码已提交

**部署后：**
- [ ] 网站可访问
- [ ] HTTPS 正常
- [ ] 所有功能正常
- [ ] 移动端正常

---

## 故障排查

### 问题：部署失败

**查看日志：**
- Vercel Dashboard → 项目 → Deployments → 点击失败的部署

**本地测试：**
```bash
npm run build
npm run preview
```

### 问题：域名无法访问

**检查 DNS：**
```bash
nslookup yourdomain.com
```

**等待时间：**
- 国内域名：10-30 分钟
- 国际域名：最多 48 小时

### 问题：页面显示不正常

**清除缓存：**
- Ctrl + Shift + R（强制刷新）
- 或浏览器无痕模式测试

---

## 详细文档

- 📖 `DEPLOYMENT_GUIDE.md` - 完整部署指南
- ✅ `DEPLOY_CHECKLIST.md` - 部署检查清单
- 🚀 `deploy.sh` / `deploy.bat` - 自动部署脚本

---

## 快速命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 预览
npm run preview

# 一键部署（Windows）
deploy.bat

# 一键部署（Mac/Linux）
./deploy.sh
```

---

## 技术支持

- Vercel 文档：https://vercel.com/docs
- GitHub 仓库：查看 Issues
- 邮件支持：查看 package.json

---

## 预期时间

- **首次部署：** 20-30 分钟
- **后续更新：** 2-5 分钟
- **DNS 生效：** 10-30 分钟

**开始部署！** 🎉
