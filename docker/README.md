# Docker

## 目录说明

### compose

- `base.yml`: 基础服务（数据库、缓存等）的docker-compose文件
- `development.yml`: 针对开发环境的docker-compose扩展文件
- `production.yml`: 针对生产环境的扩展文件
- `staging.yml`: 针对预发布（staging）环境的扩展文件
- `override.yml`: 根据需要添加的覆盖配置，例如本地临时配置

### apps

- `nest-demo`: nest-demo应用的docker文件

### services

将可共享的基础设施服务（数据库、redis、消息队列）各自放在独立目录，包含其定制的 Dockerfile、初始化脚本（如 init.sql）等文件。这使得你能够轻松扩展和管理基础服务

### scripts

> 放置各类自动化脚本

- `rebuild.sh`: 用于重新构建 Docker 镜像的脚本
- `run_all.sh`: 用于同时启动所有 Docker 镜像的脚本
- `cleanup.sh`: 用于清除所有 Docker 镜像的脚本

### env

- `.env.example`: 示例环境变量文件
- `.env.development`: 开发环境的环境变量文件
- `.env.staging`: 预发布（staging）环境的环境变量文件
- `.env.production`: 生产环境的环境变量文件

## 使用方法

### 本地开发

```bash
cd docker

docker-compose -f compose/base.yml -f compose/development.yml up -d
```

### 清理环境

```bash
cd docker/scripts

./cleanup.sh
```

### 查看应用日志

```bash
cd docker

docker-compose -f compose/base.yml -f compose/development.yml logs -f nest-demo
```