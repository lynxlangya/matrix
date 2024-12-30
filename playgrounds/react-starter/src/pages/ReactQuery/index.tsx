import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserList, getUserDetailById } from './api';

function UsingFetchAPI() {
  const [selectedUserId, setSelectedUserId] = useState<number>();

  // 获取用户列表
  const {
    isLoading,
    error,
    data: users,
  } = useQuery({
    queryKey: ['userList'],
    queryFn: getUserList,
  });

  // 获取选中的用户详情
  const {
    isLoading: selectLoading,
    error: selectedErr,
    data: selectedUser,
  } = useQuery({
    queryKey: ['user', selectedUserId],
    queryFn: () => {
      if (!selectedUserId) throw new Error('User ID is required');
      return getUserDetailById(selectedUserId);
    },
    enabled: !!selectedUserId, // 只有当 selectedUserId 存在时才发起请求
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  const handleClickUser = (user: any) => {
    setSelectedUserId(user.id);
  };

  return (
    <div>
      <h1 className="font-bold">User List</h1>
      <ul className="list-disc">
        {users?.map((user: any) => (
          <li
            className="text-blue-500 cursor-pointer"
            key={user.id}
            onClick={() => handleClickUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>

      {selectLoading && <p>Loading user...</p>}
      {selectedErr && (
        <p className="text-red-500">
          An error has occurred: {selectedErr.message}
        </p>
      )}

      {selectedUser && (
        <div>
          <hr className="my-2" />
          <h1 className="font-bold">Current User</h1>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Website: {selectedUser.website}</p>
          <p>Phone: {selectedUser.phone}</p>
        </div>
      )}
    </div>
  );
}

export default UsingFetchAPI;
