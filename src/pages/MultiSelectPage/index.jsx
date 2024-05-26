import { List } from './components/List';
import './style.css';
import { useState } from 'react';

export const MultiSelectPage = () => {
  const [counter, setCounter] = useState(0);

  const handleToggle = (isSelected) => {
    setCounter(counter + (isSelected ? 1 : -1));
  };
  return (
    <div className="container">
      <h1>Výběr více položek</h1>
      <h2>Počítadlo:{counter}</h2>
      <List onToggle={handleToggle} />
    </div>
  );
};
