import { useRef, useEffect, useState } from 'react';
import Button from '@/components/Button';

function PreviousExample() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    // 组件更新后，再将当前值写入 ref
    prevCountRef.current = count;
  }, [count]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>当前 count: {count}</p>
      <p>上一次 count: {prevCountRef.current}</p>
      <Button onClick={handleClick}>增加 count</Button>
    </div>
  );
}

export default PreviousExample;
