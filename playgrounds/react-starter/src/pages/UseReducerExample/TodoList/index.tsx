import Button from '@/components/Button';
import { useReducer, useState } from 'react';

const initialTodos = [
  { id: 1, text: 'Learn React', done: false },
  { id: 2, text: 'Study useReducer', done: false },
];

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoAction {
  type: 'add' | 'toggle' | 'remove' | 'clear';
  payload: string | number;
}

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'add': {
      // action.payload = 新 todo 文本
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload as string,
        done: false,
      };
      return [...state, newTodo];
    }
    case 'toggle': {
      // action.payload = id
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    }
    case 'remove': {
      // action.payload = id
      return state.filter((todo) => todo.id !== action.payload);
    }
    case 'clear': {
      return [];
    }
    default:
      return state;
  }
}

function init(initialTodos: Todo[]): Todo[] {
  return initialTodos.map((todo) => ({
    ...todo,
    text: todo.text + ' (from init)',
  }));
}

function TodoList() {
  // const [todos, dispatch] = useReducer(todoReducer, initialTodos); // 不使用 init
  const [todos, dispatch] = useReducer(todoReducer, initialTodos, init); // 使用 init
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'add', payload: text });
      setText('');
    }
  };

  const handleClear = () => {
    dispatch({ type: 'clear', payload: '' });
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="border border-gray-300 rounded px-2 py-1"
      />
      <Button className="ml-2" onClick={handleAdd}>
        Add
      </Button>

      <Button className="ml-2" onClick={handleClear}>
        Clear
      </Button>

      {todos.length === 0 && <p className="text-sky-400">No todos, add one?</p>}

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between w-[500px] h-[40px] border-b border-gray-300"
          >
            <label
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
              className="flex items-center"
            >
              <input
                type="checkbox"
                className="mr-2 cursor-pointer"
                checked={todo.done}
                onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
              />
              {todo.text}
            </label>
            <Button
              styleType="danger"
              onClick={() => dispatch({ type: 'remove', payload: todo.id })}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>

      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <h3 className="font-bold">
          有时，初始化 state
          的过程比较昂贵，如：需要从本地缓存或后端获取。此时，可以传入 init
          函数对初始值 做 Lazy 初始化
        </h3>
        <ul>
          <li>1. 只有在首次渲染时才会执行 init，后续不再执行</li>
          <li>
            2. 类似 useState 的 useState(() {`=>`} expensiveCalculation()) 语法
          </li>
        </ul>
      </div>

      <pre className="bg-gray-100">
        {`
          function init(initialTodos) {
            return initialTodos.map(todo => ({
              ...todo,
              text: todo.text + ' (from init)'
            }));
          }

          const [todos, dispatch] = useReducer(todoReducer, initialTodos, init);
        `}
      </pre>
    </div>
  );
}

export default TodoList;
