// ParentComponent.tsx
import { useRef } from 'react';
import ChildComponent, { ChildRef } from './ChildComponent';
import Button from '@/components/Button';

function ParentComponent() {
  const childRef = useRef<ChildRef>(null);

  const handleScrollToTop = () => {
    if (childRef.current) {
      childRef.current.scrollToTop();
    }
  };

  const handleScrollToIndex = (index: number) => {
    if (childRef.current) {
      childRef.current.scrollToIndex(index);
    }
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <Button className="mr-1" onClick={handleScrollToTop}>
        滚动到顶部
      </Button>
      <Button className="mr-1" onClick={() => handleScrollToIndex(10)}>
        滚动到第十个元素
      </Button>
      <Button className="mr-1" onClick={() => handleScrollToIndex(100)}>
        滚动到第一百个元素
      </Button>
      <Button onClick={() => handleScrollToIndex(200)}>
        滚动到第二百个元素
      </Button>
    </div>
  );
}

export default ParentComponent;
