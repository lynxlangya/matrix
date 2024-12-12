# Serverless Demo

基于 AWS Lambda 和 API Gateway 的 Serverless 示例项目，使用 TypeScript 开发。

## 开发环境

- Node.js 20.x
- Docker & Docker Compose
- pnpm
- Serverless Framework

## 快速开始

1. **安装依赖**

```bash
pnpm install
```

2. **环境配置**

```bash
cp .env.example .env.development
```

3. **启动服务**

```bash
# 使用 Docker

docker build -t sls-demo .

docker-compose up -d
```

```bash
# 不使用 Docker

pnpm build

serverless offline
```


## API 接口

| 方法   | 路径              | 描述         | 参数                          |
|--------|-------------------|--------------|-------------------------------|
| GET    | /hello           | Hello World  | -                             |
| POST   | /users           | 创建用户     | name: string, email: string   |
| GET    | /users/{userId}  | 获取用户     | userId: string                |
| GET    | /users           | 搜索用户     | name?: string, limit?: number |
| POST   | /process         | 数据处理     | data: object                  |

## 环境变量

| 变量名                  | 描述                    | 示例值              |
|------------------------|------------------------|---------------------|
| NODE_ENV              | 运行环境                | development        |
| AWS_ACCESS_KEY_ID     | AWS 访问密钥 ID         | your_access_key    |
| AWS_SECRET_ACCESS_KEY | AWS 访问密钥            | your_secret_key    |
| AWS_REGION           | AWS 区域                | us-east-1          |
| SERVERLESS_ACCESS_KEY | Serverless Framework 密钥 | your_sls_key     |

## 注意事项

1. 确保 `.env.development` 和 `.env.production` 不被提交到版本控制
2. 本地开发默认使用 3000 端口
3. 使用 Docker 时需要确保 Docker 服务正在运行
4. 首次运行需要配置正确的环境变量
