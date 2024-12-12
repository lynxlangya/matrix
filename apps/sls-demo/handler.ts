import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

// 定义通用的响应helper
const createResponse = (statusCode: number, body: any): APIGatewayProxyResult => {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body)
  };
};

// 定义错误响应helper
const createErrorResponse = (statusCode: number, message: string): APIGatewayProxyResult => {
  return createResponse(statusCode, {
    error: message,
    timestamp: new Date().toISOString()
  });
};

// 基础 Hello World 函数
export const hello = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return createResponse(200, {
    message: "Hello, Serverless with TypeScript!",
    timestamp: new Date().toISOString()
  });
};

// 处理 POST 请求的用户创建函数
export const createUser = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '{}');

    if (!body.name || !body.email) {
      return createErrorResponse(400, "Name and email are required");
    }

    // 添加简单的邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return createErrorResponse(400, "Invalid email format");
    }

    const user = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      createdAt: new Date().toISOString()
    };

    return {
      statusCode: 201,
      body: JSON.stringify(user)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Could not create user"
      })
    };
  }
};

// 带路径参数的 GET 请求函数
export const getUserById = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const userId = event.pathParameters?.userId;

  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "User ID is required"
      })
    };
  }

  // 模拟从数据库获取用户
  const user = {
    id: userId,
    name: "Test User",
    email: "test@example.com"
  };

  return {
    statusCode: 200,
    body: JSON.stringify(user)
  };
};

// 处理查询参数的函数
export const searchUsers = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const queryParams = event.queryStringParameters || {};
  const { name, limit = "10" } = queryParams;

  // 模拟搜索结果
  const users = [
    { id: "1", name: "User 1", email: "user1@example.com" },
    { id: "2", name: "User 2", email: "user2@example.com" }
  ].filter(user =>
    !name || user.name.toLowerCase().includes(name.toLowerCase())
  ).slice(0, parseInt(limit));

  return {
    statusCode: 200,
    body: JSON.stringify({
      users,
      count: users.length,
      params: queryParams
    })
  };
};

// 处理错误的函数示例
export const processData = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '{}');

    if (!body.data) {
      throw new Error("No data provided");
    }

    // 模拟数据处理
    const result = {
      processed: true,
      data: body.data,
      timestamp: new Date().toISOString()
    };

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: errorMessage,
        timestamp: new Date().toISOString()
      })
    };
  }
};

