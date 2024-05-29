import React, { useState } from 'react';
import './CounterAtv04.css';

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleIncrement = (value) => {
    setNumber(number + value);
  };

  const handleDecrement = (value) => {
    setNumber(number - value);
  };

  return (
    <div className="counter">
      <h1>{number}</h1>
      <div className="button-row">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className="increment"
            onClick={() => handleIncrement(value)}
          >
            +{value}
          </button>
        ))}
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className="decrement"
            onClick={() => handleDecrement(value)}
          >
            -{value}
          </button>
        ))}
      </div>
    </div>
  );
}
