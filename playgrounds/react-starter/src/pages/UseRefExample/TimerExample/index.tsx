import { useRef, useState, useEffect } from 'react';
import Button from '@/components/Button';

function TimerExample() {
  const [renderCount, setRenderCount] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const countRef = useRef<number>(0); // 不触发渲染的计数

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      countRef.current++;
      console.log('countRef current value:', countRef.current);
    }, 1000);

    // 清理定时器
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleTriggerRerender = () => {
    setRenderCount((prev) => prev + 1);
  };

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  return (
    <div>
      <p>当前 countRef：{countRef.current}</p>
      <p>页面渲染次数：{renderCount}</p>
      <Button className='mr-1' onClick={handleTriggerRerender}>触发一次渲染</Button>

      <Button onClick={clearTimer}>清除定时器</Button>
    </div>
  );
}

export default TimerExample;
