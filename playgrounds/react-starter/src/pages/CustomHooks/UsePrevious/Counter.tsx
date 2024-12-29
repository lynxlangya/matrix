import { useEffect, useState } from 'react';
import usePrevious from './usePrevious';
import Button from '@/components/Button';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {
    if (prevCount !== undefined && prevCount !== count) {
      console.log(`count changed from ${prevCount} to ${count}`);
    }
  }, [count, prevCount]);

  return (
    <div>
      <p>
        Now: {count}, Before: {prevCount}
      </p>
      <Button onClick={() => setCount((c) => c + 1)}>+1</Button>

      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>
            1. 每次渲染结束后，React 会保留上一次的 state 值，所以我们可以通过
            useRef
          </li>
          <li>2. 首次渲染时，usePrevious 返回的是 undefined</li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
