import CounterReducer from './CounterReducer';
import TodoList from './TodoList';

const UseReducerExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className="font-bold text-center">0. 函数签名</p>
      <pre className="bg-gray-100">
        {`
        const [state, dispatch] = useReducer(reducer, initialState, init?)
        `}
      </pre>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>1. reducer: (state, action) {'=>'} newState</li>
          <li>
            2. initialState: 可以是任何类型的值，包括对象、数组、数字、字符串等
          </li>
          <li>
            3. init: 可选参数，返回初始 state 的函数，只在初始渲染时调用一次
          </li>
        </ul>
      </div>
      <hr className="my-2" />

      <p className="font-bold text-center">1. 数值状态管理</p>
      <CounterReducer />
      <hr className="my-2" />

      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">🆚 与 useState 对比</h3>
        <ul>
          <label className="font-bold">相同点</label>
          <li>1. 都是函数组件里管理本地状态的方法</li>
          <li>2. 状态更新后，组件都会重新渲染</li>
          <li>
            3. 在 React 底层，useState 和 useReducer 有类似的 hook 调度逻辑
          </li>
        </ul>
        <ul>
          <label className="font-bold">不同点</label>
          <li>1. 数据流</li>
          <ul>
            <li>- useState: 直接存状态值，setState 直接更新</li>
            <li>
              - useReducer: 状态的更新要通过 action + reducer
              流程，像一个有限状态机
            </li>
          </ul>
          <li>2. 状态更新方式</li>
          <ul>
            <li>useState: 逻辑分散在组件各处</li>
            <li>useReducer: 逻辑集中在 reducer 函数中，便于维护和测试</li>
          </ul>
          <li>3. 适用场景</li>
          <ul>
            <li>- useState: 简单的状态管理</li>
            <li>- useReducer: 复杂的状态逻辑，或者组件间共享状态</li>
          </ul>
        </ul>
      </div>

      <hr className="my-2" />

      <p className="font-bold text-center">2. TodoList 进阶</p>
      <TodoList />
      <hr className="my-2" />
    </div>
  );
};

export default UseReducerExample;
