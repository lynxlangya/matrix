# 使用 Node.js 20 作为基础镜像
FROM node:20-alpine as builder

# 安装必要的构建工具
RUN apk add --no-cache python3 make g++ git

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm install -g pnpm

# 复制 package.json 和 pnpm-lock.yaml（如果存在）
COPY package*.json ./

# 安装依赖
RUN pnpm install

# 复制源代码
COPY . .

# 构建 TypeScript 代码
RUN pnpm build

# 运行时镜像
FROM node:20-alpine

# 安装 Serverless Framework
RUN npm install -g serverless

# 设置工作目录
WORKDIR /app

# 从构建阶段复制必要的文件
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/serverless.yml .

# 暴露端口
EXPOSE 3000

# 设置环境变量
ENV NODE_ENV=production

# 启动命令
CMD ["serverless", "offline", "--host", "0.0.0.0"]
