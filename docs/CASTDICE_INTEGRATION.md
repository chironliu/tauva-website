# CastDice 产品介绍页面集成指南

## 概览

已为 Tauva 官网成功集成了 CastDice 信用卡消费决策助手的产品介绍页面、隐私政策页面和用户条款页面。所有页面都遵循公司官网的设计规范和风格。

## 新增文件

### 组件文件
- `src/components/CastdiceProduct.tsx` - CastDice 产品介绍页面组件
- `src/pages/CastdicePrivacy.tsx` - 隐私政策页面
- `src/pages/CastdiceTerms.tsx` - 用户条款页面
- `src/AppWithRoutes.tsx` - 路由系统主组件

### 路由系统
- 更新了 `src/main.tsx` 以使用新的路由系统
- 原 `src/App.tsx` 已修改为接受 props

## 设计一致性

### 颜色方案
- 主色: `#76b900` (NVIDIA 绿色)
- 背景: `#000000` (黑色)
- 文字: `#1a1a1a` / `#ffffff`
- 边框: `#1a1a1a` / `#cccccc`

### 字体系统
- 主字体: `Inter` (sans-serif)
- 代码字体: `JetBrains Mono`

### 设计元素
- 角标装饰 (nv-corner-square)
- 渐变边框和背景
- 响应式网格布局
- 悬停交互效果

## 页面访问路径

### 产品介绍页面
```
http://localhost:3000/#castdice
```

### 隐私政策页面
```
http://localhost:3000/#castdice/privacy
```

### 用户条款页面
```
http://localhost:3000/#castdice/terms
```

### 返回主页
```
http://localhost:3000/
```

## 产品页面内容

### 产品介绍页面包含：
1. **产品核心功能**
   - 智能消费分析
   - 收据扫描分析
   - 实时优化建议

2. **技术架构**
   - Flutter 框架
   - iOS 13+ 支持
   - 本地数据库 (Hive)
   - Riverpod 状态管理

3. **安全与隐私**
   - 本地数据存储
   - Apple 隐私合规
   - 金融信息保护

4. **应用商店信息**
   - iOS 平台
   - 最小版本 iOS 13.0+
   - 语言支持 (中文/英文)

### 隐私政策页面包含：
1. **隐私政策概述**
2. **数据收集说明**
3. **数据使用方式**
4. **数据安全保护**
5. **Apple 隐私合规**
6. **免责声明**
7. **用户控制权说明**

### 用户条款页面包含：
1. **服务条款概述**
2. **重要免责声明**
3. **用户权利与责任**
4. **禁止行为说明**
5. **责任限制**
6. **知识产权说明**
7. **法律管辖与更新**

## 设计规范符合度

### ✅ 已符合的设计规范
- **颜色方案**: 完全符合官网的 NVIDIA 绿色主题
- **字体系统**: 使用相同的 Inter + JetBrains Mono 组合
- **布局结构**: 相同的网格系统和间距比例
- **交互效果**: 相同的悬停、点击和过渡效果
- **响应式设计**: 支持从手机到桌面的所有屏幕尺寸
- **国际化**: 支持中英文切换

### ✅ 金融应用特定要求
- **免责声明突出**: 明确声明不提供金融建议
- **隐私保护强调**: 突出本地数据存储和加密
- **合规性展示**: 展示 Apple Store 认证和隐私合规
- **用户责任明确**: 清晰说明用户的权利和责任

## 可嵌入链接

### 在产品应用中可嵌入的链接：
```html
<!-- 隐私政策 -->
<a href="https://tauva.co/#castdice/privacy">隐私政策</a>

<!-- 用户条款 -->
<a href="https://tauva.co/#castdice/terms">用户条款</a>

<!-- 产品介绍 -->
<a href="https://tauva.co/#castdice">了解更多</a>
```

### 在应用设置页面的建议布局：
```html
<div class="settings-section">
  <h3>法律与条款</h3>
  <ul>
    <li><a href="https://tauva.co/#castdice/privacy">隐私政策</a></li>
    <li><a href="https://tauva.co/#castdice/terms">用户条款</a></li>
    <li><a href="https://tauva.co/#castdice">产品官网</a></li>
  </ul>
</div>
```

## 开发说明

### 启动开发服务器
```bash
npm run dev
```

服务器将在 `http://localhost:3000` 启动

### 构建生产版本
```bash
npm run build
```

### 设计系统维护
所有设计变量都在 `src/index.css` 中定义：
- `--color-nv-primary`: 主绿色
- `--color-nv-*`: 其他颜色变量
- `--font-sans`: 主字体
- `--font-mono`: 代码字体

### 添加新产品页面
如需添加其他产品页面，可按照以下步骤：
1. 创建新的页面组件
2. 在 `AppWithRoutes.tsx` 中添加路由
3. 更新导航系统
4. 确保设计风格一致

## 内容更新

### 更新隐私政策
修改 `src/pages/CastdicePrivacy.tsx` 文件中的相应部分

### 更新用户条款
修改 `src/pages/CastdiceTerms.tsx` 文件中的相应部分

### 更新产品信息
修改 `src/components/CastdiceProduct.tsx` 文件中的相应部分

## 性能考虑

### 加载优化
- 所有页面使用懒加载
- 图片和资源优化
- 代码分割

### SEO 优化
- 语义化 HTML 结构
- 适当的 meta 标签
- 清晰的内容层次

## 技术支持

如有技术问题或需要修改，请联系：
- 邮箱: dev@tauva.co
- 文档: 查看代码注释和本指南

---

**最后更新**: 2026年7月21日  
**版本**: v1.0  
**适用**: Tauva 官网 CastDice 产品页面集成