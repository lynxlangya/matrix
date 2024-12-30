export const getUserList = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
};

export const getUserDetailById = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.json();
};
