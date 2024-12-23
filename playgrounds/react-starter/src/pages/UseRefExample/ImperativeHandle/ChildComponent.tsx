import { forwardRef, useImperativeHandle, useRef, Ref } from 'react';

export interface ChildRef {
  scrollToTop: () => void;
  scrollToIndex: (index: number) => void;
}


// useImperativeHandle(ref, createHandle, [deps]) 用来控制暴露给父组件的内容，
// 避免父组件直接访问子组件的所有 DOM、逻辑或状态。
// 这是一种受控暴露的方式，子组件可以根据需要暴露或隐藏方法给父组件，增强可维护性。

const ChildComponent = forwardRef((_props, ref: Ref<ChildRef>) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => ({
    scrollToTop() {
      if (divRef.current) {
        divRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    },

    scrollToIndex(index: number) {
      // Custom logging function for better user experience
      if (!divRef.current) {
        console.error('divRef.current 不存在');
        return;
      }

      if (index > divRef.current.children.length) {
        console.error('index 超出范围');
        return;
      }
      const child = divRef.current.children[index - 1];
      if (child) {
        child.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
  }));

  return (
    <div
      ref={divRef}
      style={{ height: 200, overflow: 'auto', border: '1px solid #ccc' }}
    >
      {Array.from({ length: 100 }, (_, i) => (
        <p key={i}>这是第 {i + 1} 个段落</p>
      ))}
    </div>
  );
});

export default ChildComponent;
