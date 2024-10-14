import React from 'react';
import { useDrop } from 'react-dnd';

const DropArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'STICKY',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: '400px',
        width: '400px',
        border: '2px solid black',
        backgroundColor: isOver ? 'lightblue' : 'white',
        position: 'relative',
      }}
    >
      Drop Here
    </div>
  );
};

export default DropArea;
