import { useState } from 'react';

export const ListItem = ({ item, onToggle }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
    onToggle(!selected);
  };

  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={toggleSelected}
    >
      {item.name}
    </div>
  );
};
