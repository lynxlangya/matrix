import ExpensiveCalculationExample from './ExpensiveCalculationExample';
import MemoComponent from './MemoComponent';
import UnMemoComponent from './UnMemoComponent';

const UseMemoExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className="font-bold text-center">0. 函数签名</p>
      <pre className="bg-gray-100">
        {`
        const memoizedValue = useMemo(() => {
          // 需要缓存的计算逻辑
          return 某个结果;
        }, [依赖数组]);
        `}
      </pre>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>
            1.
            第一个参数是一个返回值的函数，里面写需要缓存或需要话费较大代价的计算逻辑
          </li>
          <li>
            2.
            第二个参数是依赖数组，表示当依赖数据中的任意一项发生变化时，才会重新执行次函数获取新值，
            否则直接返回缓存的旧指
          </li>
          <li>
            3. 返回值 memoizedValue
            是缓存的计算结果，只有在依赖数据发生变化时才会重新计算
          </li>
        </ul>
      </div>
      <hr className="my-2" />

      <p className="font-bold text-center">1. 大数据计算示例</p>
      <ExpensiveCalculationExample />
      <hr className="my-2" />

      <p className="font-bold text-center">2. 性能优化示例</p>
      <pre className="bg-gray-100">
        {`
        function Parent({ data, anotherProp }) {
          // 假设这个过滤过程非常耗时
          const filteredData = useMemo(() => {
            console.log('复杂过滤逻辑执行中...');
            return data.filter(/* 一些复杂条件 */);
          }, [data]);

          return (
            <div>
              <Child list={filteredData} />
              <p>{anotherProp}</p>
            </div>
          );
        }
        `}
      </pre>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">‼️ ‼️ ‼️</h3>
        <h3 className="font-bold">
          一个比较常见的场景：父组件向子组件传递一个经过复杂计算/过滤/排序后的列表。如果不使用
          useMemo
          ，即使父组件发生了与这个列表无关的更新，也会重新执行这个复杂的计算，导致性能浪费。
        </h3>
        <h3 className="font-bold">‼️ ‼️ ‼️</h3>
        <ul>
          <li>
            1. 使用 useMemo 之后，只要 data 没变，就不会再次执行过滤，即使
            anotherProp 改变也不影响缓存结果
          </li>
        </ul>
      </div>

      <p className="font-bold text-center">2. React.memo + useMemo</p>
      <MemoComponent />
      <hr className="my-2" />

      <p className="font-bold text-center">3. 未使用 React.memo + useMemo</p>
      <UnMemoComponent />
      <hr className="my-2" />
    </div>
  );
};

export default UseMemoExample;
