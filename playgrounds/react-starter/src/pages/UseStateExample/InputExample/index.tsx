import { useState } from 'react';

function InputExample() {
  const [text, setText] = useState('');

  return (
    <>
      <input className='border' value={text} onChange={(e) => setText(e.target.value)} />
      <p>你输入了：{text}</p>
    </>
  );
}

export default InputExample;
