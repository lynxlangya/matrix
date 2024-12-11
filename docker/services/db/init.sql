-- 数据库初始化脚本

-- 创建数据库（如果不存在）
SELECT 'CREATE DATABASE matrix' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'matrix');

-- 切换到 matrix 数据库
\c matrix;

-- 创建示例表
CREATE TABLE IF NOT EXISTS example (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 插入一些测试数据
INSERT INTO example (name) VALUES ('test1-1'), ('test1-2')
ON CONFLICT DO NOTHING;
