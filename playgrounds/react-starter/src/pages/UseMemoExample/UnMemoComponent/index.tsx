import Button from '@/components/Button';
import React, { useEffect, useState } from 'react';

interface ExpensiveChildProps {
  data: number[];
  onClick: () => void;
}

// 不使用 React.memo
const ExpensiveChild: React.FC<ExpensiveChildProps> = ({ data, onClick }) => {
  console.log('「未使用 memo」 - ExpensiveChild 组件重新渲染了'); // 观察是否重新渲染

  // 不使用 useMemo
  console.log('「未使用 memo」 - ExpensiveChild 内部计算 sum');
  const sum = data.reduce((acc, curr) => acc + curr, 0);
  // const [sum, setSum] = useState(0);
  // useEffect(() => {
  //   console.log('ExpensiveChild 内部计算 sum');
  //   setSum(data.reduce((acc, curr) => acc + curr, 0));
  // }, [data]);

  return (
    <div className="border p-4 mt-2">
      <h3>Expensive Child Component (Without Memo)</h3>
      <div className="text-gray-600 overflow-auto h-40">
        Data: [{data.join(', ')}]
      </div>
      <p>Sum (recalculated on every render): {sum}</p>
      <Button onClick={onClick}>Click Me (Child)</Button>
    </div>
  );
};

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // 模拟一个昂贵的计算，生成一个数据数组 (每次渲染都重新计算)
  console.log('「未使用 memo」 - ParentComponent 执行昂贵的计算生成 expensiveData');
  // const expensiveData: number[] = [];
  // for (let i = 0; i < 1000; i++) {
  //   expensiveData.push(Math.random() * 10);
  // }

  const [expensiveData, setExpensiveData] = useState<number[]>([]);

  useEffect(() => {
    console.log('「未使用 memo」 - ParentComponent 重新渲染了');
    for (let i = 0; i < 1000; i++) {
      // expensiveData.push(Math.random() * 10);
      setExpensiveData((prevData) => [...prevData, Math.random() * 10]);
    }
  }, []);

  // 每次渲染都创建一个新的函数实例
  const handleClickChild = () => {
    console.log('「未使用 memo」 - 子组件的按钮被点击了');
  };

  console.log('「未使用 memo」 - ParentComponent 重新渲染了');

  return (
    <div className="p-4">
      <h2>Parent Component (Without Memo)</h2>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increase Count</Button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border rounded py-2 px-3"
        placeholder="Enter text"
      />

      {/*
        每次 ParentComponent 渲染，expensiveData 都会是一个新的数组实例，
        handleClickChild 也都会是一个新的函数实例。
      */}
      <ExpensiveChild data={expensiveData} onClick={handleClickChild} />
    </div>
  );
}

export default ParentComponent;

/*
  **不使用 React.memo + useMemo 的 Demo 说明:**

  1. **ExpensiveChild 组件 (Without Memo):**
     - **没有使用 `React.memo`。** 这意味着只要父组件 `ParentComponent` 重新渲染，即使传递给 `ExpensiveChild` 的 props (`data` 和 `onClick`) 在逻辑上没有变化，`ExpensiveChild` 也会无条件地重新渲染。
     - **没有使用 `useMemo`。**  `sum` 的计算会在每次 `ExpensiveChild` 渲染时都执行。

  2. **ParentComponent 组件 (Without Memo):**
     - **没有使用 `useMemo`。** `expensiveData` 的生成逻辑会在每次 `ParentComponent` 渲染时都执行，创建一个新的数组实例。
     - **没有使用 `useCallback`。** `handleClickChild` 函数会在每次 `ParentComponent` 渲染时都创建一个新的函数实例。

  **运行效果和分析:**

  - **首次渲染:** `ParentComponent` 和 `ExpensiveChild` 都会渲染，`expensiveData` 的计算和 `ExpensiveChild` 内部 `sum` 的计算都会执行。

  - **点击 "Increase Count" 按钮:**
    - `ParentComponent` 的 `count` state 变化，导致 `ParentComponent` 重新渲染。
    - 由于 **没有使用 `useMemo`，** 每次 `ParentComponent` 渲染时，`expensiveData` 都会被重新计算并生成一个新的数组实例。
    - 由于 **没有使用 `useCallback`，** 每次 `ParentComponent` 渲染时，`handleClickChild` 都会创建一个新的函数实例。
    - 因此，即使 `ExpensiveChild` 组件在逻辑上应该接收到相同的数据和行为，但由于 **引用不同 (新的数组实例和新的函数实例)**，`ExpensiveChild` 的 props (`data` 和 `onClick`) 发生了变化（浅比较会认为它们不同）。
    - 这会导致 `ExpensiveChild` 组件也重新渲染。你会在控制台看到 "ParentComponent 重新渲染了" 和 "ExpensiveChild 组件重新渲染了" 的 log。同时，"ExpensiveChild 内部计算 sum" 的 log 也会出现。

  - **在输入框中输入文本:**
    - `ParentComponent` 的 `text` state 变化，导致 `ParentComponent` 重新渲染。
    - 同样地，`expensiveData` 会被重新计算，`handleClickChild` 会创建一个新的函数实例，导致 `ExpensiveChild` 的 props 发生变化，从而触发 `ExpensiveChild` 的重新渲染和内部 `sum` 的重新计算。

  **总结:**

  在这个没有使用 `React.memo` 和 `useMemo` 的 Demo 中，你会观察到以下情况：

  - **不必要的子组件重新渲染：** 即使传递给 `ExpensiveChild` 的数据在逻辑上没有改变，但由于每次父组件渲染都会创建新的数组实例和函数实例，导致 `ExpensiveChild` 的 props 引用发生变化，从而触发其重新渲染。
  - **重复的计算：** `expensiveData` 的计算和 `ExpensiveChild` 内部 `sum` 的计算会在每次渲染时都执行，即使这些计算的结果在多次渲染之间可能并没有变化。

  **性能影响:**

  在简单的场景中，这种不必要的重新渲染和计算可能不会造成明显的性能问题。但是，如果 `expensiveData` 的生成过程非常耗时，或者 `ExpensiveChild` 组件本身渲染开销很大，那么这种没有优化的方式可能会显著降低应用的性能，导致卡顿等问题。

  **结论:**

  这个修改后的 Demo 清楚地展示了 `React.memo` 和 `useMemo` 在优化 React 应用性能方面的重要性。它们可以帮助我们避免不必要的组件重新渲染和重复计算，从而提升应用的效率和用户体验。
*/
