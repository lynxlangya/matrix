import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/use-ref', name: 'UseRef' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ul className="list-none p-0 m-0">
        {routes.map((route) => (
          <li
            key={route.path}
            className="p-2 m-1 cursor-pointer border border-gray-300 rounded transition-colors duration-200 hover:bg-gray-200"
            onClick={() => navigate(route.path)}
          >
            {route.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
