# 数据库镜像构建文件（如自定义的 PostgreSQL 或 MySQL）

FROM postgres:14

# 如果需要执行初始化脚本，可以复制 init.sql 到容器中
COPY init.sql /docker-entrypoint-initdb.d