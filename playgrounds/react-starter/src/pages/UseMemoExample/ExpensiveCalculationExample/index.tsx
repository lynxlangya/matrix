import Button from '@/components/Button';
import { useEffect, useMemo, useState } from 'react';

function ExpensiveCalculationExample() {
  const [count, setCount] = useState(0);
  const [ignoreCount, setIgnoreCount] = useState(0);
  const [text, setText] = useState('');
  // 执行中
  const [isRunning, setIsRunning] = useState(true);

  /**
   * 模拟一个耗时操作，1s 后结束
   * 存在问题：执行耗时计算时会阻塞 UI 渲染，所以真正的效果时，计算完之后更新了页面，才会触发 loading
   * 1. 当前执行顺序：
   *  - 点击按钮更新 count
   *  - 组件重新渲染
   *  - 执行耗时计算
   *  - 更新 isRunning 状态
   * 原因：
   *  - js 是单线程，在主线程执行耗时计算会阻塞 UI 渲染
   *  - React 的状态更新和 DOM 渲染都在主线程进行
   *  - useMemo 的计算是同步的，会阻塞后续渲染
   */
  useEffect(() => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
    }, 1000);
  }, [count]);

  // 假设这个函数非常耗时
  function expensiveCalculation(num: number) {
    console.log('执行了昂贵计算');
    let total = BigInt(0);
    // for (let i = 0; i < 80000000; i++) {
    for (let i = 0; i < 800000; i++) {
      total += BigInt(i);
    }
    return Number(total) + num;
  }

  // 只有当 count 变化时，才重新计算；text 改变不触发重新计算
  const memoizedResult = useMemo(() => {
    const res = expensiveCalculation(count);
    return res;
  }, [count]);

  return (
    <div>
      {isRunning && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="text-white text-2xl">执行计算逻辑...</div>
        </div>
      )}

      <p className="text-fuchsia-600">
        Expensive Calculation Result: {memoizedResult}
      </p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 rounded-md p-2"
        placeholder="随意输入"
      />
      <hr className="my-1" />
      <Button className="mr-2" onClick={() => setCount((c) => c + 1)}>
        「执行计算」 count: {count} + 1
      </Button>
      <Button onClick={() => setIgnoreCount((c) => c + 1)}>
        「不执行计算」 ignoreCount: {ignoreCount} + 1
      </Button>

      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>
            1. 当修改 count 时，memoizedResult 会重新计算，但修改 text
            不会触发重新计算
          </li>
          <li>
            2. 当修改 text 时，依赖数组并不包含 text，所以 memoizedResult
            不会再次运行昂贵计算，直接复用缓存的值
          </li>
          <li>3. 每次渲染中，只有依赖变化才重新计算，可以明显减少耗时</li>
        </ul>
        <h3 className="font-bold">
          😄 需要更高的性能，可以考虑使用 Web Worker 来进行复杂计算
        </h3>
      </div>
    </div>
  );
}

export default ExpensiveCalculationExample;
