import React, { useState, useEffect } from 'react';

// 定义 User 接口
interface User {
  id: number;
  name: string;
}

const mockUsers: { [key: number]: User } = {
  1: { id: 1, name: 'Alice' },
  2: { id: 2, name: 'Bob' },
  3: { id: 3, name: 'Charlie' },
};

const mockFetch = (url: string) => {
  return new Promise<Response>((resolve) => {
    const userIdFromUrl = parseInt(url.split('/').pop() || '', 10);
    setTimeout(() => {
      const user = mockUsers[userIdFromUrl];
      if (user) {
        resolve({
          json: () => Promise.resolve(user),
        } as Response); // 类型断言为 Response
      } else {
        resolve({
          json: () => Promise.resolve(null),
        } as Response); // 类型断言为 Response
      }
    }, 500); // 模拟网络延迟
  });
};

const UserProfile: React.FC = () => {
  const [userId, setUserId] = useState<number>(1); // 初始 userId

  // 定义 UserProfile 组件的 Props 类型
  interface UserProfileProps {
    userId: number;
  }

  const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      let ignore = false;
      setUser(null);

      // 模拟 API 请求
      const fetchData = async () => {
        try {
          const res = await mockFetch(`/api/users/${userId}`);
          const data: User = await res.json();
          if (!ignore) {
            setUser(data);
          }
        } catch (error) {
          console.error('Error fetching user:', error);
          // 处理错误情况，例如显示错误信息
        }
      };

      fetchData();

      return () => {
        ignore = true;
      };
    }, [userId]);

    if (!user) return <div>Loading...</div>;
    return <div>{user?.name}</div>; // 使用可选链式调用
  };

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div>
        <label htmlFor="userId">Enter User ID: </label>
        <input
          type="number"
          id="userId"
          className='border border-gray-400 p-1'
          value={userId}
          onChange={handleUserIdChange}
        />
      </div>
      <UserProfile userId={userId} />
    </div>
  );
};

export default UserProfile;
