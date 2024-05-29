import React, { useState, useEffect } from 'react';

function Relogio() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: 'center', fontSize: '24px' }}>
      <div style={{ fontSize: '36px', marginBottom: '20px' }}>
        {time.toLocaleTimeString()}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: 'auto',
              height: 'auto',
              left: '50%',
              top: '50%',
              transformOrigin: 'center',
              transform: `translate(-50%, -50%) rotate(${index * 30}deg)`,
            }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Relogio;


