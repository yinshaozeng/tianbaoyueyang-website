@echo off
chcp 65001 >nul
echo ========================================
echo 🚀 开始部署流程...
echo ========================================
echo.

REM 步骤 1: 检查代码状态
echo 📋 步骤 1/6: 检查代码状态...
git status -s
if %ERRORLEVEL% neq 0 (
    echo ❌ Git 状态检查失败
    pause
    exit /b 1
)
echo ✅ 代码状态检查完成
echo.

REM 步骤 2: 清理旧构建
echo 🧹 步骤 2/6: 清理旧构建...
if exist dist (
    rmdir /s /q dist
    echo ✅ 已清理旧的 dist 目录
) else (
    echo ✅ 无需清理
)
echo.

REM 步骤 3: 检查依赖
echo 📦 步骤 3/6: 检查依赖...
if not exist node_modules (
    echo 安装依赖...
    call npm install
) else (
    echo ✅ 依赖已存在
)
echo.

REM 步骤 4: 构建项目
echo 🔨 步骤 4/6: 构建生产版本...
call npm run build

if %ERRORLEVEL% neq 0 (
    echo ❌ 构建失败，请检查错误信息
    pause
    exit /b 1
)

echo ✅ 构建成功
echo.

REM 显示构建大小
echo 📊 构建产物：
dir dist /s
echo.

REM 步骤 5: 提交代码
echo 💾 步骤 5/6: 提交代码到 GitHub...
set /p commit_msg="输入提交信息 (直接回车使用默认): "

if "%commit_msg%"=="" (
    set commit_msg=部署更新 %date% %time%
)

git add .
git commit -m "%commit_msg%"
git push origin main

if %ERRORLEVEL% neq 0 (
    echo ⚠️  代码推送失败或无更改
) else (
    echo ✅ 代码已推送到 GitHub
)
echo.

REM 步骤 6: Vercel 部署
echo 🚀 步骤 6/6: 部署到 Vercel...
echo.
echo 请选择部署方式：
echo 1) 自动部署（推荐）
echo 2) 手动部署（需要 Vercel CLI）
echo.
set /p deploy_choice="选择 (1/2): "

if "%deploy_choice%"=="2" (
    REM 检查 Vercel CLI
    where vercel >nul 2>&1
    if %ERRORLEVEL% neq 0 (
        echo ⚠️  未安装 Vercel CLI
        set /p install_cli="是否现在安装？(y/n): "
        if /i "%install_cli%"=="y" (
            call npm install -g vercel
        ) else (
            echo ❌ 需要 Vercel CLI 才能手动部署
            pause
            exit /b 1
        )
    )

    echo 开始 Vercel 部署...
    call vercel --prod

    if %ERRORLEVEL% neq 0 (
        echo ❌ Vercel 部署失败
        pause
        exit /b 1
    )

    echo ✅ Vercel 部署成功
) else (
    echo ✅ 代码已推送，Vercel 将自动开始部署
    echo.
    echo 📊 请访问以下链接查看部署状态：
    echo    https://vercel.com/dashboard
    echo.
    echo ⏱️  通常需要 1-2 分钟完成部署
)

echo.
echo ========================================
echo 🎉 部署流程完成！
echo ========================================
echo.
echo 下一步：
echo 1. 访问 Vercel Dashboard 查看部署状态
echo 2. 测试网站功能是否正常
echo 3. 如需绑定域名，参考 DEPLOYMENT_GUIDE.md
echo.

pause
