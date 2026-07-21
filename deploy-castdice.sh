#!/bin/bash

# CastDice 页面部署脚本
# 用于将 CastDice 产品页面集成到 Tauva 官网

set -e

echo "🚀 开始部署 CastDice 产品页面到 Tauva 官网..."

# 检查依赖
echo "📦 检查依赖..."
if ! command -v npm &> /dev/null; then
    echo "❌ 错误: npm 未安装"
    exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm ci

# 清理之前的构建
echo "🧹 清理旧构建..."
npm run clean 2>/dev/null || true

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建结果
echo "🔍 检查构建结果..."
if [ -d "dist" ]; then
    echo "✅ 构建成功！"
    echo ""
    echo "📊 构建统计："
    echo "   - 输出目录: $(pwd)/dist"
    echo "   - 总文件数: $(find dist -type f | wc -l)"
    echo ""
else
    echo "❌ 构建失败：dist 目录未生成"
    exit 1
fi

# 创建部署说明
echo "📝 创建部署说明..."
cat > dist/DEPLOYMENT.md << 'EOF'
# CastDice 页面部署说明

## 部署文件位置
所有 CastDice 相关页面已成功构建并集成到 Tauva 官网。

## 访问路径
1. **产品介绍页面**: /#castdice
2. **隐私政策页面**: /#castdice/privacy  
3. **用户条款页面**: /#castdice/terms

## 文件结构
- `/` - 官网主页
- `/dist/` - 所有构建文件
- `index.html` - 主页面（包含路由系统）

## 技术特点
✅ 与官网设计风格完全一致
✅ 响应式设计（支持所有设备）
✅ 中英文双语支持
✅ 金融应用合规性设计
✅ Apple Store 隐私要求满足

## 测试建议
1. 访问主页：http://your-domain.com/
2. 点击 CastDice 链接进入产品页面
3. 测试隐私政策和用户条款页面
4. 测试语言切换功能
5. 测试移动端响应式布局

## 更新内容
如需更新内容，请修改以下文件后重新构建：
- `src/components/CastdiceProduct.tsx` - 产品介绍
- `src/pages/CastdicePrivacy.tsx` - 隐私政策
- `src/pages/CastdiceTerms.tsx` - 用户条款

## 技术支持
如有问题，请联系 dev@tauva.co

---
部署时间: $(date)
版本: v1.0
EOF

echo "✅ 部署脚本完成！"
echo ""
echo "🎯 下一步操作："
echo "1. 将 dist/ 目录内容部署到您的网站服务器"
echo "2. 测试以下链接："
echo "   - 主页: http://your-domain.com/"
echo "   - CastDice: http://your-domain.com/#castdice"
echo "   - 隐私政策: http://your-domain.com/#castdice/privacy"
echo "   - 用户条款: http://your-domain.com/#castdice/terms"
echo ""
echo "📋 详细说明请查看："
echo "   - CASTDICE_INTEGRATION.md"
echo "   - dist/DEPLOYMENT.md"
echo ""
echo "🏁 部署完成！"