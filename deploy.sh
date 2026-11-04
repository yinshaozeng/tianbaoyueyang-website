#!/bin/bash

echo "🚀 开始部署流程..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 步骤 1: 检查是否有未提交的更改
echo "📋 步骤 1/6: 检查代码状态..."
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  发现未提交的更改${NC}"
    git status -s
    echo ""
    read -p "是否继续部署？(y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo -e "${RED}❌ 部署已取消${NC}"
        exit 1
    fi
fi
echo -e "${GREEN}✅ 代码状态检查完成${NC}"
echo ""

# 步骤 2: 清理旧的构建文件
echo "🧹 步骤 2/6: 清理旧构建..."
if [ -d "dist" ]; then
    rm -rf dist
    echo -e "${GREEN}✅ 已清理旧的 dist 目录${NC}"
fi
echo ""

# 步骤 3: 安装依赖
echo "📦 步骤 3/6: 检查依赖..."
if [ ! -d "node_modules" ]; then
    echo "安装依赖..."
    npm install
else
    echo -e "${GREEN}✅ 依赖已存在${NC}"
fi
echo ""

# 步骤 4: 构建项目
echo "🔨 步骤 4/6: 构建生产版本..."
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 构建成功${NC}"

    # 显示构建结果
    echo ""
    echo "📊 构建产物大小："
    du -sh dist/
    echo ""
else
    echo -e "${RED}❌ 构建失败，请检查错误信息${NC}"
    exit 1
fi

# 步骤 5: 提交代码
echo "💾 步骤 5/6: 提交代码到 GitHub..."
read -p "输入提交信息 (直接回车使用默认): " commit_msg

if [ -z "$commit_msg" ]; then
    commit_msg="部署更新 $(date '+%Y-%m-%d %H:%M:%S')"
fi

git add .
git commit -m "$commit_msg"
git push origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ 代码已推送到 GitHub${NC}"
else
    echo -e "${YELLOW}⚠️  代码推送失败或无更改${NC}"
fi
echo ""

# 步骤 6: Vercel 部署
echo "🚀 步骤 6/6: 部署到 Vercel..."
echo ""
echo "请选择部署方式："
echo "1) 自动部署（Vercel 检测到 GitHub 更新后自动部署）"
echo "2) 手动部署（使用 Vercel CLI）"
echo ""
read -p "选择 (1/2): " -n 1 -r deploy_choice
echo ""

if [[ $deploy_choice == "2" ]]; then
    # 检查是否安装了 Vercel CLI
    if ! command -v vercel &> /dev/null; then
        echo -e "${YELLOW}⚠️  未安装 Vercel CLI${NC}"
        read -p "是否现在安装？(y/n) " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            npm install -g vercel
        else
            echo -e "${RED}❌ 需要 Vercel CLI 才能手动部署${NC}"
            exit 1
        fi
    fi

    echo "开始 Vercel 部署..."
    vercel --prod

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Vercel 部署成功${NC}"
    else
        echo -e "${RED}❌ Vercel 部署失败${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✅ 代码已推送，Vercel 将自动开始部署${NC}"
    echo ""
    echo "📊 请访问以下链接查看部署状态："
    echo "   https://vercel.com/dashboard"
    echo ""
    echo "⏱️  通常需要 1-2 分钟完成部署"
fi

echo ""
echo "════════════════════════════════════════"
echo -e "${GREEN}🎉 部署流程完成！${NC}"
echo "════════════════════════════════════════"
echo ""
echo "下一步："
echo "1. 访问 Vercel Dashboard 查看部署状态"
echo "2. 测试网站功能是否正常"
echo "3. 如需绑定域名，参考 DEPLOYMENT_GUIDE.md"
echo ""
