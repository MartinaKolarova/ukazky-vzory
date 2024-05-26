import { useState } from 'react';
import { List } from './components/List';
import './style.css';

export const SingleSelectPage = () => {
  const [calories, setCalories] = useState(0);

  const caloriesChange = (item, isSelected) => {
    setCalories(
      calories +
        (isSelected
          ? item.nutrients.energy.value
          : -item.nutrients.energy.value),
    );
  };

  return (
    <div className="container">
      <h1>Výběr jedné položky</h1>
      <h2>Kalorie: {calories} kcal</h2>
      <List onItemSelect={caloriesChange} />
    </div>
  );
};
