import React, { useState } from "react";
import "./calculador.css";

function Calculator() {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = (value) => {
    setInputValue((prev) => prev + value);
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const evaluateExpression = (expression) => {
    expression = expression.replace(/\s+/g, '');

    if (/[^0-9+\-*/().]/.test(expression)) {
      return "Erro";
    }

    try {
      let result = new Function(`return ${expression}`)();
      return result;
    } catch (error) {
      return "Erro";
    }
  };

  const handleEqual = () => {
    setInputValue((prev) => evaluateExpression(prev).toString());
  };

  return (
    <div className="calculator">
      <input type="text" value={inputValue} readOnly />
      <div className="buttons">
        <div className="row">
          {["1", "2", "3"].map((button) => (
            <button
              key={button}
              className="number"
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="row">
          {["4", "5", "6"].map((button) => (
            <button
              key={button}
              className="number"
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="row">
          {["7", "8", "9"].map((button) => (
            <button
              key={button}
              className="number"
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="row">
          {["0", "+", "-"].map((button) => (
            <button
              key={button}
              className="number"
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="row">
          {["*", "/", "(", ")", "."].map((button) => (
            <button
              key={button}
              className="operator"
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
        <div className="row">
          <button onClick={handleClear}>C</button>
          <button onClick={handleDelete}>DEL</button>
          <button onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
