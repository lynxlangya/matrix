import Button from '@/components/Button';
import React, { useEffect, useState } from 'react';

const BatchUpdate: React.FC = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    // 获取最新 count 值
    console.log(
      `%c%s`,
      'color: #4CAF50; font-weight: bold',
      `Current count: ${count}`
    );
  }, [count]);

  const handleNormalClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setFlag(true);
    // React 状态更新是异步的，所以此处显示上一个值
    console.log('Immediate count:', count);
  };

  const handleAsyncClick = () => {
    // 在 setTimeout 中，React 17 和早期版本不会批处理这些更新
    // React 18 会自动批量更新这些内容
    setTimeout(() => {
      setCount(count + 1);
      setFlag(true);
      console.log('Async count:', count);
    }, 500);
  };

  const handleUpdaterClick = () => {
    // Using updater function ensures we get the latest state
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>setState Batch Update Demo</h2>
      <p>Count: {count}</p>
      <p>Flag: {flag.toString()}</p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Button onClick={handleNormalClick}>普通更新</Button>

        <Button onClick={handleAsyncClick}>异步更新</Button>

        <Button onClick={handleUpdaterClick}>批量更新 (3x)</Button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3 className='font-bold'>📒 Notes:</h3>
        <ul>
          <li>1. 正常更新会自动分批进行</li>
          <li>2. 在 React 18 中，异步更新也是分批进行的</li>
          <li>3. 更新器功能确保状态更新正确无误</li>
        </ul>

        <pre className="bg-gray-100">
          {`
          setCount(count + 1); 
          setCount(count + 1); 
          // 若 count 初始为 0，这两次更新可能都拿到旧值 0，导致最终变成 1

          setCount(c => c + 1);
          setCount(c => c + 1);
          // 使用回调写法，最终正确变成 2
          `}
        </pre>
      </div>
    </div>
  );
};

export default BatchUpdate;
