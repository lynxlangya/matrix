import React, { FC, useRef, useState } from 'react';
import Button from "@/components/Button";

// 你也可以为组件的 Props 声明更详细的类型
interface FocusInputProps {
  initialValue?: string;
}

const FocusInput: FC<FocusInputProps> = ({ initialValue = '' }) => {
  // 1. 声明一个 useRef，用来获取 <input> DOM
  const inputRef = useRef<HTMLInputElement | null>(null);

  // 2. 声明一个 state，用来保存输入框内容
  const [value, setValue] = useState<string>(initialValue);

  // 点击按钮时自动聚焦到输入框
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // 输出当前的输入框内容（从 ref 获取）
  const handleLogValue = () => {
    if (inputRef.current) {
      console.log('当前输入框内容:', inputRef.current.value);
    }
  };

  // 输入时同步更新 state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="请输入内容"
        value={value}
        onChange={handleChange}
        style={{ marginRight: '8px' }}
      />

      <div style={{ marginTop: '12px' }}>
        <Button className='mr-1' onClick={handleFocus}>
          聚焦到输入框
        </Button>
        
        <Button onClick={handleLogValue}>打印输入框内容</Button>
      </div>
    </>
  );
};

export default FocusInput;
