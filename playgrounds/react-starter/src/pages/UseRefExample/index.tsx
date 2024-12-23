import PreviousExample from './PreviousExample/index';
import FocusInput from './FocusInput/index';
import TimerExample from './TimerExample/index';
import ImperativeHandle from './ImperativeHandle/ParentComponent'

const UseRefExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className="font-bold">1. DOM. 操作</p>
      <FocusInput />

      <hr className="my-2" />
      <p className="font-bold">2. 差异化处理</p>
      <PreviousExample />

      <hr className="my-2" />
      <p className="font-bold">3. 保存不触发渲染的数据</p>
      <TimerExample />

      <hr className="my-2" />
      <p className="font-bold">4. useImperativeHandle</p>
      <ImperativeHandle />
    </div>
  );
};

export default UseRefExample;
