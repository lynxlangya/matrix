import Button from '@/components/Button';
import React from 'react';

interface ChildProps {
  onClick: () => void;
  count: number;
}

function Child({ onClick, count }: ChildProps) {
  console.log('Child render');
  return (
    <div>
      <p className="text-lg">Child count: {count}</p>
      <Button className="mr-1" onClick={onClick}>
        Increment Child Count
      </Button>
    </div>
  );
}

export default React.memo(Child);
