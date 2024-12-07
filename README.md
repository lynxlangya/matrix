# Matrix

基于 Turborepo 和 Next.js 构建的现代 Monorepo 项目。

## 项目结构

```
.
├── apps/
│   ├── docs/          # 文档站点
│   └── web/          # 主要 Web 应用
├── packages/
│   ├── eslint-config/     # 共享 ESLint 配置
│   ├── typescript-config/ # 共享 TypeScript 配置
│   ├── ui/               # 共享 UI 组件库
│   └── utils/           # 共享工具函数
├── docker/
│   ├── dev/            # 开发环境配置
│   └── prod/           # 生产环境配置
├── tools/             # 开发工具
├── tests/             # 端到端测试
├── scripts/           # 构建和工具脚本
├── configs/           # 全局配置
└── docs/             # 项目文档
```

## 技术栈

- **构建工具**: Turborepo
- **包管理器**: pnpm
- **框架**: Next.js
- **开发语言**: TypeScript
- **UI 组件**: 自定义 UI 库
- **样式方案**: CSS Modules
- **字体**: Geist

## 快速开始

### 环境要求

- Node.js (>= 20)
- pnpm (>= 9)

### 安装步骤

```bash
# 安装 turborepo
pnpm add turbo --global

# 安装依赖
pnpm install

# 构建所有包
turbo build

# 启动开发服务器
turbo dev

# 启动 Web 应用
turbo dev -F web
```

### 开发脚本

- `turbo dev` - 启动开发服务器
- `turbo build` - 构建所有包和应用

## 项目特性

- 📦 基于 Turborepo 的 Monorepo 设置
- 🚀 Next.js 应用
- 🎨 共享 UI 组件库
- 🛠 共享工具和配置
- 🔧 开发工具和脚本
- 🐳 支持开发和生产环境的 Docker 配置
- 📝 完整的项目文档

## 贡献指南

请查看我们的[贡献指南](./CONTRIBUTING.md)了解代码规范和提交 Pull Request 的流程。

## 开源协议

本项目采用 MIT 协议 - 查看 [LICENSE](./LICENSE) 文件了解详情。