import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = ({ onItemSelect }) => {
  const [items, setItems] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const json = await response.json();
      setItems(json.data);
    };

    fetchItems();
  }, []);

  const handleSelect = (id, isSelected) => {
    const selectedItem = items.find((item) => item.id === id);
    onItemSelect(selectedItem, isSelected);
    setSelectedId(isSelected ? id : null);
  };

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};
