import UserProfile from './UserProfile';
import WindowSize from './WindowSize';

const UseEffectExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className="font-bold text-center">0. 函数签名</p>
      <pre className="bg-gray-100">
        {`
        useEffect(() => {
          // 副作用逻辑
          return () => {
            // 可选的清理函数
          };
        }, [依赖数组]);
        `}
      </pre>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>1. 第一个参数是回调函数，里面是副作用逻辑。</li>
          <li>
            2.
            如需要清理，如移除事件监听、取消订阅等，可在回调函数中返回一个函数来执行清理操作
          </li>
          <li>
            3. 第二个参数是依赖数组，用来告诉
            React：只有当数组中的某些依赖发生变化时，才重新执行副作用；若依赖没有变化，则跳过执行
          </li>
        </ul>
      </div>
      <hr className="my-2" />

      <p className="font-bold text-center">1. 网络请求示例</p>
      <UserProfile />
      <hr className="my-2" />

      <p className="font-bold text-center">2. 事件订阅</p>
      <WindowSize />
      <hr className="my-2" />

      <p className="font-bold text-center">3. 依赖数组与执行时机</p>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 依赖数组的含义:</h3>
        <ul>
          <li>1. 只有当依赖数组中的任意一项在本次渲染与上次渲染相比发生变化时，useEffect 的回调才会被执行</li>
          <li>2. 没有依赖数组或依赖数组为空，会导致不同的执行时机</li>
          <li>2.1. 空依赖数组 []，表示只在挂载和卸载时触发，不会再后续更新时重新执行</li>
          <li>2.2. 没有依赖数组，每次渲染都会触发 useEffect 回调</li>
        </ul>
        <h3 className="font-bold">📒 组件挂载、更新、卸载流程:</h3>
        <ul>
          <li>挂载阶段：完成渲染后，执行带 [] 依赖的 useEffect</li>
          <li>更新阶段：比较依赖数组中的值，如果有变化，就执行副作用；如果无变化，跳过执行</li>
          <li>卸载阶段：执行清理函数（如果 useEffect 返回了一个函数）</li>
        </ul>
      </div>
      <hr className="my-2" />

      <p className="font-bold text-center">4. 清理函数的作用与常见场景</p>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">
          📒 useEffect 的回调如果返回一个函数，则这个函数会在下次副作用执行之前或组件卸载之前被调用
          一般用于：
        </h3>
        <ul>
          <li>1. 取消订阅或移除事件监听</li>
          <li>2. 清理定时器，取消网络请求</li>
          <li>3. 重置一些外部副作用状态（如清除全局变量、恢复滚动位置等）</li>
        </ul>
      </div>
      <pre className="bg-gray-100">
        {`
        useEffect(() => {
          const subscription = SomeAPI.subscribe(id, handler);

          return () => {
            // 移除上一次的订阅
            subscription.unsubscribe();
          };
        }, [id]); // 当 id 变化时，先执行清理，再执行新的订阅
        `}
      </pre>
      <hr className="my-2" />

      <p className="font-bold text-center">5. useLayoutEffect 🆚 useEffect</p>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>
            1. useLayoutEffect 会在浏览器完成 DOM 更新、但还未绘制到屏幕前执行。
            适用于需要先同步测量 DOM 或读取布局信息再渲染的场景
          </li>
          <li>2. useEffect 则再浏览器完成渲染后再执行</li>
          <li>
            3. 一般情况下：
            <li className='font-bold'>如果不需要同步测量 DOM，优先使用 useEffect，避免阻塞渲染。</li>
            <li>只有在确实需要同步 DOM 操作时采用 useLayoutEffect，否则会引发性能问题或视觉抖动</li>
          </li>
        </ul>
      </div>
      <hr className="my-2" />

      <p className="font-bold text-center">6. 多个 useEffect 分开写 🆚 合并写</p>
      <div className="bg-gray-100 p-4 mt-4">
        <h3 className="font-bold">📒 Notes:</h3>
        <ul>
          <li>
            1. 推荐在逻辑上相对独立的场景中，使用多个 useEffect，使代码更清晰易懂
          </li>
          <li>2. 合并写：如果有多处副作用都依赖同一批状态，可以放在同一个 effect 中，但要注意清理逻辑不能混乱</li>
        </ul>
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default UseEffectExample;
