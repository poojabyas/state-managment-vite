import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ margin: '200px' }}><div style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
    <h2 style={{ margin: '10px' }}>Counter</h2>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <button style={{ padding: '5px 10px', fontSize: '16px', cursor: 'pointer' }} onClick={decrement}>-</button>
      <span style={{ fontSize: '18px' }}>{count}</span>
      <button style={{ padding: '5px 10px', fontSize: '16px', cursor: 'pointer' }} onClick={increment}>+</button>
    </div>
  </div></div>
  );
}

export default Counter;
