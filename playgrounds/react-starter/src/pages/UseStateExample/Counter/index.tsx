import Button from '@/components/Button';
import { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      {/* 回调写法，避免闭包陷阱，尤其在复杂更新或多次调用时更安全 */}
      <Button className='mr-1' onClick={() => setCount((c) => c + 1)}>+1</Button>
      <Button onClick={() => setCount((c) => c - 1)}>-1</Button>
    </>
  );
}

export default Counter;
