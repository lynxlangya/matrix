import React from 'react';

function WindowSize() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // 清理函数，组件卸载时或副作用重新执行前移除监听
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组, 只在首次渲染后执行一次

  return (
    <div>
      <h2>Window Size</h2>
      <p>当前窗口宽度: {width}px</p>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>空依赖数组 []，表示只在挂在和卸载时触发，不会再后续更新时重新执行</li>
        </ul>
      </div>
    </div>
  );
}

export default WindowSize;
