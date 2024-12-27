import AvoidDuplicateRenderingOfChildComponents from './AvoidDuplicateRenderingOfChildComponents/Parent';

const UseCallbackExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className="font-bold text-center">0. 函数签名</p>
      <pre className="bg-gray-100">
        {`
        const memoizedCallback = useCallback(
          () => {
            // 在这里定义回调逻辑
            // 可以访问外部的 state/props/变量
          },
          [依赖数组]
        );
        `}
      </pre>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>
            1.
            第一个参数：要缓存的回调函数，它可以访问外部作用域中的变量、state、props
          </li>
          <li>
            2. 第二个参数：是依赖数组，只有当依赖数组中的值发生变化时，React
            才会创建新的回调函数引用；否则会复用之前的引用
          </li>
        </ul>
      </div>
      <hr className="my-2" />

      <p className="font-bold text-center">1. 避免子组件重复渲染</p>
      <AvoidDuplicateRenderingOfChildComponents />
      <hr className="my-2" />

      <p className="font-bold text-center">2. 总结与扩展</p>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 核心价值</h3>
        <ul>
          <li>
            1. useCallback
            可以缓存回调函数，避免在每次渲染时都创建新的引用，从而避免子组件重复渲染
          </li>
        </ul>

        <h3 className="font-bold">📒 正确使用依赖</h3>
        <ul>
          <li>1. 要么添加所有用到的外部变量到依赖数组中</li>
          <li>2. 要么使用函数式更新，以避免一些变量的变化导致重建</li>
        </ul>

        <h3 className="font-bold">📒 谨慎使用</h3>
        <ul>
          <li>
            1. 不要过度：如果没有明显的性能损失、或没有在 React.memo
            子组件/繁重的依赖中使用，这个 “缓存” 可能带来额外的复杂度
          </li>
        </ul>

        <h3 className="font-bold">📒 常见组合</h3>
        <ul>
          <li>1. useCallback + React.memo：避免子组件重复渲染</li>
          <li>
            2. useCallback + useEffect /
            useMemo：稳定依赖、避免重复计算或创建副作用
          </li>
        </ul>

        <h3 className="font-bold">📒 一句话总结</h3>
        <p>
          useCallback 是一个在函数组件中缓存函数引用的
          Hook，只有当依赖变化时才会生成新函数引用，以此来减少不必要的渲染或副作用重复执行
        </p>
      </div>
    </div>
  );
};

export default UseCallbackExample;
