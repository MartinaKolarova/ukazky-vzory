import { List } from './components/List';
import './style.css';
import React, { useState } from 'react';

export const ListPage = () => {
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="container">
      <h1>Zobrazení seznamu</h1>
      <label for="ziviny-vyber">Vyberte možnost:</label>
      <select
        name="ziviny"
        id="ziviny-vyber"
        value={filter}
        onChange={handleChange}
      >
        <option value="">--Prosím vyberte možnost--</option>
        <option value="vlaknina">
          Všechny položky s množstvím vlákniny větším než 2 g na 100 g
        </option>
        <option value="bilkoviny">
          Všechny položky s množstvím bílkovin větším než 1,5 g na 100 g
        </option>
        <option value="tuky">
          Všechny položky s množstvím tuků menším než 1,3 g na 100 g
        </option>
      </select>
      <List filter={filter} />
    </div>
  );
};
