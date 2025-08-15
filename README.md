# AI Chatbot React

一个基于 React + TypeScript + Vite 构建的现代化 AI 问答页面。

![AI Chatbot](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.3-38B2AC.svg)

## ✨ 功能特性

- 🤖 **智能对话界面** - 美观的聊天界面设计
- 💬 **实时消息** - 流畅的消息发送和接收体验
- 🎨 **现代化 UI** - 使用 Tailwind CSS 打造的精美界面
- ⚡ **快速响应** - 基于 Vite 的快速构建和热更新
- 🔧 **TypeScript 支持** - 完整的类型安全保障
- 📱 **响应式设计** - 适配移动端和桌面端
- 🚀 **快速问题** - 预设常用问题，一键发送
- 🧹 **清空对话** - 支持清空聊天记录
- ⏰ **时间戳** - 显示消息发送时间

## 🛠️ 技术栈

- **前端框架**: React 18
- **类型系统**: TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **开发工具**: ESLint + PostCSS

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装和运行

```bash
# 克隆仓库
git clone https://github.com/yqq-a/ai-chatbot-react.git
cd ai-chatbot-react

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📁 项目结构

```
ai-chatbot-react/
├── src/
│   ├── components/
│   │   └── AIChatApp.tsx    # 主聊天组件
│   ├── App.tsx              # 应用入口组件
│   ├── main.tsx             # React 入口文件
│   └── index.css            # 全局样式
├── public/                  # 静态资源
├── index.html              # HTML 模板
├── package.json            # 项目配置
├── tsconfig.json           # TypeScript 配置
├── vite.config.ts          # Vite 配置
├── tailwind.config.js      # Tailwind CSS 配置
└── postcss.config.js       # PostCSS 配置
```

## 🎯 核心功能

### 1. 消息系统
- 支持用户和 AI 双向对话
- 消息时间戳显示
- 自动滚动到最新消息

### 2. UI/UX 设计
- 渐变背景和毛玻璃效果
- 平滑的动画过渡
- 响应式布局设计

### 3. 交互体验
- 回车键快速发送消息
- 加载状态指示器
- 快速问题按钮

## 🔧 自定义配置

### 修改 AI 回复逻辑

在 `src/components/AIChatApp.tsx` 中的 `generateAIResponse` 函数，你可以：

1. **添加新的回复类别**：
```typescript
const responses = {
  // 添加新类别
  technology: [
    "技术相关的回复..."
  ],
  // ...其他类别
};
```

2. **集成真实的 AI API**：
```typescript
const callAIAPI = async (message: string) => {
  const response = await fetch('/api/ai-chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message })
  });
  return response.json();
};
```

### 样式自定义

项目使用 Tailwind CSS，你可以在 `tailwind.config.js` 中自定义主题：

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

## 📈 扩展功能建议

- [ ] 集成 OpenAI API 或其他 AI 服务
- [ ] 添加用户身份验证
- [ ] 支持文件上传和图片识别
- [ ] 添加语音输入功能
- [ ] 实现聊天记录持久化
- [ ] 支持多语言国际化
- [ ] 添加主题切换功能

## 🤝 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源协议。

## 🙏 致谢

- React 团队提供的优秀框架
- Tailwind CSS 提供的实用样式库
- Vite 提供的快速构建工具

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！
