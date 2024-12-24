import Button from '@/components/Button';
import { useState } from 'react';

function CounterTrap() {
  const [count, setCount] = useState(0);

  function handleClickTrap() {
    // 这里拿到的 count 是旧值？
    setTimeout(() => {
      // 这样写会一直捕获到点击时的 count 值
      alert(`当前计数：${count}`);
      setCount(count + 1);
    }, 2000);
  }

  function handleClickSettle() {
    setTimeout(() => {
      // 使用状态更新函数来获取最新的 count 值
      setCount((prevCount) => {
        alert(`当前计数：${prevCount}`);
        return prevCount + 1;
      });
    }, 2000);
  }

  return (
    <>
      <div className="text-xl">{count}</div>
      <Button className='mr-1' onClick={handleClickTrap}>闭包陷阱</Button>
      <Button onClick={handleClickSettle}>解决陷阱</Button>

      <div style={{ marginTop: '20px' }}>
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>1. setTimeout 回调函数形成一个闭包</li>
          <li className="text-red-400">
            2. 闭包陷阱，连续点击三次，每次 setTimeout 的回调函数捕获的 count
            都是 0，结果在 200ms 后，会弹出 3 次 当前计数：0，然后最终 count
            值只加了 1
          </li>
          <li className='text-green-400'>
            3. 解决陷阱，连续点击按钮三次，每次 setTimeout 回调中的 prevCount
            都是最新值。最终，每次点击都会弹窗当前的 count 值，并正确加 1。
          </li>
        </ul>

        <pre className="bg-gray-100">
          {``}
        </pre>
      </div>
    </>
  );
}

export default CounterTrap;
