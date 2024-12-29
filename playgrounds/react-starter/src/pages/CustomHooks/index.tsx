import SearchInput from './UseDebounce/SearchInput';
import Counter from './UsePrevious/Counter';

const CustomHooks = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className="font-bold text-center">0. 防抖逻辑</p>
      <SearchInput />
      <hr className="my-2" />

      <p className="font-bold text-center">1. 记录上次的值</p>
      <Counter />
      <hr className="my-2" />

      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold text-center">📒 最佳实践:</h3>
        <h3 className="font-bold">命名约定</h3>
        <ul className="list-decimal pl-4">
          <li>
            自定义 Hook 名字一般以 use 开头，以便代码审查和 ESLint 插件识别
          </li>
        </ul>
        <h3 className="font-bold">单一职责</h3>
        <ul className="list-decimal pl-4">
          <li>
            尽量保证自定义 Hook 的逻辑单一，这样可以更好地复用和测试
          </li>
        </ul>
        <h3 className="font-bold">减少内置 Hook 的重复调用</h3>
        <ul className="list-decimal pl-4">
          <li>
            如果多个组件中有相同的 useEffect + useState 组合逻辑，就非常适合抽成自定义 Hook
          </li>
        </ul>
        <h3 className="font-bold">保持纯逻辑</h3>
        <ul className="list-decimal pl-4">
          <li>
            自定义 Hook 返回的数据或方法，尽量不要去直接渲染 UI（不返回 JSX/TSX），这样它可以在各种场景下复用
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CustomHooks;
