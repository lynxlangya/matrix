# Dockerfile

# 基础镜像
FROM node:20-alpine AS base

# 设置工作目录
WORKDIR /app

# 设置环境变量
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

# 安装 pnpm
RUN npm install -g pnpm

# 依赖阶段
FROM base AS dependencies

# 复制工作空间配置文件
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY apps/nest-demo/package.json ./apps/nest-demo/

# 安装所有依赖
RUN pnpm install

# 构建阶段
FROM base AS builder

# 复制工作空间配置和依赖
COPY --from=dependencies /app/node_modules ./node_modules
COPY --from=dependencies /app/apps/nest-demo/node_modules ./apps/nest-demo/node_modules

# 复制源代码
COPY . .

# 构建应用
WORKDIR /app/apps/nest-demo
RUN pnpm run build

# 生产依赖阶段
FROM base AS prod-deps

# 复制 package.json 文件
COPY apps/nest-demo/package.json ./

# 只安装生产依赖
RUN pnpm install --prod

# 生产阶段
FROM node:20-alpine AS production

# 创建非 root 用户
RUN addgroup -S nestjs && \
    adduser -S nestjs -G nestjs

# 设置工作目录
WORKDIR /app

# 只复制必要的文件
COPY --from=builder /app/apps/nest-demo/dist ./dist
COPY --from=prod-deps /app/node_modules ./node_modules
COPY apps/nest-demo/package.json ./

# 设置环境变量
ENV NODE_ENV=production

# 切换到非 root 用户
USER nestjs

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3100/health || exit 1

# 暴露端口
EXPOSE 3100

# 启动命令
CMD ["node", "dist/main"]