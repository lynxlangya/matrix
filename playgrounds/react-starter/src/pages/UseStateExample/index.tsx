import Counter from './Counter';
import InputExample from './InputExample';
import BatchUpdate from './BatchUpdate';
import CounterTrap from './CounterTrap';

const UseStateExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className="font-bold">1. 数值状态管理</p>
      <Counter />
      <hr className="my-2" />

      <p className="font-bold mt-4">2. 输入框状态管理</p>
      <InputExample />
      <hr className="my-2" />

      <p className="font-bold mt-4">3. 函数形式初始值</p>
      <pre className="bg-gray-100">
        {`
        function HeavyComponent() {
          const [value, setValue] = useState(() => {
            // 只有在首渲染时执行
            return doSomeExpensiveCalculation();
          });
          ...
        }
        `}
      </pre>
      <hr className="my-2" />

      <p className="font-bold mt-4">4. 批量更新</p>
      <BatchUpdate />
      <hr className="my-2" />

      <p className="font-bold mt-4">5. 闭包陷阱</p>
      <CounterTrap />
      <hr className="my-2" />

      <p className="font-bold mt-4">6. 回调式 useState</p>
      <pre className="bg-gray-100">
        {`
        // 通过回调函数的方式，确保拿到最新值

        // 更优雅的是：使用 useEffect 😄
        function handleIncrementWithCallback() {
          setCount((prevCount) => {
              const newCount = prevCount + 1
              console.log(\`更新后的值: $\{newCount}\`)
              return newCount;
          })
        }
        `}
      </pre>
    </div>
  );
};

export default UseStateExample;
