import Button from '@/components/Button';
import { useReducer } from 'react';

interface CounterAction {
  type: 'increment' | 'decrement';
}

function counterReducer(state: number, action: CounterAction): number {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <Button className="mr-1" onClick={() => dispatch({ type: 'increment' })}>
        +1
      </Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>-1</Button>

      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>
            1. counterReducer 接收当前 state 和一个 {'{'} type: string {'}'}{' '}
            格式的 action，返回新的状态值。
          </li>
          <li>2. 通过 dispatch() 发送不同的 type，触发相应的状态变更。</li>
        </ul>
      </div>
    </div>
  );
}

export default Counter;
