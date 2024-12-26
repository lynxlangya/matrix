import Button from '@/components/Button';
import React, { useState, useMemo, useCallback } from 'react';

interface ExpensiveChildProps {
  data: number[];
  onClick: () => void;
}

// 使用 React.memo 缓存 ExpensiveChild 组件的渲染结果
const ExpensiveChild = React.memo<ExpensiveChildProps>(({ data, onClick }) => {
  console.log('ExpensiveChild 组件重新渲染了'); // 用于观察是否重新渲染

  const sum = useMemo(() => {
    console.log('ExpensiveChild 内部计算 sum');
    return data.reduce((acc, curr) => acc + curr, 0);
  }, [data]);

  return (
    <div className="border p-4 mt-2">
      <h3>Expensive Child Component</h3>
      <div className="text-gray-600 overflow-auto h-40">
        Data: [{data.join(', ')}]
      </div>
      <p>Sum (memoized): {sum}</p>
      <Button onClick={onClick}>Click Me (Child)</Button>
    </div>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 模拟一个昂贵的计算，生成一个数据数组
  const expensiveData = useMemo(() => {
    console.log('ParentComponent 执行昂贵的计算生成 expensiveData');
    const newData: number[] = [];
    for (let i = 0; i < 1000; i++) {
      newData.push(Math.random() * 10);
    }
    return newData;
  }, []); // 依赖为空，只在组件首次渲染时计算一次

  // 使用 useCallback 缓存 onClick 函数，避免子组件因 props 变化而重新渲染
  const handleClickChild = useCallback(() => {
    console.log('子组件的按钮被点击了');
  }, []);
  // const handleClickChild = () => {
  //   console.log(`%c%s`, 'color: #4CAF50; font-weight: bold', '--子组件的按钮被点击了--')
  // }

  return (
    <div className="p-4">
      <h2>Parent Component</h2>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increase Count</Button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded py-1 px-3"
        placeholder="Enter text"
      />

      {/*
        将 expensiveData 作为 props 传递给 ExpensiveChild。
        由于 expensiveData 使用 useMemo 缓存，只要其依赖不变（这里为空数组），
        ExpensiveChild 组件就不会因为这个 props 的变化而重新渲染（前提是 ExpensiveChild 用 React.memo 包裹）。
      */}
      <ExpensiveChild data={expensiveData} onClick={handleClickChild} />
    </div>
  );
}

export default ParentComponent;

/*
  **Demo 说明:**

  1. **ExpensiveChild 组件:**
     - 使用 `React.memo` 高阶组件包裹，这意味着只有当其 props 发生浅比较变化时，才会重新渲染。
     - 接收 `data` (number 数组) 和 `onClick` 函数作为 props。
     - 内部使用 `useMemo` 缓存了 `data` 数组的总和 `sum` 的计算结果，只有当 `data` 变化时才会重新计算。

  2. **ParentComponent 组件:**
     - 维护了 `count` 和 `text` 两个 state。
     - 使用 `useMemo` 缓存了 `expensiveData` 这个大的数组的生成过程。由于 `useMemo` 的依赖数组为空 `[]`，
       这个计算只会发生在组件首次渲染时，后续渲染会直接复用缓存的结果。
     - 使用 `useCallback` 缓存了传递给子组件的 `onClick` 函数。如果不使用 `useCallback`，每次 `ParentComponent` 重新渲染时，
       都会创建一个新的函数实例，导致 `ExpensiveChild` 的 `onClick` prop 总是“变化”的，从而可能导致不必要的重新渲染。

  **运行效果和分析:**

  - **首次渲染:** `ParentComponent` 和 `ExpensiveChild` 都会渲染，同时 `expensiveData` 的计算和 `ExpensiveChild` 内部 `sum` 的计算都会执行。
  - **点击 "Increase Count" 按钮:**
    - `ParentComponent` 的 `count` state 变化，导致 `ParentComponent` 重新渲染。
    - 然而，由于 `expensiveData` 使用 `useMemo` 缓存，并且依赖为空，所以 `expensiveData` 的值在多次渲染之间保持不变（引用不变）。
    - 同时，`handleClickChild` 使用 `useCallback` 缓存，引用也不会改变。
    - 因此，`ExpensiveChild` 组件的 props ( `data` 和 `onClick`) 没有发生浅比较变化，所以 `ExpensiveChild` 不会重新渲染。你会在控制台看到 "ExpensiveChild 组件重新渲染了" 的 log 只在首次渲染时出现。
  - **在输入框中输入文本:**
    - `ParentComponent` 的 `text` state 变化，导致 `ParentComponent` 重新渲染。
    - 同样地，`ExpensiveChild` 组件的 props 没有发生变化，所以不会重新渲染。

  **总结:**

  这个 Demo 展示了 `useMemo` 和 `React.memo` 的典型搭配使用场景：

  - `useMemo` 用于缓存父组件内部昂贵的计算结果 (`expensiveData`)，确保在父组件重新渲染时，传递给子组件的 props 引用保持不变。
  - `React.memo` 用于缓存子组件的渲染结果，只有当其 props 发生变化时才重新渲染。

  通过这种组合，我们可以有效地优化 React 应用的性能，避免不必要的重复计算和渲染。同时，`useCallback` 用于缓存传递给子组件的回调函数，进一步提升性能。
*/
