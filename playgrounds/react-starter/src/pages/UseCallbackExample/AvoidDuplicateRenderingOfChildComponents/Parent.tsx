import { useState, useCallback } from 'react';
import Child from './Child';
import Button from '@/components/Button';

function Parent() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  // 使用 useCallback 缓存回调，只有 count 变化时才改变 handleClick 引用
  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  console.log('Parent render');

  return (
    <div>
      <Button onClick={() => setToggle((t) => !t)}>
        Toggle: {toggle ? 'ON' : 'OFF'}
      </Button>
      <Child onClick={handleClick} count={count} />

      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>
            1. 现在，点击父组件中的 Toggle 按钮时，handleClick
            回调函数不会重新创建（依赖数组是 []）, 所以在浅比较时，onClick
            也没变，count 也没变。因此 React.memo 判断 props 未变动 Child
            不会渲染
          </li>
          <li>
            2. 如果去掉 useCallback，则 Child 每次都会渲染，因为 onClick
            回调函数每次都会重新创建
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Parent;
