import React, { useState } from 'react';
import Button from './Components/Button';
import { evaluate } from 'mathjs';
import { buttonConfig, operations } from './config/buttonConfig';
import './App.css';

const App = () => {
  const [expression, setExpression] = useState('');
  const [pendingOperation, setPendingOperation] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const handleButtonClick = (value) => {
      if (value === '=') {
        if (pendingOperation === '^') {
          const completeExpression = `pow(${firstOperand},${expression})`;
          try {
              const sanitizedExpression = completeExpression.replace(/\^/g, '**');
              setExpression(evaluate(sanitizedExpression).toString());
          } catch (error) {
              setExpression('Error');
          }
          setPendingOperation(null); 
      } else {
          try {
              const sanitizedExpression = expression.replace(/\^/g, '**');
              setExpression(evaluate(sanitizedExpression).toString());
          } catch (error) {
              setExpression('Error');
          }
      }
      } else if (value === 'C') {
          setExpression('');
      } 
      else if (value === '^'){
        setFirstOperand(expression);  
        setPendingOperation('^');    
        setExpression(''); 
      }
      else {
          const op = operations[value];
         // console.log(op);
          if (typeof op === 'function') {
              setExpression(op(expression));
          } else if (op) {
              setExpression(expression + op);
          } else {
              setExpression(expression + value);
          }
      }
  };

  return (
      <div className="calculator">
          <div className="display">{expression || "0"}</div>
          <div className="keypad">
              {buttonConfig.flat().map(key => (
                  <Button key={key} label={key} onClick={() => handleButtonClick(key)} />
              ))}
          </div>
      </div>
  );
};

export default App;
