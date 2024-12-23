import PreviousExample from './PreviousExample/index';
import FocusInput from './FocusInput/index';

const UseRefExample = () => {
  return (
    <div style={{ padding: '20px' }}>
      <p className="font-bold">1. DOM. 操作</p>
      <FocusInput />

      <hr className="my-2" />
      <p className="font-bold">2. 差异化处理</p>
      <PreviousExample />
    </div>
  );
};

export default UseRefExample;
